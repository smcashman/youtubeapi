$(function(){


	$("#searchvid").click(function(){
		$(".searchresults").html("");
		var userSearch = $("#infosearch").val();
		searchVid(userSearch);

	});

	function searchVid(userSearch){


	var params = {
    part: 'snippet',
    key: 'AIzaSyBVprWJZVQWVvxNl-tQLTeXRf-JxGBWXe0',
    q: userSearch.toString()
    };
  	url = 'https://www.googleapis.com/youtube/v3/search';
  	

	$.getJSON(url, params, function(data){
		//console.log(data);
   		myData = data.items

    	$.each(myData, function(index, value) {
    		var vidId = this.id.videoId;
    		var snippetobj = value.snippet;
    		var caption = this.snippet.title;

    		var imageUrl = snippetobj.thumbnails.medium.url

    		
    		$("#instruct").hide();
    		$(".searchresults").append("<a class='videos' href='http://www.youtube.com/watch/"+vidId +"?fs=1&autoplay=1' target=blank><img src =" + imageUrl + "><p>"+ caption +"</p></a>");
    	   
        $(".videos").click(function(){
            console.log("click");
    
        });
    });
   });
};
    
});





















