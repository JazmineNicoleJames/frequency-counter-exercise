// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    let arrObj = {};
    console.log('arrObj',arrObj)
    for(let i=0; i <arr1.length; i++){
        let key = arr1[i]
        let val = arr2[i];
        arrObj[key] = val !== undefined ? val : null;
        console.log('arrobj now', arrObj)
    }
    return arrObj;
}


module.exports = twoArrayObject;
