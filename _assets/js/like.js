function like(findu) {
	$.getJSON("_assets/data/post.json", function(json) {
	    console.log(json);
      $.each(json, function (i, user) {
      	if (findu == user.post) {
      		user.like++;
      	}
      }
  }
}