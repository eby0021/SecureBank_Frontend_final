import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Img, Line, List, Text } from "components";
const HomePageEveryDayAccount30WebFeelingPage = () => {
  const navigate = useNavigate();
  const { userID } = useParams(); // Get the userID from the URL params
  const [balance, setBalance] = useState(null);
  
    useEffect(() => {
      const apiUrl = `http://localhost:8080/sys/user/getAccountMoney?${userID}`;
  
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setBalance(data);
        })
        .catch((error) => {
          console.error('Error fetching balance:', error);
        });
    }, []);

  const handlePayClick = () => {
    navigate(`/paysomeonebybankerrorfield30webfeeling/${userID}`);
  }
  const handleTransactionHistoryClick = () => {
    navigate(`/transactionhistory30webfeeling/${userID}`);
  }
  const handleCardClick = () => {
    navigate('/addcard30webfeeling');
  }
  const handleBillPaymentClick = () => {
    navigate('/billpayment30webfeeling');
  }
  const handleViewProfileClick = () => {
    navigate(`/viewprofile30webfeeling/${userID}`);
  }
  const handleTransactionAnalyticsClick = () => {
    navigate(`/transactionanalytics30webfeeling/${userID}`);
  }
  const handleChatbotClick = () => {
    navigate('/chatbotpage30webfeeling');
  }
  const handleLogoutClick = () => {
    alert('user has been logged out')
    navigate('/loginpage30')
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[168px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
         
         
         
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









          <div className="flex md:flex-col flex-row font-poppins md:gap-10 gap-10 items-center justify-start 
          my-[0px] max-w-[2228px] mt-2.5 mx-auto md:px-5 w-[90%] h-[150px]">
           
           
            <div className="bg-white-A700 border-[5px] border-light_blue-900 border-solid flex md:flex-1 
            sm:flex-col 
            flex-row sm:gap-5 items-start justify-end 
            mb-[10px] md:mt-0 mt-[12px] px-[20px] py-[10px] rounded-[50px] shadow-bs3 w-[50%] md:w-full my-[0px]"
            onClick={handleChatbotClick}>
              <Img
                className="h-[60px] md:h-auto sm:mt-0 mt-4 object-cover w-[60px]"
                src="../../../images/img_ai28146662.png"
                alt="ai28146662"
              />
              <div>
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
            
            
             
              </div>

            </div>
            
            <div className="flex md:flex-1 ml-[650px] mt-[0px] flex-row md:gap-10 items-start justify-between w-[40%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-start justify-start md:mt-0 mt-[5px] p-[15px] shadow-bs4 ml-[0px]">
                <div className="flex flex-col gap-[0px] justify-start mb-1 ml-0 md:ml-[0] w-[100%] md:w-full h-[100px]">
                  <div className="flex sm:flex-col flex-row gap-[0px] items-start justify-start w-full">
                    <Img
                      className="h-[50px] "
                      src="../../../images/img_iconwallet.svg"
                      alt="iconwallet"
                    />

                  </div>
                  <Text
                    className="md:ml-[0] ml-[50px] md:text-5xl text-[20px] text-center text-light_blue-900"
                    size="txtPoppinsSemiBold100"
                  >  Balance:
                     {balance !== null ? `$${balance}` : 'Loading balance...'}
                  </Text>
                </div>
              </div>
             
            </div>


            <div className="h-[140px] relative w-[20%] md:w-full mx-10" onClick={handleViewProfileClick}>
                    <div className="bg-white-A700 h-[140px] m-auto rounded-[400px] shadow-bs7 w-[140px]"></div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0%] w-[70%]">
                      <Img
                        className="h-[50px] mt-3"
                        src="../../../images/img_iconuser.svg"
                        alt="iconcards"
                      />
                      <Line className="bg-black-900 h-px mt-[13px] w-[75%]" />
                      <Text
                        className="mt-1 sm:text-[37px] md:text-[43px] text-[18px] text-black-900"
                        size="txtJostRomanBold47"
                      >
                         View <br></br>Profile
                      </Text>
                    </div>
                  </div>
          </div>









          <Line className="bg-black-900_72 h-0.5 max-w-[2144px] mt-[20px] mx-auto w-full" />
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-center justify-center max-w-[2291px] mt-0 mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[171px] items-center justify-start md:mt-0 mt-[30px]">
              {/* <div className="flex md:flex-col flex-row gap-[22px] items-start justify-start w-[100%] md:w-full"> */}



  {/* <div className="flex flex-col justify-center items-center mb-[0px] w-[100%] md:w-full">
  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center w-full"> */}
    {/* <label className="radio-button-container">
      <input type="radio" name="accountType" value="everyDay" 
        onChange={() => {
          navigate('/homepageeverydayaccount30webfeeling'); 
        }} defaultChecked/>
      <div className="radio-button">
      </div>
    </label>
    <Text
      className="ml-100 sm:ml-[0] md:text-2.5xl text-3xl text-black-900 text-center text-shadow-ts1 mx-15 w-[100%]"
      size="txtPoppinsMedium60"
    >
      In Every Day Account
    </Text> */}
    {/* <label className="radio-button-container">
      <input type="radio" name="accountType" value="savings"
         onChange={() => {
          navigate('/homepagesavingsaccount30webfeeling'); 
        }}
         />
      <div className="radio-button">
      </div>
    </label>
    <Text
      className="ml-6 md:mt-0 mt-3.5 md:text-2.5xl text-3xl text-black-900 text-center text-shadow-ts1 mx-15 w-[100%]"
      size="txtPoppinsMedium60"
    >
      Switch to Savings Account
    </Text> */}
  {/* </div>
</div> */}




              {/* </div> */}
              <List
                className="flex flex-col font-jost gap-[16px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 md:flex-col flex-row md:gap-2 items-start justify-start w-full mx-0">


                  <div className="h-[190px] relative w-[100%] md:w-full ml-[40px]"   onClick={handleCardClick}>
                    <div className="bg-white-A700 h-[190px]  rounded-[600px] shadow-bs7 w-[190px]"></div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0%] w-[70%]">
                      <Img
                        className="h-[80px] mt-5"
                        src="../../../images/img_iconcards.svg"
                        alt="iconcards"
                      />
                      <Line className="bg-black-900 h-px mt-[13px] w-[75%]" />
                      <Text
                        className="mt-2 sm:text-[37px] md:text-[43px] text-[25px] text-black-900"
                        size="txtJostRomanBold47"
                      >
                        Cards
                      </Text>
                    </div>
                  </div>
                  <div className="h-[190px] relative w-[100%] md:w-full mx-10 ml-[80px]" onClick={handlePayClick} >
                    <div className="bg-white-A700 h-[190px] m-auto rounded-[600px] shadow-bs7 w-[190px]"></div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0%] w-[70%]">
                      <Img
                        className="h-[80px] mt-5"
                        src="../../../images/img_iconmoneyrecive.svg"
                        alt="iconcards"
                      />
                      <Line className="bg-black-900 h-px mt-[13px] w-[75%]" />
                      <Text
                        className="mt-2 sm:text-[37px] md:text-[13px] text-[25px] text-black-900"
                        size="txtJostRomanBold47"
                      >
                        Pay
                      </Text>
                    </div>
                  </div>
                  
                  {/* <div className="h-[190px] relative w-[100%] md:w-full mx-10" onClick={handleTransactionHistoryClick}>
                    <div className="bg-white-A700 h-[190px] m-auto rounded-[600px] shadow-bs7 w-[190px]"></div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0%] w-[70%]">
                      <Img
                        className="h-[80px] mt-5"
                        src="images/img_iconwallet_light_blue_800.svg"
                        alt="iconcards"
                      />
                      <Line className="bg-black-900 h-px mt-[13px] w-[75%]" />
                      <Text
                        className="mt-2 sm:text-[37px] md:text-[43px] text-[22px] text-black-900 text-center"
                        size="txtJostRomanBold47"
                      >
                        Transaction
                        <br></br> History
                      </Text>
                    </div>
                  </div> */}

                  {/* <div className="h-[508px] md:ml-[0] ml-[181px] relative w-[28%] md:w-full">
                    <div className="bg-white-A700 h-[508px] m-auto rounded-[295px] shadow-bs7 w-full"></div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[5%] w-[72%]">
                      <Img
                        className="h-[297px]"
                        src="images/img_iconwallet_light_blue_800.svg"
                        alt="iconwallet"
                      />
                      <Line className="bg-black-900 h-px mt-[27px] w-[98%]" />
                      <Text
                        className="mt-3 sm:text-[37px] md:text-[43px] text-[47px] text-black-900"
                        size="txtJostRomanBold47"
                      >
                        Transaction History
                      </Text>
                    </div>
                  </div> */}
                </div>

                <div className="flex flex-1 md:flex-col flex-row md:gap-2 items-center justify-center w-full" >
                {/* <div className="h-[508px] relative w-[100%] md:w-full mx-10" onClick={handleBillPaymentClick}>
                    <div className="bg-white-A700 h-[250px] m-auto rounded-[400px] shadow-bs7 w-full"></div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0%] w-[100%]">
                      <Img
                        className="h-[100px] mt-6"
                        src="images/img_image5.png"
                        alt="iconcards"
                      />
                      <Line className="bg-black-900 h-px mt-[43px] w-[75%]" />
                      <Text
                        className="mt-5 sm:text-[37px] md:text-[43px] text-[22px] text-black-900"
                        size="txtJostRomanBold47"
                      >
                        Bill Payment
                      </Text>
                    </div>
                  </div> */}
                  <div className="h-[190px] relative w-[100%] md:w-full mx-10" onClick={handleTransactionAnalyticsClick}>
                    <div className="bg-white-A700 h-[190px] m-auto rounded-[600px] shadow-bs7 w-[190px]"></div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0%] w-[70%]">
                      <Img
                        className="h-[80px] mt-5"
                        src="../../../images/img_iconchart3.svg"
                        alt="iconcards"
                      />
                      <Line className="bg-black-900 h-px mt-[13px] w-[75%]" />
                      <Text
                        className="mt-1 sm:text-[37px] md:text-[43px] text-[22px] text-black-900 text-center "
                        size="txtJostRomanBold47"
                      >
                        Transaction <br/>Analytics
                      </Text>
                    </div>
                  </div>

                  <div className="h-[190px] relative w-[100%] md:w-full mx-10" onClick={handleTransactionHistoryClick}>
                    <div className="bg-white-A700 h-[190px] m-auto rounded-[600px] shadow-bs7 w-[190px]"></div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0%] w-[70%]">
                      <Img
                        className="h-[80px] mt-5"
                        src="../../../images/img_iconwallet_light_blue_800.svg"
                        alt="iconcards"
                      />
                      <Line className="bg-black-900 h-px mt-[13px] w-[75%]" />
                      <Text
                        className="mt-2 sm:text-[37px] md:text-[43px] text-[22px] text-black-900 text-center"
                        size="txtJostRomanBold47"
                      >
                        Transaction
                        <br></br> History
                      </Text>
                    </div>
                  </div>
               
                  {/* <div className="h-[508px] relative w-[28%] md:w-full">
                    <div className="bg-white-A700 h-[508px] m-auto rounded-[296px] shadow-bs7 w-full"></div>
                    <div className="absolute flex flex-col gap-7 inset-x-[0] items-center justify-start mx-auto top-[4%] w-[79%]">
                      <Img
                        className="h-[260px] sm:h-auto object-cover w-[63%] md:w-full"
                        src="images/img_image5.png"
                        alt="imageFive"
                      />
                      <Line className="bg-black-900 h-px w-full" />
                      <Text
                        className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                        size="txtJostRomanBold50"
                      >
                        Bill Payment
                      </Text>
                    </div>
                  </div> */}
                  {/* <div className="h-[508px] relative w-[28%] md:w-full">
                    <div className="bg-white-A700 h-[508px] m-auto rounded-[295px] shadow-bs7 w-full"></div>
                    <div className="absolute flex flex-col gap-[23px] inset-x-[0] items-center justify-start mx-auto top-[4%] w-4/5">
                      <Img
                        className="h-[265px]"
                        src="images/img_iconchart3.svg"
                        alt="iconchartThree"
                      />
                      <div className="flex flex-col gap-9 items-center justify-start w-full">
                        <Line className="bg-black-900 h-px w-full" />
                        <Text
                          className="sm:text-[37px] md:text-[43px] text-[47px] text-black-900"
                          size="txtJostRomanBold47"
                        >
                          Transaction Analytics
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[508px] relative w-[28%] md:w-full">
                    <div className="bg-white-A700 h-[508px] m-auto rounded-[295px] shadow-bs7 w-full"></div>
                    <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto top-[4%] w-4/5">
                      <x
                        className="h-[269px] md:ml-[0] ml-[113px]"
                        src="images/img_iconuser.svg"
                        alt="iconuser"
                      />
                      <Line className="bg-black-900 h-px mt-[18px] w-full" />
                      <Text
                        className="md:ml-[0] ml-[74px] mt-7 sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                        size="txtJostRomanBold50"
                      >
                        View Profile
                      </Text>
                    </div>
                  </div> */}
                </div>
              </List>
            </div>
          </div>
          <Line className="bg-black-900_72 h-0.5 mt-[43px] w-full" />
          <Text
            className="mt-[23px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
            size="txtJostRomanRegular36"
          >
            Copyrights © 2023 Secure Bank All Rights Reserved
          </Text>
        </div>
      </div>
    </>
  );
};

export default HomePageEveryDayAccount30WebFeelingPage;
