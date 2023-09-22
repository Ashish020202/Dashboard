import {AiOutlineBell} from 'react-icons/ai'
export default function Topbar(){
    return <div className="flex justify-between mt-9 "  >
      
        <div className="">
            <h5 className='font-bold '>Dashboard</h5>
            <i className="ri-search-line"></i>
        </div>
        <div className='flex ml-9'>
        
        <input type="search" name="Search" id="" placeholder="search"  />
        <div>
        <AiOutlineBell />
        </div>
        
        </div>
    </div>
}