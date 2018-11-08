    console.log("Start 222222 Ebe Twitter");
  //  var config = require("./config")

    var error = function (err, response, body) {
    	console.log('ERROR [%s]', err);
	};
	var success = function (data) {
		/*var tweets = data.statuses;
			if(tweets.length===0)
				{
					console.log("No Tweets Found");
				}

			else{
				for (var i = 0; i < tweets.length; i++) {
				//	ebeNeed.push(tweets[i].text);
					console.log(tweets[i].text)
				}
			  }*/
    	console.log('Data [%s]', data);
	};

	var Twitter = require('twitter-node-client').Twitter;

	 var twitter = new Twitter();

	 export const runt=twitter.getSearch({'q':'kizomba','count': 5}, error, success);