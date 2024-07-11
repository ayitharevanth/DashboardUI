import { MdOutlineDashboard } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { TfiTimer } from "react-icons/tfi";
import { PiMagnetThin } from "react-icons/pi";
import { IoIosCloudOutline } from "react-icons/io";
import { MdOutlineCampaign } from "react-icons/md";
import { PiHeadCircuitLight } from "react-icons/pi";
import { TfiPieChart } from "react-icons/tfi";
import { VscGraph } from "react-icons/vsc";
import { MdOutlineManageSearch } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";
import { useState } from "react";

import DashboardPage from "../pages/DashboardPage"
import CreateAndSchedulePage from "../pages/CreateAndSchedulePage";
import ContentManagementPage from "../pages/ContentManagementPage";
import EngagementPage from "../pages/EngagementPage";
import AutomationPage from "../pages/AutomationPage";
import AdsAndCampaignPage from "../pages/AdsAndCampaignPage";
import ContentLibraryPage from "../pages/ContentLibraryPage";
import AnalyticsAndReport from "../pages/AnalyticsAndReport";
import CompetitorAnalysisPage from "../pages/CompetitorAnalysisPage";
import ManagePage from "../pages/ManagePage";

const sidebarItems = [
  { icon: <MdOutlineDashboard className="h-5 w-5" />, label: "Dashboard" },
  { icon: <IoCreateOutline className="h-5 w-5" />, label: "Create and schedule" },
  { icon: <TfiTimer className="h-5 w-5" />, label: "Content Management" },
  { icon: <PiMagnetThin className="h-5 w-5 scale-y-[-1] rotate-90" />, label: "Engagement" },
  { icon: <IoIosCloudOutline className="h-5 w-5" />, label: "Automation" },
  { icon: <MdOutlineCampaign className="h-5 w-5" />, label: "ADs and Campaign" },
  { icon: <PiHeadCircuitLight className="h-5 w-5 scale-x-[-1]" />, label: "Content library" },
  { icon: <TfiPieChart className="h-5 w-5" />, label: "Analytics and Reports" },
  { icon: <VscGraph className="h-5 w-5" />, label: "Competitor Analysis" },
  { icon: <MdOutlineManageSearch className="h-5 w-5" />, label: "Manage" },
  { icon: <VscSettings className="h-5 w-5" />, label: "Settings" },
  { icon: <IoIosLogOut className="h-5 w-5" />, label: "Logout" },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const renderContent = () => {
    switch (activeItem) {
      case "Dashboard":
        return <DashboardPage/>
      case "Create and schedule":
        return <CreateAndSchedulePage/>
      case "Content Management":
        return <ContentManagementPage/>
      case "Engagement":
        return <EngagementPage/>;
      case "Automation":
        return <AutomationPage/>;
      case "ADs and Campaign":
        return <AdsAndCampaignPage/>;
      case "Content library":
        return <ContentLibraryPage/>;
      case "Analytics and Reports":
        return <AnalyticsAndReport/>;
      case "Competitor Analysis":
        return <CompetitorAnalysisPage/>;
      case "Manage":
        return <ManagePage/>;
      case "Settings":
        return <div>Settings Content</div>;
      case "Logout":
        return <div>Logout Content</div>;
      default:
        return <div className="bg-red"></div>;
    }
  };

  return (
    <div className="flex">
      <div className="h-screen w-72 p-6 bg-white">
        <ul className="space-y-4">
          <li className="font-bold text-2xl pb-10">LOGO</li>
          {sidebarItems.slice(0, 10).map((item, index) => (
            <div
              key={index}
              className={`flex p-2 w-full cursor-pointer ${activeItem === item.label ? 'bg-gray-200 w-full h-full border-r-2 border-blue-900' : ''}`}
              onClick={() => setActiveItem(item.label)}
            >
              {item.icon}
              <li className="pl-2 text-sm">{item.label}</li>
            </div>
          ))}
          <div className="pt-20">
            {sidebarItems.slice(10).map((item, index) => (
              <div
                key={index}
                className={`flex py-2 cursor-pointer ${activeItem === item.label ? 'bg-gray-200' : ''}`}
                onClick={() => setActiveItem(item.label)}
              >
                {item.icon}
                <li className="pl-2 text-sm">{item.label}</li>
              </div>
            ))}
          </div>
        </ul>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Sidebar;
