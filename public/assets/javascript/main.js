
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

    function senatorsPull(key) {
        $.ajax({
            type: "GET",
            url: "https://api.propublica.org/congress/v1/115/senate/members.json",
            dataType: "JSON",
            headers: { "X-API-Key": key },
        }).then(function (response) {
            senators = response.results[0].members
            senators.sort(compareSens)
            console.log(senators)
            createSenators(senators)

        });
    }
    //     const senatorSkeleton = `<div class="card" style="width: 18rem;">
    //     <div class="card-body">
    //       <h5 class="card-title">${senators[i].first_name} ${senators[i].last_name}</h5>
    //         <p class="card-text">test</p>
    //     </div >
    //         <ul class="list-group list-group-flush">
    //             <li class="list-group-item">Cras justo odio</li>
    //             <li class="list-group-item">Dapibus ac facilisis in</li>
    //             <li class="list-group-item">Vestibulum at eros</li>
    //         </ul>
    //         <div class="card-body">
    //             <a href="#" class="card-link">Card link</a>
    //             <a href="#" class="card-link">Another link</a>
    //         </div>
    //   </div >`

    function createSenators(obj) {
        for (i = 0; i < obj.length; i++) {
            $("#populateSenators").append(
                `
                <div class="card">
        <div class="card-body">
            <h5 class="card-title ${senators[i].state}">${senators[i].first_name} ${senators[i].last_name} - ${senators[i].party}</h5>
            <p class="card-text">State: ${senators[i].state}</p >
        </div >
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Phone Number: ${senators[i].phone}</li>
                    <li class="list-group-item">Date of Birth: ${senators[i].date_of_birth}</li>
                    <li class="list-group-item">Next Election: ${senators[i].next_election}</li>
                </ul>
                <div class="card-body">
                    <a href="${senators[i].url}" class="card-link">Website</a>
                <a href ="${senators[i].contact_form}" class="card-link">Contact this Senator</a>
                </div >
          </div >
                `);
        }


    }
    cKey()

})


