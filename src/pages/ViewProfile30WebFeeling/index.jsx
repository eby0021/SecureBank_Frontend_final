import React, { useEffect, useState } from 'react';
import { useNavigate, useParams  } from "react-router-dom";
import { Button, Img, Line, List, Text } from "components";
import Keyboard from "react-simple-keyboard";
import 'react-simple-keyboard/build/css/index.css';
const ViewProfile30WebFeelingPage = () => {
  const navigate = useNavigate();
  const { userID } = useParams(); // Get the userID from the URL params
  const handleChatbotClick = () => {
    navigate(`/chatbotpage30webfeeling/${userID}`);
  }
  const handleBackButtonClick = () => {
    navigate(`/homepageeverydayaccount30webfeeling/${userID}`)
  };
  const handleLogoutClick = () => {
    alert('user has been logged out')
    navigate('/')
  
  }

  const [profileData, setProfileData] = useState({
    firstName: '',
    mobileNumber: '',
    email: '',
    dateOfBirth: '',
    accountNumber: '',
    userPassword: '',
    payId: '',
  });

  useEffect(() => {
    // Fetch user profile data
    fetchUserProfileData();
  }, []); // Runs once when the component mounts

  const fetchUserProfileData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/sys/user/getProfile?${userID}`, {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        // Update the state with the fetched data
        setProfileData({
          firstName: data.firstName || '',
          mobileNumber: data.mobileNumber || '',
          email: data.email || '',
          dateOfBirth: data.dateOfBirth || '',
          accountNumber: data.accountNumber || '',
          userPassword: '*************', // You should not fetch the password for security reasons
          payId: data.payId || '',
        });
      } else {
        console.error('Failed to fetch profile data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [updatedProfileData, setUpdatedProfileData] = useState({
    firstName: '',
    mobileNumber: '',
    email: '',
    dateOfBirth: '',
    userPassword: ''
});

const handleUpdateProfile = async () => {
    try {
      const updatedData = {
        ...updatedProfileData, // Merge the updated data
    };
        const response = await fetch(`http://localhost:8080/sys/user/updateProfile?${userID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

        if (response.ok) {
            // alert('Profile data updated successfully');
            // You can optionally fetch and update the profile data again if needed
            window.location.reload();
        } else {
            console.error('Failed to update profile data');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};





const [nameKeyboardVisible, setNameKeyboardVisible] = useState(false);
const [numberKeyboardVisible, setNumberKeyboardVisible] = useState(false);
const [emailKeyboardVisible, setEmailKeyboardVisible] = useState(false);
const [dobKeyboardVisible, setDOBKeyboardVisible] = useState(false);
const [passwordKeyboardVisible, setPasswordKeyboardVisible] = useState(false);


const toggleNameKeyboard = () => {
  setNameKeyboardVisible(!nameKeyboardVisible);
};

const toggleNumberKeyboard = () => {
  setNumberKeyboardVisible(!numberKeyboardVisible);
};

const toggleEmailKeyboard = () => {
  setEmailKeyboardVisible(!emailKeyboardVisible);
};

const toggleDOBKeyboard = () => {
  setDOBKeyboardVisible(!dobKeyboardVisible);
};

const togglePasswordKeyboard = () => {
  setPasswordKeyboardVisible(!passwordKeyboardVisible);
};

const onChangeName = (input) => {
  setUpdatedProfileData({ ...updatedProfileData, firstName: input })
};

const onChangeNumber = (input) => {
  setUpdatedProfileData({ ...updatedProfileData, mobileNumber: input })
};

const onChangeEmail = (input) => {
  setUpdatedProfileData({ ...updatedProfileData, email: input })
};

const onChangeDOB = (input) => {
  setUpdatedProfileData({ ...updatedProfileData, dateOfBirth: input })
};

const onChangePassword = (input) => {
  setUpdatedProfileData({ ...updatedProfileData, userPassword: input })
};
const onKeyPress = (button) => {
  console.log("Button pressed", button);
};
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
                      className="md:ml-[0] mb-[10px] md:mt-0 h-[30px] mt-[10px] sm:text-[25px] md:text-[25px]
                       text-[18px] ml-[10px]
                       text-black-900 border-none outline-none"
                      size="txtPoppinsSemiBold35"
                      type="text"
                      value={updatedProfileData.firstName}
                      onChange={(e) => setUpdatedProfileData({ ...updatedProfileData, firstName: e.target.value })}
                      placeholder={profileData.firstName}
                    />
                    <Img
                      className="h-[24px] md:ml-[0] ml-[80px] md:mt-0 mt-[7px]"
                      src="../../../images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[24px] sm:h-auto md:ml-[0] mb-[20px] ml-[10px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                      onClick={toggleNameKeyboard}
                      />
                    </div>
                    {nameKeyboardVisible && (
                  <div className='ml-[400px]'>
                  <Keyboard onChange={onChangeName} onKeyPress={onKeyPress} />
                  </div>
                )}







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
                      value={updatedProfileData.mobileNumber}
                      onChange={(e) => setUpdatedProfileData({ ...updatedProfileData, mobileNumber: e.target.value })}
                      placeholder={profileData.mobileNumber}
                    />
                    <Img
                      className="h-[24px] md:ml-[0] ml-[04px] md:mt-0 mt-[7px]"
                      src="../../../images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[27px] sm:h-auto md:ml-[0] mb-[20px] ml-[10px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                      onClick={toggleNumberKeyboard}
                      />
                    </div>
                    {numberKeyboardVisible && (
                  <div className='ml-[400px]'>
                  <Keyboard onChange={onChangeNumber} onKeyPress={onKeyPress} />
                  </div>
                )}






                  <div className="bg-white-A700 border  h-[50px] ml-[390px] w-[550px] mt-[07px] border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[18px] w-[20%] ml-[30px]" 
                    size="txtJostRomanBold70"
                    >
                    Email
                   </label>
                    <input
                      className="md:ml-[0] mb-[20px] md:mt-0 h-[30px] mt-[20px] sm:text-[31px] md:text-[33px] 
                      text-[18px] ml-[15px]
                       text-black-900 border-none outline-none"
                      size="txtPoppinsSemiBold35"
                      type="text"
                      value={updatedProfileData.email}
                      onChange={(e) => setUpdatedProfileData({ ...updatedProfileData, email: e.target.value })}
                      placeholder={profileData.email}
                    />
                    <Img
                      className="h-[24px] md:ml-[0] ml-[90px] md:mt-0 mb-[20px] mt-[15px]"
                      src="../../../images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[24px] sm:h-auto md:ml-[0] mb-[25px] ml-[10px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                      onClick={toggleEmailKeyboard}
                      />
                    </div>
                    {emailKeyboardVisible && (
                  <div className='ml-[400px]'>
                  <Keyboard onChange={onChangeEmail} onKeyPress={onKeyPress} />
                  </div>
                )}






                  <div className="bg-white-A700 border h-[50px] ml-[390px] w-[550px] mt-[07px] border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[18px] w-[20%] ml-[30px]" 
                    size="txtJostRomanBold70"
                    >
                    Birth Day
                   </label>
                    <input
                      className="md:ml-[0] mb-[20px] md:mt-0 h-[30px] mt-[20px] sm:text-[31px] md:text-[33px] 
                      text-[18px] ml-[0px]
                       text-black-900 border-none outline-none"
                      size="txtPoppinsSemiBold35"
                      type="text"
                      value={updatedProfileData.dateOfBirth}
                      onChange={(e) => setUpdatedProfileData({ ...updatedProfileData, dateOfBirth: e.target.value })}
                      placeholder={profileData.dateOfBirth}
                    />
                    <Img
                      className="h-[24px] md:ml-[0] ml-[90px] md:mt-0 mt-[7px]"
                      src="../../../images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[24px] sm:h-auto md:ml-[0] mb-[20px] ml-[10px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                      onClick={toggleDOBKeyboard}
                      />
                    </div>
                    {dobKeyboardVisible && (
                  <div className='ml-[400px]'>
                  <Keyboard onChange={onChangeDOB} onKeyPress={onKeyPress} />
                  </div>
                )}


                


                  <div className="bg-white-A700 border h-[50px] ml-[390px] w-[550px] mt-[07px] border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[18px] w-[20%] ml-[30px]" 
                    size="txtJostRomanBold70"
                    >
                     Password
                   </label>
                    <input
                      className="md:ml-[0] mb-[20px] h-[30px] md:mt-0 mt-[20px] sm:text-[31px] md:text-[33px] 
                      text-[18px] ml-[0px]
                       text-black-900 border-none outline-none"
                      size="txtPoppinsSemiBold35"
                      type="password"
                      value={updatedProfileData.userPassword}
                      onChange={(e) => setUpdatedProfileData({ ...updatedProfileData, userPassword: e.target.value })}
                      placeholder={profileData.userPassword}
                      // value={userPassword}
                      // onChange={(e) => setPassword(e.target.value)}
                    />
                    <Img
                      className="h-[24px] md:ml-[0] ml-[110px] md:mt-0 mt-[7px]"
                      src="../../../images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[24px] sm:h-auto md:ml-[0] mb-[20px] ml-[10px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                      onClick={togglePasswordKeyboard}
                      />
                    </div>
                    {passwordKeyboardVisible && (
                  <div className='ml-[400px]'>
                    <Keyboard onChange={onChangePassword} onKeyPress={onKeyPress} />
                  </div>
                )}


                  <div className="bg-white-A700 border h-[50px] ml-[390px] w-[550px] mt-[07px] border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[18px] w-[20%] ml-[30px]" 
                    size="txtJostRomanBold70"
                    >
                    Acc Number
                   </label>
                   <Text
                    className="md:ml-[0] mb-[20px] h-[30px] md:mt-0 mt-[20px] sm:text-[31px] md:text-[33px]
                     text-[18px] ml-[10px] text-black-900"
                    size="txtPoppinsSemiBold35">
                    {profileData.accountNumber}
                    </Text>     
                  </div>




                  <div className="bg-white-A700 border h-[50px] ml-[390px] w-[550px] mt-[07px] border-light_blue-900 
                  border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start px-0 rounded-tl-[2px] rounded-tr-[2px] ">
                   <label className=" sm:text-[31px] md:text-[33px] text-[18px] w-[30%] ml-[30px]" 
                    size="txtJostRomanBold70"
                    >
                    Pay ID
                   </label>
                   <Text
                        className="md:ml-[0] mb-[20px] h-[30px] md:mt-0 mt-[20px] sm:text-[31px] md:text-[33px] 
                        text-[18px] ml-[0px] text-black-900"
                        size="txtPoppinsSemiBold35">
                        {profileData.payId}
                      </Text>             
                  </div>


                  
                
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[200px] h-[50px] sm:min-w-full md:ml-[0] ml-[400px] mt-[17px] rounded-[50px] sm:text-[35px] md:text-[41px] text-[22px] p-[10px] text-center"
                    size="lg"
                    onClick={handleUpdateProfile}
                  >
                    Update Profile
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