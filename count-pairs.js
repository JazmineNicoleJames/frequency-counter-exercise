// add whatever parameters you deem necessary
function countPairs(arr, num) {
    let count = 0;
    let visited = new Set(arr);
    for(let val of arr){
        visited.delete(val);
            if(visited.has(num - val))
            count++;
    }
    return count;
}

module.exports = countPairs;






