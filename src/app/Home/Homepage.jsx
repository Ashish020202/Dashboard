import Media from "../components/Media";
import Signin from "../components/Signin";

export default function Homepage(){
    // return <div className="flex   h-screen p-3" style={{background: 'linear-gradient(100deg, rgba(66, 133, 244, 1) 45%, rgba(248, 250, 255, 1) 45%)'}}>
    //     <span href="logo" className="text-cyan-50 font-bold text-2xl m-10 mt-20" >LOGO</span>
    //     <div className="justify-center">
         
    //        <Media />
    //     </div>
    //     <div className="m-auto">
    //         <Signin  />
    //     </div>
    // </div>
    return <div className="flex flex-col h-screen p-3 md:flex-row" style={{ background: 'linear-gradient(100deg, rgba(66, 133, 244, 1) 45%, rgba(248, 250, 255, 1) 45%)' }}>
    <span href="logo" className="text-cyan-50 font-bold text-2xl m-2 mt-5 md:m-10 md:mt-20">LOGO</span>
{/* 
    <span>Dashboard</span> */}
    <div className="flex justify-center w-full md:w-1/2">
  
      <Media />
    </div>
    <div className="w-full md:w-1/2 mt-5 md:mt-0">
      
      <Signin />
    </div>
  </div>

}