import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AirQualityData from "./AirQualityData";

const axios = require("axios");

export default function AirQualityDataColumn(props) {
  const city = props.city;

  let cityName = useSelector((state) => {
    if (city === "cityA") {
      return state.cities.cityA;
    } else {
      return state.cities.cityB;
    }
  });

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // call axios to the aq api
    // Chicago is a city, but Hoboken is not a city
    if (cityName && cityName !== "") {
      getCityAirQualityData();
    }

    return () => {
      source.cancel("Cancel API Request due to new input from user");
    };
  }, [cityName]);

  async function getCityAirQualityData() {
    let urlEncodedCity = escape(cityName);
    let cityApiUrl = `https://docs.openaq.org/v2/measurements?limit=1&page=1&offset=0&sort=desc&radius=1000&city=${urlEncodedCity}&order_by=datetime`;
    setLoading(true);
    setError({});

    try {
      const response = await axios.get(cityApiUrl, {
        cancelToken: source.token
      });
      console.log(response);
      if (response.data.results.length > 0) {
        setData(response.data.results[0]);
      } else {
        setError({ errorMessage: "Could not find results for your query" });
      }
    } catch (error) {
      console.error(error);
      setError({ errorMessage: error });
    }
    setLoading(false);
  }

  return (
    <div>
      <AirQualityData data={data} error={error} loading={loading} />
    </div>
  );
}
