function toggleNav(width) {
    document.getElementById("sideMenu").style.width = width + "px";
}

function goToLocation() {
    const waste = document.getElementById("wasteSelect").value;
    if (waste) {
        alert("Analyzing pickup zones for " + waste + "...");
        window.location.href = "services.html"; // Takes them to the next page
    } else {
        alert("Please select a waste category first.");
    }
}
