import 'bootstrap/dist/css/bootstrap.css';
import Card from "./Card.js";

const CardList = (props) => {
    const showFullscreenImage = () => {
        props.displaySetter("")
    }
    const changeSelectedImage = (value) => {
        props.changeSelectedImage(value)
    }
    return (
        <div className="row justify-content-center">
            <div className="col-xl-8">
                {props.apiData.hasOwnProperty("err")
                    ? <p>{props.apiData.err}</p>
                    : <div className='row justify-content-around'>{props.apiData.map((apod) => (
                        <Card 
                        data={apod} 
                        key={apod.id} 
                        showFullscreenImage={showFullscreenImage}
                        changeSelectedImage={changeSelectedImage}
                        multipleApods={props.apiData.length > 1}
                        />
                    ))}
                    </div>}
            </div>
        </div>
    );
}

export default CardList;