
$(document).ready(function(){
	$('#i-nav').click(function(){
		$('ul#menuList').toggleClass('show');
		$('ul#galleryList').toggleClass('show');
	});
});




/*
$(function() {

   $("#gallerySection").mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 30);
    
      event.preventDefault();

   });

});
*/