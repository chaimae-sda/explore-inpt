

function ProfileClubs(){
    const clubs = [
        {name : " CIT",
        desc : "dzepkf",
        img : "./images/robotique.png",
        status : "president",
        },

        {name : "CAS",
        desc : "dzepkf",
        img : "./images/robotique.png",
        status : "president",
        },

        {name : "GDI",
        desc : "dzepkf",
        img : "./images/robotique.png",
        status : "president",
        },

        {name : "Club INPT",
        desc : "dzepkf",
        img : "./images/robotique.png",
        status : "president",
        },

        {name : "BDET",
        desc : "dzepkf",
        img : "./images/robotique.png",
        status : "president",
        },

 
       
    ]
    
    return(
        <div className="profile-clubs">
            {clubs.map((club,index) => (
                <div key= {index} className="club-card" style={{backgroundImage: `url(${club.img})`}}>
                <div className="overlay"></div>
                <div className="club-content">
                    <h3>{club.name}</h3>
                    <p>{club.desc}</p>
                    <span className="badge">{club.status}</span>

                    </div>
                </div>
            ))}
            <button className="profile-clubs-button"> voir tous 
            </button>

          
        </div>
    );
}

export default ProfileClubs;