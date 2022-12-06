import Papa from "papaparse";
import { conversionToLengthAndWidth } from "./conversionToLengthAndWidth";
import { useState, useEffect } from "react";
import { weather } from "./weather";
import { CSVLink } from "react-csv";
export function Files() {
  const [newCsv, setNewCsv] = useState([]);
  const [show, setShow] = useState(false);

  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        results.data.map((item) => {
          conversionToLengthAndWidth(item.city).then((response) => {
            weather(response.data[0].lat, response.data[0].lon)
              .then((response) => {
                console.log(response.data);
                item.temp = response.data.main.temp.toString();
                item.wind_speed = response.data.wind.speed.toString();
                item.clouds = response.data.clouds.all.toString();
                setNewCsv((pre) => [...pre, item]);
              })
              .then(() => setShow(true));
          });
        });
      },
    });
  };
  return (
    <div>
      <form>
        <label>
          <input type="file" accept=".csv" onChange={changeHandler} />
        </label>
      </form>
      {show && (
        <CSVLink data={newCsv} target="_blank">
          Download an updated csv file
        </CSVLink>
      )}
    </div>
  );
}
