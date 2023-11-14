import React, { useEffect, useState } from 'react';
import { useNavigate, useParams  } from "react-router-dom";
import { Img, Line, Text } from "components";
const TransactionAnalytics30WebFeelingPage = () => {
  const navigate = useNavigate ();
  const { userID } = useParams(); // Get the userID from the URL params
  const [totalDebit, setTotalDebit] = useState(null);
  const [totalCredit, setTotalCredit] = useState(null);
  const [lastCredit, setLastCredit] = useState(null);
  const [lastDebit, setLastDebit] = useState(null);
  useEffect(() => {
    const apiUrl = `https://secure-bank.azurewebsites.net/sys/user/getTotalDebit?${userID}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTotalDebit(data);
      })
      .catch((error) => {
        console.error('Error fetching balance:', error);
      });
  }, []);



  useEffect(() => {
    const apiUrl = `https://secure-bank.azurewebsites.net/sys/user/getTotalCredit?${userID}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTotalCredit(data);
      })
      .catch((error) => {
        console.error('Error fetching balance:', error);
      });
  }, []);

  useEffect(() => {
    const apiUrl = `https://secure-bank.azurewebsites.net/sys/user/getLastCredit?${userID}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setLastCredit(data);
      })
      .catch((error) => {
        console.error('Error fetching balance:', error);
      });
  }, []);

  useEffect(() => {
    const apiUrl = `https://secure-bank.azurewebsites.net/sys/user/getLastDebit?${userID}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setLastDebit(data);
      })
      .catch((error) => {
        console.error('Error fetching balance:', error);
      });
  }, []);
  const handleBackButtonClick = () => {
    navigate(`/homepageeverydayaccount30webfeeling/${userID}`)
  };
  const handleChatbotClick = () => {
    navigate(`/chatbotpage30webfeeling/${userID}`);
  }
  const handleLogoutClick = () => {
    alert('user has been logged out')
    navigate('/')
  }
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[82px] w-full">
        <div className="flex flex-col items-start justify-start w-full">
         
         
        <div className="font-poppins md:h-24 h-[80px] md:px-5 relative w-full">
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

          <Line className="bg-black-900_72 h-0.5 mt-[45px] w-full" />
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-center 
          max-w-[1837px] mt-[24px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 border-[3px] border-gray-600 border-solid flex flex-col items-center
             justify-center p-[19px] rounded-[50px] shadow-bs11">
              <div className="flex flex-col justify-center mb-[26px] w-[82%] md:w-full">
                <Img
                  className="h-[70px] w-[70px] md:ml-[0] ml-[280px]"
                  src="../../../images/img_iconchart3.svg"
                  alt="iconchartThree"
                />
                <Text
                  className="md:ml-[0] ml-[50px] mt-[25px] md:text-5xl text-3xl text-black-900 text-center"
                  size="txtPoppinsSemiBold60Black900"
                >
                  Transaction Analytics
                </Text>
                {/* <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[11px] w-full">
                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex md:flex-1 flex-row items-center justify-between p-1 rounded-[30px] w-[41%] md:w-full">
                    <Text
                      className="ml-4 my-[19px] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                      size="txtPoppinsBold35"
                    >
                      Select Month
                    </Text>
                    <Img
                      className="h-[38px]"
                      src="../../../images/img_checkmark_light_blue_900.svg"
                      alt="checkmark"
                    />
                  </div>
                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex md:flex-1 flex-row items-center justify-between p-1 rounded-[30px] w-[41%] md:w-full">
                    <Text
                      className="ml-4 my-[19px] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                      size="txtPoppinsBold35"
                    >
                      Select Year
                    </Text>
                    <Img
                      className="h-[38px]"
                      src="../../../images/img_checkmark_light_blue_900.svg"
                      alt="checkmark_One"
                    />
                  </div>
                </div> */}




                <div className="h-[270px] md:h-[613px] md:ml-[0] ml-[120px] mt-6 relative w-[45%] md:w-full">
                  <div className="bg-white-A700 h-[270px] m-auto rounded-[517px] shadow-bs7 w-full"></div>
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto 
                  w-[65%]">
                    <Text
                      className="sm:text-[40px] md:text-[46px] text-[20px] text-black-900 text-center"
                      size="txtPoppinsMedium50"
                    >
                      Total Debit
                    </Text>
                    <Text
                      className="mt-[13px] sm:text-[40px] md:text-[46px] text-[20px] text-black-900 text-center"
                      size="txtPoppinsSemiBold50Black900"
                    >
                      {totalDebit !== null ? `$${totalDebit}` : 'Loading debit...'}
                    </Text>
                    <Line className="bg-black-900 h-px mt-[18px] w-full" />
                    <Text
                      className="mt-[19px] sm:text-[40px] md:text-[46px] text-[20px] text-black-900 text-center"
                      size="txtPoppinsMedium50"
                    >
                      Total Credit
                    </Text>
                    <Text
                      className="mt-[15px] sm:text-[40px] md:text-[46px] text-[20px] text-black-900 text-center"
                      size="txtPoppinsSemiBold50Black900"
                    >
                    {totalCredit !== null ? `$${totalCredit}` : 'Loading credit...'}

                    </Text>
                  </div>
                </div>




                <Line className="bg-black-900 h-px md:ml-[0] ml-[162px] mr-[145px] mt-[30px] w-[54%]" />
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[11px] mt-[43px] w-[93%] md:w-full">
                  <div className="flex flex-col justify-start mb-[35px]">
                    <Text
                      className="sm:text-[40px] md:text-[46px] text-[20px] text-black-900 text-center"
                      size="txtPoppinsMedium50"
                    >
                      Last Debit
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[15px] sm:text-[40px] md:text-[46px] text-[20px] 
                      text-black-900 text-center"
                      size="txtPoppinsSemiBold50Black900"
                    >
                    {lastDebit !== null ? `$${lastDebit}` : 'Loading credit...'}

                    </Text>
                  </div>
                  <div className="h-[45px] md:ml-[0] ml-[35px] md:mt-0 mt-[15px] relative w-[50px] md:w-full">
                    <div className="bg-gray-900 border border-light_blue-900 border-solid h-[45px] m-auto 
                    rounded-[48px] w-full"></div>
                    <Img
                      className="absolute bottom-[0%] h-10 w-[20px] inset-x-[0] mx-auto"
                      src="../../../images/img_arrowup_white_a700.svg"
                      alt="arrowup"
                    />
                  </div>
                  <div className="h-[45px] md:ml-[0] ml-[35px] md:mt-0 mt-[15px] relative w-[50px] md:w-full">
                    <div className="bg-blue-900 border border-light_blue-900 border-solid h-[45px] m-auto 
                    rounded-[48px] w-full"></div>
                    <Img
                      className="absolute h-[27px] right-[22%] top-[8%] mt-[5px]"
                      src="../../../images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                  <div className="flex flex-col justify-start mb-[35px] md:ml-[0] ml-[15px]">
                    <Text
                      className="sm:text-[40px] md:text-[46px] text-[20px] text-black-900 text-center"
                      size="txtPoppinsMedium50"
                    >
                      Last Credit
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[24px] sm:text-[40px] md:text-[46px] text-[20px] text-black-900 
                      text-center mt-[20px]"
                      size="txtPoppinsSemiBold50Black900"
                    >
                     {lastCredit !== null ? `$${lastCredit}` : 'Loading credit...'}

                    </Text>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="bg-gray-700_01 h-[809px] mb-[541px] md:mt-0 mt-[65px] rounded-[10px] w-[2%]"></div> */}
          </div>
          <Line className="bg-black-900_72 h-0.5 mt-[129px] w-full" />
          <Text
            className="md:ml-[0] ml-[514px] mt-[51px] text-2xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
            size="txtJostRomanRegular36"
          >
            Copyrights © 2023 Secure Bank All Rights Reserved
          </Text>
        </div>
      </div>
    </>
  );
};

export default TransactionAnalytics30WebFeelingPage;
