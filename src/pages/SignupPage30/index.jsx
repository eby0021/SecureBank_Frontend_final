import React, { useState } from "react";

import { Button, Img, Line, Text } from "components";
import { useNavigate  } from "react-router-dom";
       
const SignupPage30Page = () => {
  const [email, setEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [rePass, setRePass] = useState("");
  const navigate = useNavigate ();
  const handleLoginClick = () => {
    navigate("/LoginPage30")
  };
  const handleSignupLogic = () => {
    if (
      !email ||
      !userPassword 
    ) {
      alert("Fill in all the required fields");
      return;
    }
    const userData = {
      email,
      userPassword,
      // profilePicture,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    navigate("/SignupPayIDCheckedPage30")
  }
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   // Create a FormData object to send the data as a multipart/form-data request
  //   const formData = new FormData();
  //   formData.append("email", email);
  //   formData.append("password", password);
  //   formData.append("profilePicture", profilePicture);
  
  //   try {
  //     const response = await fetch("your-backend-api-url", {
  //       method: "POST",
  //       body: formData,
  //     });
  
  //     if (response.ok) {
  //       // Handle success (e.g., redirect to a success page)
  //     } else {
  //       // Handle error (e.g., show an error message)
  //     }
  //   } catch (error) {
  //     // Handle network or other errors
  //   }
  // };
  
    return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[66px] w-full">
        <div className="font-poppins md:h-[95px] h-[97px] md:px-5 relative w-full">
          <div className="bg-light_blue-900 border border-black-900 border-solid flex flex-col h-full items-end justify-start m-auto p-1.5 shadow-bs w-full">
            <div className="flex flex-col items-center justify-start mb-0.5 mr-3.5 w-[4%] md:w-full">
              <Img className="h-[81px]" src="images/img_plus.svg" alt="plus" />
            </div>
          </div>
          <Text
            className="absolute h-max inset-y-[0] left-[2%] my-auto md:text-5xl text-[64px] text-white-A700"
            size="txtPoppinsRegular64"
          >
            Secure Bank
          </Text>
        </div>
        <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start max-w-[1000px] mt-[73px] mx-auto p-[38px] md:px-5 rounded-[50px] shadow-bs1 w-[100%]">
          <Img
            className="h-[120px] w-[120px]"
            src="images/img_iconbank.svg"
            alt="iconbank"
          />
          <div className="h-[169px] relative w-[37%] sm:w-full">
            <Text
              className="m-auto sm:text-[40px] md:text-[46px] text-[50px] text-blue_gray-900 text-center"
              size="txtPoppinsBold50"
            >
              <>
                Signup
                <br />
                Secure Bank
              </>
            </Text>
            <Line className="absolute bg-light_blue-900 h-[5px] inset-[0] justify-center m-auto w-[48%]" />
          </div>
          <div className="flex flex-col items-start justify-start mb-[18px] mt-[60px] w-[54%] md:w-full">
            <div className="bg-white-A700 border border-light_blue-900 border-solid flex
             sm:flex-col flex-row sm:gap-10 items-end justify-between pl-[5px] py-[5px]
              rounded-tl-[10px] rounded-tr-[10px] w-[125%]">
             <input
            type="email"
            className="sm:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700 border-none outline-none"
            size="txtPoppinsBold35"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
              <Img
                className="h-[74px] md:h-auto sm:mt-0 mt-1.5 object-cover rounded-[10px]"
                src="images/img_keyboard8419852.png"
                alt="keyboard8419852"
              />
            </div>
            <Line className="bg-light_blue-900 h-[5px] md:ml-[0] ml-[0px] mt-[0px] w-[125%]" />
            <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-10 items-end justify-between mt-11 pl-[5px] py-[5px] rounded-tl-[10px] rounded-tr-[10px] w-[125%]">
            <input
            type="password"
            className="sm:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700 border-none outline-none"
            size="txtPoppinsBold35"
            placeholder="Enter Your Password"
            value={userPassword}
            onChange={(e) => setuserPassword(e.target.value)}
            />
              <Img
                className="h-[74px] md:h-auto sm:mt-0 mt-1 object-cover rounded-[10px]"
                src="images/img_keyboard8419852.png"
                alt="keyboard8419852_One"
              />
            </div>
            <Line className="bg-light_blue-900 h-[5px] md:ml-[0] ml-[0px] mt-[0px] w-[125%]" />
            <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[74px] pl-2 py-2 rounded-tl-[10px] rounded-tr-[10px] w-[125%]">
              <input
                type="password"
                className="sm:ml-[0] ml-[21px] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700 border-none outline-none"
                size="txtPoppinsBold35"
                placeholder="Re-Enter Your Password"
              />
              <Img
                className="h-[74px] md:h-auto object-cover rounded-[10px]"
                src="images/img_keyboard8419852.png"
                alt="keyboard8419852_Two"
              />
            </div>
            <Line className="bg-light_blue-900 h-[5px] md:ml-[0] ml-[0px] mt-[0px] w-[125%]" />
            {/* <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[0px] mt-[91px] p-[7px] rounded-tl-[10px] rounded-tr-[10px] w-[125%] md:w-full">
            <input
            type="file"
            className="ml-4 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
            size="txtPoppinsBold35"
            placeholder="Upload Profile Picture"
            onChange={(e) => setProfilePicture(e.target.files[0])}
            />
              <Img
                className="h-[87px] sm:mt-0 mt-[22px]"
                src="images/img_checkmark.svg"
                alt="checkmark"
              />
            </div>
            <Line className="bg-light_blue-900 h-[5px] md:ml-[0] ml-[0px] mt-[0px] w-[125%]" /> */}
          {/* <form onSubmit={handleSubmit}> */}
          <button
           type="submit"
            className="bg-light_blue-900 font-semibold h-[94px] justify-center md:ml-[0] ml-[35px] mt-[204px] pb-2 pt-[17px] sm:px-5 px-[35px] rounded-[47px] sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700 w-[547px]"
             size="txtPoppinsSemiBold45"
             onClick={handleSignupLogic}
            >
             Signup
            </button>
        {/* </form> */}

            <Button
              onClick={handleLoginClick}
              className="border-[5px] border-light_blue-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[547px] sm:min-w-full md:ml-[0] ml-[35px] mt-[59px] rounded-[47px] sm:text-[35px] md:text-[41px] text-[45px] text-center"
              color="white_A700"
            >
              Login
            </Button>
          </div>
        </div>
        <Line className="bg-black-900_72 h-0.5 mt-[156px] w-full" />
        <div className="mt-[59px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center">
          Copyrights © 2023 Secure Bank All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default SignupPage30Page;
