let videoData = [
  {
    image: "https://besthorrorscenes.com/posters/56_the-vanishing.png",
    title: "The Vanishing (1988)",
    director: "George Sluizer",
    videoId: "q17PtQMyDdg",
  },

  {
    image: "https://besthorrorscenes.com/posters/55_the-omen.png",
    title: "The Omen (1976)",
    director: "Richard Donner",
    videoId: "m8GFEfNYS_E",
  },

  {
    image: "https://besthorrorscenes.com/posters/44_mother.png",
    title: "mother! (2017)",
    director: "Darren Aronofsky",
    videoId: "XA328xGabwY",
  },

  {
    image: "https://besthorrorscenes.com/posters/53_the-shining.png",
    title: "The Shining (1980)",
    director: "Stanley Kubrick",
    videoId: "Sl0-YCsMtdA",
  },

  {
    image: "https://besthorrorscenes.com/posters/52_jaws.png",
    title: "Jaws (1975)",
    director: "Steven Spielberg",
    videoId: "d5F0BBoKW9Q",
  },

  {
    image: "https://besthorrorscenes.com/posters/51_pet-sematary.png",
    title: "Pet Sematary (1989)",
    director: "Mary Lambert",
    videoId: "5aZyBV_5A_k",
  },

  {
    image: "https://besthorrorscenes.com/posters/50_psycho.png",
    title: "Psycho (1960)",
    director: "Alfred Hitchcock",
    videoId: "k8HUehU8B_s",
  },

  {
    image: "https://besthorrorscenes.com/posters/49_suspiria.png",
    title: "Suspiria (1977)",
    director: "Dario Argento",
    videoId: "Qw34BZs7Nek",
  },

  {
    image: "https://besthorrorscenes.com/posters/48_the-eyes-of-my-mother.png",
    title: "The Eyes of My Mother (2016)",
    director: "Nicolas Pesce",
    videoId: "jG2qxMip5a4",
  },

  {
    image:
      "https://besthorrorscenes.com/posters/47_the-texas-chainsaw-massacre.png",
    title: "The Texas Chainsaw Massacre (1974)",
    director: "Tobe Hooper",
    videoId: "tnVfekgy_OE",
  },

  {
    image: "https://besthorrorscenes.com/posters/46_sinister.png",
    title: "Sinister (2012)",
    director: "Scott Derrickson",
    videoId: "AztQ_0T2ipQ",
  },
];

videoSection(videoData);

function videoSection(data) {
  var main = document.getElementById("main");

  for (var i = 0; i < data.length; i++) {
    var movie = `<article class="movie" >
    
        <header class="movie__header">
        <h3 class="movie__title">${i + 1}. ${data[i].title}</h3>
        <p class="movie__director">Directed by ${data[i].director}</p>
        </header>
        <section class="movie__video" id="movie${[
          i,
        ]}"style="background-image: url(${data[i].image})">

          <i class="fas fa-play play"></i>

        </section>
        <div class="movie__statistics">
          <i class="fas fa-thumbs-up"></i>
          <p class="movie__statistics--likes">1000</p>
          <i class="fas fa-thumbs-down"></i>
          <p class="movie__statistics--dislikes">249</p>
        </div>
      
    </article>
    `;
    main.innerHTML += movie;
  }
}

//const main = document.getElementById("main");
// const movie__header = document.querySelector(".movie__header");
// const movie__video = document.querySelector(".movie__video");

// const posters = imgURL.map(
//   (
//     img
//   ) => `<section id="video"  class="movie__video" style="background-image: url(${img.join(
//     ""
//   )})"> <i class="fas fa-play play"></i>
// </section >`
// );
// const names = titles.map(
//   (title) => `<header class="movie__header">
// <h3 class="movie__title">${title}</h3>
// <p class="movie__director">"someone"</p>
// </header>`
// );
// main.innerHTML = `<article class="movie">${posters}</article>`;

/*
$("#main").append(`

        <article class="movie" data-key="${vid}">
        <header class="movie__header">
          <h3 class="movie__title">${i + 1}. ${title}</h3>
          <p class="movie__director">Directed by someone</p>
        </header>

        <section id="video"  class="movie__video">
             <iframe width="550" height="400"
           src="https://www.youtube.com/embed/${vid}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="movieVideo"></iframe>
        </section >

        <div class="movie__statistics">
        <i class="fas fa-thumbs-up"></i>
        <p class="movie__statistics--likes">1000</p>
        <i class="fas fa-thumbs-down"></i>
        <p class="movie__statistics--dislikes">249</p>
        </div>
        </article> 
*/

/*

htmlresponse = document.querySelector(main)  
const tpl = users.map((user) => `<li>${user.name}  ${user.email} </li>`);
HTMLResponse.innerHTML = `<ul>${tpl}</ul>`; 

*/
