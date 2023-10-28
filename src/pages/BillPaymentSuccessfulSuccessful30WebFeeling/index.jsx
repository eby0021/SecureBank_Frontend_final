import React from "react";

import { Button, Img, Line, Text } from "components";

const BillPaymentSuccessfulSuccessful30WebFeelingPage = () => {
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
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between max-w-[2020px] mt-[220px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700_01 border border-light_blue-800 border-solid flex flex-col items-center justify-start md:mt-0 mt-[269px] p-[13px] rounded-[30px] shadow-bs5">
              <Img
                className="h-[179px]"
                src="images/img_iconmoneyrecive.svg"
                alt="iconmoneyrecive"
              />
              <div className="md:h-[1135px] h-[754px] sm:h-[785px] mt-9 relative w-[79%] md:w-full">
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                  <div className="flex flex-col gap-[25px] items-center justify-start w-full">
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                      size="txtPoppinsBold35Black900"
                    >
                      Pay Someone
                    </Text>
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
                  </div>
                  <div className="h-[471px] sm:h-[520px] md:h-[757px] mt-[3px] relative w-full">
                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Line className="bg-light_blue-900 h-[5px] w-2/5" />
                        <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-row gap-[130px] items-start justify-end md:ml-[0] ml-[340px] mt-9 p-[22px] sm:px-5 rounded-[30px] w-2/5 md:w-full">
                          <Text
                            className="mb-[11px] mt-[3px] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                            size="txtPoppinsBold35"
                          >
                            Select Bank
                          </Text>
                          <Img
                            className="h-[34px] mt-[30px]"
                            src="images/img_checkmark_light_blue_900.svg"
                            alt="checkmark"
                          />
                        </div>
                        <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-8 p-0.5 rounded-tl-[10px] rounded-tr-[10px] w-full">
                          <Text
                            className="ml-14 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                            size="txtPoppinsBold35Black900"
                          >
                            8237231123
                          </Text>
                          <Img
                            className="h-[79px] md:h-auto sm:mt-0 my-[7px] object-cover rounded-[10px]"
                            src="images/img_keyboard8419852.png"
                            alt="keyboard8419852"
                          />
                        </div>
                        <Line className="bg-light_blue-900 h-[5px] mt-1.5 w-full" />
                        <div className="bg-white-A700 border border-light_blue-900 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-end mt-[70px] pl-[7px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                          <Img
                            className="h-[88px]"
                            src="images/img_airplane.svg"
                            alt="airplane"
                          />
                          <Line className="bg-black-900_72 md:h-0.5 h-[97px] md:ml-[0] ml-[9px] w-0.5 md:w-full" />
                          <Text
                            className="md:ml-[0] ml-[141px] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                            size="txtPoppinsBold35"
                          >
                            Enter Amount
                          </Text>
                          <Img
                            className="md:flex-1 h-[82px] sm:h-auto md:ml-[0] ml-[449px] object-cover rounded-[10px] w-1/5 md:w-full"
                            src="images/img_keyboard8419852.png"
                            alt="keyboard8419852_One"
                          />
                        </div>
                        <Line className="bg-light_blue-900 h-[5px] mt-1.5 w-full" />
                      </div>
                    </div>
                    <Line className="absolute bg-light_blue-900 h-[5px] inset-x-[0] mx-auto top-[31%] w-full" />
                    <div className="absolute bg-white-A700 border border-light_blue-900 border-solid flex flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto p-0.5 rounded-tl-[10px] rounded-tr-[10px] top-[9%] w-full">
                      <Text
                        className="ml-14 sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtPoppinsBold35Black900"
                      >
                        6833421
                      </Text>
                      <Img
                        className="h-[79px] md:h-auto my-[7px] object-cover rounded-[10px]"
                        src="images/img_keyboard8419852.png"
                        alt="keyboard8419852_Two"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white-A700_01 border border-light_blue-800 border-solid flex flex-col h-max inset-y-[0] items-center justify-end my-auto p-[33px] sm:px-5 right-[0] rounded-[30px] shadow-bs5 w-[86%]">
                  <div className="bg-white-A700 flex flex-col items-center justify-start mt-[60px] p-1 rounded-[132px] shadow-bs8 w-[264px] md:w-full">
                    <Img
                      className="h-[254px] w-[254px]"
                      src="images/img_icontickcircle.svg"
                      alt="icontickcircle"
                    />
                  </div>
                  <Text
                    className="mt-[72px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                    size="txtPoppinsBold50Black900"
                  >
                    Bill Payment Successful{" "}
                  </Text>
                  <div className="flex flex-col gap-[22px] items-center justify-start mt-7 w-[41%] md:w-full">
                    <Text
                      className="bg-light_blue-900 h-[82px] justify-center pl-5 sm:pr-5 pr-[31px] py-3 rounded-[41px] sm:text-[33px] md:text-[35px] text-[37px] text-center text-white-A700 w-[381px]"
                      size="txtPoppinsSemiBold37"
                    >
                      Add to Favourites
                    </Text>
                    <Button
                      className="border-2 border-light_blue-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[381px] sm:min-w-full sm:text-[33px] md:text-[35px] text-[37px] text-center"
                      shape="round"
                      color="white_A700"
                    >
                      Return
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row md:gap-10 gap-[763px] items-start justify-start mt-[22px] p-[7px] rounded-tl-[10px] rounded-tr-[10px] w-[79%] md:w-full">
                <Text
                  className="sm:ml-[0] ml-[51px] sm:mt-0 mt-3 sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                  size="txtPoppinsBold35Black900"
                >
                  Electric XYZ
                </Text>
                <Img
                  className="h-[74px] md:h-auto sm:mt-0 mt-[9px] object-cover rounded-[10px] w-[12%] sm:w-full"
                  src="images/img_keyboard8419852.png"
                  alt="keyboard8419852_Three"
                />
              </div>
              <Button
                className="cursor-pointer font-semibold leading-[normal] mb-[19px] min-w-[558px] sm:min-w-full mt-[41px] rounded-[44px] sm:text-[35px] md:text-[41px] text-[45px] text-center"
                size="sm"
              >
                Pay Bill
              </Button>
            </div>
            <div className="bg-gray-700_01 h-[809px] mb-[724px] rounded-[10px] w-[1%]"></div>
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

export default BillPaymentSuccessfulSuccessful30WebFeelingPage;
