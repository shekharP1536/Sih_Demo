const busData = [
    {
        crewName: "Crew Alpha",
        driverName: "Rahul Kumar",
        conductorName: "Ajay Verma",
        busNumber: "DTC 102",
        route: "Red Fort -> Qutub Minar",
        workingTime: "8:00 AM - 4:00 PM",
        location: "India Gate",
        shiftBreak: "12:00 PM - 1:00 PM",
        status: "On Time",
        timeDeviation: "On Time"
    },
    {
        crewName: "Crew Bravo",
        driverName: "Ankit Singh",
        conductorName: "Ravi Sharma",
        busNumber: "DTC 205",
        route: "Connaught Place -> Karol Bagh",
        workingTime: "9:00 AM - 5:00 PM",
        location: "Karol Bagh",
        shiftBreak: "1:00 PM - 2:00 PM",
        status: "Delayed",
        timeDeviation: "10 min late"
    },
    {
        crewName: "Crew Charlie",
        driverName: "Ravi Patel",
        conductorName: "Deepak Nair",
        busNumber: "DTC 307",
        route: "Lajpat Nagar -> Saket",
        workingTime: "10:00 AM - 6:00 PM",
        location: "Lajpat Nagar",
        shiftBreak: "2:00 PM - 3:00 PM",
        status: "On Time",
        timeDeviation: "On Time"
    },
    {
        crewName: "Crew Delta",
        driverName: "Suresh Sharma",
        conductorName: "Vivek Yadav",
        busNumber: "DTC 401",
        route: "India Gate -> Hauz Khas",
        workingTime: "7:00 AM - 3:00 PM",
        location: "Hauz Khas",
        shiftBreak: "11:00 AM - 12:00 PM",
        status: "Delayed",
        timeDeviation: "30 min late"
    },
    {
        crewName: "Crew Echo",
        driverName: "Amit Verma",
        conductorName: "Manoj Kumar",
        busNumber: "DTC 509",
        route: "Nehru Place -> Vasant Kunj",
        workingTime: "12:00 PM - 8:00 PM",
        location: "Nehru Place",
        shiftBreak: "3:00 PM - 4:00 PM",
        status: "Early",
        timeDeviation: "15 min early"
    },
    {
        crewName: "Crew Foxtrot",
        driverName: "Pooja Nair",
        conductorName: "Sakshi Jain",
        busNumber: "DTC 612",
        route: "AIIMS -> Vasant Vihar",
        workingTime: "6:00 AM - 2:00 PM",
        location: "Vasant Vihar",
        shiftBreak: "10:00 AM - 11:00 AM",
        status: "On Time",
        timeDeviation: "On Time"
    },
    {
        crewName: "Crew Golf",
        driverName: "Nikhil Das",
        conductorName: "Suresh Yadav",
        busNumber: "DTC 723",
        route: "CP -> Gurgaon",
        workingTime: "9:30 AM - 5:30 PM",
        location: "Gurgaon",
        shiftBreak: "1:30 PM - 2:30 PM",
        status: "Delayed",
        timeDeviation: "1 hour late"
    },
    {
        crewName: "Crew Hotel",
        driverName: "Priya Kapoor",
        conductorName: "Rajeev Sharma",
        busNumber: "DTC 825",
        route: "Janakpuri -> Dwarka",
        workingTime: "11:00 AM - 7:00 PM",
        location: "Janakpuri",
        shiftBreak: "4:00 PM - 5:00 PM",
        status: "On Time",
        timeDeviation: "On Time"
    },
    {
        crewName: "Crew India",
        driverName: "Arun Kumar",
        conductorName: "Vikas Malhotra",
        busNumber: "DTC 935",
        route: "Sarojini Nagar -> AIIMS",
        workingTime: "7:30 AM - 3:30 PM",
        location: "Sarojini Nagar",
        shiftBreak: "12:00 PM - 1:00 PM",
        status: "On Time",
        timeDeviation: "On Time"
    },
    {
        crewName: "Crew Juliet",
        driverName: "Rajesh Gupta",
        conductorName: "Mohit Singh",
        busNumber: "DTC 1023",
        route: "Rajiv Chowk -> CP",
        workingTime: "9:00 AM - 5:00 PM",
        location: "Rajiv Chowk",
        shiftBreak: "1:00 PM - 2:00 PM",
        status: "Delayed",
        timeDeviation: "20 min late"
    }
];

let currentIndex = 0;









function displayBusCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";  // Clear previous content

    // Display six bus cards at a time
    const busesToShow = busData.slice(currentIndex, currentIndex + 6);

    busesToShow.forEach(bus => {
        const cardHTML = `
            <div class="card">
                <div class="top-row">
                    <div class="top-left">${bus.busNumber}</div>
                    <div class="top-right status ${bus.status === 'On Time' ? 'on-time' : (bus.status === 'Delayed' ? 'delayed' : 'early')}">
                        ${bus.status}
                    </div>
                </div>

                <div class="divider"></div>

                <div class="route-info">
                    <h4>${bus.route}</h4>
                </div>
                <div class="divider"></div>

                <div class="middle-row">
                    <div class="middle-left">Driver: ${bus.driverName}</div>
                    <div class="middle-right">Conductor: ${bus.conductorName}</div>
                </div>
                <div class="middle-row">
                    <div class="bottom-left">Location: ${bus.location}</div>
                    <div class="bottom-right">Break: ${bus.shiftBreak}</div>
                </div>
                <div class="bottom-centre">Working Hours: ${bus.workingTime}</div>
            </div>
        `;
        cardContainer.innerHTML += cardHTML;
    });

    // Update the index for the next set of buses
    currentIndex = (currentIndex + 6) % busData.length;
}

// Display new bus cards every 15 seconds
setInterval(displayBusCards, 5000);

// Initial display
displayBusCards();














// Display new bus cards every 15 seconds
setInterval(displayBusCards, 5000);

// Initial display
displayBusCards();















/*

const busData = [
    {
        crewName: "Crew Alpha",
        driverName: "Rahul Kumar",
        conductorName: "Ajay Verma",
        busNumber: "DTC 102",
        route: "Red Fort -> Qutub Minar",
        workingTime: "8:00 AM - 4:00 PM",
        location: "India Gate",
        shiftBreak: "12:00 PM - 1:00 PM",
        status: "On Time",
        timeDeviation: "On Time"
    },
    {
        crewName: "Crew Bravo",
        driverName: "Ankit Singh",
        conductorName: "Ravi Sharma",
        busNumber: "DTC 205",
        route: "Connaught Place -> Karol Bagh",
        workingTime: "9:00 AM - 5:00 PM",
        location: "Karol Bagh",
        shiftBreak: "1:00 PM - 2:00 PM",
        status: "Delayed",
        timeDeviation: "10 min late"
    },
    {
        crewName: "Crew Charlie",
        driverName: "Ravi Patel",
        conductorName: "Deepak Nair",
        busNumber: "DTC 307",
        route: "Lajpat Nagar -> Saket",
        workingTime: "10:00 AM - 6:00 PM",
        location: "Lajpat Nagar",
        shiftBreak: "2:00 PM - 3:00 PM",
        status: "On Time",
        timeDeviation: "On Time"
    },
    {
        crewName: "Crew Delta",
        driverName: "Suresh Sharma",
        conductorName: "Vivek Yadav",
        busNumber: "DTC 401",
        route: "India Gate -> Hauz Khas",
        workingTime: "7:00 AM - 3:00 PM",
        location: "Hauz Khas",
        shiftBreak: "11:00 AM - 12:00 PM",
        status: "Delayed",
        timeDeviation: "30 min late"
    },
    {
        crewName: "Crew Echo",
        driverName: "Amit Verma",
        conductorName: "Manoj Kumar",
        busNumber: "DTC 509",
        route: "Nehru Place -> Vasant Kunj",
        workingTime: "12:00 PM - 8:00 PM",
        location: "Nehru Place",
        shiftBreak: "3:00 PM - 4:00 PM",
        status: "Early",
        timeDeviation: "15 min early"
    },
    {
        crewName: "Crew Foxtrot",
        driverName: "Pooja Nair",
        conductorName: "Sakshi Jain",
        busNumber: "DTC 612",
        route: "AIIMS -> Vasant Vihar",
        workingTime: "6:00 AM - 2:00 PM",
        location: "Vasant Vihar",
        shiftBreak: "10:00 AM - 11:00 AM",
        status: "On Time",
        timeDeviation: "On Time"
    },
    {
        crewName: "Crew Golf",
        driverName: "Nikhil Das",
        conductorName: "Suresh Yadav",
        busNumber: "DTC 723",
        route: "CP -> Gurgaon",
        workingTime: "9:30 AM - 5:30 PM",
        location: "Gurgaon",
        shiftBreak: "1:30 PM - 2:30 PM",
        status: "Delayed",
        timeDeviation: "1 hour late"
    },
    {
        crewName: "Crew Hotel",
        driverName: "Priya Kapoor",
        conductorName: "Rajeev Sharma",
        busNumber: "DTC 825",
        route: "Janakpuri -> Dwarka",
        workingTime: "11:00 AM - 7:00 PM",
        location: "Janakpuri",
        shiftBreak: "4:00 PM - 5:00 PM",
        status: "On Time",
        timeDeviation: "On Time"
    },
    {
        crewName: "Crew India",
        driverName: "Arun Kumar",
        conductorName: "Vikas Malhotra",
        busNumber: "DTC 935",
        route: "Sarojini Nagar -> AIIMS",
        workingTime: "7:30 AM - 3:30 PM",
        location: "Sarojini Nagar",
        shiftBreak: "12:00 PM - 1:00 PM",
        status: "On Time",
        timeDeviation: "On Time"
    },
    {
        crewName: "Crew Juliet",
        driverName: "Rajesh Gupta",
        conductorName: "Mohit Singh",
        busNumber: "DTC 1023",
        route: "Rajiv Chowk -> CP",
        workingTime: "9:00 AM - 5:00 PM",
        location: "Rajiv Chowk",
        shiftBreak: "1:00 PM - 2:00 PM",
        status: "Delayed",
        timeDeviation: "20 min late"
    }
];

let currentIndex = 0;

function displayBusCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";  // Clear previous content

    // Display two bus cards at a time
    const busesToShow = busData.slice(currentIndex, currentIndex + 6);

    busesToShow.forEach(bus => {
        const cardHTML = `
            <div class="card">
                <div class="top-row">
                    <div class="top-left">${bus.busNumber}</div>
                    <div class="top-middle">${bus.route}</div>
                    <div class="top-right status ${bus.status === 'On Time' ? 'on-time' : (bus.status === 'Delayed' ? 'delayed' : 'early')}">
                        ${bus.status}
                    </div>
                </div>
                <div class="divider"></div>
                <div class="middle-row">
                    <div class="middle-left">Driver: ${bus.driverName}</div>
                    <div class="middle-right">Conductor: ${bus.conductorName}</div>
                </div>
                <div class="middle-row">
                    <div class="bottom-left">Location: ${bus.location}</div>
                    <div class="bottom-right">Break: ${bus.shiftBreak}</div>
                </div>
                <div class="bottom-centre">Working Hours: ${bus.workingTime}</div>
            </div>
        `;
        cardContainer.innerHTML += cardHTML;
    });

    // Update the index for the next set of buses
    currentIndex = (currentIndex + 6) % busData.length;
}

// Display new bus cards every 15 seconds
setInterval(displayBusCards, 15000);

// Initial display
displayBusCards();



*/