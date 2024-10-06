const allowAccessControllHeaders = () => {
    return {
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
        'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    }
}

const  addToList = (apod, list, id) => {
    list.push({
        id: id,
        date: apod.date,
        title: apod.title,
        explanation: apod.explanation,
        media_type: apod.media_type,
        url: apod.url,
        copyright: apod.copyright
    })
}

module.exports = {
    allowAccessControllHeaders: allowAccessControllHeaders,
    addToList: addToList
}