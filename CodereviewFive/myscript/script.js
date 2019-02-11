$(document).ready(function(){
  function morelike() {
        
        $(".btn").on("click", function() {
            
            var ref = $(this).attr("data-ref");
            
            var likes = $("#" + ref).html();
           
            likes++;
            
            $("#" + ref).html(likes);
        })}
  for(i=0; i < movie.length; i++){
    $("#action").append(`<div class="col-md-6 col-sm-12 col-xs-12 sortaction">
                    <div class=" col-lg-5 movieimg">
                    <img src="${movie[i].image}">
                     </div>
                      <div class="col-lg-7 description">
                        <h3> ${movie[i].title}</h3>
                        <p class="bbc">${movie[i].Des}</p>
                       
                    </div>
                    <button class="likes" id="like` + i + `">${Math.floor((Math.random() * 100) + 1)}</button>
                    <button class="btn" data-ref="like` + i + `">Like <i class="fas fa-thumbs-up"></i></button>
                    </div>
                    </div>
                
            
       `)};
    morelike();
	var action= $(".sortaction");
	
	
    $("#sortcomody").on("click", function() {
       action.fadeOut(500);
       
       
    });
    
    
});





    