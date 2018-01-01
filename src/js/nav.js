// to make this work replace nav block on each page with <div id="nav-placeholder"></div>
// this currently causes a flash when switching pages, so disabled for now

$.get('nav.html', function(data){
    $('#nav-placeholder').replaceWith(data);
});
