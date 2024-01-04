// DOM Elements
const servicesCanvas = document.getElementById('servicesCanvas');

// Global Variables
let userLocation = { lat: 400, lng: 300 }; // Default user location


// Functions
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            // Call a function to display nearby services based on this location
            displayNearbyServices(userLocation);
        }, (error) => {
            console.error('Error getting user location:', error);
            // Handle errors related to geolocation access
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
        // Handle lack of geolocation support
    }
}

function displayNearbyServices(location) {
    // Use user location to fetch nearby services (you'll need to implement this logic)
    // Use Canvas API to draw the nearby services on the canvas
    // For example:
    const ctx = servicesCanvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(location.lat, location.lng, 10, 0, 2 * Math.PI);
    ctx.fill();

    // Draw nearby service locations (example: randomly positioned squares)
    ctx.fillStyle = 'green';
    for (let i = 0; i < 5; i++) {
        const randomX = Math.random() * servicesCanvas.width;
        const randomY = Math.random() * servicesCanvas.height;
        ctx.fillRect(randomX, randomY, 20, 20);
    }
}

// Event Listeners or Function Calls
getUserLocation(); // Call this to get user's location when the page loads
displayNearbyServices(userLocation); // Initially display nearby services (mock data)

