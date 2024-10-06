import "./style.css"
import 'bootstrap/dist/css/bootstrap.css';
const FullScreenImage = (props) => {

    const setDisplayNone = () => {
        props.displaySetter("d-none")
        console.log(props.url)
    }

    return (
        <div className={props.displayImage + " fullscreen-img-background text-center h-100"} onClick={setDisplayNone}>
            <img src={props.url} className="fullscreen-img" alt={props.title} />
        </div>
    );
}
 
export default FullScreenImage;