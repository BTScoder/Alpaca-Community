import { useRef } from "react";
import html2canvas from "html2canvas";
import { Download, Trash2 } from "lucide-react";

const AlpacaCard = ({ item, deleteAlpaca }) => {
  // console.log(item);
  const alpacaRef = useRef(null);
  const handleDownload = async () => {
    if (!alpacaRef.current) return;
    const canvas = await html2canvas(alpacaRef.current, {
      backgroundColor: null,
      scale: 2,
      useCORS: true,
    });
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = `${item.name || "alpaca"}.png`;

    link.click();
  };
  return (
    <>
      {!item || item.length === 0 ? (
        <p className="py-10 text-center text-gray-500">
          No alpacas created yet. Start customizing!
        </p>
      ) : (
        <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg transition duration-300 hover:shadow-2xl md:max-w-md">
          {/* Image Container */}
          <div
            className="relative mx-auto h-60 w-full"
            style={{
              backgroundImage: `url(${item.alpacaFeatures?.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            ref={alpacaRef}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-60 w-60">
                {/* Accessories */}
                {item.alpacaFeatures?.accessories && (
                  <div className="absolute inset-0 z-50">
                    <img
                      src={item.alpacaFeatures.accessories}
                      alt="Alpaca Accessories"
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
                {/* Ears */}
                <div className="absolute inset-0">
                  <img
                    src={item.alpacaFeatures?.ears}
                    alt="Alpaca Ears"
                    className="h-full w-full object-contain"
                  />
                </div>
                {/* Hair */}
                <div className="absolute inset-0">
                  <img
                    src={item.alpacaFeatures?.hair}
                    alt="Alpaca Hair"
                    className="h-full w-full object-contain"
                  />
                </div>
                {/* Eyes */}
                <div className="absolute inset-0 z-70">
                  <img
                    src={item.alpacaFeatures?.eyes}
                    alt="Alpaca Eyes"
                    className="h-full w-full object-contain"
                  />
                </div>
                {/* Nose */}
                <div className="absolute inset-0 z-70">
                  <img
                    src={item.alpacaFeatures?.nose}
                    alt="Alpaca Nose"
                    className="h-full w-full object-contain"
                  />
                </div>
                {/* Mouth */}
                <div className="absolute inset-0 z-80">
                  <img
                    src={item.alpacaFeatures?.mouth}
                    alt="Alpaca Mouth"
                    className="h-full w-full object-contain"
                  />
                </div>
                {/* Neck */}
                <div className="absolute inset-0">
                  <img
                    src={item.alpacaFeatures?.neck}
                    alt="Alpaca Neck"
                    className="h-full w-full object-contain"
                  />
                </div>
                {/* Leg */}
                <div className="absolute inset-0">
                  <img
                    src={item.alpacaFeatures?.leg}
                    alt="Alpaca Leg"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col p-6">
            {/* Header with Name and Download */}
            <div className="mb-4 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-950">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Created on{" "}
                  {item.dateCreated || new Date().toLocaleDateString()}
                </p>
              </div>
              <button
                className="ml-4 rounded-full border-2 border-blue-950 bg-white p-3 text-blue-950 transition duration-150 hover:scale-110 hover:bg-blue-950 hover:text-white hover:shadow-lg"
                aria-label="Download alpaca"
                onClick={() => handleDownload()}
              >
                <Download className="h-5 w-5" />
              </button>
            </div>

            {/* Bio Section */}
            <div className="border-t border-gray-200 pt-4">
              <p className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                Bio
              </p>
              <p className="leading-relaxed text-gray-700">
                {item.bio || "No bio available"}
              </p>
            </div>
            <div className="grow"></div>
            <div>
              <button onClick={() => deleteAlpaca(item.id)}>
                <Trash2 className="mt-4 h-5 w-5 text-red-600" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AlpacaCard;
