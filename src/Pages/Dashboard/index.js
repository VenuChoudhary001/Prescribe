import React from 'react'
import Card from '../../Components/Card';
import MyChart from '../../Components/Chart';
import Button from '../../Components/Constants/Button';
import FloatingButton from '../../Components/FloatingButton';

import SideBar from '../../Components/SideBar';
const Dashboard = () => {
    return (
      <>
        <section className="grid grid-cols-12 ">
          <main className="flex flex-col shadow-2xl  h-screen space-y-8 col-span-2  p-3">
            <Button
              lable="Welcome Back"
              styles="btn py-2 px-3 text-2xl text-white disabled font-Poppins max-w-screen-sm w-full "
            />
            <SideBar />
          </main>
          <main className="col-span-6 flex flex-col p-4 space-y-4">
            <div className="p-2 font-Poppins text-3xl font-bold text-purple-900">Current Status</div>
            <div className="flex w-full flex-wrap">
              <Card />
              <Card />
              <Card />
              <Card />
            <MyChart/>
            </div>
          </main>
          <main className="col-span-4 p-4 flex flex-col space-y-4 shadow-2xl bg-gray-900">
            <div className="text-3xl font-bold text-white font-Poppins">History</div>
          </main>
          <FloatingButton />
        </section>
      </>
    );
}

export default Dashboard
