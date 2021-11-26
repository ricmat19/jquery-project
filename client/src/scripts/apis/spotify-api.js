    import $ from 'jquery';

    const BASE_URL = 'https://api.spotify.com/v1'; 

    export default{
        //Get categories from Spotify API
        getCategories: function() {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: BASE_URL + '/browse/categories',
                    method: 'GET',
                    headers: {
                        Authorization: 'Bearer ' + process.env.SPOTIFY_AUTH_TOKEN
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