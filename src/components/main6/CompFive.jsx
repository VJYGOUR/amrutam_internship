import Heading from "../Heading";
import doctor from "../../image/doctor.png";
function CompFive() {
  const arr = [1, 2, 3];
  return (
    <main className="py-8">
      <Heading>Meet Our Ayurveda Experts</Heading>
      <div className="px-5 space-y-6  sm:flex sm:space-y-0 sm:gap-6 sm:w-[70%] sm:mx-auto">
        {arr.map((curr, i) => (
          <div
            className={`${
              i < 1 ? "" : "hidden "
            } text-center bg-bprimary space-y-6 rounded-xl overflow-hidden sm:block`}
            key={i}
          >
            <div className="relative">
              <img
                className="w-[7rem] h-[7rem] mx-auto rounded-full"
                src={doctor}
                alt="doctor"
              />
              <p className="absolute bottom-0 rounded-3xl left-[50%] translate-x-[-50%] bg-bdarkgray text-bwhite py-1 px-2 flex ">
                <span>4.5</span>
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.25 8.45H14.6625L12 0.125L9.3375 8.45H0.75L7.6875 13.5875L5.0625 21.875L12 16.7375L18.9375 21.875L16.275 13.55L23.25 8.45Z"
                    fill="#EEDE4D"
                  />
                </svg>
              </p>
            </div>
            <p className="font-bold">Dr. Vaishali sharma</p>
            <p>Ayurveda practioner BAMS,MD</p>
            <p> 25 years of experience</p>
            <p>skin specialist</p>
            <p className="py-3 bg-bbutton text-bwhite">Book a session</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default CompFive;
