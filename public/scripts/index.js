



var provider = new firebase.auth.GoogleAuthProvider();
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    window.location = "interactionPage.html";
}

// firebase.auth().signInWithPopup(provider).then(function (result) {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = result.credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;

//     // ...
// }).catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
// });

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.location = "interactionPage.html";
    } else {
        console.log("Not Signed in")
    }
});

document.querySelector(".loginbtn").addEventListener("click", function () {

});

