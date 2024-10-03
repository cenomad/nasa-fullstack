const express = require('express')
const app = express()

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const baseApiUrl = "https://api.nasa.gov/planetary/apod"
var fullURL = ""
var key = ""

const fs = require("fs")
if (fs.existsSync('apiKey.txt')) {
    fs.readFile("apiKey.txt", { encoding: "utf8" }, (err, data) => {
        if (err) {
            console.log(err)
        }
        key = data
    })
} else {
    readline.question("apiKey.txt file is missing. If you have a NASA api key, please paste it here: ", apiKey => {
        key = apiKey
        readline.close()
    })
}


let id = 1

app.get("/data", (req, res) => {
    // Checking if the key was extracted from the apiKey file
    console.log("Checking apiKey file...")
    if (key == "") {
        res.status(500).json({ "err": "Something wrong with the file" })
        console.log("Key was not extracted. Something wrong with the file, possibly missing.")
    }

    // Constructing the api url using the api key
    console.log("Key ok!")
    fullURL = baseApiUrl + "?api_key=" + key
    console.log("URL being used: " + fullURL)

    // Checking for query parameters
    if (req.query.hasOwnProperty("date")) {
        fullURL += `&date=${req.query.date}`
    } else if (req.query.hasOwnProperty("start_date") && req.query.hasOwnProperty("end_date")) {
        fullURL += `&start_date=${req.query.start_date}&end_date=${req.query.end_date}`
    } else if (req.query.hasOwnProperty("count")) {
        fullURL += `&count=${req.query.count}`
    }
    // Fetching the data
    let getData = async () => {
        return fetch(fullURL)
            .then(response => response.json())
            .then(response => response)
            .catch(err => err);
    }
    (async () => {
        let data = await getData();
        const finalData = []

        if (data.hasOwnProperty("error")) {
            res.send({ "err": data.error.message })
        } else if (data.hasOwnProperty("msg")) {
            res.send({ "err": data.msg })
        } else if (data.hasOwnProperty("date")) {
            addToList(data, finalData)
            res.send(JSON.stringify(finalData))
        } else {
            for (let i = 0; i < data.length; i++) {
                addToList(data[i], finalData)
            }
            res.send(JSON.stringify(finalData))
        }
    })();

})

function addToList(apod, list) {
    list.push({
        id: id,
        date: apod.date,
        title: apod.title,
        explanation: apod.explanation,
        media_type: apod.media_type,
        url: apod.url,
        copyright: apod.copyright
    })
    id++
}

app.listen(5000)