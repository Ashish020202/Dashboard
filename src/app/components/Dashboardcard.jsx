// import { FaRegCalendarMinus, FaEllipsisV } from "react-icons/fa"
// import BarChart from "./Barchart";
// import  Piechart  from "./Piechart";
// import  Profile  from "./Profile";



// export default function Dashboardcard(){
//     return  <div className='px-[25px] pt-[25px] bg-[#F8F9FC] pb-[40px]'>
//     <div className='flex items-center justify-between'>
//         <h1 className='text-[28px] leading-[34px] font-normal text-[#5a5c69] cursor-pointer'>Dashboard</h1>

//         <button className='bg-[#2E59D9] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[8px]'>Generate Report</button>
//     </div>
//     <div className='grid grid-cols-2 md:grid-cols-4 gap-[30px] mt-[20px] pb-[15px]'>
//         <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
//             <div>
//                 <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>EARNINGS (MONTHLY)</h2>
//                 <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
//             </div>
//             <FaRegCalendarMinus fontSize={28} color="" />

//         </div>
//         <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#1CC88A] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
//             <div>
//                 <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>
//                     EARNINGS (ANNUAL)</h2>
//                 <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$240,000</h1>
//             </div>
//             <FaRegCalendarMinus fontSize={28} />
//         </div>
//         <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#36B9CC] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
//             <div>
//                 <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>TASKS </h2>
//                 <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$240,000</h1>
//             </div>
//             <FaRegCalendarMinus fontSize={28} />
//         </div>
//         <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#F6C23E] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
//             <div>
//                 <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>PENDING REQUESTS</h2>
//                 <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$240,000</h1>
//             </div>
//             <FaRegCalendarMinus fontSize={28} />
//         </div>
//     </div>
//      <div className="flex mt-22 ">
//          <div className="basis-[100%] h-96">
//            <BarChart />
//          </div>
//      </div>
//      <div className="md:flex justify-between gap-5">
//         <div className="w-full h-40 bg-white-200 " >
//       <Piechart fontSize={96}/>
//      </div>
//      <div className="">
//         <Profile />
//      </div>
//      </div>
     
     

//      </div>

// }



import { FaRegCalendarMinus, FaEllipsisV } from "react-icons/fa";
import BarChart from "./BarChart";
import Piechart from "./Piechart";
import Profile from "./Profile";

export default function Dashboardcard() {
  return (
    <div className="px-4 md:px-8 pt-4 md:pt-8 bg-gray-100 pb-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 cursor-pointer">
          Dashboard
        </h1>

        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-2">
          Generate Report
        </button>
        {/* <input type="search" name="" id="" placeholder="search"/> */}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 md:mt-8">
        <div className="bg-white rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transform hover:scale-103 transition duration-300 ease-out p-4">
          <div>
            <h2 className="text-purple-600 text-sm font-bold">
              EARNINGS (MONTHLY)
            </h2>
            <h1 className="text-lg md:text-xl font-bold text-gray-700 mt-1">
              $40,000
            </h1>
          </div>
          <FaRegCalendarMinus className="text-blue-600" fontSize={28} />
        </div>
        <div className="bg-white rounded-lg shadow-md border-l-4 border-green-600 hover:shadow-lg transform hover:scale-103 transition duration-300 ease-out p-4">
          <div>
            <h2 className="text-green-600 text-sm font-bold">
              EARNINGS (ANNUAL)
            </h2>
            <h1 className="text-lg md:text-xl font-bold text-gray-700 mt-1">
              $240,000
            </h1>
          </div>
          <FaRegCalendarMinus className="text-green-600" fontSize={28} />
        </div>
        <div className="bg-white rounded-lg shadow-md border-l-4 border-teal-600 hover:shadow-lg transform hover:scale-103 transition duration-300 ease-out p-4">
          <div>
            <h2 className="text-teal-600 text-sm font-bold">TASKS</h2>
            <h1 className="text-lg md:text-xl font-bold text-gray-700 mt-1">
              $240,000
            </h1>
          </div>
          <FaRegCalendarMinus className="text-teal-600" fontSize={28} />
        </div>
        <div className="bg-white rounded-lg shadow-md border-l-4 border-yellow-600 hover:shadow-lg transform hover:scale-103 transition duration-300 ease-out p-4">
          <div>
            <h2 className="text-yellow-600 text-sm font-bold">
              PENDING REQUESTS
            </h2>
            <h1 className="text-lg md:text-xl font-bold text-gray-700 mt-1">
              $240,000
            </h1>
          </div>
          <FaRegCalendarMinus className="text-yellow-600" fontSize={28} />
        </div>
      </div>
      <div className="flex mt-8 lg:mt-3">
        <div className="w-full md:w-full">
          <BarChart />
        </div>
      </div>
      <div className="md:flex justify-between gap-5 mt-8">
        <div className="w-full md:w-1/2 bg-gray-200">
          <Piechart fontSize={96} />
        </div>
        <div className="mt-16 ml-12 md:mt-0 m-auto">
          <Profile />
        </div>
      </div>
    </div>
  );
}



