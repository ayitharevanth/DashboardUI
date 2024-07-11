import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import AnalyticsBox from "../components/AnalyticsBox";
import ProfileReport from "../components/ProfileReport";
import Lottie from "lottie-react";
import personAnimation from "../assets/lottie files/person.json";
import TotalRevenue from "../components/TotalRevenue";

import { setProfileReport, setReplies, setEngagement, setAudienceRetention } from "../redux/dashboard/dashboardSlice";
import { setUsername } from "../redux/user/userSlice";

const DashboardPage = () => {
  const dispatch = useDispatch();

  // Fetch data from the Redux store
  const profileReport = useSelector((state) => state.profileReport);
  const replies = useSelector((state) => state.replies);
  const engagement = useSelector((state) => state.engagement);
  const audienceRetention = useSelector((state) => state.audienceRetention);
  const username = useSelector((state) => state.user.username);

  // Dispatch actions to update state on component mount
  useEffect(() => {
    dispatch(setProfileReport({
      title: 'Profile Report',
      year: '2021',
      value: '12k',
      percentage: 75
    }));
    dispatch(setReplies({
      title: 'Replies',
      value: '40',
      increment: '14',
      percentage: 79
    }));
    dispatch(setEngagement({
      title: 'Engagement',
      value: '100',
      increment: '14',
      percentage: 74
    }));
    dispatch(setAudienceRetention({
      title: 'Audience retention',
      value: '330',
      increment: '14',
      percentage: 74
    }));
    dispatch(setUsername('Addie Bradford'));
  }, [dispatch]);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-4 gap-6">
            {/* Congratulations Card */}
            <div className="col-span-3 bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-blue-900">
                    Congratulations {username} !
                  </h2>
                  <p className="text-gray-400 font-bold mt-2">
                    You have done 72% more sales today. Check your new badge in
                    your profile.
                  </p>
                  <button className="mt-4 px-4 py-2 border border-blue-600 text-gray-700 rounded-md">
                    View badges
                  </button>
                </div>
                <div className="w-40 h-40">
                  <Lottie loop animationData={personAnimation} />
                </div>
              </div>
            </div>

            {/* Profile Report */}
            <ProfileReport
              title={profileReport.title}
              year={profileReport.year}
              value={profileReport.value}
              percentage={profileReport.percentage}
            />

            {/* Total Revenue Chart */}
            <div className="col-span-3 bg-white rounded-lg shadow p-6">
              <TotalRevenue />
            </div>

            {/* Analytics Boxes */}
            <div className="space-y-6">
              <AnalyticsBox
                title={replies.title}
                value={replies.value}
                increment={replies.increment}
                percentage={replies.percentage}
              />
              <AnalyticsBox
                title={engagement.title}
                value={engagement.value}
                increment={engagement.increment}
                percentage={engagement.percentage}
              />
              <AnalyticsBox
                title={audienceRetention.title}
                value={audienceRetention.value}
                increment={audienceRetention.increment}
                percentage={audienceRetention.percentage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
