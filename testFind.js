import find from "./find.js"
import items from "./items.js"


const element=find(items,cb);
console.log(element);
function cb(items,element){
    for(let index=0;index<items.length;index++){
        if(items[index]==element){
            return true;
        }
    }
}