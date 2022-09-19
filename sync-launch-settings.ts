console.clear()
console.log()
console.log()
console.log()
console.log()
console.log('JSON parsing package.json')
console.log('===========================')
const packageJsonFile = '../package.json'
const packageJsonFileWrite2 = '../package-demo-2.json'
const packageJson = require(packageJsonFile);
const { EOL } = require('os')
const fs = require('fs');

const configurationArray = packageJson.contributes.configuration;

let debugProperties;
const newDebugProperties = {}
let debugIndex;

for (let index = 0; index < configurationArray.length; index++){
    const configurationItem = configurationArray[index]
    if (configurationItem.id === "debug"){
        debugIndex = index
        debugProperties = configurationItem.properties
        for (const [key, data] of Object.entries(debugProperties)){
            console.log(`${key} entry ...`)
            // start off by just copying over the existing values (straight 1-1 copy)
            newDebugProperties[key] = data
        }
    }
}

// now have to also join in data from package.json .... other part of file ...
const launchProperties = packageJson.contributes.debuggers[0].configurationAttributes.launch.properties;

for (const [key,data] of Object.entries(launchProperties)){
    console.log(`${key} has values ..`)
    const launchProperty = {}
    for (const [dataKey, dataValue] of Object.entries(data)){
        console.log(`\t${dataKey} : ${dataValue}`)
        launchProperty[dataKey] = dataValue
    }
    const brightscriptDebugKey = 'brightscript.debug.' + key
    // note: if duplicate keys exist, we overwrite (new source data should be identical anyway)
    newDebugProperties[brightscriptDebugKey] = launchProperty
}

// have to parse it to get clean JSON
const newDebugPropertiesParsed = JSON.parse(JSON.stringify(newDebugProperties))

// finally replace elements
configurationArray[debugIndex].properties = newDebugPropertiesParsed
packageJson.contributes.configuration = configurationArray

console.log(packageJson.contributes.configuration)

try {
    fs.writeFileSync(packageJsonFileWrite2, JSON.stringify(packageJson, null, 4), 'utf8')
    fs.appendFileSync(packageJsonFileWrite2, EOL, 'utf8')
}
catch(e){
    console.error(e)
}

console.log('data saved back to package-demo-2.json file')
