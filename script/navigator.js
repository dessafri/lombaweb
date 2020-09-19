// check for Geolocation support
if (navigator.geolocation) {
    console.log('Geolocation is supported!');
} else {
    console.log('Geolocation is not supported for this Browser/OS.');
}
// Periksa fitur Notification API
if ("Notification" in window) {} else {
    console.error("Browser tidak mendukung notifikasi.");
}

function requestPermission() {
    Notification.requestPermission().then(function (result) {
        if (result === "denied") {
            console.log("Fitur notifikasi tidak diijinkan.");
            return;
        } else if (result === "default") {
            console.error("Pengguna menutup kotak dialog permintaan ijin.");
            return;
        }
        console.log("Notifikasi diijinkan")
    });
}