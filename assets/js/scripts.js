
// var greeting = _.template('<h1>Hello, <%- m.name %>!</h1>', { variable: 'm' });
// var renderedHtml = greeting({ name: 'Poe Dameron' });
// $('#main').html(renderedHtml);

//--------

// var views = {};
//
// $('script[type="text/html"]').each(function () {
//   var script = $(this);
//   views[script.attr('id')] = _.template(script.html(), { variable: 'm' });
//   script.remove();
// });
//
// $('#main').html(views.myTemplate({ name: 'Jane Doe' }));


//--------


$(function () {

  $('.searchBar').on('submit', function (e) {
    e.preventDefault();

    var ghLogin = $('input[name="gh-login"]').val();
    $.getJSON('https://api.github.com/users/' + ghLogin)
      .done(showUser)
      .fail(showError);
  });

  function showUser(user) {
    show('gh-user-template', user);
  }

  function showError(req, status, err) {
    err = err || {};
    err.message = err.message || status;
    console.log(err);
    show('gh-error-template', { message: err });
  }

  function show(template, model) {
    var fn = _.template($('#' + template).html(), { variable: 'm' });        //any template we get with a #(id)
    $('.user-info').html(fn(model));                //insert the template where the m is specified in the HTML
  }

});
