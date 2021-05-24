/**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function(n) {
    let total = 0;
    let hash = new Array(n).fill(true);
    hash[0] = false;
    hash[1] = false;
    /*
    i = 10, 10 * 10 < 1000;
    10 * 10, 10 * 11 , 10 * 12 != prime
    2, 4, 6, 8, 10, ..., 20, 30, 40, ...
    */
    for(let i = 2; i * i < n; i++){
        if(hash[i] == false){
            continue;
        }
        /*
        j = 10 * 10; j < 1000; 100 += 10;
        100, 110, 120, 130, 140... 990;
        */
        for(let j = i * i; j < n; j+=i){
            hash[j] = false;
        }
    }
    hash.forEach(el => {
        if(el == true){
            total++;
        }
    })
    return total;
};