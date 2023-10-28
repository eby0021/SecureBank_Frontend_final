import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage Of Secure Bank</h1>
      <ul>
        <li>
          <Link to="/signuppage30">Signup Page</Link>
        </li>
        {/* <li>
          <Link to="/signuppayidcheckedpage30">SignupPayIDCheckedPage30</Link>
        </li> */}
        <li>
          <Link to="/loginpage30">Login Page</Link>
        </li>
        {/* <li>
          <Link to="/loginpagerecaptcha30">LoginPagereCaptcha30</Link>
        </li>
        <li>
          <Link to="/loginpage30error">LoginPage30Error</Link>
        </li> */}
        <li>
          <Link to="/homepageeverydayaccount30webfeeling">
            Home Page of Everyday Account
          </Link>
        </li>
        <li>
          <Link to="/homepagesavingsaccount30webfeeling">
        Home Page to Savings Account
          </Link>
        </li>
        <li>
          <Link to="/chatbotpage30webfeeling">Chat Bot Page</Link>
        </li>
        <li>
          <Link to="/addcard30webfeeling">Card Management Page</Link>
        </li>
        {/* <li>
          <Link to="/addcard30continuedwebfeeling">
            AddCard30ContinuedWebFeeling
          </Link>
        </li> */}
        <li>
          <Link to="/transactionhistory30webfeeling">
            Transaction History Page
          </Link>
        </li>
        {/* <li>
          <Link to="/paysomeonebybank30webfeeling">
            Pay Someone By Bank Page
          </Link>
        </li> */}
        {/* <li>
          <Link to="/paysomeonebybanksuccessful30webfeeling">
            PaySomeoneByBankSuccessful30WebFeeling
          </Link>
        </li> */}
        {/* <li>
          <Link to="/paysomeonebybankfailed30webfeeling">
            PaySomeoneByBankFailed30WebFeeling
          </Link>
        </li> */}
        {/* <li>
          <Link to="/paysomeonebybankrecenttransaction30webfeeling">
            PaySomeoneByBankRecentTransaction30WebFeeling
          </Link>
        </li> */}
         <li>
          <Link to="/paysomeonebybankerrorfield30webfeeling">
            Pay Someone By Bank Account
          </Link>
        </li> 
        {/* <li>
          <Link to="/paysomeonebypayid30webfeeling">
            Pay Someone By Pay ID
          </Link>
        </li> */}
        {/* <li>
          <Link to="/addtofavourites30webfeeling">
            AddtoFavourites30WebFeeling
          </Link>
        </li> */}
        {/* <li>
          <Link to="/addtofavouritescontinued30webfeeling">
            AddtoFavouritesContinued30WebFeeling
          </Link>
        </li> */}
        <li>
          <Link to="/transactionanalytics30webfeeling">
            Transaction Analytics Page
          </Link>
        </li>
        {/* <li>
          <Link to="/transactionanalytics30webfeelingone">
            TransactionAnalytics30WebFeelingOne
          </Link>
        </li> */}
        <li>
          <Link to="/billpayment30webfeeling">Bill Payment </Link>
        </li>
        {/* <li>
          <Link to="/billpaymentsuccessfulsuccessful30webfeeling">
            BillPaymentSuccessfulSuccessful30WebFeeling
          </Link>
        </li> */}
        <li>
          <Link to="/viewprofile30webfeeling">View Profile </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
