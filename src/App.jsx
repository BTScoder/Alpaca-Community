import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AlpacaCustomizer from "./components/AlpacaCustomizer";
import AlpacaCard from "./components/AlpacaCard";
import useLocalStorage from "./hooks/useLocalStorage";
import Footer from "./components/Footer";

function App() {
  const [data, setData, filterItem] = useLocalStorage("alpacaData", []);
  const [editId, setEditId] = useState(null);

  const deleteAlpaca = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const updateAlpaca = (id, newAlpaca) => {
    setData(
      data.map((item) => (item.id === id ? { ...item, ...newAlpaca } : item)),
    );
  };
  console.log(data);
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home data={data} deleteAlpaca={deleteAlpaca} />}
          />
          <Route
            path="/customize"
            element={<AlpacaCustomizer setData={setData} data={data} />}
          />
        </Routes>
        {/* <AlpacaCard alpacaCardData={data} deleteAlpaca={deleteAlpaca} /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
