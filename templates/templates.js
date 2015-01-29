var templates = {};

templates.userProf = [
  "<img src = <%= avatar_url %>>",
  "<div class='userInformation'>",
  "<h1><%= name %></h1>",
  "<h3><%= login %></h3>",
  "<p><%= location %></p>",
  "<p><%= email %></p>",
  "<p><%= blog %></p>",
  "<p>Joined</p><p><%= created_at %></p>",
  "</div>",
  "<div class='stats'>",
  "<p class='number'>Followers</p><h2><%= followers %></h2>",
  "</div>",
  "<div class='stats'>",
  "<p class='number'>Following</p><h2><%= following %></h2>",
  "</div>"
].join("")

templates.repos = [
  "<div class='repoContainer'>",
  "<div class='repoName'>",
  "<h2><%= name %></h2>",
  "<p><%= updated_at %></p>",
  "</div>",
  "<div class='repoStats'>",
  "<p><%= langauge %></p>",
  "<span class='octicon octicon-eye'></span>",
  "<p><%= stargazers_count %></p>",
  "<span class='octicon octicon-git-branch'></span>",
  "<p><%= forks_count %></p>",
  "</div>",
  "</div>"

].join("")

templates.activitySmall = [
  "<div class='activityContainer'>",
  "<span class='mega-octicon octicon-git-commit'></span>",
  "<div class='activityInfo'>",
  "<p><a href = '#'><%= login %></a></p>",
  "<p>created</p>",
  "<p><%= ref_type %></p>",
  "<span class='octicon octicon-git-branch'></span>",
  "<p>at</p>",
  "<p><%= name %></p>",
  "</div>",
  "</div>"
].join("")

templates.activityLarge = [
  "<div class='activityContainer'>",
    "<div class='activityInfo'>",
    "<p><a href = '#'><%= login %></a></p>",
    "<p class='large'>pushed to</p>",
    "<p class='large'><%= ref_type %></p>",
    "<p class='large'>at</p>",
    "<p class='large'><a><%= name %></a></p>",
    "</div>",

  "<span class='octicon octicon-git-branch'></span>",
  "<img src = <%= avatar_url %> >",
  "<div class='activityInfo'>",
    "<img class='small' src = <%= avatar_url %> >",
    "<p class='small'><%= ref[0] %></p>",
    "<p class='small'><%= id[0] %></p>",
    "<p class='small'><%= message[0] %></p>",
    "<br>",
    "<p class='small'><%= ref[1] %></p>",
    "<p class='small'><%= id[1] %></p>",
    "<p class='small'><%= message[1] %></p>",
  "</div>",
  "</div>"
].join("")
