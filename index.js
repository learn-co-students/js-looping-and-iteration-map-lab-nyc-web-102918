// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lower = drivers.map(function(name) {
    return name.toLowerCase()});
  return lower;
}

function nameToAttributes(drivers) {
  const names = drivers.map(function(name) {
    const attributes = {}
    attributes["firstName"] = name.split(" ")[0]
    attributes["lastName"] = name.split(" ")[1]
    return attributes;
  })
  return names;
}

function attributesToPhrase(drivers) {
  const isFrom = drivers.map(function(object) {
    const name = object.name
    const hometown = object.hometown

    return `${name} is from ${hometown}`;
  })
  return isFrom;
}
