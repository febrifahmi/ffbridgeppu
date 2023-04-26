/*
Copyright (2023) Hinawan Teguh Santoso (hteguhsantoso@gmail.com) Febri Fahmi Hakim (fahmi_fafa@yahoo.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


/**
 * 
 * @param {Number} bridgespan length of the bridge span (between 10 m to 500 m span length) 
 * @returns {Object} 
 */
function CalcFFundamentalLow(bridgespan) {
    let lobound = 9999
    const e = 2.71828183
    if (bridgespan <= 10) {
        return lobound
    } else if (bridgespan > 10 && bridgespan <= 500) {
        lobound = e ** (4.157 - 0.847 * (Math.log(bridgespan)))
        // console.log(lobound)
        return +lobound.toFixed(4)
    }
}


/**
 * 
 * @param {Number} bridgespan length of the bridge span 
 * @returns {Object} 
 */
function CalcFFundamentalHigh(bridgespan) {
    let hibound = 9999
    const e = 2.71828183
    if (bridgespan <= 10) {
        return hibound
    } else if (bridgespan > 10 && bridgespan <= 500) {
        hibound = e ** (4.020 - 0.789 * (Math.log(bridgespan)))
        // console.log(hibound)
        return +hibound.toFixed(4)
    }
}


/**
 * 
 * @param {Number} freqtest frequency natural of the bridge span based on exitation test
 * @param {Number} low lower bound of bridge fundamental frequency
 * @param {Number} high higher bound of bridge fundamental frequency 
 * @returns {String}
 */
function CalcDecision(freqtest, low, high) {
    if (freqtest < low) {
        return "WARNING"
    } else if (freqtest >= low && freqtest <= high) {
        return "SAFE"
    } else if (freqtest > high) {
        return "SAFE (RIGID)"
    } else {
        return "Out of bound"
    }
}


module.exports = { CalcFFundamentalLow, CalcFFundamentalHigh, CalcDecision }