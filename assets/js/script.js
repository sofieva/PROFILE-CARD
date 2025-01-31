function updateUTCTime() {
    const now = new Date();
    document.getElementById("utc-time").textContent = `UTC Time: ${now.toISOString().split("T")[1].split(".")[0]}`;
}
setInterval(updateUTCTime, 1000);
updateUTCTime();