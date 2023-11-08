import React, { useState, Component, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Keyboard from "react-simple-keyboard";
import 'react-simple-keyboard/build/css/index.css';
import { Button, Img, Line, Text } from "components";
import { useHistory} from "react-router-dom";
import {useNavigate} from "react-router-dom";
const LoginPage30Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate ();
  // const history = useHistory();
  const handleSignupLogic = () => {
    navigate("/signuppage30")
  };
 
  const handleLoginLogic = async () => {
    try {
      if (!email || !password) {
        alert('Fill in all the required fields');
        return;
      } else {
        // Prepare the request body
        const requestBody = {
          email: email,
          password: password,
        };

        // Send the POST request to the backend
        const response = await fetch('http://localhost:8080//sys/user/loginCheck', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log("responseData",responseData)
          if (responseData > 0) {
            // User logged in successfully, and responseData contains userID
            const userID= responseData;
            console.log('userID:', userID);
            console.log('URL:', `/homepageeverydayaccount30webfeeling?userID=${userID}`);
            alert('Login successful');
            

            // Now you can append the userID to request parameters or perform other actions
            // history.push(`/homepageeverydayaccount30webfeeling?userID=${userID}`);
            // window.location.href = `/homepageeverydayaccount30webfeeling?userID=${userID}`;
            navigate(`/homepageeverydayaccount30webfeeling/userID=${userID}`)

          } else {
            // Handle the case where the userID is missing in the response
            alert('Login successful, but userID is missing.');
          }
          // Redirect to another page or perform other actions upon successful login
        } else {
          alert('login failed');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const [isRecaptchaChecked, setIsRecaptchaChecked] = useState(false);
  const recaptchaRef = useRef();


  const handleRecaptchaChange = (value) => {
    setIsRecaptchaChecked(!!value);
  };
  const onKeyPress = (button) => {
    console.log("Button pressed", button);
  };

  const [emailKeyboardVisible, setEmailKeyboardVisible] = useState(false);
  const [passwordKeyboardVisible, setPasswordKeyboardVisible] = useState(false);

  const toggleEmailKeyboard = () => {
    setEmailKeyboardVisible(!emailKeyboardVisible);
  };

  const togglePasswordKeyboard = () => {
    setPasswordKeyboardVisible(!passwordKeyboardVisible);
  };

  const onChangeEmail = (input) => {
    setEmail(input);
  };

  const onChangePassword = (input) => {
    setPassword(input);
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[49px] w-full">
        <div className="font-poppins h-[65px] md:px-5 relative w-full">
          <div className="bg-light_blue-900 border border-black-900 border-solid flex flex-col h-full items-end justify-start m-auto p-[7px] shadow-bs w-full">
            <div className="flex flex-col items-center justify-start mr-[11px] w-[5%] md:w-full">
              <Img className="h-[41px] mt-[5px]" src="images/img_plus.svg" alt="plus" />
            </div>
          </div>
          <Text
            className="absolute h-max inset-y-[0] left-[2%] my-auto md:text-5xl text-[40px] text-white-A700"
            size="txtPoppinsRegular64"
          >
            Secure Bank
          </Text>
        </div>
        <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start max-w-[800px] mt-[15px] mx-auto p-[18px] md:px-5 rounded-[50px] shadow-bs1 w-full">
          <div className="flex flex-col items-center justify-start w-[72%] md:w-full">
            <Img
              className="h-[40px] w-[80px]"
              src="images/img_iconbank_black_900_96x110.svg"
              alt="iconbank"
            />
           <div className="h-[80px] relative w-[100%] sm:w-full">
            <Text
              className="m-auto sm:text-[20px] md:text-[26px] text-[25px] text-blue_gray-900 text-center"
              size="txtPoppinsBold50"
            >
              <>
                Login
                <br />
                Secure Bank
              </>
            </Text>
            <Line className="absolute bg-light_blue-900 h-[5px] inset-[0] justify-center  w-[28%] mt-[36px] ml-[200px]" />
          </div>
            <div className="flex flex-col items-start justify-start mt-[0px] w-[80%]">
              <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-0 rounded-tl-[10px] rounded-tr-[10px] w-full">
                <input
                  type="email"
                  className="ml-3.5 sm:ml-[0] sm:text-[21px] md:text-[23px] text-[22px] text-gray-700  border-none outline-none"
                  placeholder="Enter Your Email"
                  value={email} // Set the value attribute to the email state
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Img
                  className="h-[54px] md:h-auto mr-[5px] object-cover rounded-[10px]"
                  src="images/img_keyboard8419852_74x129.png"
                  alt="keyboard8419852"
                  onClick={toggleEmailKeyboard}  
                />
              </div>
              {emailKeyboardVisible && (
            <div>
          <Keyboard onChange={onChangeEmail} onKeyPress={onKeyPress} />
            </div>
          )}
              <Line className="bg-light_blue-900 h-[5px] mt-0 w-full" />
              {/* <Text
                className="italic ml-1.5 md:ml-[0] mt-[7px] text-xl md:text-[22px] text-center text-light_blue-900 sm:text-xl"
                size="txtPoppinsMediumItalic24"
              >
                Forgot Login ID?
              </Text> */}
              <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[30px]  rounded-tl-[10px] rounded-tr-[10px] w-full">
                <input
                  type="password"
                  className="ml-3.5 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[22px] text-gray-700  border-none outline-none"
                  placeholder="Enter Your Password"
                  value={password} // Set the value attribute to the email state
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Img
                  className="h-[54px] md:h-auto mr-[5px] object-cover rounded-[10px]"
                  src="images/img_keyboard8419852_74x129.png"
                  alt="keyboard8419852_One"
                  onClick={togglePasswordKeyboard}
                />
              </div>
              {passwordKeyboardVisible && (
            <div>
              <Keyboard onChange={onChangePassword} onKeyPress={onKeyPress} />
            </div>
          )}
              <Line className="bg-light_blue-900 h-[5px] mt-[0px] w-full" />
              {/* <Text
                className="italic mt-[7px] text-xl md:text-[22px] text-center text-light_blue-900 sm:text-xl"
                size="txtPoppinsMediumItalic24"
              >
                Forgot Password?
              </Text> */}
              {/* <div className="flex sm:flex-col flex-row gap-[13px] items-start justify-end md:ml-[0] ml-[265px] mt-0.5 w-[59%] md:w-full">
                <div className="bg-white-A700 border border-black-900 border-solid h-[50px] mb-[3px] rounded-[10px] w-[50px]"></div>
                <Text
                  className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                  size="txtPoppinsSemiBold35"
                >
                  Keep me signed in
                </Text>
              </div> */}
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-end w-[91%] md:w-full mt-[20px]">
                  {/* <div className="bg-white-A700 border-2 border-gray-700_01 border-solid h-[20px] mb-[15px] sm:mt-0 mt-[10px] w-[25px]"></div> */}
                  {/* <input
                    type="checkbox"
                    id="recaptchaCheckbox"
                    onChange={() => {
                      recaptchaRef.current.execute();
                    }}
                  /> */}
                  {/* <label htmlFor="recaptchaCheckbox">I'm not a robot</label> */}

                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Ld_7AQpAAAAAJtRHHrx8rUF_Uy7T1Z5w-uSxo8n"
                    onChange={handleRecaptchaChange}
                  />
                </div>
              <Button className="cursor-pointer font-semibold leading-[normal]
               min-w-[200px] sm:min-w-full ml-[130px] md:ml-[20px] mt-[10px] rounded-[47px] 
               sm:text-[35px] md:text-[41px] text-[25px] text-center"
               disabled={!isRecaptchaChecked}
               onClick={handleLoginLogic}
               type="submit"
               >
                Login
              </Button>
              {/* <Button
                className="border-[5px] border-light_blue-900 border-solid cursor-pointer font-semibold leading-[normal]
                 min-w-[200px] sm:min-w-full md:ml-[0] ml-[130px] mt-[10px] rounded-[47px] sm:text-[35px] md:text-[41px] text-[25px] text-center"
                color="white_A700"
                onClick={handleSignupLogic}
              >
                Signup
              </Button> */}
            </div>
          </div>
        </div>
        <Line className="bg-black-900_72 h-0.5 mt-[50px] w-full" />
        <Text
          className="mt-[23px] text-2xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
          size="txtJostRomanRegular36"
        >
          Copyrights © 2023 Secure Bank All Rights Reserved
        </Text>
      </div>
    </>
  );
};

export default LoginPage30Page;
