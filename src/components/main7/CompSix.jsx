import iphone from "../../image/iphone.png";
import apple from "../../image/applestore.png";
import google from "../../image/googleplay.png";
function CompSix() {
  return (
    <main className="my-10 bg-bprimary py-12 lg:flex lg:gap-14 ">
      <div className="px-8 text-center lg:px-0 lg:text-left lg:space-y-10 lg:pl-20 ">
        <h1>Amrutam Home App</h1>
        <p>
          The Amrutam Home App is your one-stop app for all things Ayurveda!
          Apart from mimicking the significant characteristics of our website,
          this app offers a wide range of additional features.
        </p>
        <img src={iphone} alt="iphone" className="lg:hidden" />
        <h2>
          Get a diet & lifestyle consultation with ayurvedic experts across the
          globe Get the App now
        </h2>
        <h1>Get the App</h1>
        <img src={apple} alt="gg" className="inline-block my-6" />
        <img src={google} alt="apple" className="inline-block" />
      </div>
      <section className="hidden lg:block self-center">
        <img src={iphone} alt="iphone" />
      </section>
    </main>
  );
}

export default CompSix;
