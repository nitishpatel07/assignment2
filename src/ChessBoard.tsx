import React from "react";
import KnightPositions from "./KnightPositions";

const ChessBoard = () => {
  const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let board: any;
  board = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      board.push([[horizontalAxis[i], verticalAxis[j]].join(""), [i + j + 2]]);
    }
  }
  let [hovered, setHovered] = React.useState("");
  let [showTemporary, setShowTemporary] = React.useState(0);

  function hoverin(value: any, idx: number) {
    setHovered(value[0]);
    setShowTemporary(idx);
  }

  function hoverout() {
    setHovered("");
    setShowTemporary(0);
  }

  let [clicked, setClicked] = React.useState("");
  let [showPermanent, setShowPermanant] = React.useState(0);

  function click(value: any, idx: number) {
    setClicked(value[0]);
    setShowPermanant(idx);
  }
  React.useEffect(() => {
    setClicked(clicked);
    setShowPermanant(showPermanent);
  }, [clicked]);

  return (
    <div className="relative  h-[520px] w-[520px] cursor-pointer grid grid-rows-8 grid-cols-8 ">
      {board.map((item: any, idx: number) => (
        <div
          key={idx}
          className=""
          onMouseEnter={() => hoverin(item, idx)}
          onMouseLeave={() => hoverout()}
          onClick={() => click(item, idx)}
        >
          {item[1] % 2 === 0 ? (
            <div
              className={`${
                item[0] === clicked
                  ? "bg-red-600 z-40 "
                  : item[0] === hovered
                  ? "bg-blue-600 z-50"
                  : "bg-gray-900 z-20"
              } h-[65px] text-white relative uppercase p-3.5 font-bold text-3xl`}
            >
              {idx === showPermanent
                ? item[0]
                : idx === showTemporary
                ? item[0]
                : ""}
            </div>
          ) : (
            <div
              className={`${
                item[0] === clicked
                  ? "bg-red-600 z-40 "
                  : item[0] === hovered
                  ? "bg-blue-600 z-50 "
                  : "bg-white z-20"
              } h-[65px] text-white relative uppercase p-3.5 font-bold text-3xl`}
            >
              {idx === showPermanent
                ? item[0]
                : idx === showTemporary
                ? item[0]
                : ""}
            </div>
          )}
        </div>
      ))}
      <div className=" absolute top-0 ">
        <KnightPositions currentPos={clicked} board={board} />
      </div>
    </div>
  );
};

export default ChessBoard;
