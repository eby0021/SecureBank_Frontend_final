import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import SignupPage30Page from "pages/SignupPage30";
// import HomePageEveryDayAccount30WebFeelingPage from "pages/HomePageEveryDayAccount30WebFeeling";

const HomePageEveryDayAccount30WebFeeling = React.lazy(() =>
  import("pages/HomePageEveryDayAccount30WebFeeling"),
);
const ViewProfile30WebFeeling = React.lazy(() =>
  import("pages/ViewProfile30WebFeeling"),
);
const BillPaymentSuccessfulSuccessful30WebFeeling = React.lazy(() =>
  import("pages/BillPaymentSuccessfulSuccessful30WebFeeling"),
);
const BillPayment30WebFeeling = React.lazy(() =>
  import("pages/BillPayment30WebFeeling"),
);
const TransactionAnalytics30WebFeelingOne = React.lazy(() =>
  import("pages/TransactionAnalytics30WebFeelingOne"),
);
const TransactionAnalytics30WebFeeling = React.lazy(() =>
  import("pages/TransactionAnalytics30WebFeeling"),
);
const AddtoFavouritesContinued30WebFeeling = React.lazy(() =>
  import("pages/AddtoFavouritesContinued30WebFeeling"),
);
const AddtoFavourites30WebFeeling = React.lazy(() =>
  import("pages/AddtoFavourites30WebFeeling"),
);
const PaySomeoneByPayID30WebFeeling = React.lazy(() =>
  import("pages/PaySomeoneByPayID30WebFeeling"),
);
const PaySomeoneByBankErrorField30WebFeeling = React.lazy(() =>
  import("pages/PaySomeoneByBankErrorField30WebFeeling"),
);
const PaySomeoneByBankRecentTransaction30WebFeeling = React.lazy(() =>
  import("pages/PaySomeoneByBankRecentTransaction30WebFeeling"),
);
const PaySomeoneByBankFailed30WebFeeling = React.lazy(() =>
  import("pages/PaySomeoneByBankFailed30WebFeeling"),
);
const PaySomeoneByBankSuccessful30WebFeeling = React.lazy(() =>
  import("pages/PaySomeoneByBankSuccessful30WebFeeling"),
);
const PaySomeoneByBank30WebFeeling = React.lazy(() =>
  import("pages/PaySomeoneByBank30WebFeeling"),
);
const TransactionHistory30WebFeeling = React.lazy(() =>
  import("pages/TransactionHistory30WebFeeling"),
);
const AddCard30ContinuedWebFeeling = React.lazy(() =>
  import("pages/AddCard30ContinuedWebFeeling"),
);
const AddCard30WebFeeling = React.lazy(() =>
  import("pages/AddCard30WebFeeling"),
);
const ChatBotPage30WebFeeling = React.lazy(() =>
  import("pages/ChatBotPage30WebFeeling"),
);
const HomePageSavingsAccount30WebFeeling = React.lazy(() =>
  import("pages/HomePageSavingsAccount30WebFeeling"),
);

const LoginPage30Error = React.lazy(() => import("pages/LoginPage30Error"));
const LoginPagereCaptcha30 = React.lazy(() =>
  import("pages/LoginPagereCaptcha30"),
);


const LoginPage30 = React.lazy(() => import("pages/LoginPage30"));


const SignupPayIDCheckedPage30 = React.lazy(() =>
  import("pages/SignupPayIDCheckedPage30"),
);
// const SignupPage30 = React.lazy(() => import("pages/SignupPage30"));
const BPAY = React.lazy(() => import("pages/BPAY"));
const Transfer = React.lazy(() => import("pages/Transfer"));
const TransferForSavings = React.lazy(() => import("pages/TransferForSavings"));


const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signuppage30" element={<SignupPage30Page />} />
          <Route
            path="/signuppayidcheckedpage30"
            element={<SignupPayIDCheckedPage30 />}
          />
          <Route path="/loginpage30" element={<LoginPage30 />} />
          <Route path="/bpay/:userID" element={<BPAY />} />
          <Route path="/transfer/:userID" element={<Transfer />} />
          <Route path="/transferForSavings" element={<TransferForSavings />} />
          <Route
            path="/loginpagerecaptcha30"
            element={<LoginPagereCaptcha30 />}
          />
          <Route path="/loginpage30error" element={<LoginPage30Error />} />
          <Route
            path="/homepageeverydayaccount30webfeeling/:userID"
            element={<HomePageEveryDayAccount30WebFeeling />}
          />
          <Route
            path="/homepagesavingsaccount30webfeeling"
            element={<HomePageSavingsAccount30WebFeeling />}
          />
          <Route
            path="/chatbotpage30webfeeling"
            element={<ChatBotPage30WebFeeling />}
          />
          <Route
            path="/addcard30webfeeling"
            element={<AddCard30WebFeeling />}
          />
          <Route
            path="/addcard30continuedwebfeeling"
            element={<AddCard30ContinuedWebFeeling />}
          />
          <Route
            path="/transactionhistory30webfeeling/:userID"
            element={<TransactionHistory30WebFeeling />}
          />
          <Route
            path="/paysomeonebybank30webfeeling"
            element={<PaySomeoneByBank30WebFeeling />}
          />
          <Route
            path="/paysomeonebybanksuccessful30webfeeling"
            element={<PaySomeoneByBankSuccessful30WebFeeling />}
          />
          <Route
            path="/paysomeonebybankfailed30webfeeling"
            element={<PaySomeoneByBankFailed30WebFeeling />}
          />
          <Route
            path="/paysomeonebybankrecenttransaction30webfeeling"
            element={<PaySomeoneByBankRecentTransaction30WebFeeling />}
          />
          <Route
            path="/paysomeonebybankerrorfield30webfeeling/:userID"
            element={<PaySomeoneByBankErrorField30WebFeeling />}
          />
          <Route
            path="/paysomeonebypayid30webfeeling"
            element={<PaySomeoneByPayID30WebFeeling />}
          />
          <Route
            path="/addtofavourites30webfeeling"
            element={<AddtoFavourites30WebFeeling />}
          />
          <Route
            path="/addtofavouritescontinued30webfeeling"
            element={<AddtoFavouritesContinued30WebFeeling />}
          />
          <Route
            path="/transactionanalytics30webfeeling/:userID"
            element={<TransactionAnalytics30WebFeeling />}
          />
          <Route
            path="/transactionanalytics30webfeelingone"
            element={<TransactionAnalytics30WebFeelingOne />}
          />
          <Route
            path="/billpayment30webfeeling"
            element={<BillPayment30WebFeeling />}
          />
          <Route
            path="/billpaymentsuccessfulsuccessful30webfeeling"
            element={<BillPaymentSuccessfulSuccessful30WebFeeling />}
          />
          <Route
            path="/viewprofile30webfeeling/:userID"
            element={<ViewProfile30WebFeeling />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
