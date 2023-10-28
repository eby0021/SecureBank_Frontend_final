import {React, useState} from "react";
import { useNavigate  } from "react-router-dom";
import { Button, Img, Line, List, Text } from "components";

const ViewProfile30WebFeelingPage = () => {
  const navigate = useNavigate();
  const handleChatbotClick = () => {
    navigate('/chatbotpage30webfeeling');
  }
  const handleBackButtonClick = () => {
    navigate('/homepageeverydayaccount30webfeeling')
  };
  const handleLogoutClick = () => {
    alert('user has been logged out')
    navigate('/loginpage30')
  
  }
  const [password, setPassword] = useState('');
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[97px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="font-poppins h-[117px] md:px-5 relative w-full">
            <div className="bg-light_blue-900 border border-black-900 border-solid flex flex-row h-full items-center justify-start m-auto p-[3px] shadow-bs w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mb-[7px] ml-[46px] w-[99%]">
                <Text
                  className="md:text-5xl text-[64px] text-white-A700"
                  size="txtPoppinsRegular64"
                >
                  Secure Bank
                </Text>
                <Img
                  className="h-[97px] sm:mt-0 mt-[5px]"
                  src="images/img_iconsearch.svg"
                  alt="iconsearch"
                />
              </div>
            </div>
            <Text
              className="absolute right-[17%] md:text-5xl text-[64px] text-white-A700 top-[0]" onClick={handleLogoutClick}
              size="txtPoppinsRegular64"
            >
              Logout
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-start max-w-[2890px] mt-[50px] mx-auto md:px-5 w-full">
          <Img
              className="h-[97px] md:mt-0 mt-[70px] ml-[25px]"
              src="images/img_iconbacksquare.svg"
              alt="iconbacksquare"
              onClick={handleBackButtonClick}
            />
{/*             
            <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[842px] p-[9px] shadow-bs4 w-[23%] md:w-full">
              <div className="flex flex-col gap-[29px] justify-start mb-4 ml-1 md:ml-[0] w-[87%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-[45px] items-start justify-start w-full">
                  <Img
                    className="h-[78px] mb-6"
                    src="images/img_iconwallet.svg"
                    alt="iconwallet"
                  />
                  <Text
                    className="sm:mt-0 mt-[27px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-light_blue-900"
                    size="txtPoppinsSemiBold50"
                  >
                    Current Balance
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[156px] md:text-5xl text-[100px] text-center text-light_blue-900"
                  size="txtPoppinsSemiBold100"
                >
                  $2,198
                </Text>
              </div>
            </div>
 */}

          <div className="bg-white-A700 border-[5px] border-light_blue-900 border-solid
             flex md:ml-[0] ml-[250px] md:mt-0 mt-[27px] h-[200px] px-[60px] py-[40px] w-[25%] relative rounded-[50px] shadow-bs3 md:w-full ml-[400px]"
          onClick={handleChatbotClick}
             >
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
          <Line className="bg-black-900_72 h-0.5 max-w-[2928px] mt-[67px] mx-auto w-full" />
          <div className="flex md:flex-col flex-row font-jost md:gap-10 items-center justify-center mt-[84px] md:px-5 ">
            <div className="bg-white-A700_01 border border-light_blue-800 border-solid flex flex-col items-center justify-start md:mt-0 mt-[0px] p-[15px] rounded-[30px] shadow-bs5">
              <div className="flex flex-col items-end justify-start mb-3 w-[88%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-[98%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[62%] md:w-full">
                    <Text
                      className="md:mt-0 mt-[152px] md:text-5xl text-[70px] text-black-900"
                      size="txtJostRomanBold70"
                    >
                      My Profile
                   
                    </Text>
                  
                  </div>
                  {/* <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex sm:flex-col flex-row font-poppins sm:gap-[43px] items-start justify-between mb-1 md:mt-0 mt-[183px] p-2.5 rounded-tl-[10px] rounded-tr-[10px] w-[34%] md:w-full">
                    <Text
                      className="ml-2 sm:ml-[0] sm:mt-0 mt-4 sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                      size="txtPoppinsBold35"
                    >
                      Upload New Image budhi bidhian
                    </Text>
                    <Img
                      className="h-[101px] mb-[5px] mr-1"
                      src="images/img_icondocument.svg"
                      alt="icondocument"
                    />
                  </div> */}
                </div>
                {/* <Line className="bg-light_blue-900 h-[5px] mr-[42px] w-[33%]" /> */}

                {/* hi this is the profile wala complete container div */}
                <div className="flex flex-col font-poppins items-center justify-center mt-[0px] w-[900px]">





                  <div className="bg-white-A700 border ml-[120px] w-[850px] mt-[30px] border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[30px] w-[20%] ml-[30px]" 
                    size="txtJostRomanBold70"
                    >
                    Name
                   </label>
                    <input
                      className="md:ml-[0] mb-[20px] md:mt-0 mt-[20px] sm:text-[31px] md:text-[33px] text-[25px] ml-[20px]
                       text-black-900 border-none outline-none"
                      size="txtPoppinsSemiBold35"
                      type="text"
                      placeholder="Jack Sparrow"
                    />
                    <Img
                      className="h-[74px] md:ml-[0] ml-[70px] md:mt-0 mt-[7px]"
                      src="images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[74px] sm:h-auto md:ml-[0] mb-[20px] ml-[50px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>






                  <div className="bg-white-A700 border ml-[120px] w-[850px] mt-[30px] border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[30px] w-[20%] ml-[30px]" 
                    size="txtJostRomanBold70"
                    >
                    Mobile Number
                   </label>
                    <input
                      className="md:ml-[0] mb-[20px] md:mt-0 mt-[20px] sm:text-[31px] md:text-[33px] text-[25px] ml-[20px]
                       text-black-900 border-none outline-none"
                      size="txtPoppinsSemiBold35"
                      type="text"
                      placeholder="040000000"
                    />
                    <Img
                      className="h-[74px] md:ml-[0] ml-[70px] md:mt-0 mt-[7px]"
                      src="images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[74px] sm:h-auto md:ml-[0] mb-[20px] ml-[50px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>





                  <div className="bg-white-A700 border ml-[120px] w-[850px] mt-[30px] border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[30px] w-[20%] ml-[30px]" 
                    size="txtJostRomanBold70"
                    >
                    Email
                   </label>
                    <input
                      className="md:ml-[0] mb-[20px] md:mt-0 mt-[20px] sm:text-[31px] md:text-[33px] text-[25px] ml-[20px]
                       text-black-900 border-none outline-none"
                      size="txtPoppinsSemiBold35"
                      type="text"
                      placeholder="jackspaow@gmail.com"
                    />
                    <Img
                      className="h-[74px] md:ml-[0] ml-[70px] md:mt-0 mt-[7px]"
                      src="images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[74px] sm:h-auto md:ml-[0] mb-[20px] ml-[50px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>





                  <div className="bg-white-A700 border ml-[120px] w-[850px] mt-[30px] border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[30px] w-[20%] ml-[30px]" 
                    size="txtJostRomanBold70"
                    >
                    Birth Day
                   </label>
                    <input
                      className="md:ml-[0] mb-[20px] md:mt-0 mt-[20px] sm:text-[31px] md:text-[33px] text-[25px] ml-[20px]
                       text-black-900 border-none outline-none"
                      size="txtPoppinsSemiBold35"
                      type="text"
                      placeholder="1 January 1925"
                    />
                    <Img
                      className="h-[74px] md:ml-[0] ml-[70px] md:mt-0 mt-[7px]"
                      src="images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[74px] sm:h-auto md:ml-[0] mb-[20px] ml-[50px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>



               


                  <div className="bg-white-A700 border ml-[120px] w-[850px] mt-[30px] border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[30px] w-[20%] ml-[30px]" 
                    size="txtJostRomanBold70"
                    >
                    Acc Number
                   </label>
                    <input
                      className="md:ml-[0] mb-[20px] md:mt-0 mt-[20px] sm:text-[31px] md:text-[33px] text-[25px] ml-[20px]
                       text-black-900 border-none outline-none"
                      size="txtPoppinsSemiBold35"
                      type="text"
                      placeholder="51169857"
                    />
                    <Img
                      className="h-[74px] md:ml-[0] ml-[70px] md:mt-0 mt-[7px]"
                      src="images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[74px] sm:h-auto md:ml-[0] mb-[20px] ml-[50px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>


                  <div className="bg-white-A700 border ml-[120px] w-[850px] mt-[30px] border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[30px] w-[20%] ml-[30px]" 
                    size="txtJostRomanBold70"
                    >
                     Password
                   </label>
                    <input
                      className="md:ml-[0] mb-[20px] md:mt-0 mt-[20px] sm:text-[31px] md:text-[33px] text-[25px] ml-[20px]
                       text-black-900 border-none outline-none"
                      size="txtPoppinsSemiBold35"
                      type="password"
                      placeholder="*************"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Img
                      className="h-[74px] md:ml-[0] ml-[70px] md:mt-0 mt-[7px]"
                      src="images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[74px] sm:h-auto md:ml-[0] mb-[20px] ml-[50px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>





                  <div className="bg-white-A700 border ml-[120px] w-[850px] mt-[30px] border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[30px] w-[20%] ml-[30px]" 
                    size="txtJostRomanBold70"
                    >
                     Address
                   </label>
                    <input
                      className="md:ml-[0] mb-[20px] md:mt-0 mt-[20px] sm:text-[31px] md:text-[33px] text-[25px] ml-[20px]
                       text-black-900 border-none outline-none"
                      size="txtPoppinsSemiBold35"
                      type="text"
                      placeholder="221 B Bakers Street"
                    />
                    <Img
                      className="h-[74px] md:ml-[0] ml-[70px] md:mt-0 mt-[7px]"
                      src="images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[74px] sm:h-auto md:ml-[0] mb-[20px] ml-[50px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>
               
                



                  <div className="bg-white-A700 border ml-[120px] w-[850px] mt-[30px] border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[30px] w-[20%] ml-[30px]" 
                    size="txtJostRomanBold70"
                    >
                    Pay ID
                   </label>
                    <input
                      className="md:ml-[0] mb-[20px] md:mt-0 mt-[20px] sm:text-[31px] md:text-[33px] text-[25px] ml-[20px]
                       text-black-900 border-none outline-none"
                      size="txtPoppinsSemiBold35"
                      type="password"
                      placeholder="2357344"
                    />
                    <Img
                      className="h-[74px] md:ml-[0] ml-[70px] md:mt-0 mt-[7px]"
                      src="images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[74px] sm:h-auto md:ml-[0] mb-[20px] ml-[50px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>


                  
                
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[478px] sm:min-w-full md:ml-[0] ml-[150px] mt-[37px] rounded-[50px] sm:text-[35px] md:text-[41px] text-[45px] text-center"
                    size="lg"
                    onClick={()=> {
                      alert('Saving profile API will take data to backend')
                      navigate('/homepageeverydayaccount30webfeeling')
                    }}
                  >
                    Save Profile
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray-700_01 h-[809px] mb-[941px] rounded-[10px] w-[1%]"></div>
          </div>
          <Line className="bg-black-900_72 h-0.5 mt-[98px] w-full" />
          <Text
            className="mt-[98px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
            size="txtJostRomanRegular36"
          >
            Copyrights © 2023 Secure Bank All Rights Reserved
          </Text>
        </div>
      </div>
    </>
  );
};

export default ViewProfile30WebFeelingPage;
