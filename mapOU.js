const xlsx = require('xlsx')
const workBook = xlsx.readFile('./OU list_12112024.xlsx')
const fs = require('fs')
const path = require('path')
const sheetName = workBook.SheetNames[0];
const sheet = workBook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);

const payExpression = 'Pay Grade Equals xxx AND Department Equals xxx AND Location Contains xxx'

const payConditionStruct = 'Pay Grade Equals B1 AND Department Equals Department AND Location Contains Location'

const priority = 1
const payRegex = /^M[1-8]$/;
const payStruct = {
    "Priority": priority,
    "OU": "",
    "Expression": payExpression,
    "Condition": ""
}

function mapPayGradeOU(mapTable) {
    data.map((entry) => {
        try {
            if (payRegex.test(entry.Name)) {
                const { department, location, ou } = getDepartmentNLocation(entry.DistinguishedName)
                const pos = parseInt(entry.Name.charAt(1),10);
                mapTable[pos-1].push({
                    "OU":ou,
                    "department":department,
                    "location":location,
                    "name":entry.Name
                })
                // mapTable.push({
                //     "Priority": priority,
                //     "OU": entry.DistinguishedName,
                //     "Expression": payExpression,
                //     "Condition": `Pay Grade Equals ${entry.Name} AND Department Equals ${department} AND Location Contains ${location}`,
                // })
            }
        } catch (err) {
            console.log(err.message)
        }
    })
}

function getDepartmentNLocation(OUStr) {

    const ouMatches = OUStr.match(/OU=([^,]+)/g);
    'OU=M7,OU=Customer Services,OU=Khed,OU=TBSL,DC=steelsa,DC=local'
    const matches = {}
    // Check if matches exist and get specific parts
    if (ouMatches && ouMatches.length > 2) {
        // Remove the first "OU=" and pick the desired parts
        matches.department = ouMatches[1].replace("OU=", "");
        matches.location = ouMatches[2].replace("OU=", "");
        if(OUStr.endsWith('OU=TBSL,DC=steelsa,DC=local')) {
            matches.ou = OUStr
        } else {
            matches.ou = `${ouMatches[0]},${ouMatches[1]},${ouMatches[2]},OU=TBSL,DC=steelsa,DC=local`
        }

    } else {
        throw new Error("OU is not correct "+ OUStr)
    }
    return matches

}

function convertToCSV(objArray) {
    const array = Array.isArray(objArray) ? objArray : [objArray];
    const headers = Object.keys(array[0]);

    const csvRows = [
        headers.join(','), // Header row
        ...array.map(row => headers.map(field => `"${row[field]}"`).join(',')) // Data rows
    ];

    return csvRows.join('\n');
}

function saveCSVToFile(data, filename = 'data.csv') {
    const filePath = path.join(__dirname, filename); // Save in the same folder
    fs.writeFileSync(filePath, data, 'utf8');
    console.log(`CSV file created at: ${filePath}`);
}

function sortLocation(mapTable) {
    mapTable.map((subArray)=>{
        subArray.sort((a,b) => a.location.localeCompare(b.location))
    })
    return convertToSingleList(mapTable)
}
function convertToSingleList(mapTable) {
    const list = []
    mapTable.forEach((subArray) => {
        subArray.forEach((entry) => {
            list.push({
                    "Priority": priority,
                    "OU": entry.OU,
                    "Expression": payExpression,
                    "Condition": `Pay Grade Equals ${entry.name} AND Department Equals ${entry.department} AND Location Contains ${entry.location}`,
                })
        })
    })

    return list
}
(function () {
    const mapTable = [[],[],[],[],[],[],[],[]]
    mapPayGradeOU(mapTable)
    const finalList = sortLocation(mapTable);
    const csv = convertToCSV(finalList)
    saveCSVToFile(csv,'payMap.csv')
})()
