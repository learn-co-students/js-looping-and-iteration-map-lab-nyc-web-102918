// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const lowerCaseName = drivers.map(function(name){
    return name.toLowerCase()
  })
  return lowerCaseName
}

function nameToAttributes(drivers){
  const driverNames = drivers.map(function(name){
    const attributes = {}
    attributes['firstName'] = name.split(" ")[0]
    attributes['lastName'] = name.split(" ")[1]
    return attributes;
  })
  return driverNames;
}

function attributesToPhrase(drivers){
  const driversFromPlace = drivers.map(function(namePlace){
    return `${namePlace.name} is from ${namePlace.hometown}`
  })
  return driversFromPlace
}
