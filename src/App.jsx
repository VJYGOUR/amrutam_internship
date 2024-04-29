import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import CompOne from "./components/main2/CompOne";
import CompTwo from "./components/main3/CompTwo";
import CompFive from "./components/main6/CompFive";
import CompThree from "./components/main4/CompThree";
import CompFour from "./components/main5/CompFour";
import CompSix from "./components/main7/CompSix";
import CompSeven from "./components/main8/CompSeven";

function App() {
  return (
    <>
      <header className="">
        <Navbar />
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <CompOne />
      <CompTwo />
      <CompThree />
      <CompFour />
      <CompFive />
      <CompSix />
      <CompSeven />
    </>
  );
}

export default App;
