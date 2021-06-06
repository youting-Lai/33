$(".my-rating").starRating({
    initialRating: 4,
    starSize: 25
});


$(document).ready(function(){
      $('#book').zoom();
      $('#book').zoom({ on:'grab' });
      $('#book').zoom({ on:'click' });      
      $('#book').zoom({ on:'toggle' });
    });   