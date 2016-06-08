
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

// ...........  from Kelly's demo at https://github.com/tiyd-fee-2016-05/demos/tree/master/ajax-demo


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
    var fn = _.template($('#' + template).html(), { variable: 'm' });
    $('.user-info').html(fn(model));
  }

});
// .............. my current experimental code below, from https://github.com/tiyd-fee-2016-05/lessons/blob/master/week-4/lodash.md


// Get the template from the hacky script tag:
var templateString = $('#myTemplate').html();

// Compile the template as per usual:
var compiledTemplate = _.template(templateString, { variable: 'm' });

// Render the template out to our main div tag:
$('#main').html(compiledTemplate({ name: 'John Smith' }));
// .........................a middle-aged attempt below
// <% m.repos_url.forEach(function (repomagic) { %>
//     <div class="repomagic">
//       <%- repomagic.name %>
//     </div>
//   <% }); %>

// .........................an early attempt below
// function showRepos(){
// $.getJSON('https://api.github.com/users/octocat/repos')
//   .done(showUser)
//   .fail(showError);
// };
