const AlpacaDisplay = ({ alpacaDesign }) => {
  return (
    <>
      {/* Alpaca Container */}
      <div
        className="relative mx-auto h-60 max-w-md rounded-2xl"
        style={{ backgroundImage: `url(${alpacaDesign.background})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-60 w-60">
            {/* Accessories */}
            {alpacaDesign.accessories && (
              <div className="absolute inset-0 z-50">
                <img src={alpacaDesign.accessories} alt="Alpaca Accessories" />
              </div>
            )}
            {/* Ears */}
            <div className="absolute inset-0">
              <img src={alpacaDesign.ears} alt="Alpaca Ears" />
            </div>
            {/* Hair */}
            <div className="absolute inset-0">
              <img src={alpacaDesign.hair} alt="Alpaca Hair" />
            </div>
            {/* Eyes */}
            <div className="absolute inset-0 z-70">
              <img src={alpacaDesign.eyes} alt="Alpaca Eyes" />
            </div>
            {/* Nose */}
            <div className="absolute inset-0 z-70">
              <img src={alpacaDesign.nose} alt="Alpaca Nose" />
            </div>
            {/* Mouth */}
            <div className="absolute inset-0 z-80">
              <img src={alpacaDesign.mouth} alt="Alpaca Mouth" />
            </div>
            {/* Neck */}
            <div className="absolute inset-0">
              <img src={alpacaDesign.neck} alt="Alpaca Neck" />
            </div>
            {/* Leg */}
            <div className="absolute inset-0">
              <img src={alpacaDesign.leg} alt="Alpaca Leg" />
            </div>
          </div>
        </div>
      </div>
      {/* End of Alpaca Image */}
    </>
  );
};

export default AlpacaDisplay;
