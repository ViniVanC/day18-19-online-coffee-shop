import { Header } from "./components/Header/Header";
import { Intro } from "./components/Intro/Intro";
import { Order } from "./components/Order/Order";
import { OurRange } from "./components/OurRange/OurRange";
import { Selling } from "./components/Selling/Selling";
import { DownloadApp } from "./components/DownloadApp/DownloadApp";
import { Reviews } from "./components/Reviews/Reviews";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <OurRange />
      <Order />
      <Selling />
      <DownloadApp />
      <Reviews />
    </>
  );
}

export default App;
