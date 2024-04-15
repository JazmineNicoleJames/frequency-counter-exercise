// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    let int1Freq = freqCounter(int1);
    let int2Freq = freqCounter(int2);
    if(int1Freq.size !== int2Freq.size) return false;
    for(let [key, value] of int1Freq) {
        if(int2Freq.get(key) !== value) return false;
    }
    return true;
}


function freqCounter(int) {
    let frequency = new Map();
    let strInt = int.toString();
    for(let val of strInt){
        let valCount = frequency.get(val) || 0;
        frequency.set(val, valCount + 1);
    }
    return frequency;
}

module.exports = sameFrequency