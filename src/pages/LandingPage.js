import car from "../utils/car2.gif";
import "../styles.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="car1 d-flex justify-content-center mt-4 shadow align-items-center">
        <img src={car} alt="car" className="carWidth " />
        <p className="p-4  px-4 border shadow">
          Car parking is essential to car-based travel. <br />
          Cars are typically stationary around 95 per cent <br />
          of the time.[2] The availability and price of car parking supports{" "}
          <br />
          and subsidize car dependency.[3] Car parking uses <br />
          up a lot of urban land, especially in North America - as much as half{" "}
          <br />
          in many North American city centers.[4]
          <div className="mt-4 mb-4 d-flex justify-content-end">
            <Link to="/booking">
              <button className="btn btn-primary">Book Now &#128664;</button>
            </Link>
          </div>
        </p>
      </div>
    </>
  );
};

export default LandingPage;
