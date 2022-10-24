
export  function getListMovies(size, movies){
    let populateMovies =[];
    let t ;
    if(size >= 15){
        t = 15;
    }else{
       t=size
    }
     
    for(let i = 0, l = t; i < l; i++){
        
            populateMovies.push(movies[i])
    }
    return populateMovies;
}