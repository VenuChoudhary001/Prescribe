import React,{ useState} from 'react'
import DashboardNav from '../../Components/DashboardNav'
import FloatingButton from '../../Components/FloatingButton'
import Prescript from '../../Assets/prescription.png'
import Button from '../../Components/Constants/Button'
import TextBox from '../../Components/Constants/TextBox'
import Modal from '../../Components/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { uploadPres } from '../../redux/reducers/userDataSlice'

// const API = "https://res.cloudinary.com/saitama";


const Prescription = () => {
    const dispatch = useDispatch();
    // const USER_DATA=useSelector(state=>state.USER_DATA)
    const data=useSelector(state=>state.USER)
    const [show,setShow]=useState(false);
    const [file,setFile]=useState();

    const handleUpload=()=>{
         
         dispatch(uploadPres({file,user:data.user.id}))
    }
    console.log(file)
    const UPLOAD=(
    <>
    <div className='p-2 flex flex-col  justify-center items-center spcae-y-4' >
      <div className="">Upload your prescription</div>
      <TextBox type='file' action={{onChange:(e)=>setFile(e.target.files[0])}}/>
      <Button lable="Upload" action={handleUpload} styles="p-1 my-2 w-36 rounded-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"/>
    </div>
    
    </>)
    return (
        <>
            <DashboardNav/>
            <section className='grid grid-cols-12 my-2 p-2'>
                <main className="col-span-3 bg-white flex items-center shadow-2xl p-2 space-x-4">
                     <div className="">
                         <img src={Prescript} className='stat_img' alt="" />
                     </div>
                     <div className="flex flex-col  space-y-2">
                         <Button lable="Click to view" styles="p-1 bg-green-600 hover:bg-green-800 text-white w-36 font-extralight font-Poppins rounded-full"/>
                         <div className="font-normal">Uploaded on </div>
                     </div>
                </main>

            </section>
            <FloatingButton action={()=>setShow(true)}/>
           <Modal open={show} close={()=>setShow(false)} content={UPLOAD} title="Upload"/>
        </>
    )
}

export default Prescription
