import {Link, Outlet} from "react-router-dom"
import { useStateContext } from './contexts/ContextProvider'
import Sidebar from './components/Sidebar'
import Navigators from "./routes/Navigators";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
const  App =() =>{
  const { activeMenu } = useStateContext();
  return (
    <>
      <h1>Bookkeeper!</h1>
      <nav 
        style={{ 
          borderBottom: "solid  1px", 
          paddingBottom: "1rem", 
          }}
        >
        <Link to="/invoices">Invoices</Link> | {" "}
        <Link to="/expenses">Expenses</Link>  | {" "}
        <Link to="/navbars">Navbars</Link> | {" "}
        <Link to="/home">Home</Link>  | {" "}
        <Link to="/navigators">Navigators</Link>
      </nav>
      {activeMenu ? (
             <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
               < Sidebar />
             </div>
           ):(
             <div className='w-0 dark:bg-secondary-dark-bg'><Sidebar /></div>
           )}
      <div className={ `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72':'flex-2'}`}>
              <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Navigators />
              </div>
           </div>
      <Outlet />
    </>
  );
}

export default App;
