import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AlpacaDisplay from "./AlpacaDisplay";
import AlpacaForm from "./AlpacaForm";
import AlpacaStyling from "./AlpacaStyling";
const AlpacaCustomizer = ({ setData, data }) => {
  // const [name, setName] = useLocalStorage("name", "Chidinma");
  const now = new Date();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [alpacaData, setAlpacaData] = useState(null);
  const [chosenCategory, setChosenCategory] = useState("hair");
  const [categories, setCategories] = useState([]);
  const [customize, setCustomize] = useState(false);

  const navigate = useNavigate();

  const goToPage = () => {
    navigate("/");
  };
  // Fetch Alpaca Data
  useEffect(() => {
    fetch("data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setAlpacaData(data);
        const keys = Object.keys(data);
        setCategories(keys);
        // setLoading(false);
      });
  }, []);

  // Default State of the Alpaca
  const [alpacaDesign, setAlpacaDesign] = useState({
    hair: "/alpaca/hair/default.png",
    ears: "/alpaca/ears/default.png",
    eyes: "/alpaca/eyes/default.png",
    mouth: "/alpaca/mouth/default.png",
    neck: "/alpaca/neck/default.png",
    leg: "/alpaca/leg/default.png",
    accessories: null,
    background: "/alpaca/backgrounds/darkblue70.png",
    nose: "/alpaca/nose.png",
  });

  // Handling the form submission

  const handleStylingChange = (category, style) => {
    setAlpacaDesign((prevDesign) => ({
      ...prevDesign,
      [category]: style.path,
    }));
  };

  // End of fetching alpaca data
  const handleAlpacaSubmit = () => {
    const avatarData = {
      id: Date.now(),
      name: name,
      bio: bio,
      dateCreated: now.toLocaleDateString(),
      alpacaFeatures: alpacaDesign,
    };
    setData((prev) => {
      const currentData = Array.isArray(prev) ? prev : [];
      return [...currentData, avatarData];
    });
    setName("");
    setBio("");
    goToPage();
  };

  // Random Alpaca
  const randomAlpaca = () => {
    if (!alpacaData) return;

    const randomEars = Math.floor(Math.random() * alpacaData.ears.length);
    const randomHair = Math.floor(Math.random() * alpacaData.hair.length);
    const randomEyes = Math.floor(Math.random() * alpacaData.eyes.length);
    const randomMouth = Math.floor(Math.random() * alpacaData.mouth.length);
    const randomNeck = Math.floor(Math.random() * alpacaData.neck.length);
    const randomLeg = Math.floor(Math.random() * alpacaData.leg.length);
    const randomAccessories = Math.floor(
      Math.random() * alpacaData.accessories.length,
    );
    const randomBackground = Math.floor(
      Math.random() * alpacaData.background.length,
    );

    setAlpacaDesign({
      hair: alpacaData.hair[randomHair].path,
      ears: alpacaData.ears[randomEars].path,
      eyes: alpacaData.eyes[randomEyes].path,
      mouth: alpacaData.mouth[randomMouth].path,
      neck: alpacaData.neck[randomNeck].path,
      leg: alpacaData.leg[randomLeg].path,
      accessories: alpacaData.accessories[randomAccessories].path,
      background: alpacaData.background[randomBackground].path,
      nose: "/alpaca/nose.png",
    });
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="px-6 pt-8">
          <h1 className="py-2 text-4xl text-blue-950">Alpaca Customizer</h1>
          <div className="inline-block h-1 w-[20%] bg-blue-950"></div>
          <p className="my-7 px-10 text-center tracking-wide lg:mx-auto lg:max-w-xl">
            Create and customize your own alpaca character! Choose from a
            variety of features and accessories to make your alpaca unique and
            fun.
          </p>
        </div>

        <div className="lg:mx-auto lg:max-w-2xl">
          {/* Alpaca Display Component */}
          <AlpacaDisplay alpacaDesign={alpacaDesign} />

          {customize ? (
            <AlpacaStyling
              categories={categories}
              setChosenCategory={setChosenCategory}
              alpacaData={alpacaData}
              chosenCategory={chosenCategory}
              handleStylingChange={handleStylingChange}
              customize={customize}
              setCustomize={setCustomize}
              handleAlpacaSubmit={handleAlpacaSubmit}
              randomAlpaca={randomAlpaca}
            />
          ) : (
            <AlpacaForm
              // handleSubmit={handleSubmit}
              name={name}
              bio={bio}
              setName={setName}
              setBio={setBio}
              setCustomize={setCustomize}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AlpacaCustomizer;
