import { ArrowRight } from "lucide-react";
const AlpacaForm = ({
  // handleSubmit,
  setName,
  setBio,
  name,
  bio,
  setCustomize,
}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !bio.trim()) {
      alert("Please fill in both Name and Bio fields.");
      return;
    }
    setCustomize(true);
  };

  return (
    <>
      <form className="p-10" onSubmit={handleFormSubmit}>
        <div className="mb-5 flex flex-col gap-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Name your Alpaca"
            className="border-b-2 border-blue-950 p-3 text-gray-500 outline-0"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Bio:</label>
          <input
            type="text"
            id="name"
            placeholder="Short Description on your Alpaca"
            className="border-b-2 border-blue-950 p-2 text-gray-500 outline-0"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="mt-6 flex cursor-pointer items-center rounded-full border-2 border-blue-950 bg-blue-950 px-8 py-3 font-semibold text-white transition duration-150 hover:scale-105 hover:bg-white hover:text-blue-950 hover:shadow-2xl"
        >
          <ArrowRight className="mr-2 inline-block" />
          Customize
        </button>
      </form>
    </>
  );
};

export default AlpacaForm;
