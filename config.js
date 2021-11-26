requirejs.config({
    baseUrl: 'vendors',
    paths: {
        'jquery': 'jquery-3.6.0.min',
        'bootstrap-css': 'bootstrap.min',
        'bootstap-js': 'bootstrap.min'
    }
});

requirejs(['../lib/main']);