import React from 'react';
import { Img, Line, Text } from "components";

const TransactionRow = ({ id, senderAccountNumber, receiverAccountNumber, amount, transDate }) => {
  return (
    <div>

   
    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[0px] w-[100%] md:w-full ml-[20px]">
      <Text className="md:mt-0 mt-3 ml-[50px] sm:text-[40px] md:text-[46px] text-[20px] text-black-900 text-center" size="txtPoppinsRegular50">
        {id}
      </Text>
      
      <Text className="mb-[3px] md:ml-[0] ml-[100px] md:mt-0 mt-2 sm:text-[40px] md:text-[46px] text-[20px] text-black-900 text-center" size="txtPoppinsRegular50">
        {transDate}
      </Text>
      <Text className="mb-3 md:ml-[0] ml-[170px] sm:text-[40px] md:text-[46px] text-[20px] text-black-900 text-center" size="txtPoppinsRegular50">
        {senderAccountNumber}
      </Text>
      <Text className="mb-3 md:ml-[0] ml-[170px] sm:text-[40px] md:text-[46px] text-[20px] text-black-900 text-center" size="txtPoppinsRegular50">
        {receiverAccountNumber}
      </Text>
      <Text className="mb-0.5 md:ml-[0] ml-[150px] md:mt-0 mt-[9px] sm:text-[40px] md:text-[46px] text-[20px] text-black-900 text-center" size="txtPoppinsRegular50">
        {amount}
      </Text>
     
    </div>
    <div className="h-0.5 md:h-[158px] mt-[10px] relative w-full">
                      <Line className="bg-black-900_72 h-0.5 w-[1140px] mt-[10px]" />
                      </div>
    </div>
    
  );
};

export default TransactionRow;
