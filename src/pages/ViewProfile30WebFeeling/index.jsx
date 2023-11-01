import {React, useState} from "react";
import { useNavigate, useParams  } from "react-router-dom";
import { Button, Img, Line, List, Text } from "components";

const ViewProfile30WebFeelingPage = () => {
  const navigate = useNavigate();
  const { userID } = useParams(); // Get the userID from the URL params
  const handleChatbotClick = () => {
    navigate('/chatbotpage30webfeeling');
  }
  const handleBackButtonClick = () => {
    navigate(`/homepageeverydayaccount30webfeeling/${userID}`)
  };
  const handleLogoutClick = () => {
    alert('user has been logged out')
    navigate('/loginpage30')
  
  }
  const [password, setPassword] = useState('');
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[7px] w-full">
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
            <div className="bg-white-A700 border-[5px] border-light_blue-900 border-solid
             flex md:ml-[0] ml-[250px] md:mt-0 mt-[5px] h-[130px] px-[20px] py-[10px] w-[15%] relative rounded-[50px] shadow-bs3 md:w-full ml-[550px]"
             onClick={handleChatbotClick}>
              <Img
                className="mt-[5px] mr-[50px] h-[70px] w-[70px]"
                src="../../../images/img_ai28146662.png"
                alt="ai28146662"
              />
              <Text
                className="ml-[-25px] mr-[17px] mt-0.5 md:text-5xl text-[20px] text-black-900 text-center text-shadow-ts z-[1]"
                size="txtPoppinsBold70"
              >
                <>
                  Open <br />
                  Chat Bot
                </>
              </Text>
            </div>
          </div>




          <Line className="bg-black-900_72 h-0.5 max-w-[2928px] mt-[35px] mx-auto w-full" />



          <div className="flex md:flex-col flex-row font-jost md:gap-10 items-center justify-center 
          mt-[0px] md:px-5 h-[680px]">



            <div className="bg-white-A700_01 border border-light_blue-800 border-solid flex flex-col 
            items-center justify-start max-h-[620px] max-w-[600px] md:mt-0 mt-[0px] p-[15px] rounded-[30px]
             shadow-bs5">
              <div className="flex flex-col items-end justify-start mb-3 w-[88%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-[98%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[62%]
                   md:w-full">
                    <Text
                      className="md:mt-0 mt-[10px] md:text-5xl text-[35px] text-black-900"
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





                  <div className="bg-white-A700 border h-[50px] ml-[390px] w-[550px] mt-[10px] border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[18px] w-[20%] ml-[20px]" 
                    size="txtJostRomanBold70"
                    >
                    Name
                   </label>
                    <input
                      className="md:ml-[0] mb-[10px] md:mt-0 h-[30px] mt-[10px] sm:text-[25px] md:text-[25px] text-[18px] ml-[105px]
                       text-black-900 border-none outline-none"
                      size="txtPoppinsSemiBold35"
                      type="text"
                      placeholder="Jack Sparrow"
                    />
                    <Img
                      className="h-[24px] md:ml-[0] ml-[04px] md:mt-0 mt-[7px]"
                      src="../../../images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[24px] sm:h-auto md:ml-[0] mb-[20px] ml-[10px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>






                  <div className="bg-white-A700 border h-[50px] ml-[390px] w-[550px] mt-[07px] 
                  border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 
                  rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[18px] w-[20%] ml-[24px]" 
                    size="txtJostRomanBold70"
                    >
                    Mobile Number
                   </label>
                    <input
                      className="md:ml-[0] h-[30px] mb-[10px] md:mt-0 mt-[20px] sm:text-[31px] md:text-[33px]
                       text-[18px] ml-[28px] w-[400px]
                       text-black-900 border-none outline-none"
                      size="txtPoppinsSemiBold35"
                      type="text"
                      placeholder="040000000"
                    />
                    <Img
                      className="h-[24px] md:ml-[0] ml-[04px] md:mt-0 mt-[7px]"
                      src="../../../images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[24px] sm:h-auto md:ml-[0] mb-[20px] ml-[10px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>





                  <div className="bg-white-A700 border  h-[50px] ml-[390px] w-[550px] mt-[07px] border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[18px] w-[20%] ml-[30px]" 
                    size="txtJostRomanBold70"
                    >
                    Email
                   </label>
                    <input
                      className="md:ml-[0] mb-[20px] md:mt-0 h-[30px] mt-[20px] sm:text-[31px] md:text-[33px] text-[18px] ml-[45px]
                       text-black-900 border-none outline-none"
                      size="txtPoppinsSemiBold35"
                      type="text"
                      placeholder="jackspaow@gmail.com"
                    />
                    <Img
                      className="h-[24px] md:ml-[0] ml-[40px] md:mt-0 mb-[20px] mt-[15px]"
                      src="../../../images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[24px] sm:h-auto md:ml-[0] mb-[25px] ml-[10px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>





                  <div className="bg-white-A700 border h-[50px] ml-[390px] w-[550px] mt-[07px] border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[18px] w-[20%] ml-[30px]" 
                    size="txtJostRomanBold70"
                    >
                    Birth Day
                   </label>
                    <input
                      className="md:ml-[0] mb-[20px] md:mt-0 h-[30px] mt-[20px] sm:text-[31px] md:text-[33px] text-[18px] ml-[55px]
                       text-black-900 border-none outline-none"
                      size="txtPoppinsSemiBold35"
                      type="text"
                      placeholder="1 January 1925"
                    />
                    <Img
                      className="h-[24px] md:ml-[0] ml-[70px] md:mt-0 mt-[7px]"
                      src="../../../images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[24px] sm:h-auto md:ml-[0] mb-[20px] ml-[10px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>



               


                  <div className="bg-white-A700 border h-[50px] ml-[390px] w-[550px] mt-[07px] border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[18px] w-[20%] ml-[30px]" 
                    size="txtJostRomanBold70"
                    >
                    Acc Number
                   </label>
                    <input
                      className="md:ml-[0] mb-[20px] h-[30px] md:mt-0 mt-[20px] sm:text-[31px] md:text-[33px] text-[18px] ml-[30px]
                       text-black-900 border-none outline-none"
                      size="txtPoppinsSemiBold35"
                      type="text"
                      placeholder="51169857"
                    />
                    <Img
                      className="h-[24px] md:ml-[0] ml-[70px] md:mt-0 mt-[7px]"
                      src="../../../images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[24px] sm:h-auto md:ml-[0] mb-[20px] ml-[10px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>


                  <div className="bg-white-A700 border h-[50px] ml-[390px] w-[550px] mt-[07px] border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[18px] w-[20%] ml-[30px]" 
                    size="txtJostRomanBold70"
                    >
                     Password
                   </label>
                    <input
                      className="md:ml-[0] mb-[20px] h-[30px] md:mt-0 mt-[20px] sm:text-[31px] md:text-[33px] text-[18px] ml-[20px]
                       text-black-900 border-none outline-none"
                      size="txtPoppinsSemiBold35"
                      type="password"
                      placeholder="*************"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Img
                      className="h-[24px] md:ml-[0] ml-[70px] md:mt-0 mt-[7px]"
                      src="../../../images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[24px] sm:h-auto md:ml-[0] mb-[20px] ml-[10px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>





                  <div className="bg-white-A700 border h-[50px] ml-[390px] w-[550px] mt-[07px] border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[18px] w-[20%] ml-[30px]" 
                    size="txtJostRomanBold70"
                    >
                     Address
                   </label>
                    <input
                      className="md:ml-[0] mb-[20px] h-[30px] md:mt-0 mt-[20px] sm:text-[31px] md:text-[33px] text-[18px] ml-[20px]
                       text-black-900 border-none outline-none"
                      size="txtPoppinsSemiBold35"
                      type="text"
                      placeholder="221 B Bakers Street"
                    />
                    <Img
                      className="h-[24px] md:ml-[0] ml-[70px] md:mt-0 mt-[7px]"
                      src="../../../images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[24px] sm:h-auto md:ml-[0] mb-[20px] ml-[10px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>
               
                



                  <div className="bg-white-A700 border h-[50px] ml-[390px] w-[550px] mt-[07px] border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[18px] w-[30%] ml-[30px]" 
                    size="txtJostRomanBold70"
                    >
                    Pay ID
                   </label>
                    <input
                      className="md:ml-[0] mb-[20px] h-[30px] md:mt-0 mt-[20px] sm:text-[31px] md:text-[33px] text-[18px] ml-[20px]
                       text-black-900 border-none outline-none"
                      size="txtPoppinsSemiBold35"
                      type="password"
                      placeholder="2357344"
                    />
                    <Img
                      className="h-[24px] md:ml-[0] ml-[70px] md:mt-0 mt-[7px]"
                      src="../../../images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[24px] sm:h-auto md:ml-[0] mb-[20px] ml-[10px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>


                  
                
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[200px] h-[50px] sm:min-w-full md:ml-[0] ml-[400px] mt-[17px] rounded-[50px] sm:text-[35px] md:text-[41px] text-[22px] p-[10px] text-center"
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
            {/* <div className="bg-gray-700_01 h-[809px] mb-[941px] rounded-[10px] w-[1%]"></div> */}
          </div>
          <Line className="bg-black-900_72 h-0.5 mt-[10px] w-full" />
          <Text
            className="mt-[30px] text-2xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
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