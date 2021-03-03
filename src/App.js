import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Picture from "./components/Picture";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  const [photoData, setphotoData] = useState([]);
  const apiKey = "bDAIvHhv2l3Ap0n4eXWU2doDHI3JkKQIYlZVTkkw";
  // const date = "&date=2012-03-14";
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((response) => {
        setphotoData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(photoData);
  // console.log(photoData.explanation);
  // console.log(photoData.hdurl);
  return (
    <div className="App">
      <Header header="Nasa's Astronomy Picture of the Day" />
      <Picture photo={photoData.hdurl} photoMedia={photoData.media_type} />
      <Body
        photoDate={photoData.date}
        photoTitle={photoData.title}
        photoExplanation={photoData.explanation}
      />
      <Footer
        nameDev="Jose Guevara"
        gitHub="https://github.com/JoseGuevara29"
        address="NASA Shuttle Landing Facility, Space Center, Orlando, FL 32815"
      />
    </div>
  );
}

export default App;
