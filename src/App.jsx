import { Header } from "./components/Header/Header";
import { Intro } from "./components/Intro/Intro";
import { Order } from "./components/Order/Order";
import { OurRange } from "./components/OurRange/OurRange";
import { Selling } from "./components/Selling/Selling";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <OurRange />
      <Order />
      <Selling />
    </>
  );
}

export default App;
