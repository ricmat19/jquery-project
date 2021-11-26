define(['jquery'], function($) {

    const SPOTIFY_AUTH_TOKEN = process.env.SPOTIFY_AUTH_TOKEN;

    const BASE_URL = 'https://api.spotify.com/v1';

    return {
        //Get categories from Spotify API
        getCategories: function() {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: BASE_URL + '/browse/categories',
                    method: 'GET',
                    headers: {
                        Authorization: 'Bearer ' + AUTH_TOKEN
                    },
                    success: (data, status) => {
                        console.log('getCategories: ', data);
                        resolve(data);
                    },
                    error: err => {
                        if(err.status === 401) {
                            alert('Spotify Auth Token is Invalid')
                        } else {
                            reject(err);
                        }
                    }
                })
            })
            
        },
    }    
})