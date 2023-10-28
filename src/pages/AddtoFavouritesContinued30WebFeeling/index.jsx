import React from "react";

import { Img, Line, Text } from "components";

const AddtoFavouritesContinued30WebFeelingPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[52px] w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="font-poppins md:h-24 h-[99px] md:px-5 relative w-full">
            <div className="absolute bg-light_blue-900 border border-black-900 border-solid h-[95px] inset-x-[0] mx-auto shadow-bs top-[0] w-full"></div>
            <Text
              className="absolute h-max inset-y-[0] left-[2%] my-auto md:text-5xl text-[64px] text-white-A700 underline"
              size="txtPoppinsRegular64"
            >
              Secure Bank
            </Text>
            <Text
              className="absolute right-[16%] md:text-5xl text-[64px] text-white-A700 top-[0] underline"
              size="txtPoppinsRegular64"
            >
              Logout
            </Text>
            <Img
              className="absolute h-[91px] inset-y-[0] my-auto right-[1%]"
              src="images/img_iconsearch.svg"
              alt="iconsearch"
            />
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-start max-w-[2347px] mt-2 mx-auto md:px-5 w-full">
            <Img
              className="h-[157px] md:mt-0 mt-[68px]"
              src="images/img_iconbacksquare.svg"
              alt="iconbacksquare"
            />
            <div className="bg-white-A700 border-[5px] border-light_blue-900 border-solid flex md:ml-[0] ml-[562px] md:mt-0 my-[26px] p-[15px] relative rounded-[50px] shadow-bs3 w-[29%] md:w-full">
              <Img
                className="h-[188px] mt-0.5 object-cover w-[188px]"
                src="images/img_ai28146662.png"
                alt="ai28146662"
              />
              <Text
                className="ml-[-25px] mr-[17px] mt-0.5 md:text-5xl text-[70px] text-black-900 text-center text-shadow-ts z-[1]"
                size="txtPoppinsBold70"
              >
                <>
                  Open <br />
                  Chat Bot
                </>
              </Text>
            </div>
            <Img
              className="h-[318px] md:h-auto md:ml-[0] ml-[602px] rounded-[50%] w-[318px]"
              src="images/img_ellipse20_318x318.png"
              alt="ellipseTwenty"
            />
          </div>
          <Line className="bg-black-900_72 h-0.5 max-w-[2402px] mt-[29px] mx-auto w-full" />
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between max-w-[2180px] mt-[23px] mx-auto md:px-5 w-full">
            <div className="md:h-[1366px] sm:h-[1471px] h-[1730px] relative w-[83%] md:w-full">
              <div className="absolute bottom-[0] h-[1264px] left-[9%] w-[77%] md:w-full">
                <div className="absolute bottom-[18%] flex flex-col gap-[52px] inset-x-[0] items-center justify-start mx-auto w-[86%]">
                  <Line className="bg-light_blue-900 h-[5px] w-full" />
                  <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex md:flex-col flex-row gap-[57px] items-center justify-end p-3.5 rounded-[10px] w-[65%] md:w-full">
                    <Text
                      className="mb-0.5 md:mt-0 mt-[13px] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                      size="txtPoppinsBold35"
                    >
                      Select Reason of Sending Money
                    </Text>
                    <Img
                      className="h-[34px]"
                      src="images/img_checkmark_light_blue_900.svg"
                      alt="checkmark"
                    />
                  </div>
                </div>
                <Line className="absolute bg-black-900_72 bottom-[30%] h-[97px] left-[15%] w-0.5" />
                <Img
                  className="absolute bottom-[31%] h-[88px] left-[8%]"
                  src="images/img_airplane.svg"
                  alt="airplane"
                />
                <Text
                  className="absolute bottom-[32%] left-1/4 sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                  size="txtPoppinsBold35"
                >
                  Enter Amount
                </Text>
                <Img
                  className="absolute bottom-[31%] h-[82px] object-cover right-[8%] rounded-[10px] w-[17%]"
                  src="images/img_keyboard8419852.png"
                  alt="keyboard8419852"
                />
                <div className="absolute bg-white-A700 border border-light_blue-900 border-solid bottom-[30%] h-[97px] inset-x-[0] mx-auto rounded-tl-[10px] rounded-tr-[10px] w-[86%]"></div>
                <Line className="absolute bg-light_blue-900 bottom-[43%] h-[5px] inset-x-[0] mx-auto w-[86%]" />
                <Img
                  className="absolute h-[79px] inset-y-[0] my-auto object-cover right-[8%] rounded-[10px] w-[17%]"
                  src="images/img_keyboard8419852.png"
                  alt="keyboard8419852_One"
                />
                <div className="absolute bg-white-A700 border border-light_blue-900 border-solid flex flex-col h-max inset-[0] items-start justify-center m-auto p-[19px] rounded-tl-[10px] rounded-tr-[10px]">
                  <Text
                    className="md:ml-[0] ml-[38px] mt-1 sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                    size="txtPoppinsBold35"
                  >
                    Enter Beneficiary Bank Account Number
                  </Text>
                </div>
                <Img
                  className="absolute h-[34px] right-[36%] top-[41%]"
                  src="images/img_checkmark_light_blue_900.svg"
                  alt="checkmark_One"
                />
                <Text className="absolute inset-x-[0] mx-auto top-[37%] w-max"></Text>
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[1%] w-[86%]">
                  <Img
                    className="h-[179px]"
                    src="images/img_iconmoneyrecive.svg"
                    alt="iconmoneyrecive"
                  />
                  <Text
                    className="mt-9 sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                    size="txtPoppinsBold35Black900"
                  >
                    Pay Someone
                  </Text>
                  <div className="flex flex-col items-start justify-start mt-[25px] w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex md:flex-1 flex-row items-center justify-between p-[25px] sm:px-5 rounded-tl-[30px] rounded-tr-[30px] w-2/5 md:w-full">
                        <Text
                          className="mb-[7px] ml-[30px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                          size="txtPoppinsBold35Black900"
                        >
                          Bank Account
                        </Text>
                        <div className="bg-light_blue-900 border-2 border-light_blue-900 border-solid h-[47px] mr-[18px] my-1.5 rounded-[23px] w-[47px]"></div>
                      </div>
                      <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex md:flex-1 flex-row items-center justify-between p-7 sm:px-5 rounded-[30px] w-2/5 md:w-full">
                        <Text
                          className="ml-[17px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                          size="txtPoppinsBold35Black900"
                        >
                          Mobile Account
                        </Text>
                        <div className="bg-white-A700 border-2 border-light_blue-900 border-solid h-[47px] mr-1.5 my-[3px] rounded-[23px] w-[47px]"></div>
                      </div>
                    </div>
                    <Line className="bg-light_blue-900 h-[5px] mt-[3px] w-2/5" />
                  </div>
                </div>
                <div className="absolute bg-white-A700_01 border border-light_blue-800 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-8 sm:px-5 rounded-[30px] shadow-bs5 w-full">
                  <Text
                    className="bg-light_blue-900 h-[89px] justify-center mt-[1111px] pb-[7px] pt-[13px] sm:px-5 px-[35px] rounded-[44px] sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700 w-[558px]"
                    size="txtPoppinsSemiBold45"
                  >
                    Send Money
                  </Text>
                </div>
              </div>
              <div className="absolute bg-white-A700_01 border border-light_blue-800 border-solid flex flex-col md:gap-10 gap-[140px] inset-x-[0] items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 rounded-[30px] shadow-bs5 top-[0] w-full">
                <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col items-center justify-end p-[17px] rounded-[50px]">
                  <Text
                    className="mt-2.5 md:text-5xl text-6xl text-center text-light_blue-900"
                    size="txtPoppinsSemiBold60Lightblue900"
                  >
                    New Favourite
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start mb-[81px] w-[70%] md:w-full">
                  <div className="flex sm:h-[141px] h-[97px] justify-end relative w-full">
                    <Text
                      className="mb-[19px] ml-[58px] mt-auto sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                      size="txtPoppinsBold35"
                    >
                      Enter Beneficiary Bank Account Number
                    </Text>
                    <div className="absolute bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row md:gap-10 h-full inset-[0] items-center justify-between m-auto p-[7px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                      <Text
                        className="sm:ml-[0] ml-[51px] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                        size="txtPoppinsBold35"
                      >
                        Enter Account Number
                      </Text>
                      <Img
                        className="h-[74px] md:h-auto mr-[3px] sm:mt-0 mt-[9px] object-cover rounded-[10px]"
                        src="images/img_keyboard8419852.png"
                        alt="keyboard8419852_Two"
                      />
                    </div>
                  </div>
                  <div className="md:h-[11px] h-[5px] mt-1.5 relative w-full">
                    <Line className="bg-light_blue-900 h-[5px] m-auto w-full" />
                    <Line className="absolute bg-light_blue-900 h-[5px] inset-[0] justify-center m-auto w-full" />
                  </div>
                  <div className="flex md:h-[238px] sm:h-[282px] h-[97px] justify-end mt-[141px] relative w-full">
                    <Text
                      className="mb-[19px] ml-[58px] mt-auto sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                      size="txtPoppinsBold35"
                    >
                      Enter Beneficiary Bank Account Number
                    </Text>
                    <div className="absolute bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row md:gap-10 h-full inset-[0] items-center justify-between m-auto p-[7px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                      <Text
                        className="sm:ml-[0] ml-[51px] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                        size="txtPoppinsBold35"
                      >
                        Enter BSB Number
                      </Text>
                      <Img
                        className="h-[74px] md:h-auto mr-[3px] sm:mt-0 mt-[9px] object-cover rounded-[10px]"
                        src="images/img_keyboard8419852.png"
                        alt="keyboard8419852_Three"
                      />
                    </div>
                  </div>
                  <div className="md:h-[11px] h-[5px] mt-1.5 relative w-full">
                    <Line className="bg-light_blue-900 h-[5px] m-auto w-full" />
                    <Line className="absolute bg-light_blue-900 h-[5px] inset-[0] justify-center m-auto w-full" />
                  </div>
                  <div className="flex md:h-[236px] sm:h-[286px] h-[97px] justify-end mt-[139px] relative w-full">
                    <Text
                      className="mb-[19px] ml-[58px] mt-auto sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                      size="txtPoppinsBold35"
                    >
                      Enter Beneficiary Bank Account Number
                    </Text>
                    <div className="absolute bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row md:gap-10 h-full inset-[0] items-center justify-between m-auto p-2.5 rounded-tl-[10px] rounded-tr-[10px] w-full">
                      <Text
                        className="ml-12 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                        size="txtPoppinsBold35"
                      >
                        Enter Nick Name
                      </Text>
                      <Img
                        className="h-[74px] md:h-auto object-cover rounded-[10px]"
                        src="images/img_keyboard8419852.png"
                        alt="keyboard8419852_Four"
                      />
                    </div>
                  </div>
                  <div className="md:h-[11px] h-[5px] mt-1.5 relative w-full">
                    <Line className="bg-light_blue-900 h-[5px] m-auto w-full" />
                    <Line className="absolute bg-light_blue-900 h-[5px] inset-[0] justify-center m-auto w-full" />
                  </div>
                  <div className="bg-light_blue-900 border-2 border-light_blue-900 border-solid flex md:flex-col flex-row gap-[43px] items-center justify-center mt-[111px] p-[19px] rounded-[50px] w-[69%] md:w-full">
                    <Img
                      className="h-[118px] mb-[9px] ml-2.5 md:ml-[0]"
                      src="images/img_iconheartadd_white_a700.svg"
                      alt="iconheartadd"
                    />
                    <Text
                      className="mr-7 md:text-5xl text-6xl text-center text-white-A700"
                      size="txtPoppinsSemiBold60"
                    >
                      Confirm Favourite
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-700_01 h-[809px] mb-[724px] md:mt-0 mt-[197px] rounded-[10px] w-[1%]"></div>
          </div>
          <Line className="bg-black-900_72 h-0.5 mt-[83px] w-full" />
          <Text
            className="md:ml-[0] ml-[807px] mt-[38px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
            size="txtJostRomanRegular36"
          >
            Copyrights © 2023 Secure Bank All Rights Reserved
          </Text>
        </div>
      </div>
    </>
  );
};

export default AddtoFavouritesContinued30WebFeelingPage;
