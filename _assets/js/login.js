function login() {
  var xml;
  $.get('_assets/data/users.xml', null, function (data, textStatus) {
    xml=data;
      $(xml).find('user').each( function(){
          var item = $(this);

          if(item.find('username').text()==$('#userbox').val() && item.find('password').text()==$('#passbox').val())
          {
            window.location = 'home.html';
            sessionStorage.setItem('username', item.find('username').text());
          }
     });
	});

}