import {nSortDesc,nSortAsc,sSortAsc,sSortDesc} from "./sort.js"


const arr=[1,56,3,67,2,87,55,33];
//const arr1=[1,56,3,67,2,87,55,33];


console.log(nSortDesc(arr));
console.log(nSortAsc(arr));

console.log("şakir".localeCompare("ali"));
//tarayicinin diline gore hareket ederr
//sakir aliden buyuk 1 doner
const arrNames=["ali","zeynep","şakir","sevgi","temel"];

console.log(sSortAsc(arrNames));
console.log(sSortDesc(arrNames));


