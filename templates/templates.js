var templates = {};

templates.userProf = [
  "<img src = <%= avatar_url %>>",
  "<div class='userInformation'>",
  "<h1><%= name %></h1>",
  "<h3><%= login %></h3>",
  "<span class='octicon octicon-location'></span><p><%= location %></p>",
  "<br>",
  "<span class='octicon octicon-clock'></span><p>Joined on</p><p><%= created_at %></p>",
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
  "<h3><%= name %></h3>",
  "<p>Updated <%= updated_at %></p>",
  "</div>",
  "<div class='repoStats'>",
  "<p><%= langauge %></p>",
  "<span class='octicon octicon-star'></span>",
  "<p><a><%= stargazers_count %></a></p>",
  "<span class='octicon octicon-git-branch'></span>",
  "<p><a><%= forks_count %></a></p>",
  "</div>",
  "</div>"

].join("")

templates.activitySmall = [
  "<div class='activityContainer'>",
  "<span class='octicon octicon-git-branch'></span>",
  "<div class='activityInfoLarge'>",
  "<p><a href = '#'><%= login %></a></p>",
  "<p>created</p>",
  "<p><%= ref %></p>",
  "<p><%= ref_type %></p>",
  "<span class='octicon octicon-git-branch'></span>",
  "<p>at</p>",
  "<p><%= name %></p>",
  "</div>",
  "</div>"
].join("")

templates.activityLarge = [
  "<div class='activityContainer'>",
  "<span class='mega-octicon octicon-git-commit'></span>",
    "<div class='activityInfoLarge'>",
    "<p><a href = '#'><%= login %></a></p>",
    "<p class='large'>pushed to</p>",
    "<p class='small'><%= ref[0] %></p>",
    "<p class='large'><%= ref_type %></p>",
    "<p class='large'>at</p>",
    "<p class='large'><a><%= name %></a></p>",
    "</div>",


  "<img src = <%= avatar_url %> >",
  "<div class='activityInfoSmall'>",
    "<img class='small' src = <%= avatar_url %> >",
    "<p class='small'><a><%= id[0] %></a></p>",
    "<p class='small'><%= message[0] %></p>",
    "<br>",
    // <% if (typeof(date) !== "undefined") { %>
    //   <span class="date"><%= date %></span>
    //   <% } %>
    "<img class='small' src = <%= avatar_url %> >",
    "<p class='small'><%= ref[1] %></p>",
    "<p class='small'><a><%= id[1] %></a></p>",
    "<p class='small'><%= message[1] %></p>",
  "</div>",
  "</div>"
].join("")
