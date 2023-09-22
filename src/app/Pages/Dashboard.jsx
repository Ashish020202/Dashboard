// import Dashboardcard from "../components/Dashboardcard"
// import Leftbar from "../components/Leftbar"
// import Topbar from "../components/Topbar"


// export default function Dashboard(){

//     return <div className="flex">
//     <div className="basis-[12%]">
//       <Leftbar />
//     </div>
//     <div className="basis-[88%]">
//       <Dashboardcard />
//     </div>

//     </div>
// }
//    return <div>
//    <div className="grid grid-cols-4">
//    <Leftbar />
//    </div>
//      <div className="grid grid-cols-8">
//      <Topbar />
//      </div>
      
//    </div>
           


// return <div className=" ">
// <div className="flex">  
// <div className="w-1/4 flex">
//   <Leftbar />
// </div>
// <div className="w-4/5">
//   <Topbar />
//   {/* Add other content for the remaining 3/4 width */}
// </div>
// </div>
 
//  <Dashboardcard />

// </div>




// }

"use client";
import Dashboardcard from "../components/Dashboardcard";
import Leftbar from "../components/Leftbar";
import Topbar from "../components/Topbar";

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Leftbar */}
      <div className="md:w-1/4 lg:w-1/5 xl:w-96">
        <Leftbar />
      </div>

      {/* Dashboardcard */}
      <div className="md:w-3/4 lg:w-4/5 xl:w-5/6">
        <Dashboardcard />
      </div>
    </div>
  );
}
