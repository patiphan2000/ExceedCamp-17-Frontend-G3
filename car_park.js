
console.log("Hello from JS")

function getData() {
    fetch('http://pi.ofline.online:47756/currentstatus', {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    })
    .then((response) => response.json())
    .then((data) => data["result"].forEach(element => {
        // console.log(element);
        updateSlot(element["parkid"], element["available"], element["start_ts"])
    }));
}

function updateSlot(slot_num, status, start_time) {
    var slot;
    var status_box;
    var time_box;
    switch(slot_num) {
        case 1:
            slot = document.getElementById('slot-1');
            status_box = document.getElementById('status-1');
            time_box = document.getElementById('time-1');
            break;
        case 2:
            slot = document.getElementById('slot-2');
            status_box = document.getElementById('status-2');
            time_box = document.getElementById('time-2');
            break;
        case 3:
            slot = document.getElementById('slot-3');
            status_box = document.getElementById('status-3');
            time_box = document.getElementById('time-3');
            break;
        case 4:
            slot = document.getElementById('slot-4');
            status_box = document.getElementById('status-4');
            time_box = document.getElementById('time-4');
    }
    if (status) {
        slot.style.background = "light-green";
        status_box.innerHTML = "Status: Available";
        time_box.innerHTML = "0:00"
    }
    else {
        slot.style.background = "red";
        status_box.innerHTML = "Status: Unavailable";
        time_box.innerHTML = getParking_time(start_time);
    }

}

function getParking_time(start_time) {
    var start = new Date(start_time * 1000);
    // console.log(start);
    const time_now = new Date(Date.now());
    // console.log(time_now);
    const diffTime = Math.ceil(Math.abs(time_now - start) / (1000 * 60));
    // console.log(Math.ceil(diffTime));
    if (diffTime > 60) {
        return Math.floor(diffTime/60) + ":" + (diffTime % 60);
    }
    else {
        return "0:" + diffTime;
    }
}

// getData();
// update_slot(3, "unavailable")

setInterval(() =>{
    getData();
}, 1000);