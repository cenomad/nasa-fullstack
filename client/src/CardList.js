import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import Card from "./Card.js";

const serverURL = process.env.REACT_APP_SERVER_URL || "http://localhost:5000"
const CardList = (props) => {
    const [apiData, setApiData] = useState([]);

    // Fetch data from server
    useEffect(() => {
        fetch(serverURL + "/data" + props.query)
            .then((res) => res.json())
            .then((data) => setApiData(data))
            .catch(err => setApiData({ "err": "Could not connect to backend server" }));
    }, [props.query]);

    return (
        <div className="row justify-content-center">
            <div className="col-xl-8">
                {apiData.hasOwnProperty("err")
                    ? <p>{apiData.err}</p>
                    : <div>{apiData.map((apod) => (
                        <Card data={apod} key={apod.id} />
                    ))}
                    </div>}
            </div>
        </div>
    );
}

export default CardList;