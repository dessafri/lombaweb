const getApi = () => {
    fetch(`https://opendata.arcgis.com/datasets/59259cbc7e774e0db2ab1bcb072b5e0c_0.geojson`)
        .then(res => {
            return res.json()
        })
        .then(function result(data) {
            let rs = data.features
            dataCovidPerkota(rs)
        })
    fetch(`https://indonesia-covid-19.mathdro.id/api/provinsi`)
        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            dataCovidProvinsi(data.data)
        })
}
getApi()

let dataCovidKota = []

function dataCovidPerkota(data) {
    dataCovidKota = data
}

function dataCovidProvinsi(data) {
    let datacovid = data[1]
    $('#data-covid').html(
        `<div class="data positif">
            <h1 class="text-center">Total Konfirmasi</h1>
            <h3 class="text-center">${datacovid.kasusPosi}</h3>
        </div>
        <div class="data sembuh">
            <h1 class="text-center">Sembuh</h1>
            <h3 class="text-center">${datacovid.kasusSemb}</h3>
        </div>
        <div class="data meninggal">
            <h1 class="text-center">Meninggal</h1>
            <h3 class="text-center">${datacovid.kasusMeni}</h3>
        </div>`
    )
}