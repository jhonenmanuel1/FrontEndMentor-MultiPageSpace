import styles from  '../styles/planetcardinfo.module.css'
export default function PlanetCardInfo() {
  return (
    <section section className={styles.planetCardInfoContainer}>
      <div >
        <div className="planetCardHeader">
          <ul>
            <li>Moom</li>
            <li>Mars</li>
            <li>Europa</li>
            <li>Titan</li>
          </ul>
        </div>
        <div className="planetCardTitle">
          <h1> MOON</h1>
        </div>
        <p>
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </p>
        <hr></hr>
        <div className="planetCardFooter">
          <div>
            <div className="Mini Targets"></div>
          </div>
          <h5>AVG. DISTANCE</h5>
          <h4>225 MIL.</h4>
        </div>
        <div className="planetCardFooter">
          <div>
            <div className="Mini Targets"></div>
          </div>
          <h5>AVG. DISTANCE</h5>
          <h4>225 MIL.</h4>
        </div>
      </div>
    </section>
  );
}
