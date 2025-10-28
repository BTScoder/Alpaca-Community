import { ArrowLeft } from "lucide-react";
const AlpacaStyling = ({
  categories,
  setChosenCategory,
  alpacaData,
  chosenCategory,
  handleStylingChange,
  setCustomize,
  handleAlpacaSubmit,
  randomAlpaca,
  customize,
}) => {
  return (
    <>
      <div className="px-5">
        <h2 className="py-2 text-2xl font-bold text-blue-950">
          Style Your Alpaca{" "}
        </h2>
        <p>Time to style your alpaca! Choose from the options below:</p>

        <button
          type="submit"
          className="mt-6 flex cursor-pointer items-center rounded-full border-2 border-blue-950 bg-blue-950 p-3 font-semibold text-white transition duration-150 hover:scale-105 hover:bg-white hover:text-blue-950 hover:shadow-2xl"
          onClick={() => randomAlpaca()}
        >
          <ArrowLeft className="inline-block" />
        </button>
        <div className="">
          <h2 className="mt-6 text-xl font-bold text-gray-500">Categories</h2>
          <div className="flex flex-wrap gap-5 py-5">
            {categories.map((category) => (
              <button
                className="mb-3 cursor-pointer text-blue-900 capitalize"
                key={category}
                onClick={() => setChosenCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <h2 className="mt-3 text-xl font-bold text-gray-500">Styles</h2>
          <div className="flex flex-wrap gap-5 py-5">
            {alpacaData &&
              alpacaData[chosenCategory]?.map((style) => (
                <button
                  className="mb-3 cursor-pointer text-blue-900 capitalize"
                  key={style.name}
                  onClick={() => handleStylingChange(chosenCategory, style)}
                >
                  {style.name}
                </button>
              ))}
          </div>
          <div className="mb-6 flex">
            <button
              type="submit"
              className="mt-6 flex cursor-pointer items-center rounded-full border-2 border-blue-950 bg-blue-950 p-3 font-semibold text-white transition duration-150 hover:scale-105 hover:bg-white hover:text-blue-950 hover:shadow-2xl"
              onClick={() => setCustomize(false)}
            >
              <ArrowLeft className="inline-block" />
            </button>
            <div className="grow"></div>
            <button
              type="submit"
              className="mt-6 flex cursor-pointer items-center rounded-2xl border-2 border-blue-950 bg-blue-950 px-4 py-1 font-semibold text-white transition duration-150 hover:scale-105 hover:bg-white hover:text-blue-950 hover:shadow-2xl"
              onClick={() => handleAlpacaSubmit()}
            >
              Create Avatar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlpacaStyling;
