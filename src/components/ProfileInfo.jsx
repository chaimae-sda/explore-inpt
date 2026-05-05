
import {
  FaUserCircle,
  FaChartLine,
  FaGem,
  FaBirthdayCake,
  FaBook,
  FaHeart,
  FaUsers,
  FaCalendar,
  FaNewspaper,
  FaProjectDiagram
} from "react-icons/fa";



function ProfileInfo() {
return (
    <div className="profile-info">
        <div className="profile-card about">
            <div className="card-header">
                <FaUserCircle />
                <h2>À propos</h2>
                <button className="edit-button">Modifier</button>
            </div>
            <p className="bio-text">
                Passionné par la technologie et l’innovation...zsjedhfzpeofjdcnsk,ldzepkforjsd,llzdeorifndsk
            </p>
            <div className="info-item">
                <FaBirthdayCake />
                <div>
                    <span>Date de naissance</span>
                    <p>12 mai 2004</p>
                </div>
            </div>
            <div className="info-item">
                <FaBook />
                <div>
                    <span>Programme</span>
                    <p>Génie Informatique</p>
                </div>
            </div>
            <div className="info-item">
                <FaBook />
                <div>
                    <span>Niveau</span>
                    <p>2éme année</p>
                </div>
            </div>
            <div className="info-item">
                <FaHeart />
                <div>
                    <span>Intérets</span>
                    <p>Football, Natation, Voyage, Technologie, Écriture</p>
                </div>
            </div>
        </div>
        <div className="profile-card stats">

        <div className="card-header">
          <FaChartLine />
          <h2>Mes statistiques</h2>
        </div>

        <div className="stats-grid">

          <div className="stat-box purple">
            <FaCalendar />
            <h3>7</h3>
            <p>Événements</p>
          </div>

          <div className="stat-box blue">
            <FaUsers />
            <h3>3</h3>
            <p>Clubs</p>
          </div>

          <div className="stat-box green">
            <FaNewspaper />
            <h3>12</h3>
            <p>Articles</p>
          </div>

          <div className="stat-box orange">
            <FaProjectDiagram />
            <h3>2</h3>
            <p>Projets</p>
          </div>

        </div>

        </div>
    </div>
)

}

export default ProfileInfo;
























