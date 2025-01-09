import { positionsMap } from "./constants";

export const generateGrid = (number: number, isDouble: boolean) => {
  const positions = positionsMap[number] || [];

  return Array.from({ length: 9 }, (_, index) => (
    <div
      key={index}
      className={`flex justify-center items-center h-2 w-2 ${
        positions.includes(index + 1)
          ? isDouble
            ? "bg-pink-500 rounded-full"
            : "bg-yellow-500 rounded-full"
          : "text-transparent"
      }`}
    ></div>
  ));
};
