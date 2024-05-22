import { useState } from "react";
import "./App.css";
import Partition from "./components/Partition";

// const getRandomColor = () => {
//   const letters: string = "0123456789ABCDEF";
//   let color: string = "#";
//   for (let i: number = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

function App() {
  const [partitionCount, setPartitionCount] = useState<number>(1);
  return (
    <div className="w-screen h-screen flex">
      <Partition
        partitionCount={partitionCount}
        setPartitionCount={setPartitionCount}
        color={"#10bbcc"}
      />
    </div>
  );
}

export default App;
