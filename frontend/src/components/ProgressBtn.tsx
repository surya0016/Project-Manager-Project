import { useState } from 'react'

export default function ProgressBtn() {
    const [showStat, setShowStat] = useState(false);
    const [status, setStatus] = useState("Status ▾");
    // const defaultD = useState(`bg-slate-900 flex justify-center items-center font-semibold text-white text-center w-28 rounded-t-md px-3 py-1.5 cursor-pointer`);
    const defaultC = useState(`bg-slate-900 flex justify-center items-center font-semibold text-white text-center w-28 rounded-md px-3 py-1.5 cursor-pointer`);
    const unstarted = useState(`bg-slate-300 flex justify-center items-center font-semibold text-center w-28 rounded-md px-3 py-1.5 cursor-pointer`);
    const inprogress = useState(`bg-blue-500 flex justify-center items-center font-semibold text-white text-center w-28 rounded-md px-3 py-1.5 cursor-pointer`);
    const completed = useState(`bg-green-500 flex justify-center items-center font-semibold text-white text-center w-28 rounded-md px-3 py-1.5 cursor-pointer`);
    
    const [statusColor, setStatusColor] = useState(defaultC);
    function Status(){
        return(
            <div>
                <ul>
                    <li onClick={()=>{setStatus("Unstarted"); setShowStat(!showStat); setStatusColor(unstarted)} }className='flex justify-center items-center cursor-pointer bg-slate-900 hover:bg-slate-200 w-28 text-center px-3 py-1 font-semibold'>Unstarted</li>
                    <li onClick={()=>{setStatus("Inprogress"); setShowStat(!showStat); setStatusColor(inprogress)} }className='flex justify-center items-center cursor-pointer bg-slate-900 hover:bg-slate-200 w-28 text-center px-3 py-1 font-semibold'>Inprogress</li>
                    <li onClick={()=>{setStatus("Completed"); setShowStat(!showStat); setStatusColor(completed)} }className='flex justify-center items-center cursor-pointer bg-slate-900 hover:bg-slate-200 w-28 text-center px-3 py-1 font-semibold rounded-b-md'>Completed</li>
                </ul>
            </div>
        )
    }
  return (
    <>
    <div onClick={()=>{setShowStat(!showStat);}}  className={`${statusColor}`}>{status}</div>
    {showStat && <Status/>}
    
    </>
    
  )
}
