import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AlpacaCustomizer from "./components/AlpacaCustomizer";
import AlpacaCard from "./components/AlpacaCard";
import useLocalStorage from "./hooks/useLocalStorage";

import Footer from "./components/Footer";

function App() {
  const [data, setData] = useLocalStorage("alpacaData", []);
  // console.log(data);
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route
            path="/customize"
            element={<AlpacaCustomizer setData={setData} data={data} />}
          />
        </Routes>
        <AlpacaCard alpacaCardData={data} />
        <Footer />
      </div>
    </>
  );
}

export default App;
