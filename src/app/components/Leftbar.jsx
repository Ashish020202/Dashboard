// export default function leftbar(){
//     return <div style={{background:'linear-gradient(180deg, #4285F4 0%, #3C83F9 100%)' }} className=" text-white h-screen w-80 py-6 rounded-3xl ml-6 mt-4 " >
//     <div className="text-2xl font-bold text-center mb-6">Left Sidebar</div>
//     <ul className="text-lg">
//       <li className="mb-4 pl-4 cursor-pointer hover:bg-blue-600">Item 1</li>
//       <li className="mb-4 pl-4 cursor-pointer hover:bg-blue-600">Item 2</li>
//       <li className="mb-4 pl-4 cursor-pointer hover:bg-blue-600">Item 3</li>
//       <li className="mb-4 pl-4 cursor-pointer hover:bg-blue-600">Item 4</li>
//     </ul>
//   </div>
// }

export default function LeftBar() {
  return (
    <div className="hidden md:block bg-gradient-to-b from-blue-500 to-blue-700 text-white min-h-screen w-80 py-6 rounded-3xl ml-6 mt-4">
      <div className="text-2xl font-bold text-center mb-6 margin-auto">Board</div>
      <ul className="text-lg ml-20">
        <li className="mb-4 pl-4 cursor-pointer hover:bg-blue-600">Dashboard</li>
        <li className="mb-4 pl-4 cursor-pointer hover:bg-blue-600">Transaction</li>
        <li className="mb-4 pl-4 cursor-pointer hover:bg-blue-600">Users</li>
        <li className="mb-4 pl-4 cursor-pointer hover:bg-blue-600">Settings</li>
      </ul>
    </div>
  );
}
