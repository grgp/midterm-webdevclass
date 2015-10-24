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
	console.log(localStorage.getItem('postsArray'));

}