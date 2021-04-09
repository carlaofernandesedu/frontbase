requirejs.config(
{
   baseUrl:'./',
   paths:{ 'posts' : 'posts-module' }
});

requirejs(['posts', function(){

}]);