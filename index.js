// Code your solution in this file.

function lowerCaseDrivers(drivers) {
    return drivers.map(function(driverName) {
       return driverName.toLowerCase();
    });
  }

function nameToAttributes(drivers) {
    const driversObj = drivers.map(function(driverName) {
      let fn = driverName.split(' ')[0]
      let ln = driverName.split(' ')[1]
      return {firstName: fn, lastName: ln};
    });
    return driversObj;
  }

function attributesToPhrase(drivers) {
    return drivers.map(function(driver) {
      return driver.name + ' is from ' + driver.hometown;
    });
  }

// "<NAME OF DRIVER> is from <HOMETOWN>"
