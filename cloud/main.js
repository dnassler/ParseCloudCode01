
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world! This is an interesting experiment, me thinks.");
});
Parse.Cloud.define("getFeatured", function(request, response) {
	//response.success("chocolate");
	//response.success("rainbow");
	response.success("watermelon");
});