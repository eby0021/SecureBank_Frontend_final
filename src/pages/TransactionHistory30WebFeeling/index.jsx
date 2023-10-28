import React from "react";

import { Img, Line, Text } from "components";

const TransactionHistory30WebFeelingPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[74px] w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="font-poppins h-[135px] md:px-5 relative w-full">
            <div className="bg-light_blue-900 border border-black-900 border-solid flex flex-row h-full items-center justify-start m-auto p-[3px] shadow-bs w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mb-2 ml-[46px] w-[98%]">
                <Text
                  className="md:text-5xl text-[64px] text-white-A700 underline"
                  size="txtPoppinsRegular64"
                >
                  Secure Bank
                </Text>
                <Img
                  className="h-28 sm:mt-0 mt-[7px]"
                  src="images/img_iconsearch.svg"
                  alt="iconsearch"
                />
              </div>
            </div>
            <Text
              className="absolute right-[44%] md:text-5xl text-[64px] text-white-A700 top-[0] underline"
              size="txtPoppinsRegular64"
            >
              Logout
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between max-w-[3473px] mt-[25px] mx-auto md:px-5 w-full">
            <Img
              className="h-[212px] md:mt-0 mt-[71px]"
              src="images/img_iconbacksquare.svg"
              alt="iconbacksquare"
            />
            <div className="bg-white-A700 border-[5px] border-light_blue-900 border-solid flex mb-[60px] md:mt-0 mt-[27px] p-[15px] relative rounded-[50px] shadow-bs3 w-1/5 md:w-full">
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
              className="h-[353px] md:h-auto rounded-[50%] w-[353px]"
              src="images/img_ellipse20.png"
              alt="ellipseTwenty"
            />
          </div>
          <Line className="bg-black-900_72 h-0.5 md:ml-[0] ml-[5px] mt-[25px] w-full" />
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between max-w-[3328px] mt-[119px] mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[141px] justify-start">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[344px] w-[72%] md:w-full">
                <div className="bg-white-A700 flex flex-col items-start justify-start mb-1 p-[13px] shadow-bs4 w-[30%] md:w-full">
                  <div className="flex flex-col gap-[35px] justify-start mb-[82px] md:ml-[0] ml-[3px] w-[79%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 gap-[76px] items-start justify-start mr-2 w-[99%] md:w-full">
                      <Img
                        className="h-[147px]"
                        src="images/img_iconarrowdown_light_blue_900.svg"
                        alt="iconarrowdown"
                      />
                      <Text
                        className="sm:mt-0 mt-[52px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-light_blue-900"
                        size="txtPoppinsSemiBold50"
                      >
                        Last Credit
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[140px] md:text-5xl text-[100px] text-center text-light_blue-900"
                      size="txtPoppinsSemiBold100"
                    >
                      $3,200
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start mb-1 md:ml-[0] ml-[129px] p-[13px] shadow-bs4 w-[30%] md:w-full">
                  <div className="flex flex-col gap-[50px] items-center justify-start mb-[82px] ml-1.5 md:ml-[0] w-[92%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-start w-full">
                      <Img
                        className="h-[109px] mb-[23px]"
                        src="images/img_iconwallet_light_blue_800.svg"
                        alt="iconwallet"
                      />
                      <Text
                        className="sm:mt-0 mt-[57px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-light_blue-900"
                        size="txtPoppinsSemiBold50"
                      >
                        Current Balance
                      </Text>
                    </div>
                    <Text
                      className="md:text-5xl text-[100px] text-center text-light_blue-900"
                      size="txtPoppinsSemiBold100"
                    >
                      $2,198
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start md:ml-[0] ml-[132px] md:mt-0 mt-1 p-3 shadow-bs4 w-[30%] md:w-full">
                  <div className="flex flex-col gap-[47px] justify-start mb-[83px] mt-[7px] w-3/4 md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 gap-[65px] items-end justify-start mr-[35px] w-[93%] md:w-full">
                      <Img
                        className="h-[129px]"
                        src="images/img_iconarrowdown_light_blue_900_129x105.svg"
                        alt="iconarrowdown_One"
                      />
                      <Text
                        className="mb-[3px] sm:mt-0 mt-[50px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-light_blue-900"
                        size="txtPoppinsSemiBold50"
                      >
                        Last Debit
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[138px] md:text-5xl text-[100px] text-center text-light_blue-900"
                      size="txtPoppinsSemiBold100"
                    >
                      $1,002
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 rounded-[20px] shadow-bs4 w-full">
                <div className="flex flex-col justify-start mb-[178px] w-[99%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[118px] md:text-5xl text-6xl text-black-900 text-center"
                    size="txtPoppinsSemiBold60Black900"
                  >
                    All Time Transactions
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[57px] mt-[59px] w-[95%] md:w-full">
                    <Text
                      className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                      size="txtPoppinsMedium50"
                    >
                      TRX ID
                    </Text>
                    <div className="flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[76px] w-[3%] md:w-full">
                      <Img
                        className="h-[38px]"
                        src="images/img_arrowup.svg"
                        alt="arrowup"
                      />
                      <Img
                        className="h-[38px]"
                        src="images/img_offer.svg"
                        alt="offer"
                      />
                    </div>
                    <Text
                      className="md:ml-[0] ml-[260px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                      size="txtPoppinsMedium50"
                    >
                      Name
                    </Text>
                    <div className="flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[89px] w-[3%] md:w-full">
                      <Img
                        className="h-[38px]"
                        src="images/img_arrowup.svg"
                        alt="arrowup_One"
                      />
                      <Img
                        className="h-[38px]"
                        src="images/img_offer.svg"
                        alt="offer_One"
                      />
                    </div>
                    <Text
                      className="md:ml-[0] ml-[443px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                      size="txtPoppinsMedium50"
                    >
                      Date
                    </Text>
                    <div className="flex flex-col gap-1.5 items-center justify-start md:ml-[0] ml-[74px] md:mt-0 mt-3 w-[3%] md:w-full">
                      <Img
                        className="h-[34px]"
                        src="images/img_arrowup.svg"
                        alt="arrowup_Two"
                      />
                      <Img
                        className="h-[34px]"
                        src="images/img_offer.svg"
                        alt="offer_Two"
                      />
                    </div>
                    <Text
                      className="md:ml-[0] ml-[300px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                      size="txtPoppinsMedium50"
                    >
                      Action
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[367px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                      size="txtPoppinsMedium50"
                    >
                      Amount
                    </Text>
                    <div className="flex flex-col gap-1.5 items-center justify-start md:ml-[0] ml-[101px] md:mt-0 mt-3 w-[3%] md:w-full">
                      <Img
                        className="h-[34px]"
                        src="images/img_arrowup.svg"
                        alt="arrowup_Three"
                      />
                      <Img
                        className="h-[34px]"
                        src="images/img_offer.svg"
                        alt="offer_Three"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[26px] w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Line className="bg-black-900_72 h-0.5 w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-24 w-[93%] md:w-full">
                        <Text
                          className="md:mt-0 mt-3 sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          3XY112
                        </Text>
                        <Text
                          className="mb-0.5 md:ml-[0] ml-[318px] md:mt-0 mt-[9px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          Jasneet Kaur
                        </Text>
                        <Text
                          className="mb-[3px] md:ml-[0] ml-[437px] md:mt-0 mt-2 sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          Mar 1, 2023
                        </Text>
                        <Text
                          className="mb-3 md:ml-[0] ml-[387px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          Sent
                        </Text>
                        <Text
                          className="mb-3 md:ml-[0] ml-[416px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          $340
                        </Text>
                      </div>
                      <div className="h-0.5 md:h-[158px] mt-[156px] relative w-full">
                        <Line className="bg-black-900_72 h-0.5 m-auto w-full" />
                        <Line className="absolute bg-black-900_72 h-0.5 inset-[0] justify-center m-auto w-full" />
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[133px] w-[94%] md:w-full">
                        <Text
                          className="mb-[9px] md:mt-0 mt-1 sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          Y7KKXQ
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[364px] md:mt-0 mt-3.5 sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          Ye Tiang
                        </Text>
                        <Text
                          className="mb-1 md:ml-[0] ml-[476px] md:mt-0 mt-[9px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          Jun 23, 2023
                        </Text>
                        <Text
                          className="mb-3.5 md:ml-[0] ml-[369px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          Sent
                        </Text>
                        <Text
                          className="mb-3.5 md:ml-[0] ml-[424px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          $210
                        </Text>
                      </div>
                      <div className="h-0.5 md:h-[172px] mt-[170px] relative w-full">
                        <Line className="bg-black-900_72 h-0.5 m-auto w-full" />
                        <Line className="absolute bg-black-900_72 h-0.5 inset-[0] justify-center m-auto w-full" />
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[132px] w-[94%] md:w-full">
                        <Text
                          className="md:mt-0 mt-[15px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          KK88U2
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[410px] md:mt-0 mt-3.5 sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          Pooja{" "}
                        </Text>
                        <Text
                          className="mb-[5px] md:ml-[0] ml-[518px] md:mt-0 mt-[9px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          Jan 10, 2023
                        </Text>
                        <Text
                          className="mb-[15px] md:ml-[0] ml-[373px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          Sent
                        </Text>
                        <Text
                          className="mb-[15px] md:ml-[0] ml-[417px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          $420
                        </Text>
                      </div>
                      <div className="h-0.5 md:h-[142px] mt-[140px] relative w-full">
                        <Line className="bg-black-900_72 h-0.5 m-auto w-full" />
                        <Line className="absolute bg-black-900_72 h-0.5 inset-[0] justify-center m-auto w-full" />
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[82px] w-[94%] md:w-full">
                        <Text
                          className="md:mt-0 mt-[13px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          BVC9P1
                        </Text>
                        <Text
                          className="mb-[5px] md:ml-[0] ml-[424px] md:mt-0 mt-2 sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          Frank
                        </Text>
                        <Text
                          className="mb-[3px] md:ml-[0] ml-[512px] md:mt-0 mt-[9px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          Oct 28, 2022
                        </Text>
                        <Text
                          className="mb-[13px] md:ml-[0] ml-[370px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          Sent
                        </Text>
                        <Text
                          className="mb-[13px] md:ml-[0] ml-[415px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                          size="txtPoppinsRegular50"
                        >
                          $340
                        </Text>
                      </div>
                    </div>
                    <div className="bg-light_blue-900 h-[930px] mb-[214px] md:mt-0 mt-[134px] rounded-[13px] w-[1%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-700_01 h-[809px] mb-[1533px] md:mt-0 mt-[18px] rounded-[10px] w-[1%]"></div>
          </div>
          <Line className="bg-black-900_72 h-0.5 mt-[31px] w-full" />
          <Text
            className="md:ml-[0] ml-[1480px] mt-[113px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
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
