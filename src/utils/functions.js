
export const formatToEuroString = (amount) => {
    return amount.replace(/[,]/g, ' ').replace(/[.]/g, ',')
}
export const formatToDecimals = (amount) => {
    let formatedAmount = amount.replace(/[,]/g, '').replace(/[.]/g, ',')
    return parseFloat(formatedAmount)
}

export const parseObjectToArray = (obj) => {        // good for Flatlist but not for virtualizedlist
    //const customCurr = require('../utils/currency.json')

    const result = [];
    for (const [key, value] of Object.entries(obj.rates)) {
        const d = {
            id: key,
            currency_name: value.currency_name,
            rate: value.rate,
            //symbol: customCurr[key].symbol_native,    // wanted to have proper money unicode but it doesnt get the key; customCurr["USD"].symbol_native works fine
            flag: "https://flagpedia.net/data/flags/normal/" + key.slice(0, 2) + ".png"
        };
        result.push(d);
    }
    result.sort((a, b) => a.id > b.id ? 1 : -1);
    // {...result} to have an object instead
    return result
}

