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
    function compareSens(a, b) {
        // Use toUpperCase() to ignore character casing
        const stateA = a.state.toUpperCase();
        const stateB = b.state.toUpperCase();

        let comparison = 0;
        if (stateA > stateB) {
            comparison = 1;
        } else if (stateA < stateB) {
            comparison = -1;
        }
        return comparison;
    }
    // gets the api key
    // maybe use .env for the key
    function cKey() {
        db.ref("/apiKey").on("value", function (snapshot) {
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
            response.results[0].members.sort(compareSens)
            console.log(response.results[0].members)
        });
    }
    cKey()
})


