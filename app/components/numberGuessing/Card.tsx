import React from "react";

interface CardProps {
  number: number;
}

// const color = [
//   "red",
//   "blue",
//   "green",
//   "yellow",
//   "purple",
//   "pink",
//   "orange",
//   "indigo",
//   "teal",
//   "cyan",
// ];

const Card = (prop: CardProps) => {
  // const randomColor = color[Math.floor(Math.random() * color.length)];

  return (
    <div
      className="w-[100px] h-[100px] bg-red-400 flex justify-center items-center m-4 rounded-xl"
      // style={{ backgroundColor: randomColor }}
    >
      <span className="text-4xl font-bold">{prop.number}</span>
    </div>
  );
};

export default Card;
