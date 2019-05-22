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
            return snapshot.val()
        })
    }
    function senatorsPull() {
        $.ajax({
            type: "GET",
            url: "https://api.propublica.org/congress/v1/115/senate/members.json",
            data: "data",
            dataType: "dataType",
            headers: { "X-API-Key": cKey() },
            success: function (response) {
                console.log(response)
            }
        });
    }
})



