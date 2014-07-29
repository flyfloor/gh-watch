app.factory('github', ['$http', function($http){
	var op,
		callback = 'callback=JSON_CALLBACK',
		doRequest = function(url_part, search){
			op = !!search? '&': '?';
			return $http({
	      method: 'JSONP',
	      url: 'https://api.github.com/'+ url_part + op + callback
	    });
		};

	return {
		searchRepos: function(query){
			return doRequest('search/repositories?q=' + query, true);
		},
		searchUsers: function(query){
			return doRequest('search/users?q=' + query, true);
		},
		getUser: function(username){
			return doRequest('users/' + username, false);
		},
		getRepo: function(repo){
			return doRequest('repos/' + repo, false);
		},
		getRepoList: function(username){
			return doRequest('users/' + username + '/repos', false)
		},
		getFollowList: function(username, follow){
			var type = function(){
				if (follow == 0) {
					return 'followers';
				}else{
					return 'following';
				}
			}();
			return doRequest('users/' + username + '/'+ type, false)
		}
	}
}]);