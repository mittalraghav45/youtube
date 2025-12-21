import Sidebar from "./Sidebar"; 
 import { Outlet } from "react-router-dom"; 

 const Body = () => {
   return (
   <div className="flex flex-col md:flex-row h-[calc(100vh-4rem)]"> 
  
   <Sidebar />
   <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
    <Outlet/>
   </div> 
   </div> );
 };

 export default Body; 
 