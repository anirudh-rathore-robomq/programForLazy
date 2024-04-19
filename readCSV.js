const fs = require('fs');
const xlsx = require('xlsx');


const csvFilePath = 'data.csv';

let sheets = xlsx.readFile(csvFilePath)

let firstSheetName = sheets.SheetNames[0]

let firstSheet = sheets.Sheets[firstSheetName]

const range = xlsx.utils.decode_range(firstSheet['!ref']).e.r;

let data = []

for(let i = 2 ; i < range ; i++) {
    const a = "A"+i;
    const b = "B"+i;
    if(firstSheet[b] !== undefined) {
        data.push({"displayname":firstSheet[a].v,"savedValue":firstSheet[b].v})
    }
}

console.log(data)