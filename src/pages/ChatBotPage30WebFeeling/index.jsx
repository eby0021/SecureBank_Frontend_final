import React, { useState } from "react";
import { useNavigate, useParams  } from "react-router-dom";
import { Button, Img, Line, List, Text } from "components";
const ChatBotPage30WebFeelingPage = () => {
  const { userID } = useParams(); // Get the userID from the URL params
  const [userMessage, setUserMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate(`/homepageeverydayaccount30webfeeling/${userID}`)
  };
  const handleLogoutClick = () => {
    alert('user has been logged out')
    navigate('/')
  }
  const handleSendMessage = async () => {
    try {
        // Prepare the request body
        const requestBody = {
          userMessage
        };
        // Send the POST request to the backend
        const response = await fetch('http://localhost:8080//sys/user/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });
        if (response.ok) {
          const responseData = await response.text();
          console.log("responseData",responseData)
          
            // User logged in successfully, and responseData contains userID
            setAnswer(responseData);
            //console.log('answer:', answer);
            // console.log('URL:', `/homepageeverydayaccount30webfeeling?userID=${userID}`);
           // alert('answer received successfully');
            // Now you can append the userID to request parameters or perform other actions
            // history.push(`/homepageeverydayaccount30webfeeling?userID=${userID}`);
            // window.location.href = `/homepageeverydayaccount30webfeeling?userID=${userID}`;

         
          // Redirect to another page or perform other actions upon successful login
        } else {
          alert('process failed completely');
        }
      
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full h-[1000px]">
        <div className="flex flex-col items-center justify-start w-full h-[900px]">
         
        <div className="font-poppins md:h-24 h-[80px] md:px-5 relative w-full mb-[10px]">
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

          <div className="flex md:flex-col flex-row font-poppins md:gap-[57px] items-start
           justify-between max-w-[2313px] mt-2.5 mx-auto md:px-5 w-full h-[500px]">


            <div className="sm:h-[190px] h-[400px] md:h-[481px]  w-[60%] md:w-full ml-[300px] mt-[0px]">
              
              
              

              <div className=" bg-white-A700_01 border border-light_blue-800 border-solid bottom-[0] 
              flex flex-col inset-x-[0] items-center justify-end   mx-auto  rounded-[30px]
               shadow-bs5 w-[550px] h-[500px]">
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis saepe quia. Dolore cupiditate labore est quisquam in harum aperiam, id aliquid quas facere quos sequi eligendi, debitis beatae. Doloribus!</p> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius officiis unde provident repudiandae in perspiciatis?</p> */}
                <div className="flex md:flex-col mb-[0px] flex-row md:gap-5 items-start justify-start w-[100%] 
                md:w-full">
                  <Img
                      className="h-[30px] w-[30px] md:ml-[0] ml-[15px] mt-[10px]  "
                      src="../../../images/img_iconbacksquare.svg"
                      alt="iconbacksquare"
                      onClick={handleBackButtonClick}
                    />
                    <Img
                      className="h-[39px]md:h-auto object-cover w-[39px] ml-[100px] mt-[20px]"
                      src="../../../images/img_ai28146662.png"
                      alt="ai28146663"
                    />
                    <Text
                      className="md:ml-[0] ml-[0px] mt-[10px] md:mt-0  sm:text-4xl md:text-[38px] text-[20px] text-black-900 text-center text-shadow-ts w-[30%] sm:w-full"
                      size="txtPoppinsBold40"
                    >
                      Your Helpful Chat Bot
                    </Text>
                    
                  </div>


                           
                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex md:flex-col
                       flex-row md:gap-5 items-center justify-start mt-[30px] sm:px-5 px-7 rounded-tl-[10px] 
                       rounded-tr-[10px] w-[100%] h-[60px] md:w-full">
                        {/* <Img
                          className="h-[64px] md:h-auto rounded-[50%] w-[132px]"
                          src="images/img_ellipse22.png"
                          alt="ellipseTwentyOne"
                        /> */}
                        {/* <Line className="bg-black-900_72 md:h-0.5 h-[145px] ml-11 md:ml-[0] w-0.5 md:w-full" /> */}
                        <input
                  type="text"
                  className=" sm:ml-[0] sm:text-[31px] md:text-[33px] text-[16px] text-gray-700  border-none outline-none"
                  placeholder="Ask anything..."
                  value={userMessage} // Set the value attribute to the userMessage state
                  onChange={(e) => setUserMessage(e.target.value)}
                  
                />
                
                <Img
                          className="h-[25px] sm:h-auto md:ml-[0] object-cover rounded-[10px]
                           w-[40px] md:w-full ml-[190px]"
                          src="../../../images/img_keyboard8419852.png"
                          alt="keyboard8419852_Three"
                        />
                        
                        <Img
                          className="h-[25px] sm:h-auto md:ml-[0] object-cover rounded-[10px]
                           w-[40px] md:w-full ml-[20px]"
                          src="../../../images/sendButton2.png"
                          alt="keyboard8419852_Three"
                          onClick={handleSendMessage}
                        />
                      </div>
                      <div className="mb-[275px] mt-[20px] ml-[20px] mr-[20px]">
                        <Text>
                          {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas rem perspiciatis dignissimos vitae quia consequuntur? */}
                          {answer !== null ? `${answer}` : '...'}
                        </Text>
                      </div>
              </div>
               
              
               {/* chatbot form started below */}
               
               
                <div className="flex flex-col gap-[15px]  items-center justify-start ">
                 
                  <div className="flex flex-col relative w-[550px]">
                    {/* <Line className="bg-black-900_72 h-[1701px] mb-auto ml-[783px] mt-[-2px] w-0.5 z-[1]" /> */}
                    
                    
                    
                    
                    
                    <div className="flex flex-col items-center justify-start mb-auto h-[700px] ml-auto mr-[18px] 
                    mt-[px] w-[80%] z-[1]">



             
                      {/* <Line className="bg-light_blue-900 h-[5px] mt-[3px] w-[99%]" /> */}
                    </div>
                   
                     
                     



      
                    
                      {/* <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-end mt-[117px] sm:px-5 px-[34px] rounded-tl-[10px] rounded-tr-[10px] shadow-bs w-[99%] md:w-full">
                        <Img
                          className="h-[132px] md:h-auto md:mt-0 mt-[3px] rounded-[50%] w-[132px]"
                          src="images/img_ellipse22.png"
                          alt="ellipseTwentyThree"
                        />
                        <Line className="bg-black-900_72 md:h-0.5 h-[145px] ml-11 md:ml-[0] w-0.5 md:w-full" />
                        <Text
                          className="ml-9 md:ml-[0] md:mt-0 mt-[46px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                          size="txtPoppinsBold35Black900"
                        >
                          Thanks for helping me!
                        </Text>
                        <Img
                          className="h-[74px] sm:h-auto md:ml-[0] ml-[527px] md:mt-0 mt-8 object-cover rounded-[10px] w-[10%] md:w-full"
                          src="images/img_keyboard8419852.png"
                          alt="keyboard8419852_One"
                        />
                      </div>
                      <div className="bg-gray-100 border-2 border-light_blue-900 border-solid flex md:flex-col flex-row md:gap-10 items-end justify-between mt-[120px] px-[15px] rounded-tl-[10px] rounded-tr-[10px] shadow-bs w-[99%] md:w-full">
                        <Img
                          className="h-[129px] md:h-auto mb-[5px] md:ml-[0] ml-[22px] md:mt-0 mt-[11px] object-cover w-[129px]"
                          src="images/img_ai28146662.png"
                          alt="ai28146665"
                        />
                        <Line className="bg-black-900_72 md:h-0.5 h-[145px] w-0.5 md:w-full" />
                        <Text
                          className="md:mt-0 my-[26px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                          size="txtPoppinsBold35Black900"
                        >
                          Your welcome! I am here to help you. If you need more
                          help, just ask me.
                        </Text>
                      </div> */}
                     
                   
                   
                   
                   
                   
                   
                   
                   
                   
{/*                    
                    <div className="flex flex-col gap-7 justify-start mb-auto mt-[-NaNpx] w-[35%] z-[1]">
                      <Text
                        className="md:ml-[0] ml-[162px] md:text-5xl text-6xl text-black-900"
                        size="txtPoppinsBold60"
                      >
                        Previous Chats
                      </Text>
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-[11px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                          <Text
                            className="ml-7 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                            size="txtPoppinsBold35Black900"
                          >
                            Show me how to send money
                          </Text>
                          <Img
                            className="h-[113px] md:h-auto mr-[11px] sm:mt-0 mt-2.5 object-cover rounded-[10px]"
                            src="images/img_keyboard8419852_113x104.png"
                            alt="keyboard8419852_Four"
                          />
                        </div>
                        
                        <Line className="bg-light_blue-900 h-[5px] ml-0.5 md:ml-[0] mt-[3px] w-full" />
                        <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[61px] p-[11px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                          <Text
                            className="ml-7 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                            size="txtPoppinsBold35Black900"
                          >
                            How do I update my Profile?
                          </Text>
                          <Img
                            className="h-[113px] md:h-auto mr-[11px] sm:mt-0 mt-2.5 object-cover rounded-[10px]"
                            src="images/img_keyboard8419852_113x104.png"
                            alt="keyboard8419852_Six"
                          />
                        </div>
                       
                       
                       
                        <Line className="bg-light_blue-900 h-[5px] ml-0.5 md:ml-[0] mt-[3px] w-full" />
                        <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-center justify-start ml-0.5 md:ml-[0] mt-[167px] w-[95%] md:w-full">
                          <Button
                            className="cursor-pointer font-semibold leading-[normal] min-w-[319px] sm:text-[35px] md:text-[41px] text-[45px] text-center"
                            shape="round"
                            size="xs"
                          >
                            New Chat
                          </Button>
                          <Button
                            className="border-2 border-light_blue-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[319px] sm:text-[35px] md:text-[41px] text-[45px] text-center"
                            shape="round"
                            color="white_A700_01"
                            size="xs"
                          >
                            Clear Chat
                          </Button>
                        </div>
                      </div>
                    </div> */}










                  </div>
                </div>


              {/* </div> */}
            </div>
            {/* <div className="bg-gray-700_01 h-[809px] mb-[782px] md:mt-0 mt-[442px] rounded-[10px] w-[1%]"></div> */}
          </div>
          <Line className="bg-black-900_72 h-0.5 mt-[30px] w-full" />
          <div className="mt-[20px]  sm:text-[32px] md:text-[10px] text-[20px] text-black-900 text-center">
          Copyrights © 2023 Secure Bank All Rights Reserved
        </div>
        </div>
      </div>
    </>
  );
};

export default ChatBotPage30WebFeelingPage;