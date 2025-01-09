import React, { useState } from "react";
import "./index.css";
import { generateGrid, removeDuplicates } from "./utils";
import { initialDominoes } from "./constants";
import {
  FaPlusCircle,
  FaRedo,
  FaSortAmountDown,
  FaSortAmountUp,
  FaTrashAlt,
} from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";

const App: React.FC = () => {
  const [dominoes, setDominoes] = useState<number[][]>(initialDominoes);
  const [newLeft, setNewLeft] = useState<string>("");
  const [newRight, setNewRight] = useState<string>("");
  const [manipulatedData, setManipulatedData] =
    useState<number[][]>(initialDominoes);

  const countDoubles = (): number => {
    return dominoes.filter(([left, right]) => left === right).length;
  };

  const sortDominoes = (order: "asc" | "desc") => {
    const sorted = [...dominoes].sort((a, b) => {
      const totalA = a[0] + a[1];
      const totalB = b[0] + b[1];
      if (order === "asc")
        return totalA === totalB ? a[0] - a[0] : totalA - totalB;
      else return totalA === totalB ? b[0] - a[0] : totalB - totalA;
    });
    setDominoes(sorted);
    setManipulatedData(sorted);
  };

  const flipCards = () => {
    const flipped = dominoes.map(([left, right]) => [right, left]);
    setDominoes(flipped);
    setManipulatedData(flipped);
  };

  const removeByTotal = (total: number) => {
    const filtered = dominoes.filter(([left, right]) => left + right !== total);
    setDominoes(filtered);
    setManipulatedData(filtered);
  };

  const resetDominoes = () => {
    setDominoes(initialDominoes);
    setManipulatedData(initialDominoes);
  };

  const handleAddCard = () => {
    const left = parseInt(newLeft.trim());
    const right = parseInt(newRight.trim());

    if (!isNaN(left) && !isNaN(right)) {
      if (left > 6) {
        alert("Cannot add card with value more than 6.");
        return;
      } else if (right > 6) {
        alert("Cannot add card with value more than 6.");
        return;
      }
      const updatedDominoes = [...dominoes, [left, right]];
      setDominoes(updatedDominoes);
      setManipulatedData(updatedDominoes);
      setNewLeft("");
      setNewRight("");
    } else {
      alert("Please enter valid domino values.");
    }
  };

  return (
    <div className="p-6 sm:p-8 lg:p-12 w-full mx-auto h-screen bg-gradient-to-r from-green-900 to-gray-800 text-white shadow-lg rounded-lg flex flex-col lg:flex-row">
      <div className="flex-1 mb-6 lg:mb-0">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-yellow-400 mb-6 animate__animated animate__bounceIn">
          Purwadhika's Dominoes Selection Test
        </h1>

        <p className="text-gray-200 font-medium mb-2">
          Double Numbers:{" "}
          <span className="text-pink-300">{countDoubles()}</span>
        </p>

        <div className="flex justify-center items-center w-full">
          <div className="w-full sm:w-auto grid grid-cols-4 sm:grid-cols-6 gap-4 sm:gap-6 mb-8">
            {dominoes.map((pair, index) => {
              const isDouble = pair[0] === pair[1];
              return (
                <div
                  key={index}
                  className="flex flex-col items-center bg-gray-700 border-2 border-gray-600 rounded-lg p-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
                >
                  <div className="grid grid-cols-3 gap-1">
                    {generateGrid(pair[0], isDouble)}
                  </div>
                  <div className="w-full h-0.5 bg-gray-600 my-2 "></div>
                  <div className="grid grid-cols-3 gap-1">
                    {generateGrid(pair[1], isDouble)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-gray-200 font-medium mb-2 ">
            Source:{" "}
            <span className="font-mono text-green-300 bg-black backdrop-blur-xl bg-opacity-50 rounded-xl p-2">
              {JSON.stringify(manipulatedData)}
            </span>
          </p>
        </div>
      </div>

      <div className="w-full sm:w-1/4 p-4 bg-black backdrop-blur-xl bg-opacity-50 rounded-lg shadow-lg flex flex-col gap-4">
        <button
          className="bg-yellow-700 text-white px-5 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition flex justify-center gap-2"
          onClick={() => sortDominoes("asc")}
        >
          <FaSortAmountUp />
          <span className="">Sort (ASC)</span>
        </button>
        <button
          className="bg-yellow-700 text-white px-5 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition flex justify-center gap-2"
          onClick={() => sortDominoes("desc")}
        >
          <FaSortAmountDown />
          <span className="">Sort (DES)</span>
        </button>
        <button
          className="bg-yellow-700 text-white px-5 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition flex justify-center gap-2"
          onClick={flipCards}
        >
          <FaRotate />
          <span className="">Flip</span>
        </button>
        <button
          className="bg-yellow-700 text-white px-5 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition flex justify-center gap-2"
          onClick={() => setDominoes(removeDuplicates(dominoes))}
        >
          <FaTrashAlt />
          <span className="">Remove Dup</span>
        </button>

        <div>
          <div className="mt-6 flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={newLeft}
              className="border px-3 py-2 rounded-lg shadow-sm mb-2 w-full text-gray-300 bg-gray-800"
              placeholder="Top Value"
              onChange={(e) => setNewLeft(e.target.value)}
            />
            <input
              type="text"
              value={newRight}
              className="border px-3 py-2 rounded-lg shadow-sm mb-2 w-full text-gray-300 bg-gray-800"
              placeholder="Bottom Value"
              onChange={(e) => setNewRight(e.target.value)}
            />
          </div>
          <button
            className="bg-yellow-700 text-white px-5 py-2 w-full rounded-lg shadow-md hover:bg-yellow-600 transition flex justify-center gap-2"
            onClick={handleAddCard}
          >
            <FaPlusCircle />
            <span>Add Card</span>
          </button>
        </div>

        <div className="mt-6">
          <input
            type="number"
            className="border bg-gray-800 text-white px-3 py-2 rounded-lg shadow-sm mb-2 w-full"
            placeholder="Input Total"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const target = e.target as HTMLInputElement;
                const total = parseInt(target.value);
                if (!isNaN(total)) removeByTotal(total);
              }
            }}
          />
          <button
            className="bg-yellow-700 text-white px-5 py-2 w-full rounded-lg shadow-md hover:bg-yellow-600 transition flex justify-center gap-2"
            onClick={() => {
              const inputElement = document.querySelector(
                'input[type="number"]'
              ) as HTMLInputElement;
              const total = parseInt(inputElement.value);
              if (!isNaN(total)) removeByTotal(total);
            }}
          >
            <FaTrashAlt />
            <span className="">Remove By Total</span>
          </button>

          <button
            className="bg-red-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-600 transition mt-6 flex justify-center gap-2"
            onClick={resetDominoes}
          >
            <FaRedo />
            <span className="">Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
