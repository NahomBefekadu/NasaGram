import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Home.css";
import axios from "axios";
import Like from "../Like/Like";
import Globe from "../Globe/Globe";
import moment from "moment";

export default function Home() {
  const [startDate, setStartDate] = useState(new Date("2017/07/08"));
  const [endDate, setEndDate] = useState(new Date("2017/07/10"));
  const [isLoading, setIsLoading] = useState(false);

  var start = moment(startDate).format("YYYY-MM-DD");
  var end = moment(endDate).format("YYYY-MM-DD");
  console.log(start);
  console.log(end);
  const API_KEY = process.env.REACT_APP_NASA_KEY;
  const fetchurl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${start}&end_date=${end}`;

  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const request = await axios.get(fetchurl);
      setImages(request.data);
      setIsLoading(false);
      return request;
    }
    fetchData();
  }, [fetchurl]);

  return (
    <div className="Home">
      <div className="Home__Datepicker">
        <div className="Home__DatepickerStartDate">
          <span>Start Date</span>
          <DatePicker
            selected={startDate}
            strictParsing
            selectsStart
            startDate={startDate}
            endDate={endDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy/MM/dd"
          />
        </div>
        <div className="Home__DatepickerEndDate">
          <span>End Date</span>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="yyyy/MM/dd"
          />
        </div>
      </div>
      <div className="Home__Loader">{isLoading ? <Globe /> : null}</div>
      <div className="Home__grid">
        {images.map((image) => (
          <div className="Home__container">
            <img
              className="Home__nasaImg"
              src={`${image.url}`}
              alt={image.title}
            />
            <div className="Home__containerInformation">
              <h3>{image.title}</h3>
              <h4>{image.date}</h4>
              <div className="Home__containerBody">
                <details>
                  <p ALIGN="LEFT">{image.explanation}</p>
                </details>
              </div>
            </div>
            <div className="Home__containerFooter">
              <Like />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
//<img className="Home__nasaImg" src={`${images.url}`} alt={images.title} />
/*

        <div className="Home__container">
          <img
            className="Home__nasaImg"
            src={`${images.url}`}
            alt={images.title}
          />
          <div className="Home__containerInformation">
            <h2>{images.title}</h2>
            <h3>{images.date}</h3>
            <div className="Home__containerBody">
              <details>
                <p>{images.explanation}</p>
              </details>
            </div>
          </div>
          <div className="Home__containerFooter">
            <Like />
          </div>
        </div>

*/
