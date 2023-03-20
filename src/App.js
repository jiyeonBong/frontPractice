/*eslint-disable*/

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Navibar from "./components/Navibar.js";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";

function App() {
  // const [xrpInfo, setXrpInfo] = useState([]);

  //   useEffect(() => {

  //       //Upbit API
  //       const getApi = async() =>{
  //           await axios.get('https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=4').then((res) =>{
  //           for(let i = 0; i < res.data.length; i++){
  //               if(res.data[i].market != null){
  //                       setXrpInfo(prev => {return [...prev, res.data[i]]})
  //               }else{
  //                   alert("error");
  //               }
  //           }
  //           })
            
  //       }
  //       getApi();
  //   }, [])


  return (
    <>
    <Navibar/>
    <div>
    {/* <Login/> */}
    <SignUp/>
    </div>
    
 

    {/* <div className="Main">
    메인페이지
    </div> */}
    {/* <div className ="loginbox">
      <div className = "App">
      </div>
    </div> */}

    {/* <div className="App">
      <br/><br/>
    <table>
               <thead>
                   <tr style={{backgroundColor: "black", color: "white"}}>
                       <th scope="col" style={{ textAlign: "center" }}>
                         market
                       </th>
                       <th scope="col" style={{ textAlign: "center" }}>
                       candle_date_time_kst
                       </th>
                       <th scope="col" style={{ textAlign: "center" }}>
                       opening_price
                       </th>
                       <th scope="col" style={{ textAlign: "center" }}>
                       high_price
                       </th>
                       <th scope="col" style={{ textAlign: "center" }}>
                       low_price
                       </th>
                       <th scope="col" style={{ textAlign: "center" }}>
                       trade_price
                       </th>
                       <th scope="col" style={{ textAlign: "center" }}>
                       candle_acc_trade_price
                       </th>
                   </tr>
               </thead>
              
              {xrpInfo.length > 0 && 
               <tbody>
                {xrpInfo.map((infor, idx) => {
                    return(
                    <tr key={idx} style={{backgroundColor: "black", textAlign: "center" ,color: "white"}}>
                        <td>{infor.market}</td>
                        <td>{infor.candle_date_time_kst}</td>
                        <td>{infor.opening_price}</td>
                        <td>{infor.high_price}</td>
                        <td>{infor.low_price}</td>
                        <td>{infor.trade_price}</td>
                        <td>{infor.candle_acc_trade_price}</td>
                    </tr>
                    )
               })
               }
               </tbody>
               }
               
            </table>
    </div> */}
    </>
  );
}

export default App;
