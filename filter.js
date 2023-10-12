import items from "./items.js";

function filter(items,cb){
    
    const arr=[];
    for(let index=1;index<=10;index++){
        if(cb(items,index)){
            arr.push(index);
        }
    }
    return arr;
}
export default filter;