let tab = [1,2,3,4,5,6,7,8,9,0];
function pair(num) {
    if (num % 2 == 0) {
        return num;
    }
}
let pairs = tab.filter(pair)
console.log(pairs);