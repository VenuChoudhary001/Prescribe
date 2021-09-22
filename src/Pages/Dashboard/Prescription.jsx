import React,{ useEffect, useRef, useState} from 'react'
import DashboardNav from '../../Components/DashboardNav'
import FloatingButton from '../../Components/FloatingButton'
import Prescript from '../../Assets/prescription.png'
import Button from '../../Components/Constants/Button'
import TextBox from '../../Components/Constants/TextBox'
import Modal from '../../Components/Modal'
import { useDispatch, useSelector } from 'react-redux'
import {  fetchUser, uploadPres } from '../../redux/reducers/userDataSlice'
import Loading from '../../Components/Loading'
import MobileNav from '../../Components/MobileNav'
const API = "https://res.cloudinary.com/saitama/";
const Prescription = () => {
    const dispatch = useDispatch();
     const USER_DATA=useSelector(state=>state.USER_DATA)
    const data=useSelector(state=>state.USER)
    const [show,setShow]=useState(false);
    const [file,setFile]=useState();
     const [openNav, setOpenNav] = useState(false);

    const fetchRef=useRef();
    
    const getData=()=>{
        if(USER_DATA.pres.length===0){
      dispatch(fetchUser(data.user.id));}
    }
    
    fetchRef.current=getData;
    const handleUpload=()=>{
        setShow(false);
         dispatch(uploadPres({file,user:data.user.id}))
    }
    const UPLOAD=(
    <>
    <div className='p-2 flex flex-col  justify-center items-center spcae-y-4' >
      <div className="">Upload your prescription</div>
      <TextBox type='file' action={{onChange:(e)=>setFile(e.target.files[0])}}/>
      <Button lable="Upload" action={handleUpload} styles="p-1 my-2 w-36 rounded-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"/>
    </div>
    
    </>)
     
     useEffect(()=>{
      

          fetchRef.current()
        
     },[])
  
      if(USER_DATA.loading){
        return <Loading/>
      }
    
    return (
      <>
        <DashboardNav open={openNav} close={setOpenNav} />
        {USER_DATA.loading && <Loading />}
        <section className="grid grid-cols-12 my-2 mx-2 md:mx-0 space-x-4 space-y-4 p-1">
          {USER_DATA.pres.length > 0 &&
            USER_DATA.pres.map((item) => (
              <main className="col-span-12 md:col-span-3 h-full bg-white flex items-center shadow-2xl space-y-2 p-2  space-x-4">
                <div className="">
                  <img src={Prescript} className="stat_img" alt="" />
                </div>
                <div className="flex flex-col  space-y-2">
                  <a
                    href={`${API}${item.prescription_image}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Button
                      lable="Click to view"
                      styles="p-1 bg-green-600 hover:bg-green-800 text-white w-36 font-extralight font-Poppins rounded-full"
                    />
                  </a>
                  <div className="font-normal">
                    Uploaded on :
                    <pre className="font-bold text-md">
                      {item.date_of_upload}
                    </pre>{" "}
                  </div>
                </div>
              </main>
            ))}
        </section>
        <FloatingButton action={() => setShow(true)} />
        <Modal
          open={show}
          close={() => setShow(false)}
          content={UPLOAD}
          title="Upload"
        />
        <MobileNav open={openNav} close={setOpenNav} />
      </>
    );
}

export default Prescription
