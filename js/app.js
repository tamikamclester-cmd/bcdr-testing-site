function runTest() {

let scenario = document.getElementById("scenario").value;
let results = document.getElementById("results");

let output = "";

if(scenario === "power"){

output = "Simulating data center power outage. Generator failover initiated.";

}

if(scenario === "network"){

output = "Simulating network backbone failure. Traffic rerouting.";

}

if(scenario === "cyber"){

output = "Simulating ransomware attack. Systems isolating.";

}

if(scenario === "regional"){

output = "Simulating regional disaster. DR site activation.";

}

results.innerHTML = "<h3>Simulation Result</h3>" + output;

}
