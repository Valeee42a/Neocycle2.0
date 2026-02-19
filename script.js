function toggleNav(width) {
    document.getElementById("sideMenu").style.width = width + "px";
}

function handleStart() {
    const waste = document.getElementById("wasteSelect").value;
    alert("Initiating Food Waste pickup protocol for Johor Bahru Central...");
    window.location.href = "services.html";
}
