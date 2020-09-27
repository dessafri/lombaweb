let dbPromised = idb.open("INN", 1, function (upgradeDb) {
    let dataCovidDB = upgradeDb.createObjectStore("dataCovid", {
        keyPath: "FID"
    });
    dataCovidDB.createIndex("KAB_KOTA", "KAB_KOTA", {
        unique: false
    });
});

function saveData(data) {
    console.log(data)
    dbPromised.then(function (db) {
        let tx = db.transaction("dataCovid", "readwrite");
        let store = tx.objectStore("dataCovid")
        store.put(data)
        return tx.complete;
    })
}

function getDataCovid() {
    return new Promise(function (resolve, reject) {
        dbPromised.then(function (db) {
            let tx = db.transaction('dataCovid', 'readonly');
            let store = tx.objectStore('dataCovid');
            return store.getAll();
        }).then(function (items) {
            resolve(items)

        })
    });
}