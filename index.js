// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(function (drivers){
    return drivers.toLowerCase()
  })
}

function attributesToPhrase(array) {
  return array.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}

function nameToAttributes(array){
  return array.map(function (driver){
    const first = driver.split(' ')[0]
    const last = driver.split(' ')[1]
    return {firstName: first, lastName: last }
  });
}

// function nameToAttributes(list) {
//   return list.map(function(driver) {
//     const driverFirst = driver.split(' ')[0];
//     const driverLast = driver.split(' ')[1];
//
//     return { firstName: driverFirst, lastName: driverLast };
//   });
