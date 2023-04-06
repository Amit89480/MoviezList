import React, { useEffect, useState } from 'react';


function MoviesList({tokken}) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
   
    const fetchData = async () => {
  
      const response = await fetch('https://hoblist.com/api/movieList', {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin':'http://localhost:3000',
             'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: 'movies',
          language: 'kannada',
          genre: 'all',
          sort: 'voting',
        }),
      });
      const data = await response.json();
      console.log(data);
      setMovies(data.result);
      setLoading(false);
    };
    fetchData();
    
}, []);

  if (loading) {
    return <div class="spinner-border text-primary my-3" role="status">
  
  </div>
  }

  return (
   <>

  
   
 
  
    
    <h1 classNameName='text-center' style={{ margin: "35px 0px" }}>Movies -List</h1>
  
<div className='d-flex flex-wrap '>
{movies.map((movie) => (

  

<div classNameName="col-4">
<div className="card" style={{"width": "18rem"}}>
  <img className="card-img-top" src={movie.poster} alt=""/>
  <div className="card-body">
    <h5 className="card-title">{}</h5>
    
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Language: {movie.language}</li>
    <li className="list-group-item">Genre: {movie.genre}</li>
    <li className="list-group-item">Director: {movie.director}</li>
    <li className="list-group-item">Starrer: {movie.stars}</li>
    <li className="list-group-item">Views: {movie.views}</li>
    <li className="list-group-item">Voting by {movie.voting} people</li>
    <button type="button" class="btn btn-primary">▶️Trailer</button>

  </ul>

 
</div>
</div>
))}
</div>


</>
   
  );
}

export default MoviesList;
