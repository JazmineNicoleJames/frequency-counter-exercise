// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let str1Idx = 0;
    let str2Idx = 0;

    while(str2.length > str2Idx){
        if(str2[str2Idx] === str1[str1Idx]){
            str1Idx +=1;
        }
        if(str1Idx === str1.length) return true;
        str2Idx +=1;
    }
    return false;

}

module.exports = isSubsequence;