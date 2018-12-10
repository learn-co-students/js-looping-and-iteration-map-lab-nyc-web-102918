
function lowerCaseDrivers(drivers) {
  const lowerDrivers = drivers.map(function(driver) {
    return driver.toLowerCase()
  })
  return lowerDrivers
}

function nameToAttributes(drivers) {
  const lastFirstDrivers = drivers.map(function(driver) {
    let first = driver.split(" ")[0]
    let last = driver.split(" ")[1]

    return {firstName : first, lastName : last}
  })
  return lastFirstDrivers
}

function attributesToPhrase(drivers) {
  const driverBios = drivers.map(function(driver) {
    return driver.name + ' is from ' + driver.hometown
  })
  return driverBios
}
