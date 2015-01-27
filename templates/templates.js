var templates = {}

templates.profile = [
  "<img src = <%= avatarurl %>",
  "<h1><%= name %></h1>",
  "<h3><%= login %></h3>",
  "<p><%= location %></p>",
  "<p><%= created_at %></p>",
  "<h2><%= followers %></h2>",
  "<h2><%= following %></h2>"
].join[""]

templates.repoNav =[
  "<nav>"
  "<input>",
  "<button>",
  "<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  </ul>",
  "<button>",
  "</nav>"
]

templates.repos = [
  "<div class='repoName'>",
  "<h2><%= name %></h2>",
  "<p><%= updated_at %></p>"
  "</div>",
  "<p><%= langauge %></p>",
  "<span>ICON</span>",
  "<p><%= stargazers_count %></p>",
  "<span>ICON</span>",
  "<p><%= forks_count %></p>"
]
