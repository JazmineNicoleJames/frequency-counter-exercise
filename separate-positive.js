// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0;
    let right = arr.length -1;
    console.log('arr begin', arr)
    while(left < right){
        if(arr[left] < 0 && arr[right] > 0){
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            //move the pointers
            left+=1;
            right-=1;
        } else {
            if(arr[left] > 0) left+=1;
            else right-=1;
        }
    }
    console.log('arr end', arr)
    return arr;

}

module.exports = separatePositive;