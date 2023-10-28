import React from "react";
import { useNavigate  } from "react-router-dom";

import { Img, Line, Text } from "components";

const TransactionAnalytics30WebFeelingPage = () => {
  const navigate = useNavigate ();
  const handleBackButtonClick = () => {
    navigate('/homepageeverydayaccount30webfeeling')
  };
  const handleChatbotClick = () => {
    navigate('/chatbotpage30webfeeling');
  }
  const handleLogoutClick = () => {
    alert('user has been logged out')
    navigate('/loginpage30')
  }
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[82px] w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="font-poppins md:h-24 h-[99px] md:px-5 relative w-full">
            <div className="absolute bg-light_blue-900 border border-black-900 border-solid flex flex-col inset-x-[0] items-end justify-start mx-auto pt-[7px] px-[7px] shadow-bs top-[0] w-full">
              <div className="flex flex-col items-center justify-start mr-4 w-[5%] md:w-full">
                <Img
                  className="h-[87px]"
                  src="images/img_iconsearch.svg"
                  alt="iconsearch"
                />
              </div>
            </div>
            <Text
              className="absolute h-max inset-y-[0] left-[2%] my-auto md:text-5xl text-[64px] text-white-A700 "
              size="txtPoppinsRegular64"
            >
              Secure Bank
            </Text>
            <Text
              className="absolute right-[13%] md:text-5xl text-[64px] text-white-A700 top-[0] "
              size="txtPoppinsRegular64"
              onClick={handleLogoutClick}
            >
              Logout
            </Text>
          </div>


          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-start max-w-[2380px] mt-2 mx-auto md:px-5 w-full">
            <Img
              className="h-[97px] md:mt-0 mt-[70px] ml-[25px]"
              src="images/img_iconbacksquare.svg"
              alt="iconbacksquare"
              onClick={handleBackButtonClick}
            />
            <div className="bg-white-A700 border-[5px] border-light_blue-900 border-solid
             flex md:ml-[0] ml-[250px] md:mt-0 mt-[27px] h-[200px] px-[60px] py-[40px] w-[25%] relative rounded-[50px] shadow-bs3 md:w-full ml-[400px]"
             onClick={handleChatbotClick}>
              <Img
                className="mt-[5px] mr-[70px] h-[90px] w-[90px]"
                src="images/img_ai28146662.png"
                alt="ai28146662"
              />
              <Text
                className="ml-[-25px] mr-[17px] mt-0.5 md:text-5xl text-[30px] text-black-900 text-center text-shadow-ts z-[1]"
                size="txtPoppinsBold70"
              >
                <>
                  Open <br />
                  Chat Bot
                </>
              </Text>
            </div>
            {/* <Img
              className="md:flex-1 h-[130px] sm:h-auto mb-3 md:ml-[0] ml-[400px] object-cover rounded-[161px] w-[17%] md:w-full mt-[35px] mr-[30px]"
              src="images/img_ellipse20_281x322.png"
              alt="ellipseTwenty"
            /> */}
          </div>
          <Line className="bg-black-900_72 h-0.5 mt-[25px] w-full" />
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between max-w-[1837px] mt-[124px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 border-[3px] border-gray-600 border-solid flex flex-col items-center justify-start p-[19px] rounded-[50px] shadow-bs11">
              <div className="flex flex-col justify-start mb-[126px] w-[82%] md:w-full">
                <Img
                  className="h-[155px] md:ml-[0] ml-[412px]"
                  src="images/img_iconchart3.svg"
                  alt="iconchartThree"
                />
                <Text
                  className="md:ml-[0] ml-[178px] mt-[25px] md:text-5xl text-6xl text-black-900 text-center"
                  size="txtPoppinsSemiBold60Black900"
                >
                  Transaction Analytics
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[11px] w-full">
                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex md:flex-1 flex-row items-center justify-between p-1 rounded-[30px] w-[41%] md:w-full">
                    <Text
                      className="ml-4 my-[19px] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                      size="txtPoppinsBold35"
                    >
                      Select Month
                    </Text>
                    <Img
                      className="h-[38px]"
                      src="images/img_checkmark_light_blue_900.svg"
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
                      src="images/img_checkmark_light_blue_900.svg"
                      alt="checkmark_One"
                    />
                  </div>
                </div>
                <div className="h-[589px] md:h-[613px] md:ml-[0] ml-[189px] mt-6 relative w-[63%] md:w-full">
                  <div className="bg-white-A700 h-[589px] m-auto rounded-[317px] shadow-bs7 w-full"></div>
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[65%]">
                    <Text
                      className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                      size="txtPoppinsMedium50"
                    >
                      Total Debit
                    </Text>
                    <Text
                      className="mt-[53px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                      size="txtPoppinsSemiBold50Black900"
                    >
                      -
                    </Text>
                    <Line className="bg-black-900 h-px mt-[38px] w-full" />
                    <Text
                      className="mt-[29px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                      size="txtPoppinsMedium50"
                    >
                      Total Credit
                    </Text>
                    <Text
                      className="mt-[15px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                      size="txtPoppinsSemiBold50Black900"
                    >
                      -
                    </Text>
                  </div>
                </div>
                <Line className="bg-black-900 h-px md:ml-[0] ml-[142px] mr-[185px] mt-6 w-[68%]" />
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[11px] mt-[43px] w-[93%] md:w-full">
                  <div className="flex flex-col justify-start mb-[35px]">
                    <Text
                      className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                      size="txtPoppinsMedium50"
                    >
                      Last Debit
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[185px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                      size="txtPoppinsSemiBold50Black900"
                    >
                      -
                    </Text>
                  </div>
                  <div className="h-[125px] md:ml-[0] ml-[35px] md:mt-0 mt-[58px] relative w-[15%] md:w-full">
                    <div className="bg-gray-900 border border-light_blue-900 border-solid h-[125px] m-auto rounded-[68px] w-full"></div>
                    <Img
                      className="absolute bottom-[6%] h-24 inset-x-[0] mx-auto"
                      src="images/img_arrowup_white_a700.svg"
                      alt="arrowup"
                    />
                  </div>
                  <div className="h-[118px] md:ml-[0] ml-[99px] md:mt-0 mt-[60px] relative w-[14%] md:w-full">
                    <div className="bg-light_blue-900 border border-light_blue-900 border-solid h-[118px] m-auto rounded-[64px] w-full"></div>
                    <Img
                      className="absolute h-[90px] right-[22%] top-[8%]"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                  <div className="flex flex-col justify-start mb-[35px] md:ml-[0] ml-[15px]">
                    <Text
                      className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                      size="txtPoppinsMedium50"
                    >
                      Last Credit
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[54px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                      size="txtPoppinsSemiBold50Black900"
                    >
                      -
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-700_01 h-[809px] mb-[541px] md:mt-0 mt-[65px] rounded-[10px] w-[2%]"></div>
          </div>
          <Line className="bg-black-900_72 h-0.5 mt-[129px] w-full" />
          <Text
            className="md:ml-[0] ml-[814px] mt-[51px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
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
