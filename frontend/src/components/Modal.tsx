import { useRef} from 'react'

export default function Modal(props:any) {

    const inref = useRef(null);
    const close = (e:any) => {
        if(inref.current === e.target){
            props.onclose();
        }
    }
  return (
    <div ref={inref} onClick={(e)=>close(e)} className="fixed inset-0 backdrop-blur bg-opacity-30 bg-black flex justify-center items-center h-screen ">
        <div className="p-3 pt-0 bg-slate-100 rounded-md ">
            <div className='flex justify-between p-2 font-bold'>
                <span className='text-lg'>Edit Project</span>
                <span  onClick={()=>props.onclose()}><i className="fa-solid fa-xmark cursor-pointer rounded-full p-1 px-1.5 hover:bg-slate-300"></i></span>
            </div>
            <form>
                <div className='flex flex-col justify-center items-center'>
                    <div className='mb-2'>
                        <div className='font-semibold text-md'>Title</div>
                        <input type="text" className='rounded-md py-1.5 outline-none border hover:border-slate-900 px-2'/>
                    </div>
                    <div className='mb-2'>
                        <div className='font-semibold text-md'>GitHub Link</div>
                        <input type="text" className='rounded-md py-1.5 outline-none border hover:border-slate-900 px-2'/>
                    </div>
                </div>
                <button className='w-full px-4 py-1.5 mt-2 bg-slate-900  text-white font-semibold rounded-md'>Edit</button>
            </form>
        </div>
    </div>
  )
}
