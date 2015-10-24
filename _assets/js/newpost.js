function newpost() {
	var post = $('#postbox').value;

	var currentdate = new Date(); 
	var datetime = currentdate.getDate() + "-"
                + (currentdate.getMonth()+1) + "-" 
                + currentdate.getFullYear();

  var toJson = '{ "username":"' + 'tempUsername' 
  							+ '","date":"' + datetime
  							+ '","post":"' + post
  							+ '","like":"0" },'

  console.log("tojson::: " + toJson);
  console.log(JSON.parse(toJson));

	localStorage.setItem('postsArray', JSON.stringify(post));
}