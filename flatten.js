import items from "./items.js"

function flatten(arr){
   const flattenArray=[];

   function flattened(arr){
    if(Array.isArray(arr)){
       arr.forEach(flattened);
    }
    else{
        flattenArray.push(arr);
    }
   }
    arr.forEach(flattened);
   return flattenArray;
}

export default flatten;