import React, { useEffect, useState } from 'react';
import { useNavigate, useParams  } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const AddCard30WebFeelingPage = () => {
  const { userID } = useParams(); // Get the userID from the URL params
  const navigate = useNavigate ();
  const [id, setId] = useState("");
  const [number, setNumber] = useState("");
  const [expirationDate, setExpiration_Date] = useState("");

  const handleChatbotClick = () => {
    navigate(`/chatbotpage30webfeeling/${userID}`);
  }
  const handleLogoutClick = () => {
    alert('user has been logged out')
    navigate('/loginpage30')
  }
  const handleBackButtonClick = () => {
    navigate(`/homepageeverydayaccount30webfeeling/${userID}`)
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const req = {
        id: id,
        number: number,
        expirationDate: expirationDate  
      }
      const response = await fetch(`http://localhost:8080/sys/user/verifyCard?${userID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
      });
      if(response.ok){
        const data = await response.json(); // Parse the JSON response
        if(data==true){
          alert("card activated successfully")

        }else{

        }
      } else{
        alert("Failed to activate card. Add credetntials provided by Bank")

      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[82px] w-full">
        <div className="flex flex-col items-center justify-start w-full">





        
        <div className="font-poppins h-[50px] md:px-5 relative w-full">
            <div className="bg-light_blue-900 border border-black-900 border-solid flex flex-row max-h-[50px] items-center justify-start m-auto p-[3px] shadow-bs w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mb-[7px] ml-[46px] w-[99%]">
                <Text
                  className="md:text-5xl text-[30px] mt-[05px]  text-white-A700"
                  size="txtPoppinsRegular64"
                >
                  Secure Bank
                </Text>
              <div className="flex flex-col items-center justify-start mt-[04px] h-full mb-0.5 mr-3.5 w-[2%] md:w-full">
                <Img
                  className="h-[50px]" src="../../../images/img_plus.svg" alt="plus" 
                />
              </div>      
              </div>
            </div>
            <Text
              className="absolute right-[17%] md:text-5xl text-[30px] text-white-A700 mt-[04px]
               top-[0]" onClick={handleLogoutClick}
              size="txtPoppinsRegular64"
            >
              Logout
            </Text>
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







          <Line className="bg-black-900_72 h-0.5 mt-[48px] w-full" />
          <div className="flex md:flex-col flex-row font-jost md:gap-5 items-start justify-start max-w-[2288px] mt-[10px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col justify-start w-[42%] md:w-full">
              
              
              
              <div className="flex flex-col gap-9 justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[20px] md:text-5xl text-[25px] text-black-900"
                  size="txtJostRomanBold70"
                >
                  My Card
                </Text>
                <div className="flex md:flex-col flex-row font-poppins md:gap-[52px] items-start 
                justify-between w-full">
                  <Img
                    className="h-[110px] md:mt-0 mt-[60px] ml-[230px]"
                    src="../../../images/img_iconarrowdown.svg"
                    alt="iconarrowdown"
                  />
                  <div className="flex relative w-[70%] md:w-full">
                    <div className="h-[200px] sm:h-[490px] my-auto w-[90%] md:w-full">
                      <div className="absolute bg-light_blue-800 flex flex-col h-full inset-y-[0] items-center justify-start left-[3%] my-auto p-[15px] rounded-[30px] w-[91%]">
                        <div className="flex flex-col justify-start mb-[17px] w-full">
                          <div className="flex flex-row sm:gap-10 gap-[280px] items-start justify-end ml-12 md:ml-[0] w-[89%] md:w-full">
                            <Img
                              className="h-[60px] w-[200px]"
                              src="../../../images/img_iconcard.svg"
                              alt="iconcard"
                            />
                            <Text
                              className="backdrop-opacity-[0.5] blur-[10.00px] mr-[20px] mt-[5px] sm:text-[21px] md:text-[10px] text-[15px]
                               text-center text-white-A700 w-[20%] sm:w-full"
                              size="txtPoppinsSemiBold25"
                            >
                              Visa Card
                            </Text>
                          </div>
                          <Text
                            className="backdrop-opacity-[0.5] blur-[10.00px] md:ml-[0]
                             ml-[13px] mt-[0px] sm:text-[21px] md:text-[23px] text-[15px] text-center text-white-A700 w-[44%] sm:w-full"
                            size="txtPoppinsRegular25"
                          >
                            <span className="text-white-A700 font-poppins font-semibold">
                              Name:
                            </span>
                            <span className="text-white-A700 font-poppins font-normal">
                              {" "}
                            </span>
                            <span className="text-white-A700 font-poppins font-medium">
                              John Smith
                            </span>
                          </Text>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[0px] w-full">
                            <Text
                              className="backdrop-opacity-[0.5] blur-[10.00px] sm:text-[21px] md:text-[23px] text-[15px] text-center text-white-A700"
                              size="txtPoppinsMedium25"
                            >
                              7000 4000 5000 8000
                            </Text>
                            <Text
                              className="backdrop-opacity-[0.5] blur-[10.00px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700"
                              size="txtPoppinsRegular25"
                            >
                              <span className="text-white-A700 font-poppins font-semibold">
                                CVC:{" "}
                              </span>
                              <span className="text-white-A700 font-poppins font-medium">
                                190
                              </span>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="absolute backdrop-opacity-[0.5] blur-[10.00px] bottom-[35%] inset-x-[0] mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-full"
                        size="txtPoppinsRegular25"
                      >
                        <span className="text-white-A700 font-poppins font-semibold">
                          From
                        </span>
                        <span className="text-white-A700 font-poppins font-normal">
                          {" "}
                        </span>
                        <span className="text-white-A700 font-poppins font-medium">
                          {" "}
                          10/23{" "}
                        </span>
                        <span className="text-white-A700 font-poppins font-normal">
                          {" "}
                        </span>
                        <span className="text-white-A700 font-poppins font-semibold">
                          To
                        </span>
                        <span className="text-white-A700 font-poppins font-normal">
                          {" "}
                        </span>
                        <span className="text-white-A700 font-poppins font-medium">
                          10/30
                        </span>
                      </Text>
                    </div>
                    <Img
                      className="h-[110px] ml-[300px] mt-[60px] z-[1]"
                      src="../../../images/img_iconarrowdown_blue_gray_900_01.svg"
                      alt="iconarrowdown_One"
                    />
                  </div>

                </div>

                
              </div>
















              <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col font-poppins gap-[15px] items-center
               justify-end ml-[350px] md:ml-[0] mr-[0px] p-3.5 rounded-bl-[50px] rounded-br-[50px] shadow-bs w-[35%] md:w-full">
                {/* <div className="h-[45px] md:h-[55px] mt-2.5 relative w-[48%]">
                  <input
                    className="absolute h-full inset-[0] justify-center
                     mb-[35px] text-[20px] sm:text-[26px] md:text-[28px] text-center text-gray-700 w-[40px] ml-[20px] "
                    size="txtPoppinsSemiBold30"
                    placeholder="Pin"
                  />
                  
                  <Line className="absolute bg-light_blue-900 bottom-[0] h-[3px] inset-x-[0] mx-auto w-full" />
                </div> */}
                {/* <div className="h-[46px] relative w-[54%]">
                  <div className="absolute bg-light_blue-900 h-[46px] inset-[0] justify-center m-auto rounded-[23px] w-full"></div>
                  <Text
                    className="absolute h-max inset-[0] justify-center m-auto text-2xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-max"
                    size="txtPoppinsSemiBold30WhiteA700"
                  >
                    Submit
                  </Text>
                </div> */}
              </div>




              {/* <div className="flex md:flex-col flex-col font-poppins gap-14 items-center justify-end md:ml-[0] ml-[165px] mt-[42px] w-[73%] md:w-full">
                <Text
                  className="bg-light_blue-900 h-[62px] justify-center pb-1.5 pt-[15px] sm:px-5 px-[14px] 
                  rounded-[41px] sm:text-[33px] md:text-[35px] text-[20px] ml-[160px] text-center text-white-A700 w-[160px]"
                  size="txtPoppinsSemiBold37"
                >
                  Block Card
                </Text>
              </div> */}
            </div>
            <Line className="bg-black-900_3f md:h-0.5 h-[699px] md:ml-[0] ml-[179px] md:mt-0 mt-[22px] w-0.5 md:w-full" />
            <div className="bg-white-A700_01 border border-light_blue-800 border-solid flex md:flex-1 flex-col items-center justify-start mb-56 md:ml-[0] ml-[180px] md:mt-0 mt-[42px] p-[17px] rounded-[30px] shadow-bs5 w-[34%] md:w-full">
              <div className="flex flex-col items-center justify-start mb-[19px] w-[98%] md:w-full align-center">
                <Img
                  className="h-[70px]"
                  src="../../../images/img_iconcards.svg"
                  alt="iconcards"
                />
                <Text
                  className="mt-[15px] sm:text-[37px] md:text-[43px] text-[25px] text-black-900 "
                  size="txtJostRomanBold47"
                >
                  Activate a New Card
                </Text>
                {/* <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col 
                flex-row font-poppins gap-2.5 items-start justify-center mt-8 p-1 rounded-[30px] w-[32%] md:w-full align-center">
                <select class=" sm:mt-0  sm:text-[31px] md:text-[33px] text-[14px] text-gray-700 border-none " id="cardType">
                <option value="credit">Credit</option>
               <option value="debit" defaultChecked>Debit</option>
            </select>    
                </div> */}










                <div className="flex flex-col font-poppins items-start justify-start mt-[20px] w-[94%] md:w-full">


                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col
                   flex-row sm:gap-10 items-center justify-between p-0.2 rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <input
                      className="ml-8 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[14px] text-gray-700"
                      size="txtPoppinsBold35"
                      placeholder="Enter Card Number"
                      value={number} // Set the value attribute to the email state
                  onChange={(e) => setNumber(e.target.value)}
                    />                     
                    <Img
                      className="h-[24px] md:h-auto mb-[3px] sm:mt-0 mt-[9px] object-cover rounded-[10px]"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>
                  <Line className="bg-light_blue-900 h-[5px] mt-[5px] w-full" />
                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col
                   flex-row sm:gap-10 items-center justify-between mt-[20px] pl-2 py-2 rounded-tl-[10px] 
                   rounded-tr-[10px] w-full">
                  <input
                      className="ml-8 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[14px] text-gray-700"
                      size="txtPoppinsBold35"
                      placeholder="Enter ID"
                      value={id} // Set the value attribute to the email state
                  onChange={(e) => setId(e.target.value)}
                    />     
                    <Img
                      className="h-[24px] md:h-auto object-cover rounded-[10px]"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852_One"
                    />
                  </div>
                  <Line className="bg-light_blue-900 h-[5px] mt-[5px] w-full" />
                  {/* <div className="bg-white-A700 border border-light_blue-900 border-solid flex flex-row sm:gap-10
                   items-center justify-between mt-[20px] pl-[5px] py-[5px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                  <input
                      className="ml-8 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[14px] text-gray-700"
                      size="txtPoppinsBold35"
                      placeholder="Enter CVC"
                    />     
                    <Img
                      className="h-[24px] md:h-auto mt-1.5 object-cover rounded-[10px]"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852_Two"
                    />
                  </div>
                  <Line className="bg-light_blue-900 h-[5px] mt-[5px] w-full" /> */}




                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col
                   flex-row sm:gap-10 items-center justify-between p-0.5 rounded-tl-[10px] rounded-tr-[10px] w-full mt-[20px]">
                    <input
                      className="ml-8 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[14px] text-gray-700"
                      size="txtPoppinsBold35"
                      placeholder="Enter Expiration Date"
                      value={expirationDate} // Set the value attribute to the email state
                  onChange={(e) => setExpiration_Date(e.target.value)}
                    />                     
                    <Img
                      className="h-[24px] md:h-auto mb-[3px] sm:mt-0 mt-[9px] object-cover rounded-[10px]"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>
                  <Line className="bg-light_blue-900 h-[5px] mt-[5px] w-full" />



                  {/* <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col
                   flex-row sm:gap-10 items-center justify-between p-0.5 rounded-tl-[10px] rounded-tr-[10px]
                    w-full mt-[20px]">
                    <input
                      className="ml-8 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[14px] text-gray-700"
                      size="txtPoppinsBold35"
                      placeholder="To month/year"
                    />                     
                    <Img
                      className="h-[24px] md:h-auto mb-[3px] sm:mt-0 mt-[9px] object-cover rounded-[10px]"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>
                  <Line className="bg-light_blue-900 h-[5px] mt-[5px] w-full" /> */}






                  {/* <div className="flex flex-row items-center justify-between md:ml-[0] ml-[45px] mt-[41px] w-[77%] md:w-full">
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-800"
                      size="txtPoppinsBold35Gray800"
                    >
                      FROM
                    </Text>
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-800"
                      size="txtPoppinsBold35Gray800"
                    >
                      TO
                    </Text>
                  </div> */}
                </div>





                <div className="flex flex-col font-poppins items-center justify-start mt-[3px] w-full">
                  {/* <div className="flex md:flex-col flex-row gap-[19px] items-center justify-between w-full">
                    <div className="bg-white-A700 border border-light_blue-900 border-solid 
                    flex md:flex-1 flex-row gap-8 items-center justify-start p-2 rounded-tl-[10px] rounded-tr-[10px] w-[51%] md:w-full">
                    <input
                      className="ml-8 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[10px] text-gray-700 w-[80%]"
                      size="txtPoppinsBold35"
                      placeholder="month/year"
                    />  
                      <Img
                        className="h-[46px] md:h-auto object-cover rounded-[10px]"
                        src="images/img_keyboard8419852.png"
                        alt="keyboard8419852_Three"
                      />
                    </div>
                    <div className="bg-white-A700 border border-light_blue-900 
                    border-solid flex md:flex-1 flex-row gap-[11px] items-center justify-start p-[9px] rounded-tl-[10px] rounded-tr-[10px] w-[48%] md:w-full">
                    <input
                      className="ml-8 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[20px] text-gray-700"
                      size="txtPoppinsBold35"
                      placeholder="month/year"
                    />  
                      <Img
                        className="h-[51px] md:h-auto object-cover rounded-[10px]"
                        src="images/img_keyboard8419852.png"
                        alt="keyboard8419852_Four"
                      />
                    </div>
                  </div> */}
                  {/* <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-between mt-[5px] w-full">
                    <Line className="bg-light_blue-900 h-[5px] w-[51%]" />
                    <Line className="bg-light_blue-900 h-[5px] w-[48%]" />
                  </div> */}
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] size-[100px] min-w-[19px] mt-[20px] sm:text-[35px] md:text-[41px] text-[14px] text-center"
                    shape="round"
                    onClick={handleSubmit}
                    
                  >
                    Activate Card
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray-700_01 h-[809px] mb-[642px] md:ml-[0] ml-[116px] md:mt-0 mt-[90px] rounded-[10px] w-[1%]"></div>
          </div>
          <Line className="bg-black-900_72 h-0.5 mt-7 w-full" />
          <Text
            className="mt-[51px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
            size="txtJostRomanRegular36"
          >
            Copyrights © 2023 Secure Bank All Rights Reserved
          </Text>
        </div>
      </div>
    </>
  );
};

export default AddCard30WebFeelingPage;
