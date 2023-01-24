const sSortAsc=(arr)=>{

    return arr.sort((a,b)=>a<b?-1:1);

};

const sSortDesc=(arr)=>{

    return arr.sort((a,b)=>b<a?-1:1);

};
//[12,45,2,76,9]
const nSortAsc=(arr)=>{
    return arr.sort((a,b)=>a-b);

};

const nOSortDesc=(arr)=>{

    return arr.sort((a,b)=>b-a);

    
}

export{sSortAsc,sSortDesc,nSortAsc,nOSortDesc};