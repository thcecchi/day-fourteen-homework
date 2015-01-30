var profilePage =

{
  init: function () {
    profilePage.initStyle();
    profilePage.initEvents();
    $(".activityFeed").hide();

  },

  initStyle: function () {
    profilePage.userProfileInfo();
    profilePage.userRepoInformation();
    profilePage.userActivityFeed();

  },

  initEvents: function () {
    $(".navRepo").click(function() {
      $(".repos").show();
      $(".activityFeed").hide();
    })

    $(".navActivity").click(function() {
      $(".activityFeed").show();
      $(".repos").hide();
    })

  },

  userProfileInfo: function (element, index, array) {
    // user profile data
    var userAvatar = _.pluck([userData],"avatar_url");
    var userName = _.pluck([userData],"name");
    var userLogin = _.pluck([userData],"login");
    var userEmail = _.pluck([userData],"email");
    var userBlog = _.pluck([userData],"blog");
    var userLocation = _.pluck([userData],"location");
    var userCreatedAt = _.pluck([userData],"created_at");
    var userFollowers = _.pluck([userData],"followers");
    var userFollowing = _.pluck([userData],"following");

    var userCreateDate = moment(userCreatedAt).format('YYYY-MM-DD');
    // moment(localTime).format('YYYY-MM-DD HH:mm:ss')

    var profData = {
      avatar_url: userAvatar,
      name: userName,
      login: userLogin,
      email: userEmail,
      blog: userBlog,
      location: userLocation,
      created_at: userCreateDate,
      followers: userFollowers,
      following: userFollowing
    };

    var userCompiled = _.template(templates.userProf);
    console.log(userCompiled(profData));
    $("aside").append(userCompiled(profData));

  },

  addAllRepoData: function (repoData) {

  },

  userRepoInformation: function () {

    repoData.forEach(function(Object) {
      var index = repoData.indexOf(Object);

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
        name: repoName[index],
        updated_at: repoUpdatedAt[index],
        langauge: repoLanguage[index],
        stargazers_count: repoStargazersCount[index],
        forks_count: repoForksCount[index]
      };

      var repoCompiled = _.template(templates.repos);
      console.log(repoCompiled(repoFeedData));
      $(".repos").append(repoCompiled(repoFeedData));

    });
  },

  userActivityFeed: function () {
    // user activity data
    activityData.forEach(function(Object) {
      var index = activityData.indexOf(Object);
      console.log(index);


      var activityAvatar = _.pluck(activityData[index], "avatar_url");
      console.log(activityAvatar);
      var activityName = _.pluck(activityData[index], "name");
      console.log(activityName);
      var activityLogin = _.pluck(activityData[index], "login");
      console.log(activityLogin);
      var activityRef = _.pluck(activityData[index], "ref_type");
      console.log(activityRef);
      var activityMessage = _.pluck(activityData[index].payload.commits, "message");
      console.log(activityMessage);
      var activityRefMaster = _.pluck(activityData[index], "ref");
      console.log(activityRefMaster);
      var activityId = _.pluck(activityData[index], "id");
      console.log(activityId);


      var activityFeedData = {
        avatar_url: activityAvatar,
        name: activityName,
        login: activityLogin,
        ref_type: activityRef,
        ref: activityRefMaster,
        message: activityMessage,
        id: activityId
      };

      var arrayPlucker = function(array){
        _.each(activityFeedData,function(array){

          var undef = undefined;
          for (var i=array.length - 1; i >=0; i--) {
            if ( array[i] === undef ) {
              array.splice(i,1);
            }
          }
        });
      };

      arrayPlucker(activityFeedData);




      var activitySmallCompiled = _.template(templates.activitySmall);
      console.log(activitySmallCompiled(activityFeedData));
      $(".activityFeed").append(activitySmallCompiled(activityFeedData));

      var activityLargeCompiled = _.template(templates.activityLarge);
        console.log(activityLargeCompiled(activityFeedData));
        $(".activityFeed").append(activityLargeCompiled(activityFeedData));
    });

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
