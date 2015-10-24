function newpost() {
	var post = $('#postbox').val();

	var currentdate = new Date(); 
	var datetime = currentdate.getDate() + "-"
                + (currentdate.getMonth()+1) + "-" 
                + currentdate.getFullYear();

  var toJson = { 	'username'	: 'tempUsername',
  							 	'date'		: datetime,
  							 	'post'		: post,
  								'like'		: 0
  							}

	//console.log(JSON.stringify(toJson));

	var retriArr = jQuery.parseJSON(localStorage.getItem('postsArray'));
	retriArr.push(toJson);
	localStorage.setItem('postsArray', JSON.stringify(retriArr));

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
								  	'<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect likes">' +
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