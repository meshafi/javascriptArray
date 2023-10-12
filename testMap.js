import map from "./map.js"
import items from "./items.js"

const arr=map(items,cb);
for(let index=0;index<arr.length;index++){
    console.log(arr[index]);
}
export function cb(element){
    element=element*element;
    return element;
}