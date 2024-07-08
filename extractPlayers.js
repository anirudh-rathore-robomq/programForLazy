const axios = require('axios')



const teamsUrl = "https://www.iplt20.com/teams"

const teams = []

async function getTeams(){
    let res = await axios.get(teamsUrl,{responseType:"text/html"})
    res = res.data
    while(res.indexOf("data-team_name")> -1) {
        let index = res.indexOf("data-team_name")
        res = res.substring(index+16)
        index = res.indexOf('"')
        const teamName = res.substring(0,index)
        index = res.indexOf("href=")
        res = res.substring(index+6)
        index = res.indexOf('"')
        const teamUrl = res.substring(0,index)
        teams.push({"teamName":teamName,"teamUrl":teamUrl})
    }
}






const url = "https://www.iplt20.com/teams/chennai-super-kings/squad/"
const years = [
    '2008', '2009', '2010',
    '2011', '2012', '2013',
    '2014', '2015', '2016',
    '2017', '2018', '2019',
    '2020', '2021', '2022',
    '2023', '2024'
  ]

async function yearIterate (url,team,subMap) {
    await Promise.all([...
    years.map(async (year)=> {
        let urlYear = url+year+"#list"
        await abc(urlYear,year,subMap);
    })])


}

async function abc (url,year,subMap) {
    try {
let res = await axios.get(url,{responseType:"text/html"})
    if(!res.data.includes("oop's something went wrong")) {
    res = res.data

        while(res.indexOf("data-player_name") > -1) {
            let index = res.indexOf("data-player_name")
            res = res.substring(index+18)
            index = res.indexOf('"')
            const player = res.substring(0,index)
            res = res.substring(index+1)
            index = res.indexOf('href="')
            res = res.substring(index+6)
            index = res.indexOf('"')
            const about = res.substring(0,index)
            
            if(subMap[player]) {
                subMap[player]["year"] = [...subMap[player].year,year]
            } else {
                subMap[player] = {"url":about,"year":[year]}
            }
            
        }
    }
} catch(err) {
    console.log(err,url)
}
}

const mainMap = {}
async function main() {
    await getTeams()
    await Promise.all([...teams.map(async (team)=> {
        mainMap[team.teamName] = {}
    await  yearIterate(team.teamUrl+"/squad/",team.teamName,mainMap[team.teamName])
    })])

    let count = 0;
    for(let team in mainMap){
        for(let player in mainMap) {
            count++;
        }
    }
    console.log(mainMap)
}


main()
