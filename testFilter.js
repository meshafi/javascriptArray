import filter from "./filter.js"
import items from "./items.js"


const arr=filter(items,cb);
for(let index=0;index<arr.length;index++){
    console.log(arr[index]);
}
function cb(items,element){
    for(let index=0;index<items.length;index++){
        if(items[index]==element){
            return true;
        }
    }
}