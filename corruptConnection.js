const mysql = require('mysql2');
const {connObj} = require("../.envConfig.js")
const dbConn = mysql.createPool(connObj)
const util = require("util")
const awsEncrypt = require('../../utils/encryption.js')
const awsDecrypt = require('../../utils/decryption.js')
dbConn.query = util.promisify(dbConn.query)

async function corruptConnection(connectionId) {
    try {
    // debug and change code according to your requirement this is to corrupt exo conn
    const connObj = await dbConn.query("Select * from connection where connection_id = ?",connectionId);
    let connData1  = JSON.parse(await awsDecrypt(connObj[0].connection_data))
    connData1.powershell_refreshToken = connData1.powershell_refreshToken+"4ffh"
    connData1.powershell_expireTime = 123
    connData1 = await awsEncrypt(JSON.stringify(connData1))
   
   await dbConn.query('UPDATE connection SET connection_data = ? WHERE connection_id = ?',[connData1,connectionId])
    }
    catch(err) {
        console.log("Couldn't corrupt your data, can't even corrupt right. Anyways here is your err ", err)
    }
    
}

(async function () {
    console.log("fetching data")
    //enter ID in the argument;
    await corruptConnection("a8ba5d00-e4f9-4408-a67f-8590b0a68eea");
    console.log("Connection corrupted successfully.")
    console.log("Seriously thats your job? To corrupt data")
})()