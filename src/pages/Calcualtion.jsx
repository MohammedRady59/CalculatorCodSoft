import { useState } from "react";

const Calcualtion = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleReset = () => {
    setInput("");
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="min-h-screen bg-indigo-800 flex flex-col items-center justify-center p-4">
      <h1 className="text-white text-4xl mb-6">Calcualtion</h1>
      <input
        type="text"
        className="bg-indigo-900 text-white text-5xl w-full max-w-lg p-4 rounded-lg mb-4"
        value={input}
        readOnly
      />
      <div className="grid grid-cols-4 gap-4 w-full max-w-lg ">
        {[
          "7",
          "8",
          "9",
          "DEL",
          "4",
          "5",
          "6",
          "+",
          "1",
          "2",
          "3",
          "-",
          ".",
          "0",
          "*",
          "/",
        ].map((btn) => (
          <button
            key={btn}
            className="bg-white text-xl font-bold py-3 rounded shadow hover:bg-gray-200"
            onClick={() =>
              btn === "DEL" ? handleDelete() : handleButtonClick(btn)
            }
          >
            {btn}
          </button>
        ))}
        <button
          className="bg-gray-600 text-white text-xl font-bold py-3 rounded shadow col-span-2 hover:bg-gray-500"
          onClick={handleReset}
        >
          REST
        </button>
        <button
          className="bg-red-600 text-white text-xl font-bold py-3 rounded shadow col-span-2 hover:bg-red-500"
          onClick={handleEqual}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calcualtion;
