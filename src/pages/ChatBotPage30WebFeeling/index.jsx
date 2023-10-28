import React from "react";

import { Button, Img, Line, List, Text } from "components";

const ChatBotPage30WebFeelingPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[168px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="font-poppins md:h-24 h-[104px] md:px-5 relative w-full">
            <div className="absolute bg-light_blue-900 border border-black-900 border-solid flex flex-col inset-x-[0] items-end justify-end mx-auto p-1.5 shadow-bs top-[0] w-full">
              <div className="flex flex-col items-center justify-start mr-[11px] w-[5%] md:w-full">
                <Img
                  className="h-[81px]"
                  src="images/img_plus.svg"
                  alt="plus"
                />
              </div>
            </div>
            <Text
              className="absolute h-max inset-y-[0] left-[2%] my-auto md:text-5xl text-[64px] text-white-A700 underline"
              size="txtPoppinsRegular64"
            >
              Secure Bank
            </Text>
            <Text
              className="absolute bottom-[0] right-[14%] md:text-5xl text-[64px] text-white-A700 underline"
              size="txtPoppinsRegular64"
            >
              Logout
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-[57px] items-start justify-between max-w-[2313px] mt-2.5 mx-auto md:px-5 w-full">
            <div className="sm:h-[1909px] h-[2033px] md:h-[4813px] relative w-[97%] md:w-full">
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="bg-white-A700 border-[5px] border-light_blue-900 border-solid flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end mb-[31px] md:mt-0 mt-[22px] p-2.5 rounded-[50px] shadow-bs3 w-[28%] md:w-full">
                      <Img
                        className="h-[216px] md:h-auto sm:mt-0 mt-4 object-cover w-[216px]"
                        src="images/img_ai28146662.png"
                        alt="ai28146662"
                      />
                      <Text
                        className="sm:mt-0 my-[15px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center text-shadow-ts"
                        size="txtPoppinsBold40"
                      >
                        <>
                          Open <br />
                          Chat Bot
                          <br />
                          <br />
                          Get Instant Help!
                        </>
                      </Text>
                    </div>
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between w-[61%] md:w-full">
                      <div className="bg-white-A700 flex flex-col items-start justify-start md:mt-0 mt-[29px] p-[9px] shadow-bs4">
                        <div className="flex flex-col gap-[35px] justify-start mb-6 ml-1 md:ml-[0] w-[85%] md:w-full">
                          <div className="flex sm:flex-col flex-row gap-[59px] items-start justify-start w-full">
                            <Img
                              className="h-[82px] mb-[21px]"
                              src="images/img_iconwallet.svg"
                              alt="iconwallet"
                            />
                            <Text
                              className="sm:mt-0 mt-[29px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-light_blue-900"
                              size="txtPoppinsSemiBold50"
                            >
                              Current Balance
                            </Text>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[174px] md:text-5xl text-[100px] text-center text-light_blue-900"
                            size="txtPoppinsSemiBold100"
                          >
                            $2,198
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-[353px] md:h-auto mb-2.5 rounded-[50%] w-[353px]"
                        src="images/img_ellipse20.png"
                        alt="ellipseTwenty"
                      />
                    </div>
                  </div>
                  <Line className="bg-black-900_72 h-0.5 mt-[49px] w-[97%]" />
                  <Text
                    className="mt-[38px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center underline"
                    size="txtPoppinsMedium50"
                  >
                    Menu
                  </Text>
                  <List
                    className="flex flex-col font-jost gap-[264px] items-center mt-20 w-[98%]"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <div className="h-[508px] relative w-[28%] md:w-full">
                        <div className="bg-white-A700 h-[508px] m-auto rounded-[296px] shadow-bs7 w-full"></div>
                        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[6%] w-[71%]">
                          <Img
                            className="h-[272px]"
                            src="images/img_iconcards.svg"
                            alt="iconcards"
                          />
                          <Line className="bg-black-900 h-px mt-[43px] w-full" />
                          <Text
                            className="mt-7 sm:text-[37px] md:text-[43px] text-[47px] text-black-900"
                            size="txtJostRomanBold47"
                          >
                            Add Credit Card
                          </Text>
                        </div>
                      </div>
                      <div className="h-[530px] ml-56 md:ml-[0] relative w-[27%] md:w-full">
                        <div className="bg-white-A700 h-[530px] m-auto rounded-[293px] shadow-bs7 w-full"></div>
                        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[8%] w-[72%]">
                          <Img
                            className="h-[294px]"
                            src="images/img_iconmoneyrecive.svg"
                            alt="iconmoneyrecive"
                          />
                          <Line className="bg-black-900 h-px mt-[19px] w-full" />
                          <Text
                            className="mt-[27px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                            size="txtJostRomanBold50"
                          >
                            Pay Someone
                          </Text>
                        </div>
                      </div>
                      <div className="h-[508px] md:ml-[0] ml-[181px] relative w-[28%] md:w-full">
                        <div className="bg-white-A700 h-[508px] m-auto rounded-[295px] shadow-bs7 w-full"></div>
                        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[5%] w-[72%]">
                          <Img
                            className="h-[297px]"
                            src="images/img_iconwallet_light_blue_800.svg"
                            alt="iconwallet"
                          />
                          <Line className="bg-black-900 h-px mt-[27px] w-[98%]" />
                          <Text
                            className="mt-3 sm:text-[37px] md:text-[43px] text-[47px] text-black-900"
                            size="txtJostRomanBold47"
                          >
                            Transaction History
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="h-[508px] relative w-[28%] md:w-full">
                        <div className="bg-white-A700 h-[508px] m-auto rounded-[296px] shadow-bs7 w-full"></div>
                        <div className="absolute flex flex-col gap-7 inset-x-[0] items-center justify-start mx-auto top-[4%] w-[79%]">
                          <Img
                            className="h-[260px] sm:h-auto object-cover w-[63%] md:w-full"
                            src="images/img_image5.png"
                            alt="imageFive"
                          />
                          <Line className="bg-black-900 h-px w-full" />
                          <Text
                            className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                            size="txtJostRomanBold50"
                          >
                            Bill Payment
                          </Text>
                        </div>
                      </div>
                      <div className="h-[508px] relative w-[28%] md:w-full">
                        <div className="bg-white-A700 h-[508px] m-auto rounded-[295px] shadow-bs7 w-full"></div>
                        <div className="absolute flex flex-col gap-[23px] inset-x-[0] items-center justify-start mx-auto top-[4%] w-4/5">
                          <Img
                            className="h-[265px]"
                            src="images/img_iconchart3.svg"
                            alt="iconchartThree"
                          />
                          <div className="flex flex-col gap-9 items-center justify-start w-full">
                            <Line className="bg-black-900 h-px w-full" />
                            <Text
                              className="sm:text-[37px] md:text-[43px] text-[47px] text-black-900"
                              size="txtJostRomanBold47"
                            >
                              Transaction Analytics
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="h-[508px] relative w-[28%] md:w-full">
                        <div className="bg-white-A700 h-[508px] m-auto rounded-[295px] shadow-bs7 w-full"></div>
                        <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto top-[4%] w-4/5">
                          <Img
                            className="h-[269px] md:ml-[0] ml-[113px]"
                            src="images/img_iconuser.svg"
                            alt="iconuser"
                          />
                          <Line className="bg-black-900 h-px mt-[18px] w-full" />
                          <Text
                            className="md:ml-[0] ml-[74px] mt-7 sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                            size="txtJostRomanBold50"
                          >
                            View Profile
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="absolute bg-white-A700_01 border border-light_blue-800 border-solid bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto pt-2 px-2 rounded-[30px] shadow-bs5 w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start mt-[29px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[98%] md:w-full">
                    <Img
                      className="h-[129px] md:h-auto object-cover w-[129px]"
                      src="images/img_ai28146662.png"
                      alt="ai28146663"
                    />
                    <Text
                      className="md:ml-[0] ml-[17px] md:mt-0 mt-8 sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center text-shadow-ts w-[23%] sm:w-full"
                      size="txtPoppinsBold40"
                    >
                      Your Helpful Chat Bot
                    </Text>
                    <Img
                      className="h-[119px] md:ml-[0] ml-[1380px]"
                      src="images/img_iconbacksquare.svg"
                      alt="iconbacksquare"
                    />
                  </div>
                  <div className="flex flex-col relative w-full">
                    <Line className="bg-black-900_72 h-0.5 mx-auto w-full" />
                    <Line className="bg-black-900_72 h-[1701px] mb-auto ml-[783px] mt-[-2px] w-0.5 z-[1]" />
                    <div className="flex flex-col items-center justify-start mb-auto ml-auto mr-[18px] mt-[-NaNpx] w-[63%] z-[1]">
                      <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-end sm:px-5 px-[34px] rounded-tl-[10px] rounded-tr-[10px] shadow-bs w-[99%] md:w-full">
                        <Img
                          className="h-[132px] md:h-auto md:mt-0 mt-[3px] rounded-[50%] w-[132px]"
                          src="images/img_ellipse22.png"
                          alt="ellipseTwentyTwo"
                        />
                        <Line className="bg-black-900_72 md:h-0.5 h-[145px] ml-11 md:ml-[0] w-0.5 md:w-full" />
                        <Text
                          className="ml-9 md:ml-[0] md:mt-0 mt-[41px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                          size="txtPoppinsBold35Black900"
                        >
                          How can I activate a debit card?
                        </Text>
                        <Img
                          className="h-[74px] sm:h-auto md:ml-[0] ml-[367px] md:mt-0 mt-[43px] object-cover rounded-[10px] w-[10%] md:w-full"
                          src="images/img_keyboard8419852.png"
                          alt="keyboard8419852"
                        />
                      </div>
                      <div className="bg-gray-100 border-2 border-light_blue-900 border-solid flex md:flex-col flex-row md:gap-10 items-end justify-between mt-[100px] sm:px-5 px-[22px] rounded-tl-[10px] rounded-tr-[10px] shadow-bs w-[99%] md:w-full">
                        <Img
                          className="h-[129px] md:h-auto mb-[5px] ml-3.5 md:ml-[0] md:mt-0 mt-[11px] object-cover w-[129px]"
                          src="images/img_ai28146662.png"
                          alt="ai28146664"
                        />
                        <Line className="bg-black-900_72 md:h-0.5 h-[145px] w-0.5 md:w-full" />
                        <Text
                          className="mb-[62px] md:mt-0 mt-[29px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                          size="txtPoppinsBold35Black900"
                        >
                          Navigate to Card icon on dashboard and click activate
                          card.
                        </Text>
                      </div>
                      <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-end mt-[117px] sm:px-5 px-[34px] rounded-tl-[10px] rounded-tr-[10px] shadow-bs w-[99%] md:w-full">
                        <Img
                          className="h-[132px] md:h-auto md:mt-0 mt-[3px] rounded-[50%] w-[132px]"
                          src="images/img_ellipse22.png"
                          alt="ellipseTwentyThree"
                        />
                        <Line className="bg-black-900_72 md:h-0.5 h-[145px] ml-11 md:ml-[0] w-0.5 md:w-full" />
                        <Text
                          className="ml-9 md:ml-[0] md:mt-0 mt-[46px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                          size="txtPoppinsBold35Black900"
                        >
                          Thanks for helping me!
                        </Text>
                        <Img
                          className="h-[74px] sm:h-auto md:ml-[0] ml-[527px] md:mt-0 mt-8 object-cover rounded-[10px] w-[10%] md:w-full"
                          src="images/img_keyboard8419852.png"
                          alt="keyboard8419852_One"
                        />
                      </div>
                      <div className="bg-gray-100 border-2 border-light_blue-900 border-solid flex md:flex-col flex-row md:gap-10 items-end justify-between mt-[120px] px-[15px] rounded-tl-[10px] rounded-tr-[10px] shadow-bs w-[99%] md:w-full">
                        <Img
                          className="h-[129px] md:h-auto mb-[5px] md:ml-[0] ml-[22px] md:mt-0 mt-[11px] object-cover w-[129px]"
                          src="images/img_ai28146662.png"
                          alt="ai28146665"
                        />
                        <Line className="bg-black-900_72 md:h-0.5 h-[145px] w-0.5 md:w-full" />
                        <Text
                          className="md:mt-0 my-[26px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                          size="txtPoppinsBold35Black900"
                        >
                          Your welcome! I am here to help you. If you need more
                          help, just ask me.
                        </Text>
                      </div>
                      <div className="bg-white-A700 border border-light_blue-900 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-end mt-[531px] sm:px-5 px-7 rounded-tl-[10px] rounded-tr-[10px] w-[99%] md:w-full">
                        <Img
                          className="h-[132px] md:h-auto rounded-[50%] w-[132px]"
                          src="images/img_ellipse22.png"
                          alt="ellipseTwentyOne"
                        />
                        <Line className="bg-black-900_72 md:h-0.5 h-[145px] ml-11 md:ml-[0] w-0.5 md:w-full" />
                        <Text
                          className="ml-9 md:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700_02"
                          size="txtPoppinsBold35Gray70002"
                        >
                          Send a message to chat bot
                        </Text>
                        <Img
                          className="h-[113px] sm:h-auto md:ml-[0] ml-[246px] object-cover rounded-[10px] w-[8%] md:w-full"
                          src="images/img_keyboard8419852_113x104.png"
                          alt="keyboard8419852_Two"
                        />
                        <Img
                          className="h-[74px] sm:h-auto md:ml-[0] ml-[98px] object-cover rounded-[10px] w-[10%] md:w-full"
                          src="images/img_keyboard8419852.png"
                          alt="keyboard8419852_Three"
                        />
                      </div>
                      <Line className="bg-light_blue-900 h-[5px] mt-[3px] w-[99%]" />
                    </div>
                    <div className="flex flex-col gap-7 justify-start mb-auto mt-[-NaNpx] w-[35%] z-[1]">
                      <Text
                        className="md:ml-[0] ml-[162px] md:text-5xl text-6xl text-black-900"
                        size="txtPoppinsBold60"
                      >
                        Previous Chats
                      </Text>
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-[11px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                          <Text
                            className="ml-7 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                            size="txtPoppinsBold35Black900"
                          >
                            Show me how to send money
                          </Text>
                          <Img
                            className="h-[113px] md:h-auto mr-[11px] sm:mt-0 mt-2.5 object-cover rounded-[10px]"
                            src="images/img_keyboard8419852_113x104.png"
                            alt="keyboard8419852_Four"
                          />
                        </div>
                        <Line className="bg-light_blue-900 h-[5px] ml-0.5 md:ml-[0] mt-[3px] w-full" />
                        <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[49px] p-[11px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                          <Text
                            className="ml-7 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                            size="txtPoppinsBold35Black900"
                          >
                            How to pay Bills?
                          </Text>
                          <Img
                            className="h-[113px] md:h-auto mr-[11px] sm:mt-0 mt-2.5 object-cover rounded-[10px]"
                            src="images/img_keyboard8419852_113x104.png"
                            alt="keyboard8419852_Five"
                          />
                        </div>
                        <Line className="bg-light_blue-900 h-[5px] ml-0.5 md:ml-[0] mt-[3px] w-full" />
                        <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[61px] p-[11px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                          <Text
                            className="ml-7 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                            size="txtPoppinsBold35Black900"
                          >
                            How do I update my Profile?
                          </Text>
                          <Img
                            className="h-[113px] md:h-auto mr-[11px] sm:mt-0 mt-2.5 object-cover rounded-[10px]"
                            src="images/img_keyboard8419852_113x104.png"
                            alt="keyboard8419852_Six"
                          />
                        </div>
                        <Line className="bg-light_blue-900 h-[5px] ml-0.5 md:ml-[0] mt-[3px] w-full" />
                        <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[68px] p-[11px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                          <Text
                            className="ml-7 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                            size="txtPoppinsBold35Black900"
                          >
                            How to zoom the page?
                          </Text>
                          <Img
                            className="h-[113px] md:h-auto mr-[11px] sm:mt-0 mt-2.5 object-cover rounded-[10px]"
                            src="images/img_keyboard8419852_113x104.png"
                            alt="keyboard8419852_Seven"
                          />
                        </div>
                        <Line className="bg-light_blue-900 h-[5px] ml-0.5 md:ml-[0] mt-[3px] w-full" />
                        <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-[57px] items-center justify-between mt-[59px] p-[11px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                          <Text
                            className="ml-7 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                            size="txtPoppinsBold35Black900"
                          >
                            Where can I update my Card?
                          </Text>
                          <Img
                            className="h-[113px] md:h-auto mr-[11px] sm:mt-0 mt-2.5 object-cover rounded-[10px]"
                            src="images/img_keyboard8419852_113x104.png"
                            alt="keyboard8419852_Eight"
                          />
                        </div>
                        <Line className="bg-light_blue-900 h-[5px] ml-0.5 md:ml-[0] mt-[3px] w-full" />
                        <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[79px] p-[11px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                          <Text
                            className="sm:ml-[0] ml-[15px] sm:mt-0 mt-[29px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                            size="txtPoppinsBold35Black900"
                          >
                            Can I add someone to favourite
                          </Text>
                          <Img
                            className="h-[113px] md:h-auto mr-[11px] sm:mt-0 mt-2.5 object-cover rounded-[10px]"
                            src="images/img_keyboard8419852_113x104.png"
                            alt="keyboard8419852_Nine"
                          />
                        </div>
                        <Line className="bg-light_blue-900 h-[5px] ml-0.5 md:ml-[0] mt-[3px] w-full" />
                        <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-center justify-start ml-0.5 md:ml-[0] mt-[167px] w-[95%] md:w-full">
                          <Button
                            className="cursor-pointer font-semibold leading-[normal] min-w-[319px] sm:text-[35px] md:text-[41px] text-[45px] text-center"
                            shape="round"
                            size="xs"
                          >
                            New Chat
                          </Button>
                          <Button
                            className="border-2 border-light_blue-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[319px] sm:text-[35px] md:text-[41px] text-[45px] text-center"
                            shape="round"
                            color="white_A700_01"
                            size="xs"
                          >
                            Clear Chat
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-700_01 h-[809px] mb-[782px] md:mt-0 mt-[442px] rounded-[10px] w-[1%]"></div>
          </div>
          <Line className="bg-black-900_72 h-0.5 mt-[99px] w-full" />
          <Text
            className="mt-[63px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
            size="txtJostRomanRegular36"
          >
            Copyrights © 2023 Secure Bank All Rights Reserved
          </Text>
        </div>
      </div>
    </>
  );
};

export default ChatBotPage30WebFeelingPage;
