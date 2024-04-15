// add whatever parameters you deem necessary
function constructNote(msgStr, letters) {
    const count = {};
    if(letters.length === 0) return false;
    if(msgStr.length === 0) return true;
    for(ltr of letters){
        count[ltr] = (count[ltr] || 0) + 1;
    }

    for(let char of msgStr) {
        if(!count[char] || count[char] === 0) return false;
        count[char]--;
    }
    return true;

}

module.exports = constructNote