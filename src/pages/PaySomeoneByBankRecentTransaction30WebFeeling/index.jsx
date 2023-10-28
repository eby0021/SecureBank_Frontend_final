import React from "react";

import { Img, Line, List, Text } from "components";

const PaySomeoneByBankRecentTransaction30WebFeelingPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[75px] w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="font-poppins h-[108px] md:px-5 relative w-full">
            <div className="bg-light_blue-900 border border-black-900 border-solid flex flex-row h-full items-center justify-start m-auto pt-[3px] px-[3px] shadow-bs w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between ml-[46px] w-[99%]">
                <Text
                  className="md:text-5xl text-[64px] text-white-A700 underline"
                  size="txtPoppinsRegular64"
                >
                  Secure Bank
                </Text>
                <Img
                  className="h-[103px]"
                  src="images/img_iconsearch.svg"
                  alt="iconsearch"
                />
              </div>
            </div>
            <Text
              className="absolute right-[16%] md:text-5xl text-[64px] text-white-A700 top-[0] underline"
              size="txtPoppinsRegular64"
            >
              Logout
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-end justify-start max-w-[2855px] mt-[15px] mx-auto md:px-5 w-full">
            <Img
              className="h-[189px] mb-[38px] md:mt-0 mt-[90px]"
              src="images/img_iconbacksquare.svg"
              alt="iconbacksquare"
            />
            <div className="bg-white-A700 border-[5px] border-light_blue-900 border-solid flex mb-10 md:ml-[0] ml-[895px] md:mt-0 mt-3 p-[15px] relative rounded-[50px] shadow-bs3 w-[24%] md:w-full">
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
              className="h-[318px] md:h-auto md:ml-[0] ml-[734px] rounded-[50%] w-[318px]"
              src="images/img_ellipse20_318x318.png"
              alt="ellipseTwenty"
            />
          </div>
          <Line className="bg-black-900_72 h-0.5 max-w-[2939px] mt-3.5 mx-auto w-full" />
          <div className="flex sm:flex-col flex-row font-poppins md:gap-10 items-start justify-between max-w-[2629px] mt-[13px] mx-auto md:px-5 w-full">
            <Text
              className="mb-3 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtPoppinsBold40"
            >
              My Favourites
            </Text>
            <Text
              className="sm:mt-0 mt-3 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtPoppinsMedium40"
            >
              See All
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between max-w-[2997px] mt-[3px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[27px] justify-start">
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[234px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 md:ml-[0] ml-[122px] w-[86%]"
                orientation="horizontal"
              >
                <div className="md:h-[268px] h-[311px] relative w-full">
                  <div className="absolute bottom-[0] h-[268px] left-[0] w-[95%]">
                    <div className="bg-light_blue-900 h-[268px] m-auto rounded-[155px] shadow-bs9 w-full"></div>
                    <Text
                      className="absolute left-[31%] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 top-[36%]"
                      size="txtPoppinsSemiBold40WhiteA700"
                    >
                      Ebin
                    </Text>
                  </div>
                  <div className="absolute bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col h-[86px] items-center justify-start p-[3px] right-[0] rounded-[50%] shadow-bs9 top-[0] w-[86px]">
                    <Img
                      className="h-20 md:h-auto object-cover w-20"
                      src="images/img_cancel6602521.png"
                      alt="cancel66025216"
                    />
                  </div>
                </div>
                <div className="md:h-[268px] h-[311px] relative w-full">
                  <div className="absolute bottom-[0] h-[268px] left-[0] w-[95%]">
                    <div className="bg-light_blue-900 h-[268px] m-auto rounded-[155px] shadow-bs9 w-full"></div>
                    <Text
                      className="absolute left-[32%] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 top-[34%]"
                      size="txtPoppinsSemiBold40WhiteA700"
                    >
                      Allen
                    </Text>
                  </div>
                  <div className="absolute bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col h-[86px] items-center justify-start p-[3px] right-[0] rounded-[50%] shadow-bs9 top-[0] w-[86px]">
                    <Img
                      className="h-20 md:h-auto object-cover w-20"
                      src="images/img_cancel6602521.png"
                      alt="cancel66025217"
                    />
                  </div>
                </div>
                <div className="md:h-[268px] h-[311px] relative w-full">
                  <div className="absolute bottom-[0] h-[268px] left-[0] w-[96%]">
                    <div className="bg-light_blue-900 h-[268px] m-auto rounded-[155px] shadow-bs9 w-full"></div>
                    <Text
                      className="absolute inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 top-[34%] w-max"
                      size="txtPoppinsSemiBold40WhiteA700"
                    >
                      Peter
                    </Text>
                  </div>
                  <div className="absolute bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col items-center justify-start p-[3px] right-[0] rounded-[43px] shadow-bs9 top-[0] w-[87px]">
                    <Img
                      className="h-20 md:h-auto object-cover w-[79px] sm:w-full"
                      src="images/img_cancel6602521.png"
                      alt="cancel66025218"
                    />
                  </div>
                </div>
                <div className="md:h-[268px] h-[311px] relative w-full">
                  <div className="absolute bottom-[0] h-[268px] left-[0] w-[95%]">
                    <div className="bg-light_blue-900 h-[268px] m-auto rounded-[155px] shadow-bs9 w-full"></div>
                    <Text
                      className="absolute left-[28%] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 top-[34%]"
                      size="txtPoppinsSemiBold40WhiteA700"
                    >
                      Olivia
                    </Text>
                  </div>
                  <div className="absolute bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col items-center justify-start p-[3px] right-[0] rounded-[43px] shadow-bs9 top-[0] w-[87px]">
                    <Img
                      className="h-20 md:h-auto object-cover w-20"
                      src="images/img_cancel6602521.png"
                      alt="cancel66025219"
                    />
                  </div>
                </div>
                <div className="md:h-[268px] h-[311px] relative w-full">
                  <div className="absolute bottom-[0] h-[268px] left-[0] w-[95%]">
                    <div className="bg-light_blue-900 h-[268px] m-auto rounded-[155px] shadow-bs9 w-full"></div>
                    <Text
                      className="absolute left-[29%] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 top-[34%]"
                      size="txtPoppinsSemiBold40WhiteA700"
                    >
                      Tania
                    </Text>
                  </div>
                  <div className="absolute bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col items-center justify-start p-[3px] right-[0] rounded-[43px] shadow-bs9 top-[0] w-[87px]">
                    <Img
                      className="h-20 md:h-auto object-cover w-[79px] sm:w-full"
                      src="images/img_cancel6602521.png"
                      alt="cancel66025220"
                    />
                  </div>
                </div>
              </List>
              <div className="flex flex-col justify-start w-full">
                <Line className="bg-black-900_72 h-0.5 w-full" />
                <Text
                  className="md:ml-[0] ml-[81px] mt-[15px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtPoppinsBold40"
                >
                  My Recent Transactions
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[122px] mt-[3px] w-[86%] md:w-full">
                  <div className="md:h-[272px] h-[303px] md:mt-0 mt-4 relative w-[15%] md:w-full">
                    <div className="absolute bottom-[0] h-[272px] left-[0] w-[86%]">
                      <div className="bg-light_blue-900 h-[272px] m-auto rounded-[158px] shadow-bs9 w-full"></div>
                      <Text
                        className="absolute left-[29%] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 top-[34%]"
                        size="txtPoppinsSemiBold40WhiteA700"
                      >
                        Tania
                      </Text>
                    </div>
                    <div className="absolute bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col h-[100px] items-center justify-start p-1 right-[0] rounded-[50%] shadow-bs9 top-[0] w-[100px]">
                      <Img
                        className="h-[92px] md:h-auto object-cover w-[92px]"
                        src="images/img_cancel6602521.png"
                        alt="cancel66025221"
                      />
                    </div>
                  </div>
                  <div className="md:h-[272px] h-[304px] md:ml-[0] ml-[201px] md:mt-0 mt-[7px] relative w-[15%] md:w-full">
                    <div className="absolute bottom-[0] h-[272px] left-[0] w-[87%]">
                      <div className="bg-light_blue-900 h-[272px] m-auto rounded-[157px] shadow-bs9 w-full"></div>
                      <Text
                        className="absolute left-[23%] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 top-[34%]"
                        size="txtPoppinsSemiBold40WhiteA700"
                      >
                        Virtuso
                      </Text>
                    </div>
                    <div className="absolute bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col h-[99px] items-center justify-start p-[3px] right-[0] rounded-[49px] shadow-bs9 top-[0] w-[99px]">
                      <Img
                        className="h-[93px] md:h-auto object-cover w-[93px]"
                        src="images/img_cancel6602521.png"
                        alt="cancel66025221_One"
                      />
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[219px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 mb-2 md:ml-[0] ml-[147px] w-[57%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="md:h-[268px] h-[311px] relative w-full">
                      <div className="absolute bottom-[0] h-[268px] left-[0] w-[96%]">
                        <div className="bg-light_blue-900 h-[268px] m-auto rounded-[155px] shadow-bs9 w-full"></div>
                        <Text
                          className="absolute left-[32%] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 top-[34%]"
                          size="txtPoppinsSemiBold40WhiteA700"
                        >
                          Trex
                        </Text>
                      </div>
                      <div className="absolute bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col items-center justify-start p-[3px] right-[0] rounded-[43px] shadow-bs9 top-[0] w-[87px]">
                        <Img
                          className="h-20 md:h-auto object-cover w-[79px] sm:w-full"
                          src="images/img_cancel6602521.png"
                          alt="cancel66025222"
                        />
                      </div>
                    </div>
                    <div className="md:h-[268px] h-[311px] relative w-full">
                      <div className="absolute bottom-[0] h-[268px] left-[0] w-[95%]">
                        <div className="bg-light_blue-900 h-[268px] m-auto rounded-[155px] shadow-bs9 w-full"></div>
                        <Text
                          className="absolute inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 top-[34%] w-max"
                          size="txtPoppinsSemiBold40WhiteA700"
                        >
                          Lizaan
                        </Text>
                      </div>
                      <div className="absolute bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col items-center justify-start p-[3px] right-[0] rounded-[43px] shadow-bs9 top-[0] w-[87px]">
                        <Img
                          className="h-20 md:h-auto object-cover w-20"
                          src="images/img_cancel6602521.png"
                          alt="cancel66025223"
                        />
                      </div>
                    </div>
                    <div className="md:h-[268px] h-[311px] relative w-full">
                      <div className="absolute bottom-[0] h-[268px] left-[0] w-[95%]">
                        <div className="bg-light_blue-900 h-[268px] m-auto rounded-[155px] shadow-bs9 w-full"></div>
                        <Text
                          className="absolute inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 top-[34%] w-max"
                          size="txtPoppinsSemiBold40WhiteA700"
                        >
                          Walter
                        </Text>
                      </div>
                      <div className="absolute bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col items-center justify-start p-[3px] right-[0] rounded-[43px] shadow-bs9 top-[0] w-[87px]">
                        <Img
                          className="h-20 md:h-auto object-cover w-[79px] sm:w-full"
                          src="images/img_cancel6602521.png"
                          alt="cancel66025224"
                        />
                      </div>
                    </div>
                  </List>
                </div>
                <Line className="bg-black-900_72 h-0.5 mt-[19px] w-full" />
                <div className="flex md:flex-col flex-row gap-[22px] items-start justify-end md:ml-[0] ml-[772px] mt-[109px] w-[65%] md:w-full">
                  <div className="flex relative w-[78%] md:w-full">
                    <div className="bg-white-A700_01 border border-light_blue-800 border-solid flex flex-col items-center justify-start my-auto p-[13px] rounded-[30px] shadow-bs5 w-[96%]">
                      <div className="flex flex-col items-center justify-start mb-[19px] w-[88%] md:w-full">
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
                                PAY ID
                              </Text>
                              <div className="bg-white-A700 border-2 border-light_blue-900 border-solid h-[47px] mr-1.5 my-[3px] rounded-[23px] w-[47px]"></div>
                            </div>
                          </div>
                          <Line className="bg-light_blue-900 h-[5px] mt-[3px] w-2/5" />
                          <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[211px] mt-9 p-3.5 rounded-[10px] w-[65%] md:w-full">
                            <Text
                              className="mb-1.5 ml-2 sm:ml-[0] sm:mt-0 mt-[9px] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                              size="txtPoppinsBold35"
                            >
                              Select Bank Name
                            </Text>
                            <Img
                              className="h-[34px]"
                              src="images/img_checkmark_light_blue_900.svg"
                              alt="checkmark"
                            />
                          </div>
                          <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[47px] p-[11px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                            <Text
                              className="sm:ml-[0] ml-[47px] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                              size="txtPoppinsBold35"
                            >
                              Enter Beneficiary Bank Account Number
                            </Text>
                            <Img
                              className="h-[74px] md:h-auto mr-[7px] object-cover rounded-[10px]"
                              src="images/img_keyboard8419852.png"
                              alt="keyboard8419852"
                            />
                          </div>
                          <Line className="bg-light_blue-900 h-[5px] mt-1.5 w-full" />
                          <div className="bg-white-A700 border border-light_blue-900 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[70px] px-[7px] rounded-tl-[10px] rounded-tr-[10px] w-full">
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
                              className="md:flex-1 h-[74px] sm:h-auto md:ml-[0] ml-[527px] object-cover rounded-[10px] w-[12%] md:w-full"
                              src="images/img_keyboard8419852.png"
                              alt="keyboard8419852_One"
                            />
                          </div>
                          <Line className="bg-light_blue-900 h-[5px] mt-1.5 w-full" />
                          <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex md:flex-col flex-row gap-[57px] items-center justify-end md:ml-[0] ml-[211px] mt-[52px] p-3.5 rounded-[10px] w-[65%] md:w-full">
                            <Text
                              className="mb-0.5 md:mt-0 mt-[13px] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                              size="txtPoppinsBold35"
                            >
                              Select Reason of Sending Money
                            </Text>
                            <Img
                              className="h-[34px]"
                              src="images/img_checkmark_light_blue_900.svg"
                              alt="checkmark_One"
                            />
                          </div>
                          <Text
                            className="bg-light_blue-900 h-[89px] justify-center md:ml-[0] ml-[308px] mt-[101px] pb-[7px] pt-[13px] sm:px-5 px-[35px] rounded-[44px] sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700 w-[558px]"
                            size="txtPoppinsSemiBold45"
                          >
                            Send Money
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-[92px] ml-[-42px] my-auto z-[1]"
                      src="images/img_icontagcross.svg"
                      alt="icontagcross"
                    />
                  </div>
                  <Text
                    className="md:mt-0 mt-[632px] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700_02"
                    size="txtPoppinsBold35Gray70002"
                  >
                    Wrong Bank Number!
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray-700_01 h-[809px] mb-[1192px] md:mt-0 mt-[131px] rounded-[10px] w-[1%]"></div>
          </div>
          <Line className="bg-black-900_72 h-0.5 mt-[78px] w-full" />
          <Text
            className="md:ml-[0] ml-[1127px] mt-[55px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
            size="txtJostRomanRegular36"
          >
            Copyrights © 2023 Secure Bank All Rights Reserved
          </Text>
        </div>
      </div>
    </>
  );
};

export default PaySomeoneByBankRecentTransaction30WebFeelingPage;
