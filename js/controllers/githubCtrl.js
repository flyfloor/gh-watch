//search for user or repository with keyword
app.controller('SearchListCtrl', ['$scope', '$timeout', 'github', 
	function($scope, $timeout, github) {
		$scope.srhType = 'user';
		var timeout;
		// search users or repos
		$scope.$watch('keyword', function(query){
			if (query) {
				if (timeout) {$timeout.cancel(timeout)};
				timeout = $timeout(function(){
					if ($scope.srhType == 'repository') {
						github.searchRepos(query)
							.success(function(data, status){
									$scope.repos = data.data.items;
								});
					}else if ($scope.srhType == 'user') {
						github.searchUsers(query)
							.success(function(data, status){
								$scope.users = data.data.items;
							});
					}
				}, 500);
			}
		});
	}]);

//get user with user's login
app.controller('UserCtrl', ['$scope', '$routeParams', 'github', 
	function($scope, $routeParams, github) {
		github.getUser($routeParams.username)
			.success(function(data, status){
				$scope.user = data.data;
			});
	}]);

//get repository with user's login and repo's name
app.controller('RepoCtrl', ['$scope', '$routeParams', 'github', 
	function($scope, $routeParams, github) {
		var full_name = $routeParams.login + '/' + $routeParams.name;
		github.getRepo(full_name)
			.success(function(data, status){
				var resData = data.data;
				$scope.repo = resData;
				$scope.owner = function(){
					return !!resData.fork === true ? resData.parent.owner : resData.owner; 
				}();
			});
	}]);

//get repositories with username
app.controller('RepoListCtrl', ['$scope', '$routeParams', 'github', 
	function($scope, $routeParams, github){
		github.getRepoList($routeParams.username)
			.success(function(data, status){
				$scope.repoList = data.data;
			});
	}]);

//user's relationship with others
app.controller('FollowListCtrl', ['$scope', '$routeParams', 'github', 
	function($scope, $routeParams, github) {
		var followType = $routeParams.follow == 0 ? 'followers':'following';
		$scope.username = $routeParams.username;
		github.getFollowList($routeParams.username, $routeParams.follow)
			.success(function(data, status){
				$scope.followList = data.data;
				$scope.followType = followType;
			});
	}]);
