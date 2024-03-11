import { useState } from 'react'

export default function ProgressBtns() {
    const [showStat, setShowStat] = useState(false);
    // const [status, setStatus] = useState("Inprogress")
    const ttt = showStat?"Completed":"Inprogress"
    const ipc = `flex justify-center cursor-pointer bg-blue-500 text-white hover:bg-blue-400 rounded-md w-28 text-center px-3 py-1 font-semibold`;
    const cc = `flex justify-center cursor-pointer bg-green-500 text-white hover:bg-green-400 rounded-md w-28 text-center px-3 py-1 font-semibold`;
    const c = showStat?cc:ipc;
  return (
    <div onClick={()=>setShowStat(!showStat)} className={c} >
        {ttt}
    </div>
  )
}
