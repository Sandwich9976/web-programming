const ParseDate = (date) =>{
    let currentDay = date.getDate()
    if(currentDay < 10)
        currentDay = "0" + currentDay

    let currentMonth = date.getMonth() + 1
    if(currentMonth < 10)
        currentMonth = "0" + currentMonth

    return date.getFullYear() + '-' + currentMonth + '-' + currentDay
}

export const GetAPIUrl = () =>{
    const key = "HupsE3YLcmHoQggpBVEgcTcYPEh5QiMsxhc52s7R"

    let day = new Date()
    const startDate = ParseDate(day)

    day.setDate(day.getDate() + 7) //API only allows to have a max range of 7 days
    const endDate = ParseDate(day) 

    return "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + startDate + "&end_date=" + endDate + "&api_key=" + key
}

const ToAsteroidObj = (data) =>{
    return {
        name: data.name,
        date: data.close_approach_data[0].close_approach_date,
        grade: data.is_potentially_hazardous_asteroid?"опасен":"не опасен",
        size: (data.estimated_diameter.meters.estimated_diameter_min + data.estimated_diameter.meters.estimated_diameter_max) / 2.0,
        distance: data.close_approach_data[0].miss_distance.kilometers
    }
}

export const ConvertAPIDataToList = (data) =>{
    let outList = []

    for(let asteroidListName in data.near_earth_objects){
        for(let asteroidName in data.near_earth_objects[asteroidListName]){
            outList.push(ToAsteroidObj(data.near_earth_objects[asteroidListName][asteroidName]))
        }
    }

    return outList
}