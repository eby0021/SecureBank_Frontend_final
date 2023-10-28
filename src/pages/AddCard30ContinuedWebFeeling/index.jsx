import React from "react";

import { Button, Img, Line, Text } from "components";

const AddCard30ContinuedWebFeelingPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[82px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="font-poppins md:h-24 h-[99px] md:px-5 relative w-full">
            <div className="absolute bg-light_blue-900 border border-black-900 border-solid flex flex-col inset-x-[0] items-end justify-start mx-auto p-[7px] shadow-bs top-[0] w-full">
              <div className="flex flex-col items-center justify-start mb-1 mr-4 w-[5%] md:w-full">
                <Img
                  className="h-[75px]"
                  src="images/img_iconsearch.svg"
                  alt="iconsearch"
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
              className="absolute right-[13%] md:text-5xl text-[64px] text-white-A700 top-[0] underline"
              size="txtPoppinsRegular64"
            >
              Logout
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-start max-w-[2256px] mt-[5px] mx-auto md:px-5 w-full">
            <Img
              className="h-[151px] md:mt-0 mt-[65px]"
              src="images/img_iconbacksquare.svg"
              alt="iconbacksquare"
            />
            <div className="bg-white-A700 border-[5px] border-light_blue-900 border-solid flex mb-[60px] md:ml-[0] ml-[584px] md:mt-0 mt-[30px] p-[15px] relative rounded-[50px] shadow-bs3 w-[30%] md:w-full">
              <Img
                className="h-[221px] my-auto object-cover w-[221px]"
                src="images/img_ai28146662.png"
                alt="ai28146662"
              />
              <Text
                className="ml-[-58px] mr-[17px] mt-0.5 md:text-5xl text-[70px] text-black-900 text-center text-shadow-ts z-[1]"
                size="txtPoppinsBold70"
              >
                <>
                  Open <br />
                  Chat Bot
                </>
              </Text>
            </div>
            <Img
              className="h-[353px] md:h-auto md:ml-[0] ml-[468px] rounded-[50%] w-[353px]"
              src="images/img_ellipse20.png"
              alt="ellipseTwentyOne"
            />
          </div>
          <Line className="bg-black-900_72 h-0.5 mt-9 w-full" />
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between max-w-[2288px] mt-[129px] mx-auto md:px-5 w-full">
            <div className="sm:h-[1499px] h-[1503px] md:h-[3145px] relative w-[95%] md:w-full">
              <div className="absolute h-[1499px] md:h-[3145px] inset-[0] justify-center m-auto w-[97%] md:w-full">
                <div className="absolute font-poppins md:h-[550px] h-[551px] sm:h-[634px] left-[3%] top-[10%] w-[37%] md:w-full">
                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[3%] my-auto w-[91%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="bg-light_blue-800 flex flex-col items-center justify-start p-[15px] rounded-[30px] w-full">
                        <div className="flex flex-col justify-start mb-[37px] w-full">
                          <div className="flex flex-row sm:gap-10 gap-[280px] items-start justify-end ml-12 md:ml-[0] w-[89%] md:w-full">
                            <Img
                              className="h-[78px]"
                              src="images/img_iconcard.svg"
                              alt="iconcard"
                            />
                            <Text
                              className="backdrop-opacity-[0.5] blur-[10.00px] mt-[25px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-[27%] sm:w-full"
                              size="txtPoppinsSemiBold25"
                            >
                              Visa Card
                            </Text>
                          </div>
                          <Text
                            className="backdrop-opacity-[0.5] blur-[10.00px] md:ml-[0] ml-[23px] mt-[27px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-[44%] sm:w-full"
                            size="txtPoppinsRegular25"
                          >
                            <span className="text-white-A700 font-poppins font-semibold">
                              Name:
                            </span>
                            <span className="text-white-A700 font-poppins font-normal">
                              {" "}
                            </span>
                            <span className="text-white-A700 font-poppins font-medium">
                              John Smith
                            </span>
                          </Text>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[142px] w-full">
                            <Text
                              className="backdrop-opacity-[0.5] blur-[10.00px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700"
                              size="txtPoppinsMedium25"
                            >
                              7000 4000 5000 8000
                            </Text>
                            <Text
                              className="backdrop-opacity-[0.5] blur-[10.00px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700"
                              size="txtPoppinsRegular25"
                            >
                              <span className="text-white-A700 font-poppins font-semibold">
                                CVC:{" "}
                              </span>
                              <span className="text-white-A700 font-poppins font-medium">
                                190
                              </span>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col gap-[15px] items-center justify-end p-3.5 rounded-bl-[50px] rounded-br-[50px] shadow-bs w-[77%] md:w-full">
                        <div className="h-[45px] md:h-[55px] mt-2.5 relative w-[48%]">
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-700 w-max"
                            size="txtPoppinsSemiBold30"
                          >
                            Enter PIN
                          </Text>
                          <Line className="absolute bg-light_blue-900 bottom-[0] h-[3px] inset-x-[0] mx-auto w-full" />
                        </div>
                        <div className="h-[46px] relative w-[54%]">
                          <div className="absolute bg-light_blue-900 h-[46px] inset-[0] justify-center m-auto rounded-[23px] w-full"></div>
                          <Text
                            className="absolute h-max inset-[0] justify-center m-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-max"
                            size="txtPoppinsSemiBold30WhiteA700"
                          >
                            Submit
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="absolute backdrop-opacity-[0.5] blur-[10.00px] inset-x-[0] mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 top-[39%] w-full"
                    size="txtPoppinsRegular25"
                  >
                    <span className="text-white-A700 font-poppins font-semibold">
                      From
                    </span>
                    <span className="text-white-A700 font-poppins font-normal">
                      {" "}
                    </span>
                    <span className="text-white-A700 font-poppins font-medium">
                      {" "}
                      10/23{" "}
                    </span>
                    <span className="text-white-A700 font-poppins font-normal">
                      {" "}
                    </span>
                    <span className="text-white-A700 font-poppins font-semibold">
                      To
                    </span>
                    <span className="text-white-A700 font-poppins font-normal">
                      {" "}
                    </span>
                    <span className="text-white-A700 font-poppins font-medium">
                      10/30
                    </span>
                  </Text>
                </div>
                <Text
                  className="absolute left-[0] md:text-5xl text-[70px] text-black-900 top-[0] underline"
                  size="txtJostRomanBold70"
                >
                  My Cards
                </Text>
                <div className="absolute flex md:flex-col flex-row font-jost md:gap-10 h-full inset-y-[0] items-start justify-between my-auto right-[0] w-[51%]">
                  <Line className="bg-black-900_3f md:h-0.5 h-[1499px] w-0.5 md:w-full" />
                  <div className="bg-white-A700_01 border border-light_blue-800 border-solid flex flex-col items-center justify-start mb-56 p-[17px] rounded-[30px] shadow-bs5">
                    <div className="flex flex-col items-center justify-start mb-[19px] w-[98%] md:w-full">
                      <Img
                        className="h-[151px]"
                        src="images/img_iconcards.svg"
                        alt="iconcards"
                      />
                      <Text
                        className="mt-[11px] sm:text-[37px] md:text-[43px] text-[47px] text-black-900"
                        size="txtJostRomanBold47"
                      >
                        Add Credit Card
                      </Text>
                      <div className="bg-white-A700 border border-light_blue-900 border-solid flex flex-row font-poppins gap-[138px] items-center justify-end mt-9 p-1 rounded-[30px] w-[58%] md:w-full">
                        <Text
                          className="mb-[21px] mt-[18px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                          size="txtPoppinsBold35Black900"
                        >
                          Visa Card
                        </Text>
                        <Img
                          className="h-[38px]"
                          src="images/img_checkmark_light_blue_900.svg"
                          alt="checkmark"
                        />
                      </div>
                      <div className="flex flex-col font-poppins items-start justify-start mt-[84px] w-[94%] md:w-full">
                        <div className="bg-white-A700 border border-light_blue-900 border-solid flex flex-row sm:gap-10 items-center justify-between p-0.5 rounded-tl-[10px] rounded-tr-[10px] w-full">
                          <Text
                            className="ml-8 sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                            size="txtPoppinsBold35Black900"
                          >
                            John Smith
                          </Text>
                          <Img
                            className="h-[74px] md:h-auto mb-[3px] mt-[9px] object-cover rounded-[10px]"
                            src="images/img_keyboard8419852.png"
                            alt="keyboard8419852"
                          />
                        </div>
                        <Line className="bg-light_blue-900 h-[5px] mt-[5px] w-full" />
                        <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-16 pl-2 py-2 rounded-tl-[10px] rounded-tr-[10px] w-full">
                          <Text
                            className="sm:ml-[0] ml-[26px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                            size="txtPoppinsBold35Black900"
                          >
                            2000-3000-4000-5000
                          </Text>
                          <Img
                            className="h-[74px] md:h-auto object-cover rounded-[10px]"
                            src="images/img_keyboard8419852.png"
                            alt="keyboard8419852_One"
                          />
                        </div>
                        <Line className="bg-light_blue-900 h-[5px] mt-[5px] w-full" />
                        <div className="bg-white-A700 border border-light_blue-900 border-solid flex flex-row sm:gap-10 items-center justify-between mt-16 pl-[5px] py-[5px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                          <Text
                            className="ml-[29px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                            size="txtPoppinsBold35Black900"
                          >
                            100
                          </Text>
                          <Img
                            className="h-[74px] md:h-auto mt-1.5 object-cover rounded-[10px]"
                            src="images/img_keyboard8419852.png"
                            alt="keyboard8419852_Two"
                          />
                        </div>
                        <Line className="bg-light_blue-900 h-[5px] mt-[5px] w-full" />
                        <div className="flex flex-row items-center justify-between md:ml-[0] ml-[45px] mt-[41px] w-[77%] md:w-full">
                          <Text
                            className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-800"
                            size="txtPoppinsBold35Gray800"
                          >
                            FROM
                          </Text>
                          <Text
                            className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-800"
                            size="txtPoppinsBold35Gray800"
                          >
                            TO
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col font-poppins items-center justify-start mt-[3px] w-full">
                        <div className="flex md:flex-col flex-row gap-[19px] items-center justify-between w-full">
                          <div className="bg-white-A700 border border-light_blue-900 border-solid flex md:flex-1 flex-row items-center justify-between p-2 rounded-tl-[10px] rounded-tr-[10px] w-[51%] md:w-full">
                            <Text
                              className="ml-[5px] my-2.5 sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                              size="txtPoppinsBold35Black900"
                            >
                              10/23
                            </Text>
                            <Img
                              className="h-[46px] md:h-auto object-cover rounded-[10px]"
                              src="images/img_keyboard8419852.png"
                              alt="keyboard8419852_Three"
                            />
                          </div>
                          <div className="bg-white-A700 border border-light_blue-900 border-solid flex md:flex-1 flex-row items-center justify-between p-[9px] rounded-tl-[10px] rounded-tr-[10px] w-[48%] md:w-full">
                            <Text
                              className="my-[9px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                              size="txtPoppinsBold35Black900"
                            >
                              10/28
                            </Text>
                            <Img
                              className="h-[51px] md:h-auto object-cover rounded-[10px]"
                              src="images/img_keyboard8419852.png"
                              alt="keyboard8419852_Four"
                            />
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-between mt-[5px] w-full">
                          <Line className="bg-light_blue-900 h-[5px] w-[51%]" />
                          <Line className="bg-light_blue-900 h-[5px] w-[48%]" />
                        </div>
                        <Button
                          className="cursor-pointer font-semibold leading-[normal] min-w-[319px] mt-[59px] sm:text-[35px] md:text-[41px] text-[45px] text-center"
                          shape="round"
                          size="xs"
                        >
                          Add Card
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[42%] flex md:flex-col flex-row gap-14 items-center justify-center left-[8%] w-[33%]">
                <Text
                  className="bg-light_blue-900 h-[82px] justify-center pb-1.5 pt-[19px] sm:px-5 px-[34px] rounded-[41px] sm:text-[33px] md:text-[35px] text-[37px] text-center text-white-A700 w-[319px]"
                  size="txtPoppinsSemiBold37"
                >
                  Update Card
                </Text>
                <Button
                  className="border border-light_blue-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[319px] sm:text-[33px] md:text-[35px] text-[37px] text-center"
                  shape="round"
                  color="white_A700"
                >
                  Remove Card
                </Button>
              </div>
              <Img
                className="absolute h-[110px] left-[0] top-[19%]"
                src="images/img_iconarrowdown.svg"
                alt="iconarrowdown"
              />
              <div className="absolute bg-white-A700_01 border border-light_blue-800 border-solid flex flex-col inset-x-[0] items-center justify-end mx-auto p-[74px] md:px-10 sm:px-5 rounded-[30px] shadow-bs5 top-[0] w-[48%]">
                <div className="bg-white-A700 flex flex-col items-center justify-start mt-[3px] p-1 rounded-[132px] shadow-bs8 w-[264px] md:w-full">
                  <Img
                    className="h-[254px] w-[254px]"
                    src="images/img_icontickcircle.svg"
                    alt="icontickcircle"
                  />
                </div>
                <Text
                  className="mt-[34px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                  size="txtPoppinsBold50Black900"
                >
                  <>
                    Verification Successful, <br /> Card added
                  </>
                </Text>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[319px] mt-5 sm:text-[33px] md:text-[35px] text-[37px] text-center"
                  shape="round"
                >
                  Return
                </Button>
              </div>
            </div>
            <div className="bg-gray-700_01 h-[809px] mb-[642px] md:mt-0 mt-[52px] rounded-[10px] w-[1%]"></div>
          </div>
          <Line className="bg-black-900_72 h-0.5 mt-7 w-full" />
          <Text
            className="mt-[51px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
            size="txtJostRomanRegular36"
          >
            Copyrights © 2023 Secure Bank All Rights Reserved
          </Text>
        </div>
      </div>
    </>
  );
};

export default AddCard30ContinuedWebFeelingPage;
