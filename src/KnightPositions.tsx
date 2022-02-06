import React from "react";

const KnightPositions = ({
  currentPos,
  board,
}: {
  currentPos: any;
  board: any;
}) => {
  const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

  let positionx = horizontalAxis.indexOf(currentPos[0]);
  let positiony = verticalAxis.indexOf(currentPos[1]);
  // console.log(positionx, positiony);

  let positions: any;
  positions = [];

  for (let i = 1; i <= 8; i++) {
    if (i === 1) {
      positions.push(
        [horizontalAxis[positionx + 1], verticalAxis[positiony + 2]].join("")
      );
    } else if (i === 2) {
      positions.push(
        [horizontalAxis[positionx + 1], verticalAxis[positiony - 2]].join("")
      );
    } else if (i === 3) {
      positions.push(
        [horizontalAxis[positionx - 1], verticalAxis[positiony - 2]].join("")
      );
    } else if (i === 4) {
      positions.push(
        [horizontalAxis[positionx - 1], verticalAxis[positiony + 2]].join("")
      );
    } else if (i === 5) {
      positions.push(
        [horizontalAxis[positionx + 2], verticalAxis[positiony + 1]].join("")
      );
    } else if (i === 6) {
      positions.push(
        [horizontalAxis[positionx + 2], verticalAxis[positiony - 1]].join("")
      );
    } else if (i === 7) {
      positions.push(
        [horizontalAxis[positionx - 2], verticalAxis[positiony + 1]].join("")
      );
    } else if (i === 8) {
      positions.push(
        [horizontalAxis[positionx - 2], verticalAxis[positiony - 1]].join("")
      );
    }
  }

  // console.log(positions);
  const finalResult = positions.filter(
    (position: any) => position.length === 2
  );
  // console.log(finalResult);

  const map = new Map();

  for (let box of board) {
    map.set(box[0], 1);
  }

  for (let result of finalResult) {
    map.set(result, map.get(result) + 1);
  }

  let finalArr: any;
  finalArr = [];

  map.forEach(function (value: number, key: any) {
    finalArr.push([key, value]);
  });
  // console.log(finalArr);
  return (
    <div className="h-[520px] w-[520px] cursor-pointer grid grid-rows-8 grid-cols-8 ">
      {positionx !== -1 &&
        finalArr.map((item: any, idx: number) => (
          <div key={idx} className="">
            {item[1] === 2 ? (
              <div className="bg-green-500 h-[65px] uppercase text-green-900 p-3.5 font-bold text-3xl z-20 hover:z-0 relative">
                {item[0]}
              </div>
            ) : (
              <div className="bg-transperant h-[65px] uppercase text-white z-10 relative"></div>
            )}
          </div>
        ))}
    </div>
  );
};

export default KnightPositions;
