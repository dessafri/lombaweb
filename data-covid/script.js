fetch(`https://opendata.arcgis.com/datasets/59259cbc7e774e0db2ab1bcb072b5e0c_0.geojson`)
    .then(res => {
        return res.json()
    })
    .then(function result(data) {
        let rs = data.features
        dataCovidperKota(rs)
    })


let dataKota = []

function dataCovidperKota(data) {
    dataKota = data
    let result = ""
    let number = 1
    dataKota.forEach(data => {
        result += `
        <tr>
            <th scope="row">${number}</th>
            <td>${data.properties.KAB_KOTA}</td>
            <td>${data.properties.POSITIF}</td>
            <td>${data.properties.SEMBUH}</td>
            <td>${data.properties.MENINGGAL}</td>
            <td>${data.properties.Resiko}</td>
        </tr>
        `
        number++
    })

    document.getElementById("datacovidperkota").innerHTML = result
    $('#tabelcovid').DataTable();

}

$('#datalengkapcovid').on('click', function (e) {

    let tujuan = $(this).attr('href')
    let elementujuan = $(tujuan)

    $('html, body').animate({
        scrollTop: elementujuan.offset().top - 120
    }, 1500, 'easeInOutExpo');
    e.preventDefault();
})

$(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > 350) {
        $('.btn-pulse').css({
            "opacity": "1"
        })
    }
    if (scroll < 350) {
        $('.btn-pulse').css({
            "opacity": "0"
        })
    }
});
$('.scroll').on('click', function (e) {
    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1500, 'easeInOutExpo');

    e.preventDefault();
})