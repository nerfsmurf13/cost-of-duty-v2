let rawImport = ""
let refinedData = ''
let refinedDataBasic = ''
let refinedDataARWeapons = []
// let itemData = {}
const apiApp = require(__dirname + "/app.js")
module.exports.returnedData = returnedData
//Step One, Find if "x" exist in our API response
function returnedData(x) {
    let catIndex = 0
    let foundCat = false
    let searchCat = false
    let foundSpecific = null
    let message = ''
    let arr1 = {}

    // console.log("ITEMDATA from APP.js", JSON.stringify(apiApp.apiData))
    // console.log("ITEMDATA from APP.js", itemData)


    for (const subcat of Object.values(itemData)) {
        searchCat = Object.entries(itemData)[catIndex][0]
        let count = 0
        if (x == searchCat) {
            foundCat = x
            console.log('Matched Category Name!', foundCat)
            console.log("Returning", dataObject[foundCat]) //Returning object containing all weapons under category
            // console.log('Category Index', catIndex)
            if (dataObject.hasOwnProperty(x)) {
                return dataObject[foundCat] //ENDPOINT 1
            } else {
                message = "Category Issue!"
                return message //ENDPOINT 1
            }

        } else {
            for (const subWeapon of Object.keys(subcat)) {
                count++
                if (x == subWeapon) {
                    console.log('Matched Specific Name!', x)
                    foundCat = searchCat
                    foundSpecific = x
                    // console.log('Target found!')
                    // console.log("Found Within", foundCat)
                    // console.log(subcat[x].properties)
                    arr1 = subcat[x].properties
                    // arr1 = Object.keys(subcat)
                    // console.log("arr1", arr1)
                    // console.log(arr1.indexOf(x))
                    // console.log("Found", foundSpecific)
                    // lookupTable(x, foundCat)
                    return lookupTable(x, foundSpecific, arr1)
                }

            }
            if (foundSpecific == false) {
                console.log("failed")
                return 'failed'
            }
            // return "Weapon cat not found"
        }
        catIndex++
    }
    // Cannot find anything
    if (!foundCat) {
        // console.log("not found")
        message = 'Cannot find ' + x
        return message
    }
    // if (itemData.hasOwnProperty(x)) {
    //     console.log('FOUND!')
    // } else {
    //     for (const subset of Object.values(itemData)) {
    //         count++
    //         if (subset.hasOwnProperty(x)) {
    //             console.log('Target found!')
    //             // console.log('Parent Index:', subset)
    //             arr1 = Object.keys(itemData)
    //             console.log("arr1", arr1)
    //             console.log("x", x)
    //             console.log("subset", Object.values(subset))
    //             console.log(arr1.indexOf(x))
    //             console.log('Subset Index:', count)
    //         }
    //         // console.log('Not Found...')
    //     }
    //     // return itemData.hasOwnProperty(x)
    // }
    // console.log(itemData)
    // console.log(itemData)
    // console.log('Matched Specific Name!', x)
    // console.log("Returning", x, foundSpecific, arr1) //Returning object containing all weapons under category
    // return lookupTable(x, foundSpecific, arr1)
}
//If found, lets plug data into this function to find if our plug-in data exists...
function lookupTable(x, specific, arr) {
    console.log("lookupTable Loaded")
    let count = 0
    let arr2 = {}
    let c = {}

    if (!specific) {
        if (dataObject.hasOwnProperty(x)) {
            // console.log('FOUND!')
            // return dataObject[x]
        } else {
            for (const subset of Object.values(dataObject)) {
                count++
                if (subset.hasOwnProperty(x)) {
                    // console.log('Target found!')
                    // console.log('Array Index:', count)
                    // console.log(dataObject[subset].name)
                }
                // console.log('Not Found...')
            }
            // return itemData.hasOwnProperty(x)
        }
    } else {
        for (const subCat of Object.values(dataObject)) {
            // console.log(subCat)
            for (const subWeapon of Object.keys(subCat)) {
                if (x == subWeapon) {
                    // console.log("Found", subWeapon)
                    // console.log(subCat[subWeapon])
                    arr2 = subCat[subWeapon]
                    c = {
                        ...arr,
                        ...arr2
                    }
                    // console.log(c) 
                    return c
                }
            }
        }
        return "Not Found"
    }

}
//Our data values
const dataObject = {
    'weapon_sniper': {
        name: "Snipers",
        'iw8_sn_alpha50': {
            desc: "Enter description here",
            name: "AX-50",
            weaponCost: 3999,
            ammoCost: 20,
            magSize: 5,
        },
        'iw8_sn_hdromeo': {
            desc: "Enter description here",
            name: "HDR",
            weaponCost: 1000,
            ammoCost: 10,
            magSize: 5
        },
        'iw8_sn_xmike109': {
            desc: "Enter description here",
            name: "Ray-O-Tek",
            weaponCost: 10000,
            ammoCost: 10,
            magSize: 5
        },
    },
    'weapon_lmg': {
        name: "Light Machine Guns",
        'iw8_lm_mgolf36': {
            desc: "Enter description here",
            name: "MG36",
            weaponCost: 3000,
            ammoCost: .30,
            magsize: 75
        }
    }
}
module.exports.cleanPercent = cleanPercent

function cleanPercent(x) {
    return Math.round(x * 100) + "%"
}
// module.exports.dataCleaner = dataCleaner

// function dataCleaner(raw) {
//     // console.log(raw.lifetime.itemData)
//     console.log(raw.lifetime.itemData.weapon_assault_rifle)
//     for (const weaponSpecific of Object.keys(raw.lifetime.itemData.weapon_assault_rifle)) {
//         if (weaponSpecific.key == dataTable)
//             refinedDataARWeapons.push(dataTable.value)
//     }
//     console.log(refinedDataARWeapons)
//     // return raw
// }




// module.exports.classNames = classNames

// function classNames(raw) {
//     if (raw == "weapon_assault_rifle") {
//         return "Assault Rifles"
//     }
// }


console.log("Client JS Loaded")
console.log("dataCrunch Exports", module.exports)