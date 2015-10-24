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
        	'<div class="mdl-cell mdl-card mkk mdl-shadow--2dp"><div class="mdl-card__title">' 
        	+ user.username + '</div><div class="mdl-card__supporting-text">' 
        	+ user.post + '|' + user.date + '</div><div class="mdl-card__actions"></div></div>'
        	);
        $('#posts').prepend(postcard);
  }); //$.each(...)

}