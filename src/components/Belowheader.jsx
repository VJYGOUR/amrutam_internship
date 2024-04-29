import speedupbubble from "../image/speedupbubble-icon.png";
import shieldicon from "../image/shield-icon.png";
import doctoricon from "../image/doctor-icon.png";
import prescription from "../image/prescription-icon.png";
function Belowheader() {
  let arr = [
    { img: speedupbubble, text: "convinient online & inclinic consultation" },
    { img: shieldicon, text: "safe and effective treatment" },
    { img: doctoricon, text: "experienced ayurvedic practioner" },
    { img: prescription, text: "personalized treatment plans & guidance" },
  ];
  return (
    <main className="space-y-7 py-5 sm:flex sm:space-y-0 sm:py-14">
      {arr.map((curr, i) => (
        <div key={i} className="flex gap-6 px-7 ">
          <img
            src={curr.img}
            alt="bubble"
            className="h-[5rem] p-3 flex rounded-full border "
          />

          <span>{curr.text}</span>
        </div>
      ))}
    </main>
  );
}

export default Belowheader;
