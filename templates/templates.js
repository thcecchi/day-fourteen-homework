var templates = {};

templates.userProf = [
  "<img src = <%= avatar_url %>",
  "<h1><%= name %></h1>",
  "<h3><%= login %></h3>",
  "<p><%= location %></p>",
  "<p>Joined</p><p><%= created_at %></p>",
  "<p>Followers</p><h2><%= followers %></h2>",
  "<p>Following</p><h2><%= following %></h2>"
].join("")

templates.repos = [
  "<div class='repoName'>",
  "<h2><%= name %></h2>",
  "<p><%= updated_at %></p>",
  "</div>",
  "<p><%= langauge %></p>",
  "<span>ICON</span>",
  "<p><%= stargazers_count %></p>",
  "<span>ICON</span>",
  "<p><%= forks_count %></p>"
].join("")

templates.activitySmall = [
  "<div class='activityName'>",
  "<span>ICON</span>",
  "<p><%= login %></p>",
  "<p>created branch</p>",
  "<span>ICON</span>",
  "<p>at</p>",
  "<p><%= name %></p>",
  "</div>"
].join("")

templates.activityLarge = [
"<div>",
"<span>ICON</span>",
"<img src = <%= avatar_url %>",
"<p><%= login %></p>",
"<p>pushed to</p>",
"<p><%= ref %></p>",
"<p>at</p>",
"<p><%= name %></p>",
"<p><%= message %></p>",
"</div>"
].join("")
