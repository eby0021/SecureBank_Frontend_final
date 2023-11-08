import React, { useState, useEffect } from "react";
import { useNavigate, useParams  } from "react-router-dom";
import { Button, Img, Line, List, Text } from "components";
import Keyboard from "react-simple-keyboard";
import 'react-simple-keyboard/build/css/index.css';
import '../../styles/chat.css'
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
        const response = await fetch(`http://localhost:8080//sys/user/chat?${userID}`, {
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
              
          // Redirect to another page or perform other actions upon successful login
        } else {
          alert('process failed completely');
        }
      
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const [textKeyboardVisible, setTextKeyboardVisible] = useState(false);

  const toggleTextKeyboard = () => {
    setTextKeyboardVisible(!textKeyboardVisible);
  };

  const onChangeText = (input) => {
    setUserMessage(input);
  };
  const onKeyPress = (button) => {
    console.log("Button pressed", button);
  };

  const [userMessages, setUserMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchUserMessages() {
      try {
        const response = await fetch(`http://localhost:8080/sys/user/getAllMessages?${userID}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Assuming data is an array of objects with the structure you provided
        setUserMessages(data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching user messages:', error);
        setLoading(false);
      }
    }

    fetchUserMessages();
  }, [userMessage]);
  return (
    <>
      
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full h-[1000px]">
        <div className="flex flex-col items-center justify-start w-full h-[900px]">
         
        <div className="font-poppins md:h-24 h-[80px] md:px-5 relative w-full mb-[10px]">
            <div className="absolute bg-light_blue-900 border border-black-900 border-solid flex flex-col inset-x-[0] items-end justify-end mx-auto p-1.5 shadow-bs top-[0] w-full">
              <div className="flex flex-col items-center justify-start mr-[11px] w-[5%] md:w-full">
               
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
              
              
  
  
  <div className="absolute top-[10px] left-0 w-full p-2 bg-white shadow">
<Img
    className="h-[60px] w-[60px] md:ml-[0] ml-[15px] mt-[60px]  "
    src="../../../images/img_iconbacksquare.svg"
    alt="iconbacksquare"
    onClick={handleBackButtonClick}
  />
  <Img
    className="h-[39px]md:h-auto object-cover w-[60px] ml-[700px] mt-[0px]"
    src="../../../images/img_ai28146662.png"
    alt="ai28146663"
  />
  <Text
    className="md:ml-[0] ml-[500px] mt-[0px] md:mt-0  sm:text-4xl md:text-[38px] text-[20px] text-black-900 text-center text-shadow-ts w-[30%] sm:w-full"
    size="txtPoppinsBold40"
  >
    Your Helpful Chat Bot
  </Text>
  
</div>




<div className="bg-white-A700_01 border border-light_blue-800 border-solid bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto rounded-[30px] shadow-bs5 w-[550px] h-[500px] mt-[200px]">

<div className="bg-white-A700 border border-light_blue-900 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[0px] sm:px-5 px-7 rounded-tl-[10px] rounded-tr-[10px] w-[95%] h-[60px] md:w-full">
  <input
    type="text"
    className="sm:ml-[0] sm:text-[31px] md:text-[33px] text-[16px] text-gray-700 border-none outline-none"
    placeholder="Ask anything..."
    value={userMessage}
    onChange={(e) => setUserMessage(e.target.value)}
  />
  <Img
    className="h-[30px] sm:h-auto md:ml-[0] object-cover rounded-[10px] w-[30px] md:w-full ml-[225px]"
    src="../../../images/sendButton2.png"
    alt="keyboard8419852_Three"
    onClick={handleSendMessage}
  />
</div>

<div className="mb-[0px] mt-[20px]  overflow-y-auto">
  <div className="chat-container">
    {loading ? (
      <div>Loading...</div>
    ) : (
      userMessages.map((message) => (
        <div key={message.messageID}>
          <div className="user-message">User: {message.userMessage}</div>
          <div className="chatbot-message">
            ChatBot: {message.answer !== null ? `${message.answer}` : '...'}
          </div>
        </div>
      ))
    )}
  </div>
</div>
{answer ? (
<div className="chat-container">
<div className="user-message">User: {userMessage}</div>
          <div className="chatbot-message">
            ChatBot: {answer}
          </div>
                      </div>
) : (<Text>...</Text>)}
</div>

           
               




                <div className="flex flex-col gap-[15px]  items-center justify-start ">
              
                 
                  <div className="flex flex-col relative w-[550px]">                    
                   
                  
                    <div className="flex flex-col items-center justify-start mb-auto h-[700px] ml-auto mr-[18px] 
                    mt-[px] w-[80%] z-[1]">
                    </div>
                   
                     
                     



      






                  </div>
                </div>


              {/* </div> */}
            </div>
            {/* <div className="bg-gray-700_01 h-[809px] mb-[782px] md:mt-0 mt-[442px] rounded-[10px] w-[1%]"></div> */}
          </div>
         
        </div>
        <Line className="bg-black-900_72 h-0.5 mt-[10px] w-full" />
          <div className="mt-[20px]  sm:text-[32px] md:text-[10px] text-[20px] text-black-900 text-center">
          Copyrights © 2023 Secure Bank All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default ChatBotPage30WebFeelingPage;