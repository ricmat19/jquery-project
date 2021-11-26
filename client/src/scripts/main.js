define(function(require) {

    const jquery = require('jquery');

    const comicVineAPI = require('../apis/comic-vine-api');
    // const devianArtAPI = require('./apis/deviant-art-api');
    // const googleBooksAPI = require('./apis/google-books-api');
    const kitsuAPI = require('../apis/kitsu-api');
    const spotifyAPI = require('../apis/spotify-api');
    // const youtubeAPI = require('./apis/youtube-api');

    const container = $('#app');

    //Get list of categories
    // spotifyAPI.getCategories().then(({ categories }) => {
    //     categories.items.forEach(item => {

    //         let category = `
    //             <div class="card" id=${item.id}>
    //                 ${JSON.stringify(item)}
    //             </div>`

    //         container.append(category);
    //     })
    // });

    kitsuAPI.getAnime().then((animes) => {
        console.log(animes.data)
        animes.data.forEach(anime => {
            console.log(anime)
        })
    });

    comicVineAPI.getSeries().then((show) => {
        console.log(show)
        // animes.data.forEach(anime => {
        //     console.log(anime)
        // })
    });
    
})