import "./Slide4.css";
import Rof from "../../Images/ROf Image 1.png";
import Rectangle from "../../Images/Rectangle 23.png";


// KUNAL AND PRANALI

const Slide4 = () => {
  return (
    <div>
      <img className="logo" src={Rof} alt="logo" />

      <h1>Thank you, you have been scheduled</h1>

      <img className="img" src={Rectangle} alt="clientImg" />

      <div className="text">
        <h2>
          You have been Assigned with <span>“Ashok Reddy”</span>{" "}
        </h2>

        <h3>kindly wait for few minutes you will be attended shortly.</h3>
      </div>
    </div>
  );
};

export default Slide4;
