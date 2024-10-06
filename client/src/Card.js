import "./style.css"
import 'bootstrap/dist/css/bootstrap.css';

const Card = (props) => {
    return (
        <div className="card mb-4">
            {props.data.media_type === "image"
                ? <img className="card-img-top" src={props.data.url} alt={props.data.title} />
                : <div className="embed-responsive embed-responsive-16by9 text-center">
                    <iframe title={props.data.title} className="embed-responsive-item w-100 video-style" src={props.data.url} allowfullscreen></iframe>
                </div>
            }
            <div className="card-body">
                <h3 className="card-title">{props.data.title}</h3>
                <p className="card-subtitle text-muted mb-3">Copyright: <b>{props.data.copyright}</b><br /> Date: <b>{new Date(props.data.date).toDateString()}</b></p>
                <p className="card-text">{props.data.explanation}</p>
            </div>
        </div>
    );
}

export default Card;