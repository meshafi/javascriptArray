import items from "./items.js"
import reduce from "./reduce.js";


let startingValue=0;

const result=reduce(items,cb,startingValue);
console.log(result);

function cb(currentValue,startingValue){
    return startingValue+currentValue;
}
