import About from "./components/About";
import Admindashboard from "./components/admindashboard/Admindashboard";
import Appoinment from "./components/admindashboard/Appoinment";
import Help from "./components/admindashboard/Help";
import Users from "./components/admindashboard/Users";
import Ambulance from "./components/admindashboard/Ambulance";
import Messages from "./components/admindashboard/Messages";
import Settings from "./components/admindashboard/Setting";
import CareCenter from "./components/CareCenter";
import Landing from "./components/landing";
// import SignIp from "./components/log/SignIn";
import Navbar from "./components/Navbar";
import Doclogin from "./components/log/Doc-login";
import Adminlogin from "./components/log/Admin-login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Billing from "./components/admindashboard/Billing";
import Email from "./components/admindashboard/Email";
import Docdashboard from "./components/Doctrosdashboard/Docdashboard";
import Dappoinment from "./components/Doctrosdashboard/Dappoinment";
import Salary from "./components/Doctrosdashboard/Salary";
import Demail from "./components/Doctrosdashboard/Demail";
import Dmessage from "./components/Doctrosdashboard/Dmessage";
import Dsetting from "./components/Doctrosdashboard/Dsetting";
import Dhelp from "./components/Doctrosdashboard/Dhelp";
import Pdashboard from "./components/patientdashboard/Pdashboard";
import Psetting from "./components/patientdashboard/Psetting";
import Pappoinment from "./components/patientdashboard/Pappoinment";
import Pemail from "./components/patientdashboard/Pemail";
import Pmessage from "./components/patientdashboard/Pmessage";
import PharmacyDashboard from "./components/Pharmacydashboard/PharmacyDashboard";
import PharSetting from "./components/Pharmacydashboard/PharSetting";
import Medicinelist from "./components/Pharmacydashboard/Medicinelist";
import Form from "./components/log/SignIn";
import Signup from "./components/log/signup";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Admindashboard />} />
          <Route path="/ddashboard" element={<Docdashboard />} />
          <Route path="/pdashboard" element={<Pdashboard />} />
          <Route path="/phardashboard" element={<PharmacyDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/carecenter" element={<CareCenter />} />

          <Route path="/signin" element={<Form />} />
          <Route path="/signup" element={<Signup />} />


          <Route path="/Doc-login" element={<Doclogin />} />
          <Route path="/Admin-login" element={<Adminlogin />} />

          <Route path="/appointment" element={<Appoinment />} />
          <Route path="/dappointment" element={<Dappoinment />} />
          <Route path="/pappointment" element={<Pappoinment />} />
          <Route path="/salary" element={<Salary/>} />
          <Route path="/users" element={<Users />} />
          <Route path="/ambulance" element={<Ambulance />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/email" element={<Email />} />
          <Route path="/demail" element={<Demail />} />
          <Route path="/pemail" element={<Pemail />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/dmessages" element={<Dmessage/>} />
          <Route path="/pmessages" element={<Pmessage/>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dsettings" element={<Dsetting />} />
          <Route path="/psettings" element={<Psetting />} />
          <Route path="/pharmedicine" element={<Medicinelist />} />
          <Route path="/pharsettings" element={<PharSetting/>} />
          <Route path="/help" element={<Help />} />
          <Route path="/dhelp" element={<Dhelp />} />
          <Route path="/logout" element={<Landing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
