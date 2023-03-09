// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(getAuth());

// var uiConfig = {
//     callbacks: {
//         signInSuccessWithAuthResult: function (authResult, redirectUrl) {
//             // User successfully signed in.
//             // Return type determines whether we continue the redirect automatically
//             // or whether we leave that to developer to handle.
//             return true;
//         },
//         uiShown: function () {
//             // The widget is rendered.
//             // Hide the loader.
//             document.getElementById('loader').style.display = 'none';
//         }
//     },
//     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//     signInFlow: 'popup',
//     signInSuccessUrl: './game',
//     signInOptions: [
//         // Leave the lines as is for the providers you want to offer your users.
//         firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     ],
//     // Terms of service url.
//     tosUrl: '#',
//     // Privacy policy url.
//     privacyPolicyUrl: '#'
// };

// ui.start('#firebaseui-auth-container', uiConfig);
// 1) Create a new firebaseui.auth instance stored to our local variable ui
const ui = new firebaseui.auth.AuthUI(firebase.auth())

// 2) These are our configurations.
const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: './game',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: '#',
    // Privacy policy url.
    privacyPolicyUrl: '#'
}

// 3) Call the 'start' method on our ui class
// including our configuration options.
ui.start("#firebaseui-auth-container", uiConfig)

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        data.user_data.email = user.email;
        console.log(data.user_data.email);
    } else {
        console.warn("No user is signed in!");
    }
});
setInterval(function(){localStorage.setItem("/AtomIncremental/UserDataTemp/Email", data.user_data.email);
localStorage.setItem("/AtomIncremental/UserDataTemp/Username", data.user_data.username)}, 50)
