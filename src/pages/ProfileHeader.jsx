import "./profile.css";


function ProfileHeader() {
    return(
        <div className="profile-header">
            <div className="profile-header-image">
                <img src='https://i.pravatar.cc/150' alt='profile'></img>
                <button>✏️</button>
            </div>
            <div className="profile-header-infos-1">
                <div className="profile-header-info-1-1">
                    <h1>Layla Chmourk</h1>
                    <p>2éme année</p>
                </div>
                <p>laylaChmourk@email.com</p>
                <p>INPT</p>
            </div>
            <div className="profile-header-infos-2">
                <p className="profile-header-description">edddzjhhhhhhhhhhhhhhhhhhhhhhh
                    hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                    hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
            </div>

        </div>
    )

}

export default ProfileHeader;