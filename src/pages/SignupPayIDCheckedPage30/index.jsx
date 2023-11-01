import React, { useState } from "react";

import { Button, Img, Line, Text } from "components";
import { useNavigate  } from "react-router-dom";

const SignupPayIDCheckedPage30Page = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  // const [fatherName, setFatherName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [payId, setPayID] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
  const navigate = useNavigate ();
  const handleLoginClick = () => {
    navigate("/LoginPage30")
  };




  const  handleSignupLogicPage2 = async(e) => {
    // Extract user data from localStorage (from page 1)
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    e.preventDefault();

    if (!storedUserData) {
      // Handle the case where user data is not found in localStorage
      console.error("User data not found in localStorage");
      return;
    }
  
    // Create a new object to store combined data from page 1 and page 2
    const userDataPage2 = {
      ...storedUserData, // Data from page 1
      firstName,
      lastName,
      middleName,
      dateOfBirth,
      mobileNumber,
      payId,
      residentialAddress,
    };
    if (
      !firstName ||
      !lastName ||
      !middleName ||
      !dateOfBirth ||
      !mobileNumber ||
      !residentialAddress
    ) {
    //  console.log("Fill in all the required fields");
      alert("Fill in all the required fields");
      return;
    }
    // Send the POST request to the backend
    const response = await fetch('http://localhost:8080//sys/user/insertOne', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDataPage2),
    });

    if (response.ok) {
      alert('user registered successfully');
      navigate("/loginpage30");
      // Redirect to another page or perform other actions upon successful login
    } else {
      alert('Failed to register user');
    }
  
    // Save the combined user data to localStorage
    // localStorage.setItem("userDataPage2", JSON.stringify(userDataPage2));
    // const response = await fetch("http://localhost:3001/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: storedUserData.email,
    //     password: storedUserData.password,
    //     firstName,
    //     lastName,
    //     middleName,
    //     dateOfBirth,
    //     mobileNumber,
    //     residentialAddress,
    //   }),
    // }).then((response) => {
    //     if (response.status===201) {
    //       // Handle success (e.g., redirect to a success page)
    //       console.log("Data submitted successfully");
    //       alert("User registered successfully");
    //       navigate("/homepageeverydayaccount30webfeeling"); // Redirect to a success page
    //     } else {
    //       // Handle error (e.g., show an error message)
    //       console.error("Error submitting data");
    //     }
    //   })
    //   .catch((error) => {
    //     // Handle network or other errors
    //     console.error("Error:", error);
    //   });
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[72px] w-full">
    

      <div className="font-poppins md:h-[95px] h-[50px] md:px-5 relative w-full">
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

        
        
        
        
        <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start max-w-[700px] 
        mt-[20px] mx-auto p-[21px] md:px-5 rounded-[50px] shadow-bs1 w-[68%]">
          <div className="flex flex-col items-center justify-start mb-[45px] w-[70%] md:w-full">
            <Img
              className="h-[50px]"
              src="images/img_iconbank_black_900.svg"
              alt="iconbank"
            />
            <div className="h-[60px] relative w-[69%] sm:w-full">
              <Text
                className="m-auto sm:text-[40px] md:text-[46px] text-[12px] text-blue_gray-900 text-center"
                size="txtPoppinsBold50"
              >
                <>
                  Signup
                  <br />
                  Secure Bank
                </>
              </Text>
              <Line className="absolute bg-light_blue-900 h-[5px] mt-[46px] inset-[0] justify-center m-auto
               w-[48%]" />
            </div>
            <div className="flex flex-col items-start justify-start mt-[1px] w-full">
              <div className="bg-white-A700 border border-light_blue-900 border-solid flex flex-row sm:gap-10 
              items-start justify-between pl-1 py-1 rounded-tl-[10px] rounded-tr-[10px] w-full">
              <input
            className="sm:ml-[0] sm:text-[31px] md:text-[15px] text-[15px] text-gray-700 border-none outline-none"
            type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
                <Img
                className="h-[22px] md:h-auto sm:mt-0 mb-1.5 object-cover rounded-[10px] mt-[7px] mr-[7px]"
                src="images/img_keyboard8419852.png"
                alt="keyboard8419852"
              />
              </div>
              <Line className="bg-light_blue-900 h-[5px] mt-[3px] w-full" />
              <div className="bg-white-A700 border border-light_blue-900 border-solid flex
               flex-row sm:gap-10 items-center justify-between mt-[20px] pl-2 py-2 rounded-tl-[10px]
                rounded-tr-[10px] w-full">
              <input
            className="sm:ml-[0] sm:text-[31px] md:text-[15px] text-[15px] text-gray-700 border-none outline-none"
            type="text"
               placeholder="Middle Name"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                />
                <Img
                className="h-[22px] md:h-auto sm:mt-0 mb-1.5 object-cover rounded-[10px] mt-[7px] mr-[7px]"
                src="images/img_keyboard8419852.png"
                  alt="keyboard8419852_One"
                />
              </div>
              <Line className="bg-light_blue-900 h-[5px] mt-1 w-full" />

              <div className="bg-white-A700 border border-light_blue-900 border-solid flex flex-row sm:gap-10
               items-end justify-between mt-[20px] pl-[5px] py-[5px] rounded-tl-[10px] rounded-tr-[10px] w-full">              
             <input
            className="sm:ml-[0] sm:text-[31px] md:text-[15px] text-[15px] text-gray-700 border-none
             outline-none"
            type="text"
               placeholder="Last Name"
               value={lastName}
               onChange={(e) => setLastName(e.target.value)}
              />
                <Img
                className="h-[22px] md:h-auto sm:mt-0 mb-1.5 object-cover rounded-[10px] mt-[7px] mr-[7px]"
                src="images/img_keyboard8419852.png"
                  alt="keyboard8419852_Two"
                />
              </div>
              <Line className="bg-light_blue-900 h-[5px] mt-1 w-full" />

              


              
              {/* <div className="bg-white-A700 border border-light_blue-900 border-solid flex flex-row sm:gap-10 items-end justify-between mt-[42px] pl-[5px] py-[5px] rounded-tl-[10px] rounded-tr-[10px] w-full">              
             <input
               className="ml-[21px] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700 outline-none border-none bg-transparent"
               type="text"
               placeholder="Father's Name"
               value={fatherName}
               onChange={(e) => setFatherName(e.target.value)}
              />
                <Img
                  className="h-[74px] md:h-auto mt-1.5 object-cover rounded-[10px]"
                  src="images/img_keyboard8419852.png"
                  alt="keyboard8419852_Two"
                />
              </div>
              <Line className="bg-light_blue-900 h-[5px] mt-1 w-full" /> */}





            <div className="bg-white-A700 border border-light_blue-900 border-solid flex
               flex-row sm:gap-10 items-center justify-between mt-[20px] pl-2 py-2 rounded-tl-[10px]
                rounded-tr-[10px] w-full">    
                <input
                className="sm:ml-[0] sm:text-[31px] md:text-[15px] text-[15px] text-gray-700 border-none outline-none"
                 type="text"
               placeholder="YYYY-MM-DD"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                />

                <Img
                className="h-[22px] md:h-auto sm:mt-0 mb-1.5 object-cover rounded-[10px] mt-[7px] mr-[7px]"
                src="images/img_keyboard8419852.png"
                  alt="keyboard8419852_Three"
                />
              </div>
              <Line className="bg-light_blue-900 h-[5px] mt-1 w-full" />
              <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[20px] pl-2 py-2 rounded-tl-[10px] rounded-tr-[10px] w-full">
              <input
                className="sm:ml-[0] sm:text-[31px] md:text-[15px] text-[15px] text-gray-700 border-none outline-none"
                type="text"
               placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />

                <Img
                className="h-[22px] md:h-auto sm:mt-0 mb-1.5 object-cover rounded-[10px] mt-[7px] mr-[7px]"
                src="images/img_keyboard8419852.png"
                  alt="keyboard8419852_Four"
                />
              </div>
              <Line className="bg-light_blue-900 h-[5px] mt-[5px] w-full" />



              <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col
               flex-row sm:gap-10 items-center justify-between mt-[20px] pl-2 py-2 rounded-tl-[10px] 
               rounded-tr-[10px] w-full">
              <input
                className="sm:ml-[0] sm:text-[31px] md:text-[15px] text-[15px] text-gray-700 border-none
                 outline-none"
                type="text"
               placeholder="Pay ID"
                value={payId}
                onChange={(e) => setPayID(e.target.value)}
              />

                <Img
                className="h-[22px] md:h-auto sm:mt-0 mb-1.5 object-cover rounded-[10px] mt-[7px] mr-[7px]"
                src="images/img_keyboard8419852.png"
                  alt="keyboard8419852_Four"
                />
              </div>
              <Line className="bg-light_blue-900 h-[5px] mt-[5px] w-full" />



              <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col
               flex-row sm:gap-10 items-center justify-between mt-[20px] pl-2 py-2 rounded-tl-[10px] rounded-tr-[10px] w-full">
              <input
                className="sm:ml-[0] sm:text-[31px] md:text-[15px] text-[15px] text-gray-700 border-none outline-none"
                type="text"
                placeholder="Residential Address"
                value={residentialAddress}
                onChange={(e) => setResidentialAddress(e.target.value)}
              />

                <Img
                className="h-[22px] md:h-auto sm:mt-0 mb-1.5 object-cover rounded-[10px] mt-[7px] mr-[7px]"
                src="images/img_keyboard8419852.png"
                  alt="keyboard8419852_Six"
                />
              </div>
              <Line className="bg-light_blue-900 h-[5px] mt-[5px] w-full" />
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-start mt-[13px] w-[82%] md:w-full">
               
              </div>
              <form onSubmit={(e)=>handleSignupLogicPage2(e)}>
          <button
           type="submit"
            className="bg-light_blue-900 font-semibold h-[65px] justify-center md:ml-[0] ml-[130px] mt-[0px] pb-2 pt-[17px] sm:px-5 px-[35px]
             rounded-[47px] sm:text-[35px] md:text-[41px] text-[25px] text-center text-white-A700 w-[200px]"
             size="txtPoppinsSemiBold45"
            //  onClick={handleSignupLogic}
            >
             Signup
            </button>
        </form>
              <Button
              onClick={handleLoginClick}
              className="border-[5px] border-light_blue-900 border-solid cursor-pointer font-semibold 
              leading-[normal] w-[200px] sm:min-w-full md:ml-[0] ml-[130px] mt-[10px] rounded-[47px] 
              sm:text-[35px] md:text-[41px] text-[25px] text-center"
              color="white_A700"
            >
              Login
            </Button>
            </div>
          </div>
        </div>
        <Line className="bg-black-900_72 h-0.5 mt-[18px] w-full" />
        <Text
          className="mt-2 text-2xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
          size="txtJostRomanRegular36"
        >
          Copyrights © 2023 Secure Bank All Rights Reserved
        </Text>
      </div>
    </>
  );
};

export default SignupPayIDCheckedPage30Page;