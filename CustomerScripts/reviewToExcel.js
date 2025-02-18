const fs = require('fs');
const XLSX = require('xlsx')
const json2xls = require('json2xls');
const workbook = XLSX.utils.book_new();
const filePath = "./CustomerScripts/newHireOutput.xlsx"
const {leave, terminate, new_hire, rehire, update} = require('./reviewToExcelData.json').review_employee

async function handleNewHire(){

    const headers = ["employee_id","employee_name",...Object.keys(new_hire[0].ad_attributes)]
    // const formattedData = [
    //     headers,
    //     ...new_hire.map((emp_data) => {
    //     return [emp_data.employee_id,emp_data.employee_name, ...Object.values(emp_data.ad_attributes)]
    // })]

    const formattedData = new_hire.map((emp_data) => {
        return {"employee_id":emp_data.employee_id,"employee_name":emp_data.employee_name, ...emp_data.ad_attributes}
    })

    const xlsData = json2xls(formattedData);
    fs.writeFileSync(filePath, xlsData, 'binary');
    // const worksheet = XLSX.utils.aoa_to_sheet(formattedData)
    // XLSX.utils.book_append_sheet(workbook,worksheet,"Sheet1")

}


async function handleUpdateAbleData(updatedData,fileName) {

    const formattedData = updatedData.map((emp_data) => {
        if(emp_data.status == 'Pending') {
        const adData = getADData(emp_data.ad_attributes);
        return {"employee_id":emp_data.employee_id,"employee_name":emp_data.employee_name,...adData}
        }
    })
    const xlsData = json2xls(formattedData);
    fs.writeFileSync(fileName, xlsData, 'binary');
}

function getADData(adAttributes) {
    const data = {}
    const regex = /^manager-/
    for(let adData in adAttributes) {
        if(adData == 'proxyAddresses') {
            let isChange = false;
            const previousProxyAddresses = adAttributes[adData].previous.split(',').map((item) => item.trim()).filter((item) => item !== '').sort();
            const currentProxyAddresses = adAttributes[adData].new.split(',').map((item) => item.trim()).filter((item) => item !== '').sort();
            if(previousProxyAddresses.length!=currentProxyAddresses.length){
                isChange = true
            }
            else{
                const changeInProxyAddress = previousProxyAddresses.filter((address, index) => address !== currentProxyAddresses[index]);
                if(changeInProxyAddress.length > 0) {
                    isChange = true
                }        
            }

            if(isChange) {
                const key1 = adData+"_new"
                const key2 = adData+"_prev"
                data[key1] = adAttributes[adData].new
                data[key2] = adAttributes[adData].previous
            } else {
                const key1 = adData+"_new"
                const key2 = adData+"_prev"
                data[key1] = ""
                data[key2] = ""
            }
        }
        else if(!regex.test(adData) ) {
            //&& adAttributes[adData].new != adAttributes[adData].previous) {
            const key1 = adData+"_new"
            const key2 = adData+"_prev"
            let val1 = adAttributes[adData].new
            let val2 = adAttributes[adData].previous
            if(adAttributes[adData].new == adAttributes[adData].previous) {
                val1 = ""
                val2 = ""
            }
            data[key1] = val1
            data[key2] = val2
        }
    }
    return data
}
(async () => {
    
    await Promise.all([
        handleNewHire(),
        handleUpdateAbleData(update,'./CustomerScripts/updateOutput.xlsx'),
        handleUpdateAbleData(terminate,'./CustomerScripts/terminateOutput.xlsx'),
        handleUpdateAbleData(rehire,'./CustomerScripts/rehireOutput.xlsx'),
        handleUpdateAbleData(leave,'./CustomerScripts/leaveOutput.xlsx'),
    ])

   // XLSX.writeFile(filePath,workbook)
})()
