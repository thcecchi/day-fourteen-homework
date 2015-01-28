var profilePage =

{
  init: function () {
    profilePage.initStyle();
    profilePage.initEvents();
  },

  initStyle: function () {

// user profile data
    var userAvatar = _.pluck([userData],"avatar_url");
    var userName = _.pluck([userData],"name");
    var userLogin = _.pluck([userData],"login");
    var userLocation = _.pluck([userData],"location");
    var userCreatedAt = _.pluck([userData],"created_at");
    var userFollowers = _.pluck([userData],"followers");
    var userFollowing = _.pluck([userData],"following");

    var profData = {
      avatar_url: userAvatar,
      name: userName,
      login: userLogin,
      location: userLocation,
      created_at: userCreatedAt,
      followers: userFollowers,
      following: userFollowing
    };

    var userCompiled = _.template(templates.userProf);

    console.log(userCompiled(profData));

    $("aside").append(userCompiled(profData));

// user repo data
    var repoName = _.pluck(repoData,"name");
    console.log(repoName);
    var repoUpdatedAt = _.pluck(repoData,"updated_at");
    console.log(repoUpdatedAt);
    var repoLanguage = _.pluck(repoData,"language");
    console.log(repoLanguage);
    var repoStargazersCount = _.pluck(repoData,"stargazers_count");
    console.log(repoStargazersCount);
    var repoForksCount = _.pluck(repoData,"forks_count");
    console.log(repoForksCount);

    var repoFeedData = {
      name: repoName,
      updated_at: repoUpdatedAt,
      langauge: repoLanguage,
      stargazers_count: repoStargazersCount,
      forks_count: repoForksCount
    };

    var repoCompiled = _.template(templates.repos);

    console.log(repoCompiled(repoFeedData));

    $(".repos").append(repoCompiled(repoFeedData));

// user activity data
    var activityAvatar = _.pluck(activityData,"avatar_url");
    var activityName = _.pluck(activityData,"name");
    var activityLogin = _.pluck(activityData,"login");
    var activityRef = _.pluck(activityData,"ref");
    var activityMessage = _.pluck(activityData,"message");

    var activityFeedData = {
      avatar_url: activityAvatar,
      name: activityName,
      login: activityLogin,
      ref: activityRef,
      message: activityMessage
    };

    var activitySmallCompiled = _.template(templates.activitySmall);
      console.log(activitySmallCompiled(activityFeedData));
      $(".activity").append(activitySmallCompiled(activityFeedData));

    var activityLargeCompiled = _.template(templates.activityLarge);
      console.log(activityLargeCompiled(activityFeedData));
      $(".activity").append(activityLargeCompiled(activityFeedData));

  },

  initEvents: function () {

  },

  addCommit: function (element, index, array) {


  },

  addAllCommits: function (profileData) {
    // userData.forEach(profilePage.addCommits);
  },

  sideBarProfile: function (userData) {

    

  },

  createProduct: function () {

  },

  updateProduct: function () {


  },

  addUpdateProduct: function () {


  },


  deleteProduct: function () {

  }
};

$(document).ready(function() {
  profilePage.init();
});
