function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
}
var provider = new firebase.auth.GoogleAuthProvider();

let imgArry = ["resources/images/challage1.jpeg", "resources/images/challage4.jpeg", "resources/images/challage3.jpeg", "resources/images/challage2.jpeg"]
let img = document.querySelector(".sliderImg");
let i = 0;

// img.addEventListener("click", function (e) {
//     img.src = `${imgArry[i++]}`;
//     e.stopPropagation();
// });


let flag = false;
document.querySelector("#challenge"), addEventListener("click", function () {
    let imageViewer = document.querySelector(".imageViewer");
    let img = document.querySelector(".sliderImg");
    if (flag === false) {
        img.style = "display:inline-block;";
        imageViewer.style = "display:inline-block;";
        flag = true;
    } else {
        img.style = "display:none;";
        imageViewer.style = "display:none;";
        flag = false;
    }

});


let power = document.querySelector(".power");
power.addEventListener("click", handelpower);

function handelpower() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });
}


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(`${user} Signed in`)
    } else {
        window.location = "index.html";
    }
});