import React, { useState } from 'react';
import { useNavigate, useParams  } from "react-router-dom";
import { Img, Line, List, Text } from "components";

const Transfer = () => {
  const navigate = useNavigate ();
  const { userID } = useParams(); // Get the userID from the URL params
  const [payId, setPayID] = useState('');
  const [amount, setAmount] = useState('');


  const handleBackButtonClick = () => {
    navigate(`/homepageeverydayaccount30webfeeling/${userID}`)
  };
  const handleSubmit = async () => {
    // Create a data object to send to the server
    const data = {
      payId,
      amount,
    };

    try {
      // Send a POST request to the backend
      const response = await fetch(`http://localhost:8080//sys/user/payByPayID?${userID}`, {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        // Handle successful login (e.g., redirect to a dashboard)
        alert("Money sent");
        navigate(`/homepageeverydayaccount30webfeeling/${userID}`)
      } else {
        // Handle login failure (e.g., show an error message)
        alert("Money not sent: error");
        //console.error("Login failed");
      }
    }catch (error) {
      console.error('Error:', error);
    }
  };
  const handleChatbotClick = () => {
    navigate(`/chatbotpage30webfeeling/${userID}`);
  }
  const handleLogoutClick = () => {
    alert('user has been logged out')
    navigate('/')
  }
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start  pb-[52px] w-full">
        <div className="flex flex-col justify-start w-full">



  
        <div className="font-poppins md:h-24 h-[80px] md:px-5 relative w-full">
            <div className="absolute bg-light_blue-900 border border-black-900 border-solid flex flex-col inset-x-[0] items-end justify-end mx-auto p-1.5 shadow-bs top-[0] w-full">
              <div className="flex flex-col items-center justify-start mr-[11px] w-[5%] md:w-full">
                {/* <Img
                  className="h-[61px] w-[50px]"
                  src="images/img_plus.svg"
                  alt="plus"
                /> */}
                 <Img
                  className="h-[61px] w-[50px]"
                  src="../../../images/img_plus.svg"
                  alt="plus2"
                />
              </div>
            </div>
            <Text
              className="absolute h-max inset-y-[0] left-[2%] my-auto md:text-5xl text-[40px] text-white-A700 "
              size="txtPoppinsRegular64"
            >
              Secure Bank 
            </Text>
            
            <button
              className="absolute bottom-[0] right-[14%] md:text-5xl text-[40px] text-white-A700 mb-[10px]"
              size="txtPoppinsRegular64"
              onClick={handleLogoutClick}
            >
              Logout
            </button>
          </div>





          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-start
           max-w-[2380px] mt-2 mx-auto md:px-5 w-full h-[115px]">
            <Img
              className="h-[60px] md:mt-0 mt-[10px] ml-[35px]"
              src="../../../images/img_iconbacksquare.svg"
              alt="iconbacksquare"
              onClick={handleBackButtonClick}
            />
            <div className="bg-white-A700 border-[5px] border-light_blue-900 border-solid flex md:flex-1 
            sm:flex-col ml-[600px]
            flex-row sm:gap-5 items-center justify-center 
            mb-[10px] md:mt-0 mt-[2px] px-[20px] py-[10px] rounded-[50px] shadow-bs3 w-[10%] md:w-full my-[0px] h-[140px]"
            onClick={handleChatbotClick}>
              <Img
                className="h-[110px] md:h-auto sm:mt-0  object-cover w-[100px] "
                src="../../../images/girlChatbot.jpg"
                alt="ai28146662"
              />
             {/*  <div>
              <Text
                className="sm:mt-0  sm:text-4xl md:text-[25px] text-[20px] text-black-900 text-center text-shadow-ts"
                size="txtPoppinsBold40"
              >
                <>
                  Open <br />
                  Chat Bot
                  <br />
                  <br />
                </>
              </Text> 
            
            
             
              </div> */}

            </div>

          </div>



          
          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-start max-w-[2456px] mt-3.5 mx-auto md:px-5 w-full">
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <Line className="bg-black-900_72 h-0.5 w-full mt-[30px]" />
              
              


              {/* <Line className="bg-black-900_72 h-0.5 mt-[45px] w-full" /> */}
              <div className="bg-white-A700_01 border border-light_blue-800 border-solid flex flex-col 
              items-center justify-center md:ml-[0] ml-[330px] mt-[29px] p-[22px] sm:px-5 rounded-[30px]
               shadow-bs5 w-[57%] md:w-full">             
                <div className="flex flex-col items-center justify-center center-align mb-[73px] w-[100%] md:w-full">
                 
                 

                <div className='items-center justify-center mr-[620px]'>
                  <Img
                    className="h-[70px] md:ml-[0] ml-[670px]"
                    src="../../../images/img_airplane.svg"
                    alt="airplane"
                  />
                 <Text
                    className="md:ml-[0] ml-[670px] mt-3 sm:text-[11px] md:text-[13px] text-[22px] 
                    text-black-900 justify-center items-center w-full px-5"
                    size="txtPoppinsBold35Black900"
                  >
                    Pay
                  </Text>
                  </div>



                  <div className="flex flex-col items-center justify-center mt-[29px] w-full">





                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full gap-6">





                    <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex md:flex-1 
                      flex-row items-center justify-between px-3 py-4 sm:px-5 rounded-[20px] w-[30%] md:w-full">
                        <Text
                          className="mb-[9px] ml-[35px] sm:text-[31px] md:text-[33px] text-[18px] text-black-900 mt-2"
                          size="txtPoppinsBold35Black900"
                        >
                          Pay Someone
                        </Text>
                         <label className="radio-button-container">
                       <input type="radio" name="accountType" value="everyDay" 
                                onChange={() => {
                              navigate(`/paysomeonebybankerrorfield30webfeeling/${userID}`); 
                             }} />
                        <div className="radio-button ">
                       </div>
                     </label>
                      </div>




                      <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex md:flex-1 flex-row
                       items-center justify-between px-3 py-4 sm:px-5 rounded-[20px] w-[30%] md:w-full">
                        <Text
                          className="mb-[9px] ml-[65px] sm:text-[31px] md:text-[33px] text-[18px] text-black-900 mr-2 mt-2"
                          size="txtPoppinsBold35Black900"
                        >
                          Pay ID
                        </Text>
                         <label className="radio-button-container">
                       <input type="radio" name="accountType" value="everyDay" 
                                onChange={() => {
                              navigate(`/transfer/${userID}`); 
                             }} defaultChecked/>
                        <div className="radio-button ">
                       </div>
                     </label>
                      </div>




                   
                      <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex md:flex-1 flex-row
                       items-center justify-between px-3 py-4 sm:px-5 rounded-[20px] w-[30%] md:w-full">
                        <Text
                          className="mb-[1px] ml-11 sm:text-[31px] md:text-[33px] text-[18px] text-black-900 mt-2"
                          size="txtPoppinsBold35Black900"
                        >
                          BPAY
                        </Text>
                         <label className="radio-button-container">
                       <input type="radio" name="accountType" value="everyDay" 
                                onChange={() => {
                              navigate(`/bpay/${userID}`); 
                             }} />
                        <div className="radio-button ">
                       </div>
                     </label>
                      </div>


                    </div>
                    {/* input fields start from here */}
                   
                   
                    {/* <div className="input-field bg-white-A700 border border-light_blue-900 border-solid flex flex-row md:gap-10 items-center justify-between mt-[63px] p-[11px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <select
                     className="ml-[47px] sm:text-[31px] md:text-[33px] text-[22px] text-black-900 border-none outline-none"
                        value={sourceAccountNumber}
                     onChange={(e) => setSourceAccountNumber(e.target.value)}
                    //  style={{ minWidth: '200px', height: '80px' }}
                    > */}
                     {/* <option value="">Paying from</option>
                     <option value="Everyday Account">Everyday Account</option>
                     <option value="Savings Account">Savings Account</option>
                    </select>
                     <Img
                       className="h-[74px] md:h-auto mr-1.5 object-cover rounded-[10px]"
                       src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                     />
                    </div> */}

<div  className="input-field bg-white-A700 border border-light_blue-900 border-solid flex flex-row md:gap-10
                     items-center justify-between mt-[20px] p-[2px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <input className="ml-[47px] sm:text-[31px] md:text-[33px] text-[18px] text-black-900 border-none outline-none"
                    type="text" value={payId} onChange={(e) => setPayID(e.target.value)} placeholder='Pay ID' />
                      <Img
                        className="h-[48px] md:h-auto mr-1.5 object-cover rounded-[10px]"
                        src="../../../images/img_keyboard8419852.png"
                        alt="keyboard8419852"
                      />
                    </div>



                    {/* <div className="input-field bg-white-A700 border border-light_blue-900 border-solid flex flex-row md:gap-10 items-center justify-between mt-[63px] p-[11px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <select
                     className="ml-[47px] sm:text-[31px] md:text-[33px] text-[22px] text-black-900 border-none outline-none"
                        value={destinationAccountNumber}
                     onChange={(e) => setDestinationAccountNumber(e.target.value)}
                    >
                     <option value="">Paying to</option>
                     <option value="Everyday Account">Everyday Account</option>
                     <option value="Savings Account">Savings Account</option>
                     {/* Add more options as needed */}
                    {/* </select>
                     <Img
                       className="h-[74px] md:h-auto mr-1.5 object-cover rounded-[10px]"
                       src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                     />
                    </div>  */}

                    {/* <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[46px] p-[11px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                      <Text
                        className="sm:ml-[0] ml-[47px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtPoppinsBold35Black900"
                      >
                        Account Name
                      </Text>
                      <Img
                        className="h-[74px] md:h-auto mr-1.5 object-cover rounded-[10px]"
                        src="images/img_keyboard8419852.png"
                        alt="keyboard8419852_Two"
                      />
    
                    {/* <div className="bg-white-A700 border border-light_blue-900 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[54px] px-[7px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                      <Img
                        className="h-[88px] md:mt-0 mt-[5px]"
                        src="images/img_airplane.svg"
                        alt="airplane"
                      />
                      <Line className="bg-black-900_72 md:h-0.5 h-[97px] md:ml-[0] ml-[9px] w-0.5 md:w-full" />
                      <Text
                        className="md:ml-[0] ml-[49px] md:mt-0 mt-[22px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtPoppinsBold35Black900"
                      >
                        Enter Amount
                      </Text>
                      <Img
                        className="md:flex-1 h-[74px] sm:h-auto md:ml-[0] ml-[620px] md:mt-0 mt-[9px] object-cover rounded-[10px] w-[12%] md:w-full"
                        src="images/img_keyboard8419852.png"
                        alt="keyboard8419852_Three"
                      />
                    </div> */}
                       <div  className="input-field bg-white-A700 border border-light_blue-900 border-solid flex flex-row md:gap-10
                     items-center justify-start mt-[20px] p-[2px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                      <Img
                        className="h-[48px] md:mt-0 mt-[5px] ml-[20px]"
                        src="../../../images/img_airplane.svg"
                        alt="airplane"
                      />
                    <input className="ml-[0px] sm:text-[31px] md:text-[33px] text-[18px] text-black-900 border-none outline-none"
                      type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter Amount' />                     
                        <Img
                        className="h-[48px] md:h-auto mr-1.5 object-cover rounded-[10px] ml-[380px]"
                        src="../../../images/img_keyboard8419852.png"
                        alt="keyboard8419852"
                      />
                    </div>
                    <Line className="bg-light_blue-900 h-[5px] mt-1.5 w-full" />
                  


                    {/* <div className="input-field bg-white-A700 border border-light_blue-900 border-solid flex flex-row md:gap-10
                     items-center justify-between mt-[63px] p-[11px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <input className="ml-[47px] sm:text-[31px] md:text-[33px] text-[30px] text-black-900 border-none outline-none"
                      type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Payment Description'/>                     
                       <Img
                        className="h-[74px] md:h-auto mr-1.5 object-cover rounded-[10px]"
                        src="../../../images/img_keyboard8419852.png"
                        alt="keyboard8419852"
                      />
                    </div> */}



                    <button
                      className="bg-light_blue-900 h-[60px] justify-center mt-[29px] pb-[7px] pt-[13px] 
                      sm:px-5 px-[35px] rounded-[44px] sm:text-[35px] md:text-[41px] text-[25px] text-center
                      text-white-A700 w-[250px]"   
                      onClick={handleSubmit}                   
                      // onClick={()=> {
                      //   alert('Sending money API will take data to backend')
                      //   navigate('/homepageeverydayaccount30webfeeling')
                      // }}
                      >
                     Send Money
                    </button>

                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-700_01 h-[809px] mb-[787px] md:mt-0 mt-[262px] rounded-[10px] w-[1%]"></div>
          </div>
          <Line className="bg-black-900_72 h-0.5 mt-0 w-full" />
          <Text
            className="md:ml-[0] ml-[220px] mt-[38px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
            size="txtJostRomanRegular36"
          >
            Copyrights © 2023 Secure Bank All Rights Reserved
          </Text>
        </div>
      </div>
    </>
  );
};

export default Transfer;
