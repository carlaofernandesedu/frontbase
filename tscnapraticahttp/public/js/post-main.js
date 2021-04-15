requirejs.config({
    baseUrl:'/js',
    paths:{'pages/post-list-page':'pages/post-list-page',
            'pages/post-new-page':'pages/post-new-page'
    }
});

requirejs([MODULE_INITIALIZER],function(){});
