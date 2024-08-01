import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import Body from './Components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import FirstPage from './Components/FirstPage'
import Error from './Components/Error'
import FirstPage from './Components/FirstPage';
import SecondPage from './Components/SecondPage';
import ThirdPage from './Components/ThirdPage';







function App() {
 return (
    <>
    <Header/>
    <Body/>
    
    </>
 )
}


const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  errorElement:<Error/>,
 
  children : [
   {
   path: "/",
   element:<FirstPage/>
   },
 {
  path:"/firstpage",
  element: <FirstPage/>
 },
 {
  path: "/secondpage",
  element: <SecondPage/>
 },
 {
path: "/thirdpage",
element: <ThirdPage/>
 }
]}



])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} >
    <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
