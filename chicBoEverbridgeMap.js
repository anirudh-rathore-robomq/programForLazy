const xlsx = require('xlsx')
const workBook = xlsx.readFile('./DeptCode_Mapping.xlsx')

const sheetName = workBook.SheetNames[0];
const sheet = workBook.Sheets[sheetName];
const flowData = require('./chicBoData.json')
const data = xlsx.utils.sheet_to_json(sheet);

const fs = require('fs');
const rolesFormMapStruct =  {
    "ruleDefinition.configpath": {
        "targetValue.required.textarea.configpath": {
            "type": "string",
            "value": "<div>Barbara-151000</div>"
        }
    },
    "filter.configpath": [
        [
            {
                "itemName": "saved_physicalDeliveryOfficeName&display_Office (physicalDeliveryOfficeName)",
                "function": "Equals/string",
                "targetValue.required.textarea.configpath": {
                    "type": "string",
                    "value": "<div>Barbara Whitney Carr Administration Building</div>"
                }
            },
            {
                "itemName": "saved_departmentNumber&display_Department Number (departmentNumber)",
                "function": "Equals/string",
                "targetValue.required.textarea.configpath": {
                    "type": "string",
                    "value": "<div>151000</div>"
                }
            }
        ]
    ]
}

const rolesConfigMapStruct =    {
    "ruleDefinition": {
        "targetValue": {
            "dataType": "string",
            "mandatory": true,
            "args": [
                {
                    "position": 0,
                    "type": "string",
                    "userInputValue": "Barbara-151000"
                }
            ]
        }
    },
    "filter": [
        [
            {
                "itemName": "physicalDeliveryOfficeName",
                "function": "Equals/string",
                "targetValue": {
                    "dataType": "string",
                    "mandatory": true,
                    "args": [
                        {
                            "position": 0,
                            "type": "string",
                            "userInputValue": "Barbara Whitney Carr Administration Building"
                        }
                    ]
                }
            },
            {
                "itemName": "departmentNumber",
                "function": "Equals/string",
                "targetValue": {
                    "dataType": "string",
                    "mandatory": true,
                    "args": [
                        {
                            "position": 0,
                            "type": "string",
                            "userInputValue": "151000"
                        }
                    ]
                }
            }
        ]
    ]
}

const groupFormMapStruct =  {
    "dropdownRule.configpath": {
        "value.configpath": "NYU"
    },
    "groupsValue.configpath": {
        "groups.configpath": [
            "saved_768286434263684&display_Everbridge Events"
        ]
    }
}

const groupConfigMapStruct =  {
    "dropdownRule": {
        "value": "NYU"
    },
    "groupsValue": {
        "groups": [
            "768286434263684"
        ]
    }
}
const groups = {
    'Accounting': '325910708393523',
    'Accounting & Finance': '526711703732710',
    'Administration': '325910708393522',
    'Adult Education': '526711703732711',
    'Annual Fund': '325910708393520',
    'Barbara Carr Administrative Building': '325910708393459',
    'Board Relations': '325910708393518',
    'Community Program Admin': '526711703732713',
    'Conservation Projects': '325910708393513',
    'Conservation Science': '325910708393512',
    'Conservation Training': '526711703732715',
    'Corporate Relations': '325910708393509',
    'Creative Services': '521248505332247',
    'Curation': '521248505332248',
    'Custodial Services': '325910708393508',
    'Display Gardens': '325910708393507',
    'Education Greenhouse': '325910708393506',
    'Enabling Garden (Shed offices)': '325910708393495',
    'Equipment Maintenance': '325910708393505',
    'External Affairs': '325910708393500',
    'Facility Maintenance': '325910708393503',
    'Foundation & Government Relations': '526711703732716',
    'Fruit and Vegetable Island': '325910708393456',
    'Fund Development': '521248505332249',
    'Garden Interpretation': '325910708393502',
    'Garden Operations Administration': '325910708393501',
    'Graduate Studies Program': '325910708393498',
    'Grounds': '325910708393497',
    'HR Use Only - Layoff': '509116833333295',
    'HR Use Only - LifeTime Fitness': '737952690864137',
    'HR Use Only - SFT Benefit Eligible with 6 month or longer assignment': '3313558678929481',
    'HR Use Only - Seasonal Layoff': '690948568776778',
    'HR Use Only - Spanish Year Round Benefit Eligible': '3567133548085252',
    'HR Use Only - Year Round Benefit Eligible Staff': '3309847827185672',
    'HR- Test Only': '509116833333449',
    'Horticulture Building': '325910708393455',
    'Horticulture Operations Admin.': '325910708393496',
    'Horticulture Therapy': '325910708393494',
    'Human Resources': '325910708393493',
    'Individual Giving Admin': '325910708393492',
    'Information Services': '325910708393491',
    'Information Systems': '322614857826795',
    'Learning Campus': '325910708393454',
    'Library': '325910708393490',
    'Lightscape Staff': '674868211220481',
    'Living Plant Documentation': '322614857826421',
    'Maintenance Building': '325910708393486',
    'Marketing & Communications': '325910708393521',
    'Media Services': '322614857826796',
    'Membership': '325910708393489',
    'Ornamental Plant Research & Breeding': '322614857826797',
    'Out of State': '325910708393478',
    'Plant Collections Operations': '322614857826798',
    'Plant Conservation Science Center': '322614857826513',
    'Plant Healthcare': '325910708393485',
    'Primarily Outside - Garden Grounds': '325910708393458',
    'Production Greenhouses': '325910708393483',
    'Public Programs': '325910708393481',
    'Public Programs and Exhibition - Model Railroad Garden': '325910708393488',
    'Public Relations': '325910708393480',
    'Regenstein Center': '325910708393463',
    'Restoration Science': '764103136116818',
    'Rice Plant Science Center': '325910708393453',
    'Scientific Affairs Admin': '325910708393470',
    'Security': '325910708393469',
    'Tour Programs': '325910708393467',
    'VeggieRx Program': '322614857826799',
    'Visitor Center': '325910708393465',
    'Visitor Services': '325910708393464',
    'Visitor Services Admin': '325910708393466',
    'Volunteer Services': '325910708393462',
    'WCH Education': '322614857826800',
    'Website': '325910708393461',
    'Welcome Plaza': '322614857826512',
    'Windy City Harvest Farm on Ogden': '325910708393457',
    'Workforce Development': '322614857826801',
    'Youth + Family Programs': '325910708393452'
}  
function genRoleNGroupList(formList,configList,formGroupList,configGroupList) {
    try {
    const nonUpdatableList = []
    data.forEach((row) => {
        const code = ""+row['Home Department Code']
        const roleName = row.Location.split(' ')[0]+'-'+code
        if(groups[row.Group]) {
        formList.push({
            "ruleDefinition.configpath": {
                "targetValue.required.textarea.configpath": {
                    "type": "string",
                    "value": `<div>${roleName}</div>`
                }
            },
            "filter.configpath": [
                [
                    {
                        "itemName": "saved_physicalDeliveryOfficeName&display_Office (physicalDeliveryOfficeName)",
                        "function": "Equals/string",
                        "targetValue.required.textarea.configpath": {
                            "type": "string",
                            "value": `<div>${row.Location}</div>`
                        }
                    },
                    {
                        "itemName": "saved_departmentNumber&display_Department Number (departmentNumber)",
                        "function": "Equals/string",
                        "targetValue.required.textarea.configpath": {
                            "type": "string",
                            "value": `<div>${code}</div>`
                        }
                    }
                ]
            ]
        })
        formGroupList.push({
            "dropdownRule.configpath": {
                "value.configpath": roleName
            },
            "groupsValue.configpath": {
                "groups.configpath": [
                    `saved_${groups[row.Group]}&display_${row.Group}`
                ]
            }
        })
        configList.push(   {
            "ruleDefinition": {
                "targetValue": {
                    "dataType": "string",
                    "mandatory": true,
                    "args": [
                        {
                            "position": 0,
                            "type": "string",
                            "userInputValue": roleName
                        }
                    ]
                }
            },
            "filter": [
                [
                    {
                        "itemName": "physicalDeliveryOfficeName",
                        "function": "Equals/string",
                        "targetValue": {
                            "dataType": "string",
                            "mandatory": true,
                            "args": [
                                {
                                    "position": 0,
                                    "type": "string",
                                    "userInputValue": row.Location
                                }
                            ]
                        }
                    },
                    {
                        "itemName": "departmentNumber",
                        "function": "Equals/string",
                        "targetValue": {
                            "dataType": "string",
                            "mandatory": true,
                            "args": [
                                {
                                    "position": 0,
                                    "type": "string",
                                    "userInputValue": `${code}`
                                }
                            ]
                        }
                    }
                ]
            ]
        })

        configGroupList.push({
            "dropdownRule": {
                "value": roleName
            },
            "groupsValue": {
                "groups": [
                    groups[row.Group]
                ]
            }
        })
        } else {
            nonUpdatableList.push(row)
        }
    })
    console.log(nonUpdatableList)
} catch (err) {
    console.log('Error generating role list ',err)
}
}


function populateSet(formRoleSet,configRoleSet,formGroupSet,configGroupSet) {
    try {
    const formMapList = flowData['output_form'][0]['Choose Provisioning Type_options']['transformer.scimRuleDef.sortAttributes.configpath'][0]['mappingRule.configpath'];
    const configMapList = flowData['output_config'][0]['transformer.scimRuleDef'][0]['mappingRule']
   const formGroupList = flowData['output_form'][0]['Choose Provisioning Type_options']['transformer.scimMappingRules.configpath']
   const configGroupList = flowData['output_config'][0]['transformer.scimMappingRules']
    iterateAndPopulateSet(formRoleSet,formMapList)
    iterateAndPopulateSet(configRoleSet,configMapList)
    iterateAndPopulateSet(formGroupSet,formGroupList)
    iterateAndPopulateSet(configGroupSet,configGroupList)
} catch(err) {
    console.log('Error while populating set ', err)
}
}

function iterateAndPopulateSet(set,list) {
    list.forEach((maps) => {
        const str = JSON.stringify(maps)
        set.add(str)
    })
}

function embedRole(formRoleList,configRoleList,formRoleSet,configRoleSet) {
    try {
    iterateAndAdd(formRoleList,formRoleSet,flowData['output_form'][0]['Choose Provisioning Type_options']['transformer.scimRuleDef.sortAttributes.configpath'][0]['mappingRule.configpath'])
  
    iterateAndAdd(configRoleList,configRoleSet,flowData['output_config'][0]['transformer.scimRuleDef'][0]['mappingRule'])
    } catch (err) {
        console.log('Error while embeding roles ', err)
    }
}

function embedGroup(formGroupList,configGroupList,formGroupSet,configGroupSet) {
    try {
    iterateAndAdd(formGroupList,formGroupSet,flowData['output_form'][0]['Choose Provisioning Type_options']['transformer.scimMappingRules.configpath'])
  
    iterateAndAdd(configGroupList,configGroupSet,flowData['output_config'][0]['transformer.scimMappingRules'])
    } catch (err) {
        console.log('Error while embeding roles ', err)
    }
}

function iterateAndAdd(list,set,mappingRule) {
    let count = 0;
    list.forEach((item) => {
        const str = JSON.stringify(item)
        if(!set.has(str)){
            mappingRule.push(item)
            set.add(str)
        } else {
            count++;
            console.log(item, 'present')
        }
    })
    console.log(count)
}
(function (){
    try {
    const formRoleList = []
    const configRoleList = []
    const formGroupList = []
    const configGroupList = []
    const formRoleSet = new Set()
    const configRoleSet = new Set()
    const formGroupSet = new Set()
    const configGroupSet = new Set()
    populateSet(formRoleSet,configRoleSet,formGroupSet,configGroupSet);
    genRoleNGroupList(formRoleList,configRoleList,formGroupList,configGroupList);
   

    embedRole(formRoleList,configRoleList,formRoleSet,configRoleSet);
    embedGroup(formGroupList,configGroupList,formGroupSet,configGroupSet)
    const outputData = JSON.stringify(flowData,null,4)
    fs.writeFile('chicagoEverbridgeOutput.json', outputData, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
        } else {
            console.log("JSON file has been saved.");
        }
    });
} catch(err) {
    console.log('Error ',err)
}
})()