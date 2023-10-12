import items from "./items.js"

function reduce(items,cb,startingValue){
    for(let index=0;index<items.length;index++){
       startingValue = cb(items[index],startingValue);
    }
    return startingValue;
} 

export default reduce;
