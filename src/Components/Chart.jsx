import React from "react";
import { Chart } from "react-charts";

function MyChart() {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        label: "Series 2",
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    []
  );
//  const series = React.useMemo(
//    () => ({
//      type: "area",
//    }),
//    []
//  );
  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

 return (
   <div style={{width:"100%",height:"50vh"}} className='shadow-2xl rounded-sm m-2'
   >
     <Chart data={data}  axes={axes}  />
   </div>
 );
}

export default MyChart;