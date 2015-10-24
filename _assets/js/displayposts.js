function display() {

	$.getJSON("_assets/data/post.json", function(json) {
	    console.log(json);
      $.each(json, function (i, user) {
          var postcard = 
          	(
						'<div class="mdl-cell mdl-shadow--2dp cardwidth">' +
							'<div class="mdl-grid">' +
								'<div class="mdl-cell mdl-cell--2-col profileimg">' +
									'<img src="_assets/data/image/' + user.username.toLowerCase() + '.png" class="profileimg"/>' +
								'</div>' +
								'<div class="mdl-cell mdl-cell--8-col carddet">' +
								  '<div class="mdl-card__title">' + user.username + '</div>' +
								  '<div class="mdl-card__supporting-text">' + user.post +
								  '</div>' +
								  '<div class="mdl-card__actions mdl-card--border">' +
								  	'<span class="postdate">posted at ' + user.date + '</span>' +
								  	'<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect likes" onclick="like(' + user.post + ')">' +
	      							user.like + ' Likes' +
	    							'</a>' +
								  '</div><!-- button -->' +
								'</div><!-- mdlcell 8 -->' +
							'</div><!--mdl-grid-->' +
						'</div>'
          	);
          $('#posts').prepend(postcard);
      }); //$.each(...)
	});

	var postsArray = localStorage.getItem('postsArray');
	if (!postsArray) {
		console.log("entered")
		var initJson = "[]";
		localStorage.setItem('postsArray', initJson);
	} else {
		var newerPosts = jQuery.parseJSON(localStorage.getItem('postsArray'));
		$.each(newerPosts, function (i, user) {
          var postcard = 
          	(
          	'<div class="mdl-cell mdl-shadow--2dp cardwidth">' +
							'<div class="mdl-grid">' +
								'<div class="mdl-cell mdl-cell--2-col profileimg">' +
									'<img src="_assets/data/image/' + user.username.toLowerCase() + '.png" class="profileimg"/>' +
								'</div>' +
								'<div class="mdl-cell mdl-cell--8-col carddet">' +
								  '<div class="mdl-card__title">' + user.username + '</div>' +
								  '<div class="mdl-card__supporting-text">' + user.post +
								  '</div>' +
								  '<div class="mdl-card__actions mdl-card--border">' +
								  	'<span class="postdate">posted at ' + user.date + '</span>' +
								  	'<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect likes" onclick="like(' + user.post + ')">' +
	      							user.like + ' Likes' +
	    							'</a>' +
								  '</div><!-- button -->' +
								'</div><!-- mdlcell 8 -->' +
							'</div><!--mdl-grid-->' +
						'</div>'
          	);
          $('#posts').prepend(postcard);
    }); //$.each(...)		
	}

}