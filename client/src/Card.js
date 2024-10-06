import "./style.css"
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const explanationCharacterLimit = 300
const Card = (props) => {
    const explanation = props.data.explanation
    const [showEntireExplanation, setShowEntireExplanation] = useState(false)

    const changeFlag = () => {
        setShowEntireExplanation(!showEntireExplanation)
    }

    const showFullscreenImage = () => {
        props.showFullscreenImage()
        props.changeSelectedImage({
            url: props.data.url,
            title: props.data.title
        })
    }


    return (
        <div className="col-lg-6 pb-4">
            <div className="card bg-light h-100">
                {props.data.media_type === "image"
                    ? <img className="card-img-top media-height clickable-img"
                        src={props.data.url} alt={props.data.title}
                        onClick={showFullscreenImage} />
                    : <div className="embed-responsive embed-responsive-16by9 text-center">
                        <iframe title={props.data.title} className="embed-responsive-item w-100 media-height" src={props.data.url} allowfullscreen></iframe>
                    </div>
                }
                <div className="card-body">
                    <h3 className="card-title">{props.data.title}</h3>
                    {props.data.copyright
                        ? <p className="card-subtitle text-muted mb-3">Copyright: <b>{props.data.copyright}</b><br /> Date: <b>{new Date(props.data.date).toDateString()}</b></p>
                        : <p>Date: <b>{new Date(props.data.date).toDateString()}</b></p>
                    }

                    <p className="card-text">
                        {showEntireExplanation ? explanation : explanation.slice(0, explanationCharacterLimit + 1)}
                        <b className="card-link text-muted clickable-text" onClick={changeFlag}> <nobr>{showEntireExplanation ? "...Read less" : "...Read more"}</nobr></b></p>

                </div>
            </div>
        </div>
    );
}

export default Card;