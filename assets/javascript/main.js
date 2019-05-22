const firebaseConfig = {
    apiKey: "AIzaSyBHAjLBPcwbrH2s5NTHuxXI2H_5fk6BqXA",
    authDomain: "forthepeople-42bed.firebaseapp.com",
    databaseURL: "https://forthepeople-42bed.firebaseio.com",
    projectId: "forthepeople-42bed",
    storageBucket: "forthepeople-42bed.appspot.com",
    messagingSenderId: "408071277261",
    appId: "1:408071277261:web:7f3e689a5345fefb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database()

$(document).ready(function () {
    // gets the api key
    // maybe use .env for the key
    function cKey() {
        db.ref("/apiKey").on("value", function (snapshot) {
            console.log(snapshot.val())
            senatorsPull(snapshot.val());
            // return snapshot.val()
        })
    }
    function senatorsPull(key) {
        $.ajax({
            type: "GET",
            url: "https://api.propublica.org/congress/v1/115/senate/members.json",
            dataType: "JSON",
            headers: { "X-API-Key": key },
        }).then(function (response) {
            console.log(response);
        });
    }
    cKey()
})
