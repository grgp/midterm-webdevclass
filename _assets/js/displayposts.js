function display() {
	$.getJSON("_assets/data/post.json", function(json) {
	    console.log(json);

      $.each(json, function (i, user) {
          var postcard = 
          	(
          	'<div class="mdl-cell mdl-card mkk mdl-shadow--2dp"><div class="mdl-card__title">' 
          	+ user.username + '</div><div class="mdl-card__supporting-text">' 
          	+ user.post + '|' + user.date + '</div><div class="mdl-card__actions"></div></div>'
          	);
          $('#posts').prepend(postcard);
      }); //$.each(...)

	});
}