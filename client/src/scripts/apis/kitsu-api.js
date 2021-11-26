    import $ from 'jquery';
    
    const BASE_URL = 'https://kitsu.io/api/edge';

    export default{
        //Get list of Anime shows
        getAnime: function() {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: BASE_URL + '/anime?page[limit]=20',
                    method: 'GET',
                    success: (data, status) => {
                        console.log('getAnime: ', data);
                        resolve(data);
                    },
                    error: err => {
                        if(err.status === 401) {
                            alert('There was an error!')
                        } else {
                            reject(err);
                        }
                    }
                })
            }) 
        },
    }    