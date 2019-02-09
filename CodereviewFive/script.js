$(document).ready(function(){
	var action= $(".sortaction");
	var comody= $(".sortcomody");
	var love=   $(".sortlove");
	
    $(".sortaction").on("click", function() {
       action.fadeIn(500);
       comody.fadeOut(500);
      love.fadeOut(500);
    });
    
     
});
    