var authUser = function () {
	var ref = new Firebase("https://keeptrackapp.firebaseio.com");
	ref.authWithOAuthPopup("facebook", function(error, authData) {
			if(error) {
				console.log("Error has occured", error);
			}
			else {
				var userRef = ref.child('users');
				userRef.push().set({
				uid: authData.uid,
				name: authData.facebook.displayName,
				access_token: authData.facebook.accessToken,
				picture: authData.facebook.profileImageURL,
				facebookLink: authData.facebook.cachedUserProfile.link,
				token: authData.token,
				created_at: Firebase.ServerValue.TIMESTAMP
				});
			}
		});
};
