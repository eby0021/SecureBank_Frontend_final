import React from "react";
import { useNavigate  } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const AddCard30WebFeelingPage = () => {
  const navigate = useNavigate ();
  const handleChatbotClick = () => {
    navigate('/chatbotpage30webfeeling');
  }
  const handleLogoutClick = () => {
    alert('user has been logged out')
    navigate('/loginpage30')
  }
  const handleBackButtonClick = () => {
    navigate('/homepageeverydayaccount30webfeeling')
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[82px] w-full">
        <div className="flex flex-col items-center justify-start w-full">





          
        <div className="font-poppins md:h-24 h-[99px] md:px-5 relative w-full">
            <div className="absolute bg-light_blue-900 border border-black-900 border-solid h-[95px] inset-x-[0] mx-auto shadow-bs top-[0] w-full"></div>
            <Text
              className="absolute h-max inset-y-[0] left-[2%] my-auto md:text-5xl text-[64px] text-white-A700"
              size="txtPoppinsRegular64"
            >
              Secure Bank
            </Text>
            <Text
              className="absolute right-[16%] md:text-5xl text-[64px] text-white-A700 top-[0]"
              size="txtPoppinsRegular64"
              onClick={handleLogoutClick}
            >
              Logout
            </Text>
            <Img
              className="absolute h-[91px] inset-y-[0] my-auto right-[1%]"
              src="images/img_iconsearch.svg"
              alt="iconsearch"
            />
          </div>




          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-start max-w-[2380px] mt-2 mx-auto md:px-5 w-full">
            <Img
              className="h-[97px] md:mt-0 mt-[70px] ml-[25px]"
              src="images/img_iconbacksquare.svg"
              alt="iconbacksquare"
              onClick={handleBackButtonClick}
            />
            <div className="bg-white-A700 border-[5px] border-light_blue-900 border-solid
             flex md:ml-[0] ml-[250px] md:mt-0 mt-[27px] h-[200px] px-[60px] py-[40px] w-[25%] relative rounded-[50px] shadow-bs3 md:w-full ml-[400px]"
             onClick={handleChatbotClick}>
              <Img
                className="mt-[5px] mr-[70px] h-[90px] w-[90px]"
                src="images/img_ai28146662.png"
                alt="ai28146662"
              />
              <Text
                className="ml-[-25px] mr-[17px] mt-0.5 md:text-5xl text-[30px] text-black-900 text-center text-shadow-ts z-[1]"
                size="txtPoppinsBold70"
              >
                <>
                  Open <br />
                  Chat Bot
                </>
              </Text>
            </div>



            
          </div>






          <Line className="bg-black-900_72 h-0.5 mt-[58px] w-full" />
          <div className="flex md:flex-col flex-row font-jost md:gap-5 items-start justify-start max-w-[2288px] mt-[68px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col justify-start w-[42%] md:w-full">
              <div className="flex flex-col gap-9 justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[72px] md:text-5xl text-[55px] text-black-900"
                  size="txtJostRomanBold70"
                >
                  My Cards
                </Text>
                <div className="flex md:flex-col flex-row font-poppins md:gap-[52px] items-start justify-between w-full">
                  <Img
                    className="h-[110px] md:mt-0 mt-[60px] ml-[230px]"
                    src="images/img_iconarrowdown.svg"
                    alt="iconarrowdown"
                  />
                  <div className="flex relative w-[70%] md:w-full">
                    <div className="h-[200px] sm:h-[490px] my-auto w-[90%] md:w-full">
                      <div className="absolute bg-light_blue-800 flex flex-col h-full inset-y-[0] items-center justify-start left-[3%] my-auto p-[15px] rounded-[30px] w-[91%]">
                        <div className="flex flex-col justify-start mb-[17px] w-full">
                          <div className="flex flex-row sm:gap-10 gap-[280px] items-start justify-end ml-12 md:ml-[0] w-[89%] md:w-full">
                            <Img
                              className="h-[60px] w-[200px]"
                              src="images/img_iconcard.svg"
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
                      src="images/img_iconarrowdown_blue_gray_900_01.svg"
                      alt="iconarrowdown_One"
                    />
                  </div>

                </div>

                
              </div>




              <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col font-poppins gap-[15px] items-center
               justify-end ml-[350px] md:ml-[0] mr-[0px] p-3.5 rounded-bl-[50px] rounded-br-[50px] shadow-bs w-[35%] md:w-full">
                <div className="h-[45px] md:h-[55px] mt-2.5 relative w-[48%]">
                  <input
                    className="absolute h-full inset-[0] justify-center
                     mb-[35px] text-[20px] sm:text-[26px] md:text-[28px] text-center text-gray-700 w-[40px] ml-[20px] "
                    size="txtPoppinsSemiBold30"
                    placeholder="Pin"
                  />
                  
                  <Line className="absolute bg-light_blue-900 bottom-[0] h-[3px] inset-x-[0] mx-auto w-full" />
                </div>
                <div className="h-[46px] relative w-[54%]">
                  <div className="absolute bg-light_blue-900 h-[46px] inset-[0] justify-center m-auto rounded-[23px] w-full"></div>
                  <Text
                    className="absolute h-max inset-[0] justify-center m-auto text-2xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-max"
                    size="txtPoppinsSemiBold30WhiteA700"
                  >
                    Submit
                  </Text>
                </div>
              </div>




              <div className="flex md:flex-col flex-col font-poppins gap-14 items-center justify-end md:ml-[0] ml-[165px] mt-[92px] w-[73%] md:w-full">
                <Text
                  className="bg-light_blue-900 h-[82px] justify-center pb-1.5 pt-[19px] sm:px-5 px-[34px] rounded-[41px] sm:text-[33px] md:text-[35px] text-[37px] text-center text-white-A700 w-[319px]"
                  size="txtPoppinsSemiBold37"
                >
                  Block Card
                </Text>
                <Button
                  className="border border-light_blue-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[319px] sm:text-[33px] md:text-[35px] text-[37px] text-center"
                  shape="round"
                  color="white_A700"
                >
                  Replace Card
                </Button>
              </div>
            </div>
            <Line className="bg-black-900_3f md:h-0.5 h-[1499px] md:ml-[0] ml-[149px] md:mt-0 mt-[42px] w-0.5 md:w-full" />
            <div className="bg-white-A700_01 border border-light_blue-800 border-solid flex md:flex-1 flex-col items-center justify-start mb-56 md:ml-[0] ml-[180px] md:mt-0 mt-[42px] p-[17px] rounded-[30px] shadow-bs5 w-[34%] md:w-full">
              <div className="flex flex-col items-center justify-start mb-[19px] w-[98%] md:w-full align-center">
                <Img
                  className="h-[151px]"
                  src="images/img_iconcards.svg"
                  alt="iconcards"
                />
                <Text
                  className="mt-[15px] sm:text-[37px] md:text-[43px] text-[35px] text-black-900 "
                  size="txtJostRomanBold47"
                >
                  Activate a New Card
                </Text>
                <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col 
                flex-row font-poppins gap-2.5 items-start justify-center mt-8 p-1 rounded-[30px] w-[48%] md:w-full align-center">
                <select class="mb-4 sm:mt-0 mt-6 sm:text-[31px] md:text-[33px] text-[22px] text-gray-700 border-none " id="cardType">
                <option value="credit">Credit</option>
               <option value="debit" defaultChecked>Debit</option>
            </select>    
                </div>










                <div className="flex flex-col font-poppins items-start justify-start mt-[84px] w-[94%] md:w-full">


                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col
                   flex-row sm:gap-10 items-center justify-between p-0.5 rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <input
                      className="ml-8 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[20px] text-gray-700"
                      size="txtPoppinsBold35"
                      placeholder="Enter Card Holder Name"
                    />                     
                    <Img
                      className="h-[54px] md:h-auto mb-[3px] sm:mt-0 mt-[9px] object-cover rounded-[10px]"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>
                  <Line className="bg-light_blue-900 h-[5px] mt-[5px] w-full" />
                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-16 pl-2 py-2 rounded-tl-[10px] rounded-tr-[10px] w-full">
                  <input
                      className="ml-8 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[20px] text-gray-700"
                      size="txtPoppinsBold35"
                      placeholder="Enter Card Number"
                    />     
                    <Img
                      className="h-[54px] md:h-auto object-cover rounded-[10px]"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852_One"
                    />
                  </div>
                  <Line className="bg-light_blue-900 h-[5px] mt-[5px] w-full" />
                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex flex-row sm:gap-10 items-center justify-between mt-16 pl-[5px] py-[5px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                  <input
                      className="ml-8 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[20px] text-gray-700"
                      size="txtPoppinsBold35"
                      placeholder="Enter CVC"
                    />     
                    <Img
                      className="h-[54px] md:h-auto mt-1.5 object-cover rounded-[10px]"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852_Two"
                    />
                  </div>
                  <Line className="bg-light_blue-900 h-[5px] mt-[5px] w-full" />




                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col
                   flex-row sm:gap-10 items-center justify-between p-0.5 rounded-tl-[10px] rounded-tr-[10px] w-full mt-[50px]">
                    <input
                      className="ml-8 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[20px] text-gray-700"
                      size="txtPoppinsBold35"
                      placeholder="From month/year"
                    />                     
                    <Img
                      className="h-[54px] md:h-auto mb-[3px] sm:mt-0 mt-[9px] object-cover rounded-[10px]"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>
                  <Line className="bg-light_blue-900 h-[5px] mt-[5px] w-full" />



                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col
                   flex-row sm:gap-10 items-center justify-between p-0.5 rounded-tl-[10px] rounded-tr-[10px] w-full mt-[50px]">
                    <input
                      className="ml-8 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[20px] text-gray-700"
                      size="txtPoppinsBold35"
                      placeholder="To month/year"
                    />                     
                    <Img
                      className="h-[54px] md:h-auto mb-[3px] sm:mt-0 mt-[9px] object-cover rounded-[10px]"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>
                  <Line className="bg-light_blue-900 h-[5px] mt-[5px] w-full" />






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
                    className="cursor-pointer font-semibold leading-[normal] size-[100px] min-w-[19px] mt-[59px] sm:text-[35px] md:text-[41px] text-[25px] text-center"
                    shape="round"
                    onClick={()=>{
                      alert('card verification API will send data to backend')
                      
                    }}
                    
                  >
                    Verify Card
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
