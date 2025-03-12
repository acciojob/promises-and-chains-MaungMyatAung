//your JS code here. If required.

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("voteForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const age = parseInt(document.getElementById("age").value.trim());

        if (!name || isNaN(age)) {
            alert("Please enter valid details.");
            return;
        }

        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (age >= 18) {
                    resolve(`Welcome, ${name}. You can vote.`);
                } else {
                    reject(`Oh sorry ${name}. You aren't old enough.`);
                }
            }, 4000);
        })
        .then((message) => {
            alert(message);
        })
        .catch((error) => {
            alert(error);
        });
    });
});

