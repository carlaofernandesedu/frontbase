requirejs.config({
    baseUrl:'/js',
    paths:{'pages/post-list-page':'pages/post-list-page'}
});

requirejs(['pages/post-list-page',function(){}]);
