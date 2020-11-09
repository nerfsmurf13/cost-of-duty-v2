// console.log('LOADED');
const apiApp = require(__dirname + "/app.js")
module.exports.returnedData = returnedData

let weaponData = {};

// module.exports.standardCategories = standardCategories
const standardCategories = [
    'weapon_sniper',
    'Snipers',
    'weapon_lmg',
    'Light Machine Guns',
    'weapon_pistol',
    'Handguns',
    'weapon_assault_rifle',
    'Assault Rifles',
    'weapon_shotgun',
    'Shotguns',
    'weapon_smg',
    'Submachine Guns',
    'weapon_marksman',
    'Marksman Rifles',
];

function returnedData(x) {
    // console.log('==============================');
    // console.log('==============================');
    // console.log('###Function Executed returnData(' + x + ')');

    let cat = null;
    let arr1 = {};

    // console.log(categories.indexOf(x));
    if (standardCategories.includes(x)) {
        // console.log('Valid Category Found');
        // console.log(categories[categories.indexOf(x) + 1]);
        return weaponData[x]
        return standardCategories[standardCategories.indexOf(x) + 1];
    } else {
        // console.log('Valid Category Not Found');
        return lookupTable(x); // Pass on to 2nd function
    }
    console.log('end of function reached somehow?');
}

function lookupTable(x) {
    // console.log('==============================');
    // console.log('###Function Executed lookupTable(' + x + ')');
    let arr2 = {};
    let c = {};
    for (const [key, value] of Object.entries(weaponData)) {
        // console.log(key, value);
        if (value.hasOwnProperty(x)) {
            // console.log(category)
            // console.log('Found', x, 'in', key);
            if (value[x].name) {
                return value[x]
            }
        }
    }

    return x + " Not Setup"

}

//Our data values
const dataObject = {
    weapon_sniper: {
        name: 'Snipers',
        iw8_sn_alpha50: {
            name: 'AX-50',
            cost: 3999,
            ammoCost: 20,
            magSize: 5,
        },
        iw8_sn_hdromeo: {
            name: 'HDR',
            cost: 1000,
            ammoCost: 10,
            magSize: 5,
        },
        iw8_sn_xmike109: {
            name: 'Ray-O-Tek',
            cost: 10000,
            ammoCost: 10,
            magSize: 5,
        },
        iw8_sn_delta: {
            name: 'Dragnov',
            cost: 10000,
            ammoCost: 10,
            magSize: 5,
        },
    },
    weapon_dmr: {
        name: 'Marksman Rifles',
        iw8_sn_sbeta: {
            name: 'K98',
            cost: 3999,
            ammoCost: 20,
            magSize: 5,
        },
        iw8_sn_crossbow: {
            name: 'K98',
            cost: 3999,
            ammoCost: 20,
            magSize: 5,
        },
        iw8_sn_romeo700: {
            name: 'K98',
            cost: 3999,
            ammoCost: 20,
            magSize: 5,
        },
        iw8_sn_kilo98: {
            name: 'K98',
            cost: 3999,
            ammoCost: 20,
            magSize: 5,
        },
        iw8_sn_mike14: {
            name: 'M14',
            cost: 1000,
            ammoCost: 10,
            magSize: 5,
        },
    },
    weapon_lmg: {
        name: 'Light Machine Guns',
        iw8_lm_mgolf36: {
            name: 'MG36',
            cost: 3000,
            ammoCost: 0.3,
            magsize: 75,
        },
        iw8_lm_kilo121: {
            name: 'Kilo 121',
            cost: 3000,
            ammoCost: 0.3,
            magsize: 75,
        },
        iw8_lm_mkilo3: {
            name: 'iw8_lm_mkilo3',
            cost: 3000,
            ammoCost: 0.3,
            magsize: 75,
        },
        iw8_lm_mgolf34: {
            name: 'iw8_lm_mgolf34',
            cost: 3000,
            ammoCost: 0.3,
            magsize: 75,
        },
        iw8_lm_lima86: {
            name: 'iw8_lm_lima86',
            cost: 3000,
            ammoCost: 0.3,
            magsize: 75,
        },
        iw8_lm_pkilo: {
            name: 'iw8_lm_pkilo',
            cost: 3000,
            ammoCost: 0.3,
            magsize: 75,
        },
        iw8_lm_sierrax: {
            name: 'iw8_lm_sierrax',
            cost: 3000,
            ammoCost: 0.3,
            magsize: 75,
        },

    },
    weapon_pistol: {
        name: 'Handguns',
        iw8_pi_mike1911: {
            name: '1911',
            cost: 1,
            ammoCost: 0.01,
        },
        iw8_pi_cpapa: {
            name: 'NOT CONFIGURED',
            cost: 1,
            ammoCost: 0.01,
        },
        iw8_pi_mike9: {
            name: 'NOT CONFIGURED',
            cost: 1,
            ammoCost: 0.01,
        },
        iw8_pi_golf21: {
            name: 'NOT CONFIGURED',
            cost: 1,
            ammoCost: 0.01,
        },
        iw8_pi_decho: {
            name: 'NOT CONFIGURED',
            cost: 1,
            ammoCost: 0.01,
        },
        iw8_pi_papa320: {
            name: 'NOT CONFIGURED',
            cost: 1,
            ammoCost: 0.01,
        },
    },
    weapon_assault_rifle: {
        name: 'Assault Rifles',
        totalCost: 0,
        iw8_ar_falima: {
            name: 'iw8_ar_falima',
            cost: 999,
            ammoCost: .05
        },
        iw8_ar_tango21: {
            name: 'iw8_ar_tango21',

        },
        iw8_ar_mike4: {
            name: 'iw8_ar_mike4',

        },
        iw8_ar_anovember94: {
            name: 'iw8_ar_anovember94',

        },
        iw8_ar_falpha: {
            name: 'iw8_ar_falpha',

        },
        iw8_ar_mcharlie: {
            name: 'iw8_ar_mcharlie',

        },
        iw8_ar_akilo47: {
            name: 'iw8_ar_akilo47',

        },
        iw8_ar_kilo433: {
            name: 'iw8_ar_kilo433',

        },
        iw8_ar_scharlie: {
            name: 'iw8_ar_scharlie',

        },
        iw8_ar_asierra12: {
            name: 'iw8_ar_asierra12',

        },
        iw8_ar_galima: {
            name: 'iw8_ar_galima',

        },
        iw8_ar_sierra552: {
            name: 'iw8_ar_sierra552',

        },
        "iw8_ar_valpha": {
            name: 'iw8_ar_valpha',
        },
    }
};
module.exports.cleanPercent = cleanPercent

function cleanPercent(x) {
    return Math.round(x * 100) + "%"
}
module.exports.buildWeaponData = buildWeaponData

function buildWeaponData(x) {
    console.log('building')
    for (const [weaponCatKey, weaponCatVal] of Object.entries(x)) {
        if (standardCategories.includes(weaponCatKey)) {
            // console.log(subCat)
            weaponData[weaponCatKey] = {

            }
            for (const [weaponSpecKey, weaponSpecVal] of Object.entries(weaponCatVal)) {
                // console.log(weaponSpecKey, weaponSpecVal.properties)
                //IF CATEGORY EXISTS IN DATAOBJECT
                if (dataObject.hasOwnProperty(weaponCatKey)) {
                    //IF WEAPON EXISTS IN DATAOBJECT[CATEGORY]
                    if (dataObject[weaponCatKey].hasOwnProperty(weaponSpecKey)) {
                        // console.log(weaponSpecVal.properties, dataObject[weaponCatKey][weaponSpecKey])
                        weaponData[weaponCatKey][weaponSpecKey] = {
                            ...weaponSpecVal.properties,
                            ...dataObject[weaponCatKey][weaponSpecKey],
                        }
                        weaponData[weaponCatKey].name = dataObject[weaponCatKey].name
                    }
                } else {
                    // console.log("Weapon not configured", weaponCatKey, weaponSpecKey)
                }
            }
        }
        // console.log(weaponData)
    }

}
// buildWeaponData();

module.exports.buildCostData = buildCostData

function buildCostData() {
    for (const [weaponCatKey, weaponCatVal] of Object.entries(weaponData)) {
        let catCost = 0
        if (standardCategories.includes(weaponCatKey)) {
            // console.log(weaponCatKey)
            for (const [weaponSpecKey, weaponSpecVal] of Object.entries(weaponCatVal)) {
                // console.log(weaponSpecKey)
                weaponData[weaponCatKey][weaponSpecKey].totCost = (weaponSpecVal.cost * weaponSpecVal.deaths) + (weaponSpecVal.shots * weaponSpecVal.ammoCost)
                // console.log(weaponSpecVal)
                if (!isNaN(weaponData[weaponCatKey][weaponSpecKey].totCost)) {
                    catCost = catCost + weaponData[weaponCatKey][weaponSpecKey].totCost
                    // console.log(catCost)
                }

            }
            weaponData[weaponCatKey].totCost = catCost
            // console.log(catCost)
        }

    }
}


// console.log("Client JS Loaded")
// console.log("dataCrunch Exports", module.exports)