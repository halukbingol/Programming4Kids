"use strict"; // keep this

// library of utility functions

/**
 * Convert a string to arrayIn
 * @param str {string} string to be converted
 * @returns {string}
 */
function string2ArrayIn(str) {
    let strTmp = "";
    for (let char of str) {
        strTmp += char + ",";
    }
    strTmp = strTmp.slice(0, -1); // remove the last ","
    return strTmp;
}

/**
 * Convert a array of strings to 2D arrayIn
 * @param arrStr {string[]} array of strings to be converted
 * @returns {string}
 */
function arrayString2ArrayIn(arrStr) {
    let strTmp = "[";
    for (let i = 0; i < arrStr.length; i++) {
        strTmp += "[";
        // strTmp += string2ArrayIn(y_row[i]);
        strTmp += string2ArrayIn(row[i]);
        strTmp += "],";
    }
    strTmp = strTmp.slice(0, -1); // remove the last ","
    strTmp += "]";
    return strTmp;
}
