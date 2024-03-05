let movies=[
   
    {
        name:"Spider-Man No Way Home",
        poster:"no.png",
        rating: 8.2
    },
    {
        name:"Thor The Dark World",
        poster: "thor.png",
        rating: 7.1
    },
    {
        name:"The Marvel ",
        poster: "marvel.png",
        rating: 8.2

    },
    {
        name:"Avengers Endgame ",
        poster: "end.jpg",
        rating: 8.2

    },
    {
        name:"Animal ",
        poster: "animal.png",
        rating: 8.5

    },
    {
        name:"Dunki",
        poster: "dunki.png",
        rating: 9.2

    },
    {
        name:"Salar",
        poster: "sa.png",
        rating: 8.2

    },
    {
        name:"Tiger 3",
        poster: "ti.png",
        rating: 6.3
    }

 

];


function searchmovie()
{
    let movieName = document.getElementById('search').value;
 
     if(movieName!=="")
     {

        let result =movies.filter(function(movie)
            {
               return movie.name.toUpperCase().includes(movieName.toUpperCase())
            })

         displayMovies(result);
     
     
   }
   else
   {
    displayMovies(movies);
   }

 

    }


function displayMovies(data)
{

    document.getElementById("movies").innerHTML="";

    let htmlString =``;

    for  (let i=0;i<data.length;i++)
    {
        htmlString=htmlString+`
        <div class="movie">
            <div class="overlay"  class="cursor">

                <div class="video">

                </div>
                <div class="Details">

                    <h1>${data[i].name}</h1>
                    <h2>IMDB:${data[i].rating}}</h2>
                </div>
            </div>
            <img class="poster" src="${data[i].poster}">
            </div>
            `
    }

    console.log(htmlString);

    document.getElementById("movies").innerHTML=htmlString;
}



displayMovies(movies);
    
      