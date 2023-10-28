import React from "react";

import { Button, Img, Line, List, Text } from "components";

const BillPayment30WebFeelingPage = () => {
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
          <div className="flex sm:flex-col flex-row font-poppins md:gap-10 items-start justify-between max-w-[2291px] mt-[15px] mx-auto md:px-5 w-full">
            <Text
              className="mb-2.5 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtPoppinsBold40"
            >
              My Favourites
            </Text>
            <Text
              className="sm:mt-0 mt-2.5 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtPoppinsMedium40"
            >
              See All
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-poppins gap-[34px] items-start justify-between max-w-[2456px] mt-2 mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] justify-start">
              <div className="flex flex-col md:gap-10 gap-[73px] items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[193px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-[91%]"
                  orientation="horizontal"
                >
                  <div className="md:h-[235px] h-[260px] sm:ml-[0] relative w-full">
                    <div className="absolute bottom-[0] h-[235px] left-[0] w-[91%]">
                      <div className="bg-light_blue-900 h-[235px] m-auto rounded-[136px] shadow-bs9 w-full"></div>
                      <Text
                        className="absolute left-[22%] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 top-[34%]"
                        size="txtPoppinsSemiBold40WhiteA700"
                      >
                        Daniel
                      </Text>
                    </div>
                    <div className="absolute bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col h-[76px] items-center justify-start p-[3px] right-[0] rounded-[50%] shadow-bs9 top-[0] w-[76px]">
                      <Img
                        className="h-[70px] md:h-auto object-cover w-[70px]"
                        src="images/img_cancel6602521.png"
                        alt="cancel6602525"
                      />
                    </div>
                  </div>
                  <div className="md:h-[235px] h-[260px] sm:ml-[0] relative w-full">
                    <div className="absolute bottom-[0] h-[235px] left-[0] w-[92%]">
                      <div className="bg-light_blue-900 h-[235px] m-auto rounded-[136px] shadow-bs9 w-full"></div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-max"
                        size="txtPoppinsSemiBold40WhiteA700"
                      >
                        Sajid
                      </Text>
                    </div>
                    <div className="absolute bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col h-[76px] items-center justify-start p-[3px] right-[0] rounded-[50%] shadow-bs9 top-[0] w-[76px]">
                      <Img
                        className="h-[70px] md:h-auto object-cover w-[70px]"
                        src="images/img_cancel6602521.png"
                        alt="cancel6602526"
                      />
                    </div>
                  </div>
                  <div className="sm:h-[235px] md:h-[238px] h-[257px] sm:ml-[0] sm:mt-0 mt-[3px] relative w-full">
                    <div className="absolute bottom-[0] h-[235px] left-[0] w-[92%]">
                      <div className="bg-light_blue-900 h-[235px] m-auto rounded-[136px] shadow-bs9 w-full"></div>
                      <Text
                        className="absolute inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 top-[34%] w-max"
                        size="txtPoppinsSemiBold40WhiteA700"
                      >
                        Peter
                      </Text>
                    </div>
                    <div className="absolute bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col h-[76px] items-center justify-start p-[3px] right-[0] rounded-[50%] shadow-bs9 top-[0] w-[76px]">
                      <Img
                        className="h-[70px] md:h-auto object-cover w-[70px]"
                        src="images/img_cancel6602521.png"
                        alt="cancel6602527"
                      />
                    </div>
                  </div>
                  <div className="sm:h-[235px] md:h-[238px] h-[257px] sm:ml-[0] sm:mt-0 mt-[3px] relative w-full">
                    <div className="absolute bottom-[0] h-[235px] left-[0] w-[92%]">
                      <div className="bg-light_blue-900 h-[235px] m-auto rounded-[136px] shadow-bs9 w-full"></div>
                      <Text
                        className="absolute inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 top-[34%] w-max"
                        size="txtPoppinsSemiBold40WhiteA700"
                      >
                        Olivia
                      </Text>
                    </div>
                    <div className="absolute bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col h-[76px] items-center justify-start p-[3px] right-[0] rounded-[50%] shadow-bs9 top-[0] w-[76px]">
                      <Img
                        className="h-[70px] md:h-auto object-cover w-[70px]"
                        src="images/img_cancel6602521.png"
                        alt="cancel6602528"
                      />
                    </div>
                  </div>
                  <div className="sm:h-[235px] md:h-[238px] h-[257px] sm:ml-[0] sm:mt-0 mt-[3px] relative w-full">
                    <div className="absolute bottom-[0] h-[235px] left-[0] w-[92%]">
                      <div className="bg-light_blue-900 h-[235px] m-auto rounded-[136px] shadow-bs9 w-full"></div>
                      <Text
                        className="absolute inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 top-[34%] w-max"
                        size="txtPoppinsSemiBold40WhiteA700"
                      >
                        Tania
                      </Text>
                    </div>
                    <div className="absolute bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col h-[76px] items-center justify-start p-[3px] right-[0] rounded-[50%] shadow-bs9 top-[0] w-[76px]">
                      <Img
                        className="h-[70px] md:h-auto object-cover w-[70px]"
                        src="images/img_cancel6602521.png"
                        alt="cancel6602529"
                      />
                    </div>
                  </div>
                </List>
                <Line className="bg-black-900_72 h-0.5 w-full" />
              </div>
              <div className="bg-white-A700_01 border border-light_blue-800 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[436px] mr-[593px] p-[7px] rounded-[30px] shadow-bs5 w-[58%] md:w-full">
                <Img
                  className="h-[225px] md:h-auto object-cover w-[19%] sm:w-full"
                  src="images/img_image5.png"
                  alt="imageFive"
                />
                <Text
                  className="mt-1.5 sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                  size="txtPoppinsBold35Black900"
                >
                  Bill Payment
                </Text>
                <div className="flex flex-col items-center justify-start mb-[25px] mt-[102px] w-[87%] md:w-full">
                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row md:gap-10 items-center justify-between p-2.5 rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <Text
                      className="ml-12 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                      size="txtPoppinsBold35"
                    >
                      Enter Biller Code
                    </Text>
                    <Img
                      className="h-[74px] md:h-auto mr-[5px] sm:mt-0 mt-[3px] object-cover rounded-[10px]"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>
                  <Line className="bg-light_blue-900 h-[5px] mt-1.5 w-full" />
                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-16 p-2.5 rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <Text
                      className="ml-12 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                      size="txtPoppinsBold35"
                    >
                      Enter Reference Number
                    </Text>
                    <Img
                      className="h-[74px] md:h-auto mb-[3px] mr-[5px] object-cover rounded-[10px]"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852_One"
                    />
                  </div>
                  <Line className="bg-light_blue-900 h-[5px] mt-1.5 w-full" />
                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-start mt-16 px-[7px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <Img
                      className="h-[88px] md:mt-0 mt-[5px]"
                      src="images/img_airplane.svg"
                      alt="airplane"
                    />
                    <Line className="bg-black-900_72 md:h-0.5 h-[97px] md:ml-[0] ml-[9px] w-0.5 md:w-full" />
                    <Text
                      className="md:ml-[0] ml-[141px] md:mt-0 mt-5 sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                      size="txtPoppinsBold35"
                    >
                      Enter Amount
                    </Text>
                    <Img
                      className="md:flex-1 h-[74px] sm:h-auto md:ml-[0] ml-[528px] md:mt-0 mt-3.5 object-cover rounded-[10px] w-[12%] md:w-full"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852_Two"
                    />
                  </div>
                  <Line className="bg-light_blue-900 h-[5px] mt-1.5 w-full" />
                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[62px] p-[11px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <Text
                      className="sm:ml-[0] ml-[47px] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                      size="txtPoppinsBold35"
                    >
                      Enter Biller Nickname
                    </Text>
                    <Img
                      className="h-[74px] md:h-auto mr-1 object-cover rounded-[10px]"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852_Three"
                    />
                  </div>
                  <Line className="bg-light_blue-900 h-[5px] mt-1.5 w-full" />
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[558px] sm:min-w-full mt-[127px] rounded-[44px] sm:text-[35px] md:text-[41px] text-[45px] text-center"
                    size="sm"
                  >
                    Pay Bill
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray-700_01 h-[809px] mb-[724px] md:mt-0 mt-[126px] rounded-[10px] w-[1%]"></div>
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

export default BillPayment30WebFeelingPage;
