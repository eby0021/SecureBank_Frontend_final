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
          <div className="bg-light_blue-900 border border-black-900 border-solid flex flex-col max-h-[50px] h-full items-end justify-start  p-0.5 shadow-bs w-full">
            <div className="flex flex-col items-center justify-start h-full mb-0.5 mr-3.5 w-[2%] md:w-full">
              <Img className="h-[50px]" src="images/img_plus.svg" alt="plus" />
            </div>
          </div>
          <Text
            className="absolute max-h-[85px] inset-y-[0] left-[2%] my-auto md:text-5xl text-[30px] text-white-A700"
            size="txtPoppinsRegular30"
          >
            Secure Bank
          </Text>
        </div>




        
        <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start max-w-[400px] max-h-[520px] mt-[0px] mx-auto p-[10px] md:px-5 rounded-[50px] shadow-bs1 w-[100%] ">
          <Img
            className="h-[65px] w-[65px]"
            src="images/img_iconbank.svg"
            alt="iconbank"
          />
          <div className="h-[169px] relative w-[37%] sm:w-full">
            <Text
              className="m-auto sm:text-[15px] md:text-[15px] mt-[15px] text-[15px] text-blue_gray-900 text-center"
              size="txtPoppinsBold15"
            >
              <>
                Signup
                <br />
                Secure Bank
              </>
            </Text>
            <Line className="absolute bg-light_blue-900 h-[5px] mt-[36px] inset-[0] justify-center m-auto w-[48%]" />
          </div>
          <div className="flex flex-col items-start justify-start mb-[5px] mt-[20px] w-[90%] md:w-full">
            <div className="bg-white-A700 border border-light_blue-900 border-solid flex
             sm:flex-col flex-row sm:gap-10 items-end justify-between max-h-[50px] pl-[5px] py-[5px]
              rounded-tl-[10px] rounded-tr-[10px] w-[100%]">
             <input
            type="email"
            className="sm:ml-[0] sm:text-[31px] md:text-[15px] text-[15px] text-gray-700 border-none outline-none"
            size="txtPoppinsBold15"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
              <Img
                className="h-[20px] md:h-auto sm:mt-0 mb-1.5 object-cover rounded-[10px]"
                src="images/img_keyboard8419852.png"
                alt="keyboard8419852"
              />
            </div>
            <Line className="bg-light_blue-900 h-[5px] md:ml-[0] ml-[0px] mt-[0px] w-[100%]" />
            <div className="bg-white-A700 border border-light_blue-900 max-h-[50px] border-solid flex sm:flex-col flex-row sm:gap-10 items-end justify-between mt-[20px] pl-[5px] py-[5px] rounded-tl-[10px] rounded-tr-[10px] w-[100%]">
            <input
            type="password"
            className="sm:ml-[0] sm:text-[31px] md:text-[15px] text-[15px] text-gray-700 border-none outline-none"
            size="txtPoppinsBold15"
            placeholder="Enter Your Password"
            value={userPassword}
            onChange={(e) => setuserPassword(e.target.value)}
            />
              <Img
                className="h-[20px] md:h-auto sm:mt-0 mb-1.5 object-cover rounded-[10px]"
                src="images/img_keyboard8419852.png"
                alt="keyboard8419852_One"
              />
            </div>
            <Line className="bg-light_blue-900 h-[5px] md:ml-[0] ml-[0px] mt-[0px] w-[100%]" />
            <div className="bg-white-A700 border border-light_blue-900 max-h-[50px] border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[20px] pl-2 py-2 rounded-tl-[10px] rounded-tr-[10px] w-[100%]">
              <input
                type="password"
                className="sm:ml-[0] sm:text-[31px] md:text-[15px] text-[15px] text-gray-700 border-none outline-none"
                size="txtPoppinsBold15"
                placeholder="Re-Enter Your Password"
              />
              <Img
                className="h-[20px] md:h-auto object-cover rounded-[10px]"
                src="images/img_keyboard8419852.png"
                alt="keyboard8419852_Two"
              />
            </div>
            <Line className="bg-light_blue-900 h-[5px] md:ml-[0] ml-[0px] mt-[0px] w-[100%]" />
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
            className="bg-light_blue-900 font-semibold h-[50px] justify-center md:ml-[0] ml-[20px] mt-[30px] pb-2 pt-[7px] sm:px-5 px-[35px] rounded-[47px] sm:text-[35px] md:text-[20px] text-[25px] text-center text-white-A700 w-[300px]"
             size="txtPoppinsSemiBold45"
             onClick={handleSignupLogic}
            >
             Signup
            </button>
        {/* </form> */}

            <Button
              onClick={handleLoginClick}
              className="border-[5px] border-light_blue-900 border-solid cursor-pointer font-semibold h-[50px] pt-[6px] leading-[normal] min-w-[300px] sm:min-w-full md:ml-[0] ml-[20px] mt-[20px] rounded-[47px] sm:text-[35px] md:text-[20px] text-[25px] text-center"
              color="white_A700"
            >
              Login
            </Button>
          </div>
        </div>
        <Line className="bg-black-900_72 h-0.5 mt-[50px] w-full" />
        <div className="mt-[15px]  sm:text-[32px] md:text-[10px] text-black-900 text-center">
          Copyrights © 2023 Secure Bank All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default SignupPage30Page;