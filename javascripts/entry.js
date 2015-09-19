requirejs.config({
  shim : {
    "bootstrap" : { "deps" :["jquery"] },
    "firebase": {
        exports: "Firebase"
    }
  },
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "lodash": "../lib/bower_components/lodash/lodash.min",
    "firebase": "../lib/bower_components/firebase/firebase"
  }
});

require(["main", "bootstrap"], function() {} );

// Create a reference to your Firebase database
var myFirebaseRef = new Firebase("https://brilliant-fire-4629.firebaseio.com/");

// Listen for when anything changes on the "songs" key
myFirebaseRef.child("songs").on("value", function(snapshot) {

// Store the entire songs key in a local variable
var songs = snapshot.val();
console.log("songs", songs);
});
