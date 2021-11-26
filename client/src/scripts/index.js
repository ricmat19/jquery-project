    import $ from 'jquery';
    import comicVineAPI from './apis/comic-vine-api';
    import devianArtAPI from './apis/deviant-art-api';
    import googleBooksAPI from './apis/google-books-api';
    import kitsuAPI from './apis/kitsu-api';
    import spotifyAPI from './apis/spotify-api';
    import youtubeAPI from './apis/youtube-api';

    const container = $('#app'); 

    $(container.append("test"))

    //Get list of categories
    spotifyAPI.getCategories().then(({ categories }) => {
        // categories.items.forEach(item => {

        //     let category = `
        //         <div class="card" id=${item.id}>
        //             ${JSON.stringify(item)}
        //         </div>`

        //     container.append(category);
        // })
    });

    kitsuAPI.getAnime().then((animes) => {
        // console.log(animes.data)
        // animes.data.forEach(anime => {
        //     console.log(anime)
        // })
    });

    comicVineAPI.getSeries().then((show) => {
        // console.log(show)
        // animes.data.forEach(anime => {
        //     console.log(anime)
        // })
    });