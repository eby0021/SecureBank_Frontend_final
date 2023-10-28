import React from "react";

import { Button, Img, Line, Text } from "components";

const LoginPage30ErrorPage = () => {
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
        <div className="bg-white-A700 flex flex-col font-poppins items-end justify-start mt-32 p-[17px] md:px-5 rounded-[50px] shadow-bs1 w-[53%] md:w-full">
          <div className="flex flex-col items-center justify-start mb-10 mt-[11px] w-[84%] md:w-full">
            <Img
              className="h-24"
              src="images/img_iconbank_black_900_96x110.svg"
              alt="iconbank"
            />
            <div className="h-[169px] md:h-[182px] mt-[13px] relative w-[51%] sm:w-full">
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
            <div className="flex flex-col justify-start mt-14 w-full">
              <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-10 gap-[115px] items-end justify-end mr-36 p-1 rounded-tl-[10px] rounded-tr-[10px] w-[83%] md:w-full">
                <Text
                  className="mb-[7px] sm:mt-0 mt-[21px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                  size="txtPoppinsBold35Black900"
                >
                  j.sparrow@gmail.com
                </Text>
                <Img
                  className="h-[74px] md:h-auto sm:mt-0 my-1 object-cover rounded-[10px] w-1/5 sm:w-full"
                  src="images/img_keyboard8419852_74x129.png"
                  alt="keyboard8419852"
                />
              </div>
              <Line className="bg-light_blue-900 h-[5px] mr-36 mt-[9px] w-[83%]" />
              <Text
                className="italic ml-1.5 md:ml-[0] mt-2.5 text-2xl md:text-[22px] text-center text-light_blue-900 sm:text-xl"
                size="txtPoppinsMediumItalic24"
              >
                Forgot Login ID?
              </Text>
              <Text
                className="italic md:ml-[0] ml-[497px] mt-[45px] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                size="txtPoppinsBoldItalic35"
              >
                Wrong Password!
              </Text>
              <div className="flex md:flex-col flex-row gap-[25px] items-center justify-between mr-[7px] mt-2 w-full">
                <div className="bg-white-A700 border border-light_blue-900 border-solid flex md:flex-1 flex-row sm:gap-10 items-end justify-between mb-0.5 p-1 rounded-tl-[10px] rounded-tr-[10px] w-[84%] md:w-full">
                  <Text
                    className="mb-1 ml-4 mt-6 sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                    size="txtPoppinsBold35Black900"
                  >
                    12345@123
                  </Text>
                  <Img
                    className="h-[74px] md:h-auto mb-0.5 mt-1.5 object-cover rounded-[10px]"
                    src="images/img_keyboard8419852_74x129.png"
                    alt="keyboard8419852_One"
                  />
                </div>
                <Img
                  className="h-[92px]"
                  src="images/img_icontagcross.svg"
                  alt="icontagcross"
                />
              </div>
              <Line className="bg-red-A200 h-[5px] mr-36 mt-[5px] w-[83%]" />
              <Text
                className="italic mt-[22px] text-2xl md:text-[22px] text-center text-light_blue-900 sm:text-xl"
                size="txtPoppinsMediumItalic24"
              >
                Forgot Password?
              </Text>
              <div className="flex sm:flex-col flex-row gap-[13px] items-start justify-end md:ml-[0] ml-[265px] mt-0.5 w-[48%] md:w-full">
                <div className="bg-white-A700 border border-black-900 border-solid h-[50px] mb-[3px] rounded-[10px] w-[50px]"></div>
                <Text
                  className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                  size="txtPoppinsSemiBold35"
                >
                  Keep me signed in
                </Text>
              </div>
              <div className="bg-gray-50 border border-light_blue-900 border-solid flex flex-col items-end justify-end md:ml-[0] ml-[38px] mr-[198px] mt-[105px] p-[5px] shadow-bs2 w-[72%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end mt-[9px] w-[91%] md:w-full">
                  <div className="bg-light_blue-900 border-2 border-gray-700_01 border-solid h-[50px] mb-[31px] sm:mt-0 mt-[41px] w-[50px]"></div>
                  <Text
                    className="ml-3 sm:ml-[0] sm:mt-0 mt-[43px] sm:text-[23px] md:text-[25px] text-[27px] text-black-900 text-center"
                    size="txtPoppinsRegular27"
                  >
                    I’m not a robot
                  </Text>
                  <div className="flex flex-col justify-start sm:ml-[0] ml-[97px] w-[32%] sm:w-full">
                    <Img
                      className="h-[65px] md:h-auto ml-14 md:ml-[0] object-cover w-[65px]"
                      src="images/img_captcha6119848.png"
                      alt="captcha6119848"
                    />
                    <div className="md:h-[33px] h-[54px] mt-[3px] relative w-full">
                      <Text
                        className="absolute italic right-[9%] text-black-900 text-center text-xl top-[0]"
                        size="txtPoppinsMediumItalic20"
                      >
                        reCaptcha
                      </Text>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] italic mx-auto text-black-900 text-center text-xl w-max"
                        size="txtPoppinsMediumItalic20"
                      >
                        <a
                          href="javascript:"
                          className="text-black-900 font-poppins font-medium underline italic"
                        >
                          Privacy
                        </a>
                        <span className="text-black-900 font-poppins font-medium italic">
                          {" "}
                          -{" "}
                        </span>
                        <a
                          href="javascript:"
                          className="text-black-900 font-poppins font-medium underline italic"
                        >
                          Terms
                        </a>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="cursor-pointer font-semibold leading-[normal] min-w-[547px] sm:min-w-full ml-11 md:ml-[0] mr-[226px] mt-[125px] rounded-[47px] sm:text-[35px] md:text-[41px] text-[45px] text-center">
                Login
              </Button>
              <Button
                className="border-[5px] border-light_blue-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[547px] sm:min-w-full md:ml-[0] ml-[49px] mr-[221px] mt-[61px] rounded-[47px] sm:text-[35px] md:text-[41px] text-[45px] text-center"
                color="white_A700"
              >
                Signup
              </Button>
            </div>
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

export default LoginPage30ErrorPage;
