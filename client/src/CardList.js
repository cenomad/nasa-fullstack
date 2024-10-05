import "./style.css"
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
const CardList = (props) => {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        fetch("/data" + props.query)
            .then((res) => res.json())
            .then((data) => setApiData(data));
    }, [props.query]);
    return (
        <div className="row justify-content-center">
            <div className="col-xl-8">
                {apiData.hasOwnProperty("err")
                    ? <p>{apiData.err}</p>
                    : <div>{apiData.map((apod) => (
                        <div className="card mb-4" key={apod.id}>
                            {apod.media_type === "image"
                                ? <img className="card-img-top" src={apod.url} alt={apod.title} />
                                : <div className="embed-responsive embed-responsive-16by9 text-center">
                                    <iframe title={apod.title} className="embed-responsive-item w-100 video-style" src={apod.url} allowfullscreen></iframe>
                                </div>
                            }
                            <div className="card-body">
                                <h3 className="card-title">{apod.title}</h3>
                                <p className="card-subtitle text-muted mb-3">Copyright: <b>{apod.copyright}</b><br /> Date: <b>{new Date(apod.date).toDateString()}</b></p>
                                <p className="card-text">{apod.explanation}</p>
                            </div>
                        </div>
                    ))}
                    </div>}
            </div>
        </div>
    );
}

export default CardList;