const express = require('express')
const app = express()

const dotenv = require('dotenv').config();
apiKey = process.env.API_KEY
const baseApiUrl = "https://api.nasa.gov/planetary/apod"
var fullURL = ""

let id = 1

app.get("/", (req, res) => {
    res.status(500).send({ "err": "api data not here" })
})

app.get("/data", (req, res) => {
    // Get API_KEY value and construct url
    if (typeof apiKey === "undefined") {
        res.status(500).send({ "err": "you need an API_KEY to fetch data" })
    } else {
        fullURL = baseApiUrl + "?api_key=" + apiKey
    }

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
            res.status(500).send({ "err": data.error.message })
        } else if (data.hasOwnProperty("msg")) {
            res.status(500).send({ "err": data.msg })
        } else if (data.hasOwnProperty("date")) {
            addToList(data, finalData)
            res.status(200).send({finalData})
        } else {
            for (let i = 0; i < data.length; i++) {
                addToList(data[i], finalData)
            }
            res.status(200).send({finalData})
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
module.exports = app