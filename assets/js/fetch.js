document.querySelector("#txtSearch").addEventListener("click",(e)=>{

    const query=e.target.value;
    if(!query) return;

    fetch(`https://api.tvmaze.com/search/shows?q=${query}`) //promise
    .then( (resp)=>resp.json())
     .then((data)=>{

       // console.log(data);

       let strHtml="";
        data.forEach((item)=>{
            console.log(item);

            strHtml += `
            <div class="col">
            <div class="card">
              <img src="${item.show.image.medium}" class="card-img-top" alt="${item.show.name}">
              <div class="card-body">
                <h5 class="card-title">${item.show.name}</h5>
                <p class="card-text">${item.show.genres[0]}</p>
              </div>
            </div>
          </div>`
     })

     const elTvShows=document.querySelector("#tvShows").innerHTML = strHtml;

    });
   
        
   

    //fetch ile endpointe baglandik
    //promise yapisi ile baglanti kuruyoruz (soz veriyorum bu datayi getircem)
    //   
});