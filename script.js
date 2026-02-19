function toggleNav(width) {
    document.getElementById("sideMenu").style.width = width + "px";
}

function goToServices() {
    const waste = document.getElementById("wasteSelect").value;
    if (waste) {
        // This takes the user to the unique Services page
        window.location.href = "services.html";
    } else {
        alert("Please select a waste category first.");
    }
}
