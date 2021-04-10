requirejs.config({
    baseUrl:'./js',
    paths:{'teste':'teste'}
});

requirejs(['teste',function(){}]);
