
const searchShows = (query) => {

    fetch(`https://api.tvmaze.com/search/shows?q=${query}`) //promise
    .then( (resp)=>resp.json())
     .then((data)=>{
        return data;
               
    });
};

export {searchShows};

