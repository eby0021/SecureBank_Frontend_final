import React, { useEffect, useState } from 'react';
import { useNavigate, useParams  } from "react-router-dom";

import { Img, Line, Text } from "components";
// import TransactionRow from './TransactionRow';
import TransactionHistory from './TransactionHistory';
const TransactionHistory30WebFeelingPage = () => {
  const { userID } = useParams(); // Get the userID from the URL params
  const [transactions, setTransactions] = useState([]);
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
  const navigate = useNavigate ();
  const handleChatbotClick = () => {
    navigate('/chatbotpage30webfeeling');
  }
  const handleLogoutClick = () => {
    alert('user has been logged out')
    navigate('/loginpage30')
  }
  const handleBackButtonClick = () => {
    navigate(`/homepageeverydayaccount30webfeeling/${userID}`)
  };
  useEffect(() => {
    return () => {
      setTransactions([]); // Clear the transactions when unmounting
    };
  }, []);
  useEffect(() => {
    // Make a GET request to fetch transactions
    fetch(`http://localhost:8080//sys/user/getAllTransactions?userID=1`)
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data); // Update the 'transactions' state with the response data
      })
      .catch((error) => {
        console.error('Error fetching transactions:', error);
      });
  }, [userID]);
  
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[74px] w-full">
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


          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-start max-w-[2380px] mt-2 mx-auto md:px-5 w-full">
            <Img
              className="h-[60px] md:mt-0 mt-[10px] ml-[35px]"
              src="../../../images/img_iconbacksquare.svg"
              alt="iconbacksquare"
              onClick={handleBackButtonClick}
            />
            <div className="bg-white-A700 border-[5px] border-light_blue-900 border-solid
             flex md:ml-[0] ml-[250px] md:mt-0 mt-[5px] h-[130px] px-[20px] py-[10px] w-[15%] relative rounded-[50px] shadow-bs3 md:w-full ml-[550px]"
             onClick={handleChatbotClick}>
              <Img
                className="mt-[5px] mr-[50px] h-[70px] w-[70px]"
                src="../../../images/img_ai28146662.png"
                alt="ai28146662"
              />
              <Text
                className="ml-[-25px] mr-[17px] mt-0.5 md:text-5xl text-[20px] text-black-900 text-center text-shadow-ts z-[1]"
                size="txtPoppinsBold70"
              >
                <>
                  Open <br />
                  Chat Bot
                </>
              </Text>
            </div>
          </div>



          <Line className="bg-black-900_72 h-0.5 md:ml-[0] ml-[5px] mt-[25px] w-full" />
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between 
          max-w-[3328px] mt-[40px] mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[40px] justify-start">
             
             
             
             
             
             
             
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start
               md:ml-[0] ml-[200px] w-[72%] md:w-full">
               
               
{/*                
                <div className="bg-white-A700 flex flex-col items-start justify-start mb-1 
                p-[1px] shadow-bs4 w-[12%] md:w-full">
                  <div className="flex flex-col gap-[15px] justify-start mb-[12px] md:ml-[0] ml-[3px] w-full md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 gap-[76px] items-start justify-start mr-2 w-full md:w-full">
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_iconarrowdown_light_blue_900.svg"
                        alt="iconarrowdown"
                      />
                      <Text
                        className="sm:mt-0 mt-[12px] sm:text-[40px] md:text-[46px] text-[18px] text-center 
                        text-light_blue-900 mr-[1500px]"
                        size="txtPoppinsSemiBold50"
                      >
                        Last Credit
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[0px] md:text-5xl text-[20px] text-center text-light_blue-900"
                      size="txtPoppinsSemiBold100"
                    >
                      $3,200
                    </Text>
                  </div>
                </div> */}




                <div className="bg-white-A700 flex flex-col items-start justify-start mb-1 ml-[450px] 
                p-[1px] shadow-bs4 w-[20%] md:w-full">
                  <div className="flex flex-col gap-[15px] justify-start mb-[12px] md:ml-[0] ml-[3px] w-full md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 gap-[76px] items-start justify-start mr-2 
                    w-full md:w-full">
                      <Img
                        className="h-[30px] w-[30px] "
                        src="images/img_iconwallet_light_blue_800.svg"
                        alt="iconwallet"
                      />
                      <Text
                         className="sm:mt-0 mt-[12px] sm:text-[40px] md:text-[46px] text-[18px] text-center 
                         text-light_blue-900 mr-[1000px]"
                         size="txtPoppinsSemiBold50"
                      >
                        Current Balance
                      </Text>
                    </div>
                    <Text
                      className="md:text-5xl text-[20px] text-center text-light_blue-900"
                      size="txtPoppinsSemiBold100"
                    >
                      Balance:
                     {balance !== null ? `$${balance}` : 'Loading balance...'}
                    </Text>
                  </div>
                </div>




                {/* <div className="bg-white-A700 flex flex-col items-start justify-start mb-1 ml-[60px] 
                p-[1px] shadow-bs4 w-[12%] md:w-full">
                  <div className="flex flex-col gap-[15px] justify-start mb-[12px] md:ml-[0] ml-[3px] w-full md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 gap-[76px] items-start justify-start mr-2 
                    w-full md:w-full">
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_iconarrowdown_light_blue_900_129x105.svg"
                        alt="iconarrowdown_One"
                      />
                      <Text
                        className="sm:mt-0 mt-[12px] sm:text-[40px] md:text-[46px] text-[18px] text-center 
                        text-light_blue-900 mr-[500px]"
                        size="txtPoppinsSemiBold50"
                      >
                        Last Debit
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[138px] md:text-5xl text-[18px] text-center text-light_blue-900"
                      size="txtPoppinsSemiBold100"
                    >
                      $1,002
                    </Text>
                  </div>
                </div> */}




              </div>











              <div className="bg-white-A700 ml-[130px] w-[1200px] flex flex-col items-center justify-start 
              p-[20px] sm:px-5 rounded-[20px] h-[650px]
              shadow-bs4">
                <div className="flex flex-col justify-start mb-[8px] w-[100%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[110px] md:text-5xl text-3xl text-black-900 text-center"
                    size="txtPoppinsSemiBold60Black900"
                  >
                    All Time Transactions
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[20px]
                   mt-[29px] w-[100%] md:w-full">
                    <Text
                      className="sm:text-[40px] md:text-[46px] text-[20px] text-black-900 text-center ml-[50px]"
                      size="txtPoppinsMedium50"
                    >
                      TRX ID
                    </Text>
                   
                    <Text
                      className="md:ml-[0] ml-[170px] sm:text-[40px] md:text-[46px] text-[20px] text-black-900 text-center"
                      size="txtPoppinsMedium50"
                    >
                      Date
                    </Text>
                 
                    <Text
                      className="md:ml-[0] ml-[240px] sm:text-[40px] md:text-[46px] text-[20px] text-black-900 text-center"
                      size="txtPoppinsMedium50"
                    >
                      Sender AccNo
                    </Text>
                  
                    <Text
                      className="md:ml-[0] ml-[100px] sm:text-[40px] md:text-[46px] text-[20px] text-black-900 
                      text-center"
                      size="txtPoppinsMedium50"
                    >
                     Receiver AccNo
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[70px] sm:text-[40px] md:text-[46px] text-[20px] text-black-900
                       text-center"
                      size="txtPoppinsMedium50"
                    >
                      Amount
                    </Text>
                   
                  </div>
                  <Line className="bg-black-900_72 h-0.5 w-[1140px] mt-[20px]" />

                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[10px]
                   w-full">
                    <div className="flex flex-col items-center justify-start">
                     











                                    {/* <div>
                                      {transactions.map((transaction) => (
                                        <TransactionRow key={transaction.id} transaction={transaction} />
                                      ))}
                                    </div> */}
{/* 
<div>
  {transactions.map((transaction) => (
    <TransactionRow
      key={transaction.id}
      amount={transaction.amount}
      transDate={transaction.transDate}
      senderAccountNumber={transaction.senderAccountNumber}
      receiverAccountNumber={transaction.receiverAccountNumber}
    />
  ))}
</div> */}


{/* <div>
      {transactions.map((transaction) => (
        <TransactionRow
          key={transaction.id}
          id={transaction.id}
          senderAccountNumber={transaction.senderAccountNumber}
          receiverAccountNumber={transaction.receiverAccountNumber}
          amount={transaction.amount}
          transDate={transaction.transDate}
        />
      ))}
    </div> */}

<div>
      {transactions.length > 0 ? (
        <TransactionHistory transactions={transactions} />
      ) : (
        <p>Loading transactions...</p>
      )}
                           
    </div>
                     
                      {/* // <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[0px] 
                      // w-[100%] md:w-full ml-[20px]">
                      //   <Text */}
                      {/* //     className="md:mt-0 mt-3 ml-[50px] sm:text-[40px] md:text-[46px] text-[20px] text-black-900 
                      //     text-center"
                      //     size="txtPoppinsRegular50"
                      //   >
                      //     3XY112
                      //   </Text> */}
                        {/* /* <Text
                          className="mb-0.5 md:ml-[0] ml-[150px] md:mt-0 mt-[9px] sm:text-[40px] md:text-[46px]
                           text-[20px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          Jasneet Kaur
                        </Text>
                        <Text
                          className="mb-[3px] md:ml-[0] ml-[100px] md:mt-0 mt-2 sm:text-[40px] md:text-[46px]
                           text-[20px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          Mar 1, 2023
                        </Text> */
                        /* <Text
                          className="mb-3 md:ml-[0] ml-[170px] sm:text-[40px] md:text-[46px] text-[20px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          Sent
                        </Text> */
                        /* <Text
                          className="mb-3 md:ml-[0] ml-[170px] sm:text-[40px] md:text-[46px] text-[20px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          $340
                        </Text>
                      </div>  */}




   

         


                    </div>



                    
                    {/* <div className="bg-light_blue-900 h-[930px] mb-[214px] md:mt-0 mt-[134px] rounded-[13px]
                     w-[1%]"></div> */}
                  </div>
                </div>
              </div>





            </div>
            <div className="bg-gray-700_01 h-[809px] mb-[40px] md:mt-0 mt-[18px] rounded-[10px] w-[1%]"></div>
          </div>
          <Line className="bg-black-900_72 h-0.5 mt-[1px] w-[1650px]" />
          <Text
            className="md:ml-[0] ml-[450px] mt-[0px] text-2xl sm:text-[32px] md:text-[34px] text-black-900
             text-center justify-center items-center"
            size="txtJostRomanRegular36"
          >
            Copyrights © 2023 Secure Bank All Rights Reserved
          </Text>
        </div>
      </div>
    </>
  );
};

export default TransactionHistory30WebFeelingPage;
