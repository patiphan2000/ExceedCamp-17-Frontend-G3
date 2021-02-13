
console.log("Hello from JS")

function get_data() {
    fetch('http://158.108.182.3:3000/currentstatus', {
        mode: 'no-cors',
        method: "GET",
        headers: {"Content-Type": "application/json"},
    })
    .then((response) => console.log(response))
    .then((result) => console.log(result));
    
}

get_data()

// setInterval(
//     get_data()
// , 1000)