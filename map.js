import items from "./items.js"

export function map(items,cb,startingValue){
    for(let index=0;index<items.length;index++){
     items[index]=cb(items[index]);
    }
    return items;
}
export default map;
