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

export const removeDuplicates = (domino: number[][]): number[][] => {
  const uniqueDominoes: Set<string> = new Set();
  const duplicates: Set<string> = new Set();

  domino.forEach((item) => {
    const sortedItem = [...item].sort((a, b) => a - b).join(",");
    if (uniqueDominoes.has(sortedItem)) {
      duplicates.add(sortedItem);
    } else {
      uniqueDominoes.add(sortedItem);
    }
  });

  return domino.filter((item) => {
    const sortedItem = [...item].sort((a, b) => a - b).join(",");
    return !duplicates.has(sortedItem);
  });
};
