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
    map(data)
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

function map(data) {
    let tokenApi = 'pk.eyJ1IjoiZGVzc2FmcmkiLCJhIjoiY2tmaTF1Z21jMHFidTJ4czJhMHY4MHZsYiJ9.pktuhaGfhaSlUHxHPIGfyQ'
    mapboxgl.accessToken = tokenApi;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11'
    });

    const getColorInfected = color => {
        if (color == "RISIKO SEDANG") {
            return "orange"
        } else if (color == "RISIKO TINGGI") {
            return "red"
        } else {
            return "green"
        }
    }

    let mapCovid0 = []
    let mapCovid1 = []
    let mapCovid2 = []
    let mapCovid3 = []
    let mapCovid4 = []
    let mapCovid5 = []
    let mapCovid6 = []
    let mapCovid7 = []
    let mapCovid8 = []
    let mapCovid9 = []
    let mapCovid10 = []
    let mapCovid11 = []
    let mapCovid12 = []
    let mapCovid13 = []
    let mapCovid14 = []
    let mapCovid15 = []
    let mapCovid16 = []
    let mapCovid17 = []
    let mapCovid18 = []
    let mapCovid19 = []
    let mapCovid20 = []
    let mapCovid21 = []
    let mapCovid22 = []
    let mapCovid23 = []
    let mapCovid24 = []
    mapCovid0 = data[0].geometry.coordinates[0][0];
    mapCovid1 = data[1].geometry.coordinates[0][0][0];
    mapCovid2 = data[2].geometry.coordinates[0][0];
    mapCovid3 = data[3].geometry.coordinates[0][0][8];
    mapCovid4 = data[4].geometry.coordinates[0][0];
    mapCovid5 = data[5].geometry.coordinates[0][0];
    mapCovid6 = data[6].geometry.coordinates[0][0][0];
    mapCovid7 = data[7].geometry.coordinates[0][0][8];
    mapCovid8 = data[8].geometry.coordinates[0][0];
    mapCovid9 = data[9].geometry.coordinates[0][0];
    mapCovid10 = data[10].geometry.coordinates[0][0];
    mapCovid11 = data[11].geometry.coordinates[0][0];
    mapCovid12 = data[12].geometry.coordinates[0][0][0];
    mapCovid13 = data[13].geometry.coordinates[0][0];
    mapCovid14 = data[14].geometry.coordinates[0][0];
    mapCovid15 = data[15].geometry.coordinates[0][0];
    mapCovid16 = data[16].geometry.coordinates[0][0][0];
    mapCovid17 = data[17].geometry.coordinates[0][0][0];
    mapCovid18 = data[18].geometry.coordinates[0][0][0];
    mapCovid19 = data[19].geometry.coordinates[0][0];
    mapCovid20 = data[20].geometry.coordinates[0][0];
    mapCovid21 = data[21].geometry.coordinates[0][0][0];
    mapCovid22 = data[22].geometry.coordinates[0][0];
    mapCovid23 = data[23].geometry.coordinates[0][0];
    mapCovid24 = data[24].geometry.coordinates[0][0];
    mapCovid25 = data[25].geometry.coordinates[0][0][0];
    mapCovid26 = data[26].geometry.coordinates[0][0][0];
    mapCovid27 = data[27].geometry.coordinates[0][0];
    mapCovid28 = data[28].geometry.coordinates[0][0];
    mapCovid29 = data[29].geometry.coordinates[0][0][0];
    mapCovid30 = data[30].geometry.coordinates[0][0][0];
    mapCovid31 = data[31].geometry.coordinates[0][0];
    mapCovid32 = data[32].geometry.coordinates[0][0];
    mapCovid33 = data[33].geometry.coordinates[0][0][0];
    mapCovid34 = data[34].geometry.coordinates[0][0][0];
    mapCovid35 = data[35].geometry.coordinates[0][0][0];
    mapCovid36 = data[36].geometry.coordinates[0][0][0];
    mapCovid37 = data[37].geometry.coordinates[0][0][0];

    new mapboxgl.Marker({
            color: getColorInfected(data[0].properties.Resiko)
        })
        .setLngLat([mapCovid0[0], mapCovid0[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[0].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[0].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[0].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[0].properties.MENINGGAL}</span></h5>
        <h5><span>${data[0].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[1].properties.Resiko)
        })
        .setLngLat([mapCovid1[0], mapCovid1[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[1].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[1].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[1].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[1].properties.MENINGGAL}</span></h5>
        <h5><span>${data[1].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[2].properties.Resiko)
        })
        .setLngLat([mapCovid2[0], mapCovid2[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[2].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[2].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[2].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[2].properties.MENINGGAL}</span></h5>
        <h5><span>${data[2].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[3].properties.Resiko)
        })
        .setLngLat([mapCovid3[0], mapCovid3[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[3].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[3].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[3].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[3].properties.MENINGGAL}</span></h5>
        <h5><span>${data[3].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[4].properties.Resiko)
        })
        .setLngLat([mapCovid4[0], mapCovid4[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[4].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[4].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[4].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[4].properties.MENINGGAL}</span></h5>
        <h5><span>${data[4].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[5].properties.Resiko)
        })
        .setLngLat([mapCovid5[0], mapCovid5[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[5].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[5].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[5].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[5].properties.MENINGGAL}</span></h5>
        <h5><span>${data[5].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[6].properties.Resiko)
        })
        .setLngLat([mapCovid6[0], mapCovid6[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[6].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[6].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[6].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[6].properties.MENINGGAL}</span></h5>
        <h5><span>${data[6].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[7].properties.Resiko)
        })
        .setLngLat([mapCovid7[0], mapCovid7[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[7].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[7].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[7].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[7].properties.MENINGGAL}</span></h5>
        <h5><span>${data[7].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[8].properties.Resiko)
        })
        .setLngLat([mapCovid8[0], mapCovid8[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[8].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[8].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[8].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[8].properties.MENINGGAL}</span></h5>
        <h5><span>${data[8].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[9].properties.Resiko)
        })
        .setLngLat([mapCovid9[0], mapCovid9[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[9].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[9].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[9].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[9].properties.MENINGGAL}</span></h5>
        <h5><span>${data[9].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[10].properties.Resiko)
        })
        .setLngLat([mapCovid10[0], mapCovid10[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[10].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[10].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[10].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[10].properties.MENINGGAL}</span></h5>
        <h5><span>${data[10].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[11].properties.Resiko)
        })
        .setLngLat([mapCovid11[0], mapCovid11[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[11].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[11].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[11].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[11].properties.MENINGGAL}</span></h5>
        <h5><span>${data[11].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[12].properties.Resiko)
        })
        .setLngLat([mapCovid12[0], mapCovid12[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[12].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[12].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[12].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[12].properties.MENINGGAL}</span></h5>
        <h5><span>${data[12].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[13].properties.Resiko)
        })
        .setLngLat([mapCovid13[0], mapCovid13[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[13].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[13].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[13].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[13].properties.MENINGGAL}</span></h5>
        <h5><span>${data[13].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[14].properties.Resiko)
        })
        .setLngLat([mapCovid14[0], mapCovid14[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[14].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[14].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[14].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[14].properties.MENINGGAL}</span></h5>
        <h5><span>${data[14].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[15].properties.Resiko)
        })
        .setLngLat([mapCovid15[0], mapCovid15[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[15].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[15].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[15].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[15].properties.MENINGGAL}</span></h5>
        <h5><span>${data[15].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[16].properties.Resiko)
        })
        .setLngLat([mapCovid16[0], mapCovid16[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[16].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[16].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[16].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[16].properties.MENINGGAL}</span></h5>
        <h5><span>${data[16].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[17].properties.Resiko)
        })
        .setLngLat([mapCovid17[0], mapCovid17[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[17].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[17].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[17].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[17].properties.MENINGGAL}</span></h5>
        <h5><span>${data[17].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[18].properties.Resiko)
        })
        .setLngLat([mapCovid18[0], mapCovid18[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[18].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[18].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[18].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[18].properties.MENINGGAL}</span></h5>
        <h5><span>${data[18].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[19].properties.Resiko)
        })
        .setLngLat([mapCovid19[0], mapCovid19[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[19].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[19].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[19].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[19].properties.MENINGGAL}</span></h5>
        <h5><span>${data[19].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[20].properties.Resiko)
        })
        .setLngLat([mapCovid20[0], mapCovid20[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[20].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[20].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[20].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[20].properties.MENINGGAL}</span></h5>
        <h5><span>${data[20].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[21].properties.Resiko)
        })
        .setLngLat([mapCovid21[0], mapCovid21[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[21].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[21].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[21].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[21].properties.MENINGGAL}</span></h5>
        <h5><span>${data[21].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[22].properties.Resiko)
        })
        .setLngLat([mapCovid22[0], mapCovid22[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[22].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[22].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[22].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[22].properties.MENINGGAL}</span></h5>
        <h5><span>${data[22].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[23].properties.Resiko)
        })
        .setLngLat([mapCovid23[0], mapCovid23[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[23].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[23].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[23].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[23].properties.MENINGGAL}</span></h5>
        <h5><span>${data[23].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[24].properties.Resiko)
        })
        .setLngLat([mapCovid24[0], mapCovid24[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[24].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[24].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[24].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[24].properties.MENINGGAL}</span></h5>
        <h5><span>${data[24].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[25].properties.Resiko)
        })
        .setLngLat([mapCovid25[0], mapCovid25[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[25].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[25].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[25].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[25].properties.MENINGGAL}</span></h5>
        <h5><span>${data[25].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[26].properties.Resiko)
        })
        .setLngLat([mapCovid26[0], mapCovid26[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[26].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[26].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[26].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[26].properties.MENINGGAL}</span></h5>
        <h5><span>${data[26].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[27].properties.Resiko)
        })
        .setLngLat([mapCovid27[0], mapCovid27[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[27].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[27].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[27].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[27].properties.MENINGGAL}</span></h5>
        <h5><span>${data[27].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[28].properties.Resiko)
        })
        .setLngLat([mapCovid28[0], mapCovid28[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[28].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[28].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[28].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[28].properties.MENINGGAL}</span></h5>
        <h5><span>${data[28].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[29].properties.Resiko)
        })
        .setLngLat([mapCovid29[0], mapCovid29[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[29].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[29].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[29].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[29].properties.MENINGGAL}</span></h5>
        <h5><span>${data[29].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[30].properties.Resiko)
        })
        .setLngLat([mapCovid30[0], mapCovid30[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[30].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[30].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[30].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[30].properties.MENINGGAL}</span></h5>
        <h5><span>${data[30].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[31].properties.Resiko)
        })
        .setLngLat([mapCovid31[0], mapCovid31[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[31].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[31].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[31].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[31].properties.MENINGGAL}</span></h5>
        <h5><span>${data[31].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[32].properties.Resiko)
        })
        .setLngLat([mapCovid32[0], mapCovid32[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[32].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[32].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[32].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[32].properties.MENINGGAL}</span></h5>
        <h5><span>${data[32].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[33].properties.Resiko)
        })
        .setLngLat([mapCovid33[0], mapCovid33[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[33].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[33].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[33].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[33].properties.MENINGGAL}</span></h5>
        <h5><span>${data[33].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[34].properties.Resiko)
        })
        .setLngLat([mapCovid34[0], mapCovid34[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[34].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[34].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[34].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[34].properties.MENINGGAL}</span></h5>
        <h5><span>${data[34].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[35].properties.Resiko)
        })
        .setLngLat([mapCovid35[0], mapCovid35[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[35].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[35].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[35].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[35].properties.MENINGGAL}</span></h5>
        <h5><span>${data[35].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[36].properties.Resiko)
        })
        .setLngLat([mapCovid36[0], mapCovid36[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[36].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[36].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[36].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[36].properties.MENINGGAL}</span></h5>
        <h5><span>${data[36].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    new mapboxgl.Marker({
            color: getColorInfected(data[37].properties.Resiko)
        })
        .setLngLat([mapCovid37[0], mapCovid37[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`
        <h3>${data[37].properties.KAB_KOTA}</h3>
        <h5>Positif : <span>${data[37].properties.POSITIF}</span></h5>
        <h5>Sembuh : <span>${data[37].properties.SEMBUH}</span></h5>
        <h5>Meninggal : <span>${data[37].properties.MENINGGAL}</span></h5>
        <h5><span>${data[37].properties.Resiko}</span></h5>
        `))
        .addTo(map);
    map.setCenter([-74, 50]);
    map.zoomTo(1);
    // Zoom to the zoom level 8 with an animated transition
    map.zoomTo(7.2, {
        duration: 2000,
        offset: [-248, 17]
    });

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