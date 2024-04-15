// add whatever parameters you deem necessary
function averagePair(arr, target) {
    for(let i=0; i <arr.length; i++){
        let avg = (arr[i] + arr[i +1])/2;
        if(avg === target){
            return true;
        }
    }
    return false;
}

module.exports = averagePair;