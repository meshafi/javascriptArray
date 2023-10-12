import items from "./items.js";
import flatten from "./flatten.js";

const nestedArray = [1, [2], [[3]], [[[4]]]];
const result=flatten(nestedArray);
console.log(result);



