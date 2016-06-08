
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
      .done(showUser,getSecondJason)
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

var ghLogin = $('input[name="gh-login"]').val();
function getSecondJason(){
$.getJSON('https://api.github.com/users/' + ghLogin + "/repos")
.done(showRepos)
// need to replace showUser with a new template created in html
;
};


function showRepos(repo) {
  show2('gh-repo-template', repo);
}

function show2(template, model) {
  var fn = _.template($('#' + template).html(), { variable: 'm' });
  $('.gh-repo-template').html(fn(model));
};


//   show2('gh-repo-template', user);
// }
//
//   function show2(template, model) {


// .............. some experimental code below, from https://github.com/tiyd-fee-2016-05/lessons/blob/master/week-4/lodash.md


// Get the template from the hacky script tag:
// var templateString = $('#myTemplate').html();

// Compile the template as per usual:
// var compiledTemplate = _.template(templateString, { variable: 'm' });

// Render the template out to our main div tag:
// $('.repoDivExperimental').html(compiledTemplate({ repos_url: 'John Smith' }));




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
