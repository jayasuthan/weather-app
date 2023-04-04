import { useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";


function Weather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <label>Enter city name</label> <br />
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
      />
      <button onClick={fetchData}> search </button>
      <br />
      {loading ? (
        <FadeLoader color="#36d7b7" />
      ) : (
        <div>
          <h2>Min temperature :{data?.main?.temp_min}</h2>
          <h2>Max temperature :{data?.main?.temp_max}</h2>
          <h2> temperature : {data?.main?.temp} </h2>
          <h2> Humidity : {data?.main?.humidity} </h2>
          <h2> pressure : {data?.main?.pressure} </h2>
        </div>
      )}
    </>
  );
}

export default Weather;
