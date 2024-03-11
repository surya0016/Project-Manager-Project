import { useState } from 'react'
import ProgressBtns from './ProgressBtns'
import Modal from './Modal'

export default function Table() {
    const [showModal, setShowModal] = useState(false);
    const date = new Date;
    const dates = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
  return (
    <div className='flex justify-center items-center h-screen '>
        <div className='bg-slate-700 p-1 rounded-md'>
        <table>
            <thead>
                <tr>
                    <th className='bg-slate-700 text-white px-4 py-2 text-center '>Title</th>
                    <th className='bg-slate-700 text-white px-4 py-2 text-center '>Date</th>
                    <th className='bg-slate-700 text-white px-4 py-2 text-center '>Status</th>
                    <th className='bg-slate-700 text-white px-4 py-2 text-center '>Github Link</th>
                    <th className='bg-slate-700 text-white px-4 py-2 text-center '>Edit</th>
                    <th className='bg-slate-700 text-white px-4 py-2 text-center '>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr className='bg-slate-700 hover:bg-slate-600 cursor-pointer'>
                    <td className=' text-white px-4 py-2 text-center '>Todo List</td>
                    <td className=' text-white px-4 py-2 text-center '>{dates}</td>
                    <td className=' text-white px-4 py-2 text-center '><ProgressBtns/></td>
                    <td className=' text-white px-4 py-2 text-center '><span className='hover:cursor-pointer hover:text-blue-600 decoration hover:underline'>github link</span></td>
                    <td onClick={()=>{setShowModal(!showModal); console.log(showModal)}} className=' text-white px-4 py-2 text-center '><i  className="cursor-pointer hover:text-green-400 fa-solid fa-pen"></i></td>
                    <td className=' text-white px-4 py-2 text-center '><i className="cursor-pointer  hover:text-red-400 fa-solid fa-trash"></i></td>
                    {showModal && <Modal onclose={()=>setShowModal(!showModal)}/> }
                </tr>
                
            </tbody>
        </table>
        </div>
    </div>
  )
}
