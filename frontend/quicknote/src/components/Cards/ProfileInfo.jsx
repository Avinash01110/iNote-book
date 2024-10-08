import React from "react";
import { getInitials } from "../../utils/helper";


const ProfileInfo = ({ userInfo, onLogout }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full font-medium text-accent-100 bg-accent-200">
        {getInitials(userInfo?.fullname)}
      </div>

      <div>
        <p className="text-sm font-medium">{userInfo?.fullname}</p>
        <button onClick={onLogout} className="text-sm underline">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
