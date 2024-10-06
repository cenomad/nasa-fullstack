import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CardList from './CardList';
import FilterTabs from './FilterTabs';
import FullScreenImage from "./FullScreenImage"

const serverURL = process.env.REACT_APP_SERVER_URL || "http://localhost:5000"
export default function App() {
  const [query, setQuery] = useState("")
  const queryFromFilter = (data) => {
    setQuery(data)
  }

  const [apiData, setApiData] = useState([]);
  // Fetch data from server
  useEffect(() => {
    fetch(serverURL + "/data" + query)
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch(err => setApiData({ "err": "Could not connect to backend server" }));
  }, [query]);

  const [displayImage, setDisplayImage] = useState("d-none")
  const fullscreenImageDisplay = (value) => {
    setDisplayImage(value)
  }

  const [selectedImage, setSelectedImage] = useState({})
  const changeSelectedImage = (data) => {
    setSelectedImage(data)
  }

  return (

    <div className="container-fluid pt-5">

      <FilterTabs setter={queryFromFilter} />
      <CardList
        apiData={apiData}
        displaySetter={fullscreenImageDisplay}
        changeSelectedImage={changeSelectedImage}
      />
        <FullScreenImage
          displaySetter={fullscreenImageDisplay}
          displayImage={displayImage}
          url={selectedImage.url}
          title={selectedImage.title}
        />
    </div>


  );
};