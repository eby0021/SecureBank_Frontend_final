import React from "react";

import { Button, Img, Line, Text } from "components";

const LoginPagereCaptcha30Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[49px] w-full">
        <div className="font-poppins h-[95px] md:px-5 relative w-full">
          <div className="bg-light_blue-900 border border-black-900 border-solid flex flex-col h-full items-end justify-start m-auto p-[7px] shadow-bs w-full">
            <div className="flex flex-col items-center justify-start mr-[11px] w-[5%] md:w-full">
              <Img className="h-[81px]" src="images/img_plus.svg" alt="plus" />
            </div>
          </div>
          <Text
            className="absolute h-max inset-y-[0] left-[3%] my-auto md:text-5xl text-[64px] text-white-A700"
            size="txtPoppinsRegular64"
          >
            Secure Bank
          </Text>
        </div>
        <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mt-32 p-3.5 md:px-5 rounded-[50px] shadow-bs1 w-[53%] md:w-full">
          <Img
            className="h-24"
            src="images/img_iconbank_black_900_96x110.svg"
            alt="iconbank"
          />
          <div className="h-[759px] sm:h-[791px] md:h-[894px] relative w-[79%] md:w-full">
            <div className="absolute flex flex-col items-start justify-start left-[4%] top-[0] w-[87%]">
              <div className="md:h-[259px] h-[464px] relative w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start w-full">
                    <div className="h-[169px] relative w-[62%] sm:w-full">
                      <Text
                        className="m-auto sm:text-[40px] md:text-[46px] text-[50px] text-blue_gray-900 text-center"
                        size="txtPoppinsBold50"
                      >
                        <>
                          Login
                          <br />
                          Secure Bank
                        </>
                      </Text>
                      <Line className="absolute bg-light_blue-900 h-[5px] inset-x-[0] mx-auto top-[44%] w-[44%]" />
                    </div>
                    <div className="flex flex-col md:gap-10 gap-[219px] items-center justify-start w-full">
                      <Line className="bg-light_blue-900 h-[5px] w-full" />
                      <Line className="bg-light_blue-900 h-[5px] w-full" />
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute bottom-[38%] italic left-[1%] text-2xl md:text-[22px] text-center text-light_blue-900 sm:text-xl"
                  size="txtPoppinsMediumItalic24"
                >
                  Forgot Login ID?
                </Text>
                <div className="absolute bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-10 inset-x-[0] items-center justify-between mx-auto p-2 rounded-tl-[10px] rounded-tr-[10px] top-[30%] w-full">
                  <Text
                    className="ml-3.5 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                    size="txtPoppinsBold35"
                  >
                    Enter Your Login ID
                  </Text>
                  <Img
                    className="h-[74px] md:h-auto mr-[3px] object-cover rounded-[10px]"
                    src="images/img_keyboard8419852_74x129.png"
                    alt="keyboard8419852"
                  />
                </div>
                <div className="absolute bg-white-A700 border border-light_blue-900 border-solid bottom-[2%] flex flex-col inset-x-[0] items-start justify-start mx-auto p-[15px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                  <Text
                    className="mb-[5px] ml-1.5 md:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                    size="txtPoppinsBold35"
                  >
                    Enter Your Password
                  </Text>
                </div>
              </div>
              <Text
                className="italic mt-[25px] text-2xl md:text-[22px] text-center text-light_blue-900 sm:text-xl"
                size="txtPoppinsMediumItalic24"
              >
                Forgot Password?
              </Text>
              <div className="flex sm:flex-col flex-row gap-[13px] items-start justify-end md:ml-[0] ml-[265px] mt-0.5 w-[59%] md:w-full">
                <div className="bg-white-A700 border border-black-900 border-solid h-[50px] mb-[3px] rounded-[10px] w-[50px]"></div>
                <Text
                  className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                  size="txtPoppinsSemiBold35"
                >
                  Keep me signed in
                </Text>
              </div>
            </div>
            <Img
              className="absolute bottom-[37%] h-[74px] object-cover right-[11%] rounded-[10px] w-[17%]"
              src="images/img_keyboard8419852_74x129.png"
              alt="keyboard8419852_One"
            />
            <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[50px] shadow-bs1 w-full">
              <div className="flex flex-col items-center justify-start mt-[60px] w-[93%] md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtPoppinsSemiBold40"
                >
                  Enter the words you hear...
                </Text>
                <div className="bg-light_blue-900 flex flex-col items-center justify-end mt-[81px] p-[19px] rounded-[10px]">
                  <Text
                    className="mt-0.5 md:text-5xl text-6xl text-white-A700"
                    size="txtPoppinsSemiBold60"
                  >
                    PLAY
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start mt-[72px] w-full">
                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-10 items-start justify-between p-[5px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <Text
                      className="sm:ml-[0] ml-[17px] sm:mt-0 mt-[17px] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                      size="txtPoppinsBold35"
                    >
                      Enter words you hear
                    </Text>
                    <Img
                      className="h-[88px] md:h-auto mr-2.5 sm:mt-0 mt-2 object-cover rounded-[10px]"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852_Two"
                    />
                  </div>
                  <Line className="bg-light_blue-900 h-[5px] mt-[7px] w-full" />
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-9 w-[97%] md:w-full">
                    <Img
                      className="h-[88px] mb-[11px]"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Img
                      className="h-[83px] md:ml-[0] ml-[70px] md:mt-0 mt-1"
                      src="images/img_iconvolume.svg"
                      alt="iconvolume"
                    />
                    <Text
                      className="bg-white-A700 border-2 border-light_blue-900 border-solid h-[65px] justify-center md:ml-[0] ml-[108px] md:mt-0 mt-[34px] sm:px-5 px-[35px] py-0.5 rounded-[10px] sm:text-4xl md:text-[38px] text-[40px] text-light_blue-900 w-[276px]"
                      size="txtPoppinsSemiBold40Lightblue900"
                    >
                      Verify
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start mb-[71px] w-3/5 md:w-full">
            <div className="bg-gray-50 border border-light_blue-900 border-solid flex flex-col items-end justify-start ml-0.5 md:ml-[0] p-[15px] shadow-bs2 w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end mb-3.5 mr-1.5 w-[92%] md:w-full">
                <div className="bg-light_blue-900 border-2 border-gray-700_01 border-solid h-[50px] mb-[7px] sm:mt-0 mt-[41px] w-[50px]"></div>
                <Text
                  className="ml-3 sm:ml-[0] sm:mt-0 mt-[43px] sm:text-[23px] md:text-[25px] text-[27px] text-black-900 text-center"
                  size="txtPoppinsRegular27"
                >
                  I’m not a robot
                </Text>
                <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[134px] w-[22%] sm:w-full">
                  <Img
                    className="h-[65px] md:h-auto object-cover w-[65px]"
                    src="images/img_captcha6119848.png"
                    alt="captcha6119848"
                  />
                  <Text
                    className="italic mt-[3px] text-black-900 text-center text-xl"
                    size="txtPoppinsMediumItalic20"
                  >
                    reCaptcha
                  </Text>
                </div>
              </div>
            </div>
            <Button className="cursor-pointer font-semibold leading-[normal] min-w-[547px] sm:min-w-full mt-[172px] rounded-[47px] sm:text-[35px] md:text-[41px] text-[45px] text-center">
              Login
            </Button>
            <Button
              className="border-[5px] border-light_blue-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[547px] sm:min-w-full md:ml-[0] ml-[5px] mt-[61px] rounded-[47px] sm:text-[35px] md:text-[41px] text-[45px] text-center"
              color="white_A700"
            >
              Signup
            </Button>
          </div>
        </div>
        <Line className="bg-black-900_72 h-0.5 mt-[181px] w-full" />
        <Text
          className="mt-[63px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
          size="txtJostRomanRegular36"
        >
          Copyrights © 2023 Secure Bank All Rights Reserved
        </Text>
      </div>
    </>
  );
};

export default LoginPagereCaptcha30Page;
