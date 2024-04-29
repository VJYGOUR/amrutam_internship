import styles from "./Header.module.css";
import Button from "./Button";
import img from "../image/desktop_header.jpg";
import Belowheader from "./Belowheader";

function Header() {
  return (
    <>
      <div
        className={`${styles.back} text-bwhite bg-right relative  bg-no-repeat`}
      >
        <img
          src={img}
          alt="img"
          className="hidden sm:block sm:absolute sm:w-[50%] sm:h-[36rem] sm:-z-10 sm:right-0"
        />
        <main className={` px-5 py-24 space-y-7 sm:ml-20 sm:max-w-2xl `}>
          <h2>Namaste,Welcome to Amrutam</h2>
          <h1>
            Step into Holistic Healing with Ayurveda Book Consulation With
            Certified Experts.
          </h1>
          <p>
            Dive into the world of ayurveda and experience personalized health
            solutions and holistic guidance from trusted ayurvedic doctors
            anytime,anywhere
          </p>
          <Button>book an appointment</Button>
        </main>
      </div>
      <Belowheader />
    </>
  );
}

export default Header;
