// check for Geolocation support
if (navigator.geolocation) {
    console.log('Geolocation is supported!');
} else {
    console.log('Geolocation is not supported for this Browser/OS.');
}

let btnLokasi = document.getElementById('akses-lokasi');
btnLokasi.addEventListener("click", function (e) {
    aksesLokasi();
    e.preventDefault()
})

function aksesLokasi() {
    var startPos;
    var geoSuccess = function (position) {
        startPos = position;
        // map(startPos.coords.latitude, startPos.coords.longitude)
        let lat = startPos.coords.latitude
        let long = startPos.coords.longitude
        convertLatLong(lat, long)
    };
    navigator.geolocation.getCurrentPosition(geoSuccess);
}

function convertLatLong(lat, long) {
    fetch(`https://us1.locationiq.com/v1/reverse.php?key=865ff2067383c0&lat=${lat}&lon=${long}&format=json`)
        .then(res => {
            return res.json();
        })
        .then(resJson => {
            let cek = resJson.address.state_district
            let kota = ""
            if (cek == undefined) {
                kota = resJson.address.city
            }
            const hasil = dataCovidKota.filter(data => new RegExp(kota).test(data.properties.KAB_KOTA))

            let result = ""
            hasil.map(data => {
                result = `
                <h3 class="text-center">${data.properties.KAB_KOTA}</h3>
                        <div class="info">
                            <div class="row">
                                <div class="col col-10 offset-1">
                                    <h5 class="text-left">Total Konfirmasi : <span>${data.properties.POSITIF}</span></h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-10 offset-1">
                                    <h5 class="text-left">Sembuh : <span>${data.properties.SEMBUH}</span></h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-10 offset-1">
                                    <h5 class="text-left">Meninggal : <span>${data.properties.MENINGGAL}</span></h5>
                                </div>
                            </div>
                        </div>
                `
                saveData(data.properties)
            })

            let spinner = `
            <div class="text-center" id="spinner">
                    <div class="spinner-border text-info" role="status"
                                style="width: 50px; height: 50px; margin-bottom: 20px;">
                                <span class="sr-only">Loading...</span>
                     </div>
            </div>
            `



            document.querySelector('.info-kota').innerHTML = spinner

            setTimeout(() => {
                document.querySelector('#spinner').style.display = "none";
                document.querySelector('.info-kota').innerHTML = result;
                document.querySelector('.himbau').style.display = "block";
            }, 5000);



        })
}