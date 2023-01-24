document.querySelector("#txtSearch").addEventListener("click",(e)=>{

    const query=e.target.value;
    if(!query) return;

    fetch(`https://api.tvmaze.com/search/shows?q=${query}`) //promise
    .then( (resp)=>resp.json())
     .then((data)=>{

        console.log(data);

        data.forEach((item)=>{
            console.log(item);
     })

    });
   
        
   

    //fetch ile endpointe baglandik
    //promise yapisi ile baglanti kuruyoruz (soz veriyorum bu datayi getircem)
    //   
});