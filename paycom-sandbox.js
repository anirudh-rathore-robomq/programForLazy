
const { connObj } = require('../.envConfig.js');
const mysql = require('mysql2');
const util = require('util');
const dbConn = mysql.createPool(connObj);
dbConn.query = util.promisify(dbConn.query);
const awsEncrypt = require('../../utils/encryption.js')
const awsDecrypt = require('../../utils/decryption.js')

const isValid = (data) => {
    try {
        return data ? JSON.parse(data) : false;
    } catch (err) {
        return false;
    }
};
async function addEnvironment() {
    try {
    const fetchConnectionsQuery = `SELECT connection_id , connection_data , username from connection where connectionconfig_id = "0a777f4a-b97c-453a-a201-29028190046d" AND connection_data is not NULL`;
    const updateConnectionQuery = `UPDATE connection SET connection_data = ? WHERE connection_id = ?`
    console.log(`Getting connections.....`);
    console.log('----------------------------------------------------------------------')
    let connections = await dbConn.query(fetchConnectionsQuery);
    console.log('Total number of connections fetched : ', connections.length, '\n\n');
    let updatedCount = 0;
    await Promise.all([...connections.map(async (connection) => {
        try {
        let connData = await awsDecrypt(connection.connection_data);
        connData = isValid(connData)
        if(connData !== false && connData !== undefined && !connection.username.includes('robomq.io')) {
            if(!connData.hasOwnProperty('environment')) {
                isUpdatable = true
                connData = {environment : "production",...connData}
                connData = JSON.stringify(connData)
                connData = await awsEncrypt(connData)
                updatedCount++;
              //  await dbConn.query(updateConnectionQuery,[connection.connection_id,connData])
            }
        }
    } catch(err) {
        console.log("There was an error in connection ",connection.connection_id," Error: ",err)
    }
    })])


    console.log("connection_data is updated for " ,updatedCount, " connections successfully..!!")
    console.log("-------------------------------------------------------------")
} catch(err) {
    console.log("There was an error getting connections ",err)
}
}

(async function () { 
    try { 
    console.log("Script Started---------------------") 
    await addEnvironment(); 
    console.log("Script Ended Sucessfully------------------------")
    dbConn.end();
    process.exit(0);
} catch (error) { 
    dbConn.end();
    process.exit(1);
}}) ();