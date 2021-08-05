import "./styles.css";
import "./Components/AirQualityForm";

import TwoColumn from "./Components/TwoColumn";
import AirQualityForm from "./Components/AirQualityForm";
import AirQualityDataColumn from "./Components/AirQualityDataColumn";

export default function App() {
  return (
    <div className="App">
      <h2>Air Quality Assessment Tool</h2>
      <h3>Compare the air quality from two different cities</h3>

      <div className="centered">
        <AirQualityForm />

        <TwoColumn
          leftColumn={<AirQualityDataColumn city="cityA" />}
          rightColumn={<AirQualityDataColumn city="cityB" />}
        />
      </div>
    </div>
  );
}
