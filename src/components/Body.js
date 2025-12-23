import Head from "./Head";
import Sidebar from "./Sidebar"; 
 import { Outlet } from "react-router-dom"; 

 const Body = () => {
   return (
   <div className="flex flex-col md:flex-row h-[calc(100vh-4rem)]">    
    <Sidebar />
   <div className="flex-1 overflow-x-hidden overflow-y-hidden bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
    <Outlet/>
   </div> 
   </div> );
 };

 export default Body; 
 