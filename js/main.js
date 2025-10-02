$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-bars fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
});