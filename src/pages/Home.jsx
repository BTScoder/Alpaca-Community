import { HeartCrack, Smile } from "lucide-react";
import { Link } from "react-router-dom";
import AlpacaCard from "../components/AlpacaCard";

const Home = ({ data }) => {
  // Convert data to proper array format
  const alpacaArray = Array.isArray(data) ? data : [];

  console.log("Alpaca array:", alpacaArray);

  return (
    <>
      <nav className="mx-auto max-w-[1000px] p-4">
        <h1 className="text-center text-5xl">Your Alpaca Community</h1>
      </nav>

      <div className="mx-auto max-w-[1000px] p-4">
        <div className="text-center">
          <p className="">
            Hey? Ready to start your own Alpaca Community? Lets get started!
          </p>
          <Link to="/customize">
            <button className="my-3 cursor-pointer rounded-full bg-blue-950 px-6 py-3 text-white transition duration-150 hover:scale-105 hover:shadow-lg">
              Start Creating
            </button>
          </Link>
        </div>
        <div className="mt-10">
          <div className="mb-7">
            <h1 className="mb-2 text-3xl font-bold text-blue-950">
              Alpaca Community
            </h1>
            <div className="h-1 w-[30%] rounded-full bg-blue-950"></div>
          </div>
          {alpacaArray.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {alpacaArray
                .filter((item) => item && item.name && item.alpacaFeatures)
                .map((item) => (
                  <AlpacaCard key={item.id || item.name} item={item} />
                ))}
            </div>
          ) : (
            <div className="flex items-center justify-center gap-4 py-10">
              <p className="text-gray-500">No Alpaca Created Yet..</p>
              <Smile className="mb-1 h-6 w-6 text-blue-950" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
