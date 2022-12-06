// import { Link } from "react-router-dom";
import { useState } from "react";
import SelectSlots from "./selectSlots";
const Booking = () => {
  const [stage, setStage] = useState(1);
  const [data, setData] = useState({
    owner: "",
    types: "",
    licensePlate: "",
    dateAndTime: "",
    slotsTime: ""
  });
  const handleInput = (e) => {
    console.log(e.target.value);
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const NextButton = () => {
    setStage(2);
    localStorage.setItem("details", JSON.stringify(data));
  };
  // console.log(data);
  if (stage === 2) {
    return (
      <SelectSlots back={() => setStage(1)} setData={setData} data={data} />
    );
  }
  return (
    <>
      <div className="d-flex justify-content-center mt-4 mb-4 ">
        <form className="w-50 card p-4 shadow">
          <div className="">
            <div className="mb-3 ">
              <label for="exampleInputEmail1" className="form-label">
                Owner
              </label>
              <input
                value={data.owner}
                name="owner"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleInput}
              />
            </div>
            <div className="mb-3 ">
              <label for="exampleInputEmail1" className="form-label">
                Vehicles type
              </label>
              <select
                className="w-100 h-100"
                name="types"
                onChange={handleInput}
              >
                <option>select Vehicles</option>
                <option value="car">car</option>
                <option value="bike">bike</option>
              </select>
              {/* <input
                value={data.carORbike}
                name="carORbike"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleInput}
              /> */}
            </div>
            <div className="mb-3 ">
              <label for="exampleInputEmail1" className="form-label">
                License Plate
              </label>
              <input
                value={data.licensePlate}
                name="licensePlate"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleInput}
              />
            </div>
            <div className="mb-3 ">
              <label for="exampleInputEmail1" className="form-label">
                Entry Date & Time
              </label>
              <input
                value={data.dateAndTime}
                name="dateAndTime"
                type="datetime-local"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleInput}
              />
            </div>
            <div className="mb-3 ">
              <label for="exampleInputEmail1" className="form-label">
                Slots time
              </label>
              <select
                className="w-100 h-100"
                name="slotsTime"
                onChange={handleInput}
              >
                <option>select time</option>
                <option value="3hr">3hr</option>
                <option value="6hr">6hr</option>
                <option value="12hr">12hr</option>
              </select>
            </div>
            <div className="d-flex justify-content-end">
              <button
                onClick={NextButton}
                type="submit"
                className="btn btn-primary"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Booking;
