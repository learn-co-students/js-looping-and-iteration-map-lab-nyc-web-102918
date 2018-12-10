// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(element){
    return element.toLowerCase()
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function (element) {
    const driverFirst = element.split(' ')[0];
   const driverLast = element.split(' ')[1];

   return {firstName: driverFirst, lastName: driverLast}
  })

}

function attributesToPhrase(drivers) {
return drivers.map(function (element) {
    return `${element.name} is from ${element.hometown}`
})
}
