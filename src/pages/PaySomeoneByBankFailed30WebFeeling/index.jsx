import React from "react";

import { Button, Img, Line, List, Text } from "components";

const PaySomeoneByBankFailed30WebFeelingPage = () => {
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
          <div className="flex md:flex-col flex-row font-poppins gap-[34px] items-start justify-between max-w-[2456px] mt-[21px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start">
              <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-[98%] md:w-full">
                <div className="flex flex-col gap-[5px] justify-start w-[36%] md:w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtPoppinsBold40"
                  >
                    My Favourites
                  </Text>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[206px] grid md:grid-cols-1 grid-cols-2 md:ml-[0] ml-[47px] w-[95%]"
                    orientation="horizontal"
                  >
                    <div className="md:h-[235px] h-[273px] relative w-full">
                      <div className="absolute bottom-[0] h-[235px] left-[0] w-[95%]">
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
                          alt="cancel6602526"
                        />
                      </div>
                    </div>
                    <div className="md:h-[235px] h-[273px] relative w-full">
                      <div className="absolute bottom-[0] h-[235px] left-[0] w-[95%]">
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
                          alt="cancel6602522"
                        />
                      </div>
                    </div>
                  </List>
                </div>
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[193px] grid md:grid-cols-1 grid-cols-2 md:mt-0 mt-[65px] w-[33%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="md:h-[235px] h-[273px] relative w-full">
                    <div className="absolute bottom-[0] h-[235px] left-[0] w-[96%]">
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
                        alt="cancel6602523"
                      />
                    </div>
                  </div>
                  <div className="md:h-[235px] h-[273px] relative w-full">
                    <div className="absolute bottom-[0] h-[235px] left-[0] w-[95%]">
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
                        alt="cancel6602524"
                      />
                    </div>
                  </div>
                </List>
                <div className="h-[328px] md:mt-0 mt-2.5 relative w-[18%] md:w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex flex-col gap-[33px] justify-start w-full">
                      <Text
                        className="md:ml-[0] ml-[273px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                        size="txtPoppinsMedium40"
                      >
                        See All
                      </Text>
                      <div className="h-[235px] mr-[133px] relative w-[68%]">
                        <div className="bg-light_blue-900 h-[235px] m-auto rounded-[136px] shadow-bs9 w-full"></div>
                        <Text
                          className="absolute inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 top-[34%] w-max"
                          size="txtPoppinsSemiBold40WhiteA700"
                        >
                          Tania
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col h-[76px] items-center justify-start p-[3px] right-[29%] rounded-[50%] shadow-bs9 top-[17%] w-[76px]">
                    <Img
                      className="h-[70px] md:h-auto object-cover w-[70px]"
                      src="images/img_cancel6602521.png"
                      alt="cancel6602525"
                    />
                  </div>
                </div>
              </div>
              <Line className="bg-black-900_72 h-0.5 mt-[67px] w-full" />
              <div className="bg-white-A700_01 border border-light_blue-800 border-solid flex flex-col items-center justify-start mt-[60px] p-[13px] rounded-[30px] shadow-bs5 w-[64%] md:w-full">
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
                <div className="md:h-[1191px] h-[739px] sm:h-[802px] mt-[21px] relative w-[79%] md:w-full">
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex flex-col items-start justify-start w-full">
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
                      <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[211px] mt-[52px] p-3.5 rounded-[10px] w-[65%] md:w-full">
                        <Text
                          className="ml-2 mt-3.5 sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                          size="txtPoppinsBold35Black900"
                        >
                          Insurance Pay
                        </Text>
                        <Img
                          className="h-[34px]"
                          src="images/img_checkmark_light_blue_900.svg"
                          alt="checkmark_One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-white-A700_01 border border-light_blue-800 border-solid flex flex-col items-center justify-start p-[66px] md:px-10 sm:px-5 right-[1%] rounded-[30px] shadow-bs5 top-[0] w-[87%]">
                    <div className="bg-white-A700 flex flex-col items-center justify-start p-0.5 rounded-[132px] shadow-bs10 w-[264px] md:w-full">
                      <Img
                        className="h-[258px] md:h-auto object-cover w-[258px]"
                        src="images/img_cancel6602521.png"
                        alt="cancel6602521"
                      />
                    </div>
                    <Text
                      className="mt-[73px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                      size="txtPoppinsBold50Black900"
                    >
                      Transaction Failed !
                    </Text>
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] mb-[22px] min-w-[319px] mt-[49px] sm:text-[33px] md:text-[35px] text-[37px] text-center"
                      shape="round"
                    >
                      Return
                    </Button>
                  </div>
                </div>
                <Text
                  className="bg-light_blue-900 h-[89px] justify-center mb-[19px] mt-[101px] pb-[7px] pt-[13px] sm:px-5 px-[35px] rounded-[44px] sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700 w-[558px]"
                  size="txtPoppinsSemiBold45"
                >
                  Send Money
                </Text>
              </div>
            </div>
            <div className="bg-gray-700_01 h-[809px] mb-[724px] md:mt-0 mt-[198px] rounded-[10px] w-[1%]"></div>
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

export default PaySomeoneByBankFailed30WebFeelingPage;
