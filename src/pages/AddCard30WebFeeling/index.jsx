import React, { useEffect, useState } from 'react';
import { useNavigate, useParams  } from "react-router-dom";
import Keyboard from "react-simple-keyboard";
import 'react-simple-keyboard/build/css/index.css';
import { Button, Img, Line, Text } from "components";

const AddCard30WebFeelingPage = () => {
  const { userID } = useParams(); // Get the userID from the URL params
  const navigate = useNavigate ();
  const [id, setId] = useState("");
  const [number, setNumber] = useState("");
  const [expirationDate, setExpiration_Date] = useState("");

  const handleChatbotClick = () => {
    navigate(`/chatbotpage30webfeeling/${userID}`);
  }
  const handleLogoutClick = () => {
    alert('user has been logged out')
    navigate('/')
  }
  const handleBackButtonClick = () => {
    navigate(`/homepageeverydayaccount30webfeeling/${userID}`)
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const req = {
        id: id,
        number: number,
        expirationDate: expirationDate  
      }
      const response = await fetch(`https://secure-bank.azurewebsites.net/sys/user/verifyCard?${userID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
      });
      if(response.ok){
        const data = await response.json(); // Parse the JSON response
        if(data==true){
          alert("card activated successfully")
            // Trigger the API request to check the condition again
    fetch(`https://secure-bank.azurewebsites.net/sys/user/cardActive?${userID}`)
    .then((response) => response.json())
    .then((data) => {
      // Set the condition based on the isActive status of the card
      console.log(data);
      setIsActive(data);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });

        }else{

        }
      } else{
        alert("Failed to activate card. Add credetntials provided by Bank")

      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const [isActive, setIsActive] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  useEffect(() => {
    // Make an API request to check the condition
    fetch(`https://secure-bank.azurewebsites.net/sys/user/cardActive?${userID}`)
      .then((response) => response.json())
      .then((data) => {
        // Set the condition based on the isActive status of card 
        console.log(data);
        setIsActive(data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [isActive]);


  useEffect(() => {
    // Make an API request to check the condition
    fetch(`https://secure-bank.azurewebsites.net/sys/user/cardBlocked?${userID}`)
      .then((response) => response.json())
      .then((data) => {
        // Set the condition based on the isActive status of card 
        console.log(data);
        setIsBlocked(data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);


  const handleBlock = async () => {
    try {
      // Send a POST request to verify the card with the userID in the URL
      const response = await fetch(`https://secure-bank.azurewebsites.net/sys/user/blockCard?${userID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json(); // Parse the JSON response
        if (data === true) {
          alert("Card blocked successfully");
          setIsBlocked(true); 
          fetch(`https://secure-bank.azurewebsites.net/sys/user/cardBlock?${userID}`)
    .then((response) => response.json())
    .then((data) => {
      // Set the condition based on the isActive status of the card
      console.log(data);
      setIsBlocked(data);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });

                 
        } else {
          // Handle the case where card activation failed
          alert("Card blocking failed");
        }
      } else {
        // Handle the case where the POST request was not successful
        console.error('Failed to block the card');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  // Later in your component, you can use handleBlock as an event handler for a button or any other UI element
  


  const handleUnblock = async () => {
    try {
      // Send a POST request to verify the card with the userID in the URL
      const response = await fetch(`https://secure-bank.azurewebsites.net/sys/user/unblockCard?${userID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json(); // Parse the JSON response
        if (data === true) {
          alert("Card unblocked successfully");
          setIsBlocked(false); 
          fetch(`https://secure-bank.azurewebsites.net/sys/user/cardBlocked?${userID}`)
    .then((response) => response.json())
    .then((data) => {
      // Set the condition based on the isActive status of the card
      console.log(data);
      setIsBlocked(data);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
       
        } else {
          // Handle the case where card activation failed
          alert("Card unblocking failed");
        }
      } else {
        // Handle the case where the POST request was not successful
        console.error('Failed to unblock the card');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  // Later in your component, you can use handleBlock as an event handler for a button or any other UI element
  const onKeyPress = (button) => {
    console.log("Button pressed", button);
  };

  const [numberKeyboardVisible, setNumberKeyboardVisible] = useState(false);
  const [IDKeyboardVisible, setIDKeyboardVisible] = useState(false);
  const [DateKeyboardVisible, setDateKeyboardVisible] = useState(false);


  const toggleNumberKeyboard = () => {
    setNumberKeyboardVisible(!numberKeyboardVisible);
  };

  const toggleIDKeyboard = () => {
    setIDKeyboardVisible(!IDKeyboardVisible);
  };

  const toggleDateKeyboard = () => {
    setDateKeyboardVisible(!DateKeyboardVisible);
  };
  const onChangeNumber = (input) => {
    setNumber(input);
  };

  const onChangID = (input) => {
    setId(input);
  };

  const onChangeExpirationDate = (input) => {
    setExpiration_Date(input);
  };


  

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[82px] w-full">
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
                src="../../../images/girlChatBot.jpg"
                alt="ai28146662"
              />

            </div>

          </div>







          <Line className="bg-black-900_72 h-0.5 mt-[48px] w-full" />
          <div className="flex md:flex-col flex-row font-jost md:gap-5 items-start justify-start max-w-[2288px] mt-[10px] mx-auto md:px-5 w-full">
            {isActive? (
            <div className="bg-white-A700_01 border border-light_blue-800 border-solid flex md:flex-1 flex-col 
            items-center justify-center mb-56 md:ml-[0] ml-[520px] md:mt-0 mt-[20px] p-[17px] rounded-[30px] 
            shadow-bs5 w-[34%] md:w-full h-[200px]">
            
          
            <div className="flex flex-col items-center justify-start mb-[19px] w-[98%] md:w-full align-center">
              {isBlocked? (
                   <Button
                   className=" ml-[0px] cursor-pointer font-semibold leading size-[200px] min-w-[19px] mt-[20px] sm:text-[35px] md:text-[41px] text-[18px] text-center"
                   shape="round"
                   onClick={handleUnblock}
                   style={{ backgroundColor: 'green', color: 'white' }} // Set background color to red and text color to white

                   
                 >
                   Unblock Card
                 </Button>
              ) : (   <Button
                    className=" ml-[0px] cursor-pointer font-semibold leading size-[200px] min-w-[19px] mt-[20px] sm:text-[35px] md:text-[41px] text-[18px] text-center"
                    shape="round"
                    onClick={handleBlock}
                    style={{ backgroundColor: 'red', color: 'white' }} // Set background color to red and text color to white

                    
                  >
                    Block Card
                  </Button>)}
                    
         
            </div>
            </div>

 

            ): (
              <div className="bg-white-A700_01 border border-light_blue-800 border-solid flex md:flex-1 flex-col items-center justify-center mb-56 md:ml-[0] ml-[520px] md:mt-0 mt-[20px] p-[17px] rounded-[30px] shadow-bs5 w-[34%] md:w-full">
              <div className="flex flex-col items-center justify-start mb-[19px] w-[98%] md:w-full align-center">
                <Img
                  className="h-[70px]"
                  src="../../../images/img_iconcards.svg"
                  alt="iconcards"
                />
                <Text
                  className="mt-[15px] sm:text-[37px] md:text-[43px] text-[25px] text-black-900 "
                  size="txtJostRomanBold47"
                >
                  Activate a New Card
                </Text>
               
           
                <div className="flex flex-col font-poppins items-start justify-start mt-[20px] w-[94%] md:w-full">
           
           
                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col
                   flex-row sm:gap-10 items-center justify-between p-0.2 rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <input
                      className="ml-8 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[14px] text-gray-700"
                      size="txtPoppinsBold35"
                      placeholder="Enter Card Number"
                      value={number} // Set the value attribute to the email state
                  onChange={(e) => setNumber(e.target.value)}
                    />                     
                    <Img
                      className="h-[24px] md:h-auto mb-[3px] sm:mt-0 mt-[9px] object-cover rounded-[10px]"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                      onClick={toggleNumberKeyboard}
                    />
                  </div>

                  {numberKeyboardVisible && (
                    <div>
                  <Keyboard onChange={onChangeNumber} onKeyPress={onKeyPress} />
                    </div>
                  )}
                  <Line className="bg-light_blue-900 h-[5px] mt-[5px] w-full" />
                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col
                   flex-row sm:gap-10 items-center justify-between mt-[20px] pl-2 py-2 rounded-tl-[10px] 
                   rounded-tr-[10px] w-full">
                  <input
                      className="ml-8 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[14px] text-gray-700"
                      size="txtPoppinsBold35"
                      placeholder="Enter ID"
                      value={id} // Set the value attribute to the email state
                  onChange={(e) => setId(e.target.value)}
                    />     
                    <Img
                      className="h-[24px] md:h-auto object-cover rounded-[10px]"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852_One"
                      onClick={toggleIDKeyboard}
                      />
                    </div>
  
                    {IDKeyboardVisible && (
                      <div>
                    <Keyboard onChange={onChangID} onKeyPress={onKeyPress} />
                      </div>
                    )}
                  <Line className="bg-light_blue-900 h-[5px] mt-[5px] w-full" />
          
                  
                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col
                   flex-row sm:gap-10 items-center justify-between p-0.5 rounded-tl-[10px] rounded-tr-[10px] w-full mt-[20px]">
                    <input
                      className="ml-8 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[14px] text-gray-700"
                      size="txtPoppinsBold35"
                      placeholder="Enter Expiration Date"
                      value={expirationDate} // Set the value attribute to the email state
                  onChange={(e) => setExpiration_Date(e.target.value)}
                    />                     
                    <Img
                      className="h-[24px] md:h-auto mb-[3px] sm:mt-0 mt-[9px] object-cover rounded-[10px]"
                      src="../../../images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                      onClick={toggleDateKeyboard}
                      />
                    </div>
  
                    {DateKeyboardVisible && (
                      <div>
                    <Keyboard onChange={onChangeExpirationDate} onKeyPress={onKeyPress} />
                      </div>
                    )}
                  <Line className="bg-light_blue-900 h-[5px] mt-[5px] w-full" />
           
           
           
               
           
           
           
           
                
                </div>
           
           
           
           
           
                <div className="flex flex-col font-poppins items-center justify-start mt-[3px] w-full">
                 
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] size-[100px] min-w-[19px] mt-[20px] sm:text-[35px] md:text-[41px] text-[14px] text-center"
                    shape="round"
                    onClick={handleSubmit}
                    
                  >
                    Activate Card
                  </Button>
                </div>
              </div>
            </div>

            )}

          </div>
         










          <Line className="bg-black-900_72 h-0.5 mt-[200px] w-full" />
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
