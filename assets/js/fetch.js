document.querySelector("#txtSearch").addEventListener("click",(e)=>{

    const query=e.target.value;
    if(!query) return;

    fetch(`https://api.tvmaze.com/search/shows?q=${query}`) //promise
    .then( function (resp){
      return resp.json();

    })
    .then(function(data){
        console.log(data)
    });

   
});