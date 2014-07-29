app.directive('noRecord', function(){
	// Runs during compile
	return {
		restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		scope: {
			itemType:'@'
		},
		templateUrl: 'views/no-record.html'
	};
});

app.directive('goHome', function(){
	// Runs during compile
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'views/go-home.html'
	};
});
