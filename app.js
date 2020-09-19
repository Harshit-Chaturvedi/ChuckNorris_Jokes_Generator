// Event Listner
document.querySelector(".get-jokes").addEventListener("click", getJokes);


// Get Jokes 
function getJokes(e) {
    e.preventDefault();

    const number = document.querySelector("input[type='number']").value;

    // Initiate xhr
    const xhr = new XMLHttpRequest();

    // Configure
    xhr.open("GET", `https://cors-anywhere.herokuapp.com/https://api.icndb.com/jokes/random/${number}`, true);



    // Onload

    xhr.onload = function () {

        if (this.status === 200) {
            const response = JSON.parse(this.response);

            let output = "";
            response.value.forEach(function (jokes) {
                output += `
                <li>${jokes.joke}</li>
                `
            });
            document.querySelector("#number").value = "";
            document.querySelector("#jokes div").style.display = "block";
            document.querySelector(".jokes").innerHTML = output;
        }
    }
    // Send Request
    xhr.send()
}
