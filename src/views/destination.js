import PlanetCardInfo from "../atoms/PlanetCardInfo";

export default function Destination() {
  return (
    <>
      <div className="destinationContainer">
        <div className="planetCard">
          <div className="titlePlanet"></div>
          <div className="planetCardImage"></div>
        </div>
        <div>
            <PlanetCardInfo/>
        </div>
      </div>
    </>
  );
}
