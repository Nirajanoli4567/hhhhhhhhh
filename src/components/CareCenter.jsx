import React from "react";
import { MdLocalPolice } from "react-icons/md";
import { MdTraffic } from "react-icons/md";
import { FaCarRear } from "react-icons/fa6";
import { PiFireTruckFill } from "react-icons/pi";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { GiRobberMask } from "react-icons/gi";
import { FaChildReaching } from "react-icons/fa6";
import { TbSolarElectricity } from "react-icons/tb";
import { BiSolidDonateBlood } from "react-icons/bi";
import { LuCross } from "react-icons/lu";
import { FaVanShuttle } from "react-icons/fa6";
import { FaHospital } from "react-icons/fa";
import img from '../assets/contact.png';

function CareCenter() {
  return <div className="flex">

    <div className="emergency-nums bg-gradient-to-r from-green-100 to-white rounded-2xl p-3 shadow-md w-1/3 h-4/5 shadow-xl shadow-green-200 m-5">
      <h1 className="text-blue-500 font-semibold text-2xl text-center p-3">Emergency Contacts</h1>

      <div className="list-none font-semibold p-4">

        <div className="flex items-center gap-2 py-3">
          <div><MdLocalPolice /></div>
          <div className=""><p>Police Control Room ------------------------<a href="tel:+977 100">100</a></p></div>
        </div>


        <div className="flex items-center gap-2 py-3">
          <div><MdTraffic /></div>
          <div className=""><p> Traffic Control Room------------------------<a href="tel:+977 103">103</a></p></div>
        </div>


        <div className="flex items-center gap-2 py-3">
          <div><FaCarRear /></div>
          <div className=""><p >Traffic Jam Information ---------------------<a href="sms:+977 4321">JAM 4321</a></p></div>
        </div>


        <div className="flex items-center gap-2 py-3">
          <div><PiFireTruckFill /></div>
          <div className=""><p> Fire Fighters --------------------------------<a href="tel:+977 101">101</a></p></div>
        </div>


        <div className="flex items-center gap-2 py-3">
          <div><GiPoliceOfficerHead /></div>
          <div className=""><p>Emergency Police Service ------------------<a href="tel:+977 4228435">4228435</a></p></div>
        </div>


        <div className="flex items-center gap-2 py-3">
          <div><GiRobberMask /></div>
          <div className=""><p>Crime Information --------------------------<a href="tel:+977 4412748">4412748</a></p></div>
        </div>


        <div className="flex items-center gap-2 py-3">
          <div><FaChildReaching /></div>
          <div className=""><p>Child Missing --------------------------------<a href="tel:+977 104">104</a></p></div>
        </div>


        <div className="flex items-center gap-2 py-3">
          <div><TbSolarElectricity /></div>
          <div className=""><p>Nepal Electricity Authority ------------------<a href="tel:+977 4153164">4153164</a></p></div>
        </div>


        <div className="flex items-center gap-2 py-3">
          <div><BiSolidDonateBlood /></div>
          <div className=""><p>Blood Bank ----------------------------------<a href="tel:+977 4225344">4225344</a></p></div>
        </div>


        <div className="flex items-center gap-2 py-3">
          <div><LuCross /></div>
          <div className=""><p>Nepal Red Cross Society --------------------<a href="tel:+977 4270650">4270650</a></p></div>
        </div>


        <div className="flex items-center gap-2 py-3">
          <div><LuCross /></div>
          <div className=""><p>Bhaktapur Red Cross ------------------------<a href="tel:+977 6611661">6611661</a></p></div>
        </div>


        <div className="flex items-center gap-2 py-3">
          <div><FaVanShuttle /></div>
          <div className=""><p>Hearse(Shav Vahan) -------------------------<a href="tel:+977 6612266">6612266</a></p></div>
        </div>
      </div>
    </div>

    <div className="img-avatar w-1/3 h-2/3 py-60">
    <img src={img}alt="" />
    </div>

    <div className="hospital-nums bg-gradient-to-r from-white to-blue-100 rounded-2xl p-3 shadow-md w-1/3 h-4/5 shadow-xl shadow-blue-200 m-5">
      <h1 className="text-green-500 font-semibold text-2xl text-center p-3">Hospitals Contacts</h1>

      <div className="list-none font-semibold p-4">
        <div className="flex items-center gap-2 py-1.5">
          <div><FaHospital /></div>
          <div className=""><p>Army Hospital -----------------------<a href="tel:+977  4271940">4271940</a></p></div>
        </div>

        <div className="flex items-center gap-2 py-1.5">
          <div><FaHospital /></div>
          <div className=""><p>Bir Hospital --------------------------<a href="tel:+977 4221988">4221988</a></p></div>
        </div>

        <div className="flex items-center gap-2 py-1.5">
          <div><FaHospital /></div>
          <div className=""><p>Bhaktapur Cancer Hospital -----------<a href="tel:+977 6611532">6611532</a></p></div>
        </div>

        <div className="flex items-center gap-2 py-1.5">
          <div><FaHospital /></div>
          <div className=""><p>Chirayu National Hospital ------------<a href="tel:+977 5905888">5905888</a></p></div>
        </div>

        <div className="flex items-center gap-2 py-1.5">
          <div><FaHospital /></div>
          <div className=""><p>Kanti Children Hospital ---------------<a href="tel:+977 4411550">4411550</a></p></div>
        </div>

        <div className="flex items-center gap-2 py-1.5">
          <div><FaHospital /></div>
          <div className=""><p>Nidan Hospital ------------------------<a href="tel:+977 9745619619">9745619619</a></p></div>
        </div>

        <div className="flex items-center gap-2 py-1.5">
          <div><FaHospital /></div>
          <div className=""><p>Norvic Hospital ------------------------<a href="tel:+977 4258554">4258554</a></p></div>
        </div>

        <div className="flex items-center gap-2 py-1.5">
          <div><FaHospital /></div>
          <div className=""><p>Police Hospital -------------------------<a href="tel:+977 4412430">4412430</a></p></div>
        </div>

        <div className="flex items-center gap-2 py-1.5">
          <div><FaHospital /></div>
          <div className=""><p>Patan Hospital -------------------------<a href="tel:+977 5522295">5522295</a></p></div>
        </div>

        <div className="flex items-center gap-2 py-1.5">
          <div><FaHospital /></div>
          <div className=""><p>Om Hospital ----------------------------<a href="tel:+977 4476225">4476225</a></p></div>
        </div>

        <div className="flex items-center gap-2 py-1.5">
          <div><FaHospital /></div>
          <div className=""><p>Star Hospital ---------------------------<a href="tel:+977 5550197">5550197</a></p></div>
        </div>

        <div className="flex items-center gap-2 py-1.5">
          <div><FaHospital /></div>
          <div className=""><p>Teaching Hospital ----------------------<a href="tel:+977 4412505">4412505</a></p></div>
        </div>

        <div className="flex items-center gap-2 py-1.5">
          <div><FaHospital /></div>
          <div className=""><p>Grande Hospital ------------------------<a href="tel:+977 5159266">5159266</a></p></div>
        </div>

        <div className="flex items-center gap-2 py-1.5">
          <div><FaHospital /></div>
          <div className=""><p>Dr.Iwamura Memorial Hospital --------<a href="tel:+977 6612695">6612695</a></p></div>
        </div>

        <div className="flex items-center gap-2 py-1.5">
          <div><FaHospital /></div>
          <div className=""><p>Tilganga Hospital ----------------------<a href="tel:+977 4970048">4970048</a></p></div>
        </div>

        <div className="flex items-center gap-2 py-1.5">
          <div><FaHospital /></div>
          <div className=""><p>Ishan Children and Women's Hospital -<a href="tel:+977 4959560">100</a></p></div>
        </div>

      </div>
    </div>

  </div>;
}

export default CareCenter;
