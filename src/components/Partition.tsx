import React, { Dispatch, SetStateAction, useState } from "react";

interface props {
  color: string;
  setPartitionCount: Dispatch<SetStateAction<number>>;
  partitionCount: number;
}

const getRandomColor = () => {
  const letters: string = "0123456789ABCDEF";
  let color: string = "#";
  for (let i: number = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
};

const Partition = ({ color, setPartitionCount, partitionCount }: props) => {
  const [verticel, setVerticel] = useState<boolean>(false);
  const [horizontal, setHorizontal] = useState<boolean>(false);
  const [isClosed, setClosed] = useState(false);

  if (verticel) {
    return (
      <div className="w-full h-full flex">
        <Partition
          partitionCount={partitionCount}
          setPartitionCount={setPartitionCount}
          color={color}
        />
        <Partition
          partitionCount={partitionCount}
          setPartitionCount={setPartitionCount}
          color={`${getRandomColor()}`}
        />
      </div>
    );
  }

  if (horizontal) {
    return (
      <div className="w-full h-full flex flex-col">
        <Partition
          setPartitionCount={setPartitionCount}
          partitionCount={partitionCount}
          color={color}
        />
        <Partition
          partitionCount={partitionCount}
          setPartitionCount={setPartitionCount}
          color={`${getRandomColor()}`}
        />
      </div>
    );
  }

  if (!isClosed) {
    return (
      <div
        className={`border border-solid border-gray-700 bg-[${color}] p-10 w-full h-full flex-grow`}
      >
        {partitionCount > 1 && (
          <button
            onClick={() => {
              setClosed(true);
              setPartitionCount((count) => count - 1);
            }}
            className="bg-[steelblue] text-white w-[20px] h-[20px] flex items-center justify-center ml-auto text-center rounded-full"
          >
            -
          </button>
        )}
        <div className="flex items-center justify-center gap-10 w-full h-full">
          <button
            onClick={() => {
              setVerticel(true);
              setPartitionCount((count) => count + 1);
              // addPartition(id);
            }}
            className="border border-solid border-gray-700 px-10 py-1 bg-[steelblue] text-white rounded-lg"
          >
            V
          </button>
          <button
            onClick={() => {
              setHorizontal(true);
              setPartitionCount((count) => count + 1);
              // addPartition(id);
            }}
            className="border border-solid border-gray-700 px-10 py-1 bg-[steelblue] text-white rounded-lg"
          >
            H
          </button>
        </div>
      </div>
    );
  }
};

export default Partition;

// ${
//     verticel
//       ? "w-[50%] h-[100vh]"
//       : horizontal
//       ? "h-[50vh] w-full"
//       : "w-full h-full"
//   }
