import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import ProfileClubs from "./ProfileClubs";
import "./profile.css";


function Profile() {
  return (
    <div className="profile-page">
      <ProfileHeader />
      <ProfileInfo />
      <ProfileClubs />
    </div>
  );
}

export default Profile;