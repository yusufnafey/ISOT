import React from "react";
import "./About.scss";

const About = props => {
  return (
    <div className="about-page">
      <div className="titles">About Islamic Society of Tracy</div>
      <div className="container">
        <p>
          The Islamic Society of Tracy (ISOT) is a federally registered
          non-profit organization under Section 501 (C) (3) Internal Revenue
          Code. Located in the City of Tracy, it is an independent organization
          and does not have any affiliation or association with any other
          political or non-political organizations, parties, institutes, or
          establishments.
        </p>
        <p>
          Friday Prayers as well as five daily prayers are performed at masjid.
          These gatherings give our community members a chance to meet with each
          other and exchange ideas on how to promote, maintain, and preserve our
          shared Islamic beliefs, attitudes, values, tradition, and heritage,
          which characterize us.
        </p>
        <p>
          The ISOT offers daily classes in teaching our members and their
          children the Holly Quran, Fiqh, Arabic Language, and Islamic studies.
          We have also Family Nights Programs, which bring Muslim families
          closer in this area. We invite excellent speakers to discuss selected
          Islamic subjects in detail.
        </p>
        <p>
          The ISOT welcomes all Muslims of this area, no matter what their
          origins or nationalities are, to participate in the day-to-day
          services and activities of the Masjid.
        </p>
      </div>
      <div className="titles">Imam</div>
      <div className="container content">
        <div className="text">
          <p>
            Lateef Ur Rahman was born and raised in Stockton, California. For
            his love of Deen, he traveled abroad to Pakistan to acquire sacred
            Islamic knowledge. Upon completing the memorization of the Holy
            Qur’an, he advanced his study of Islamic Sciences at the acclaimed
            Darul Uloom Karachi. After finishing a rigorous curriculum under the
            honored Mufti Taqi Usmani, he received a Masters equivalent in
            Islamic Theology. His studies resulted in numerous formal Islamic
            authorizations (ijazahs) such as Arabic language and literature,
            Fiqh, Tafsir, Hadith, and Aqidah. After graduating in 2004, he
            returned to the United States to spread his knowledge.
          </p>
          <p>
            Since 2006, Imam Lateef has been serving as the Imam and Director of
            Religious Services at Islamic Society of Tracy. Imam Lateef has
            dedicated himself to teaching and benefitting the community with
            what he had mastered abroad. He currently teaches weekday Qur'an
            classes, as well as Saturday Qur’an and Islamic classes. In addition
            to being an Imam, father, and teacher, he also is a prominent member
            of the Islamic Sharia Council of California, which serves to fulfill
            the religious needs of communities nationwide. Imam Lateef leads a
            group for Hajj every year and is often invited to speak at programs,
            gatherings, marriages, and religious events. He currently resides in
            Stockton, California with his wife and three children.
          </p>
        </div>
        <div className="member-cards">
          <div className="member-container">
            <div className="member-image">
              <img src={require("../images/profile.jpg")} alt="member photo" />
              <div className="overlay" />
            </div>
            <div className="member-content">
              <div className="member-name">Lateef-ur-Rahman</div>
              <div className="member-job" />
            </div>
          </div>
        </div>
      </div>
      <div className="titles">Board of Directors</div>
      <div className="container content">
        <div className="text">
          <p>
            The ISOT has a board of directors, which consists of 13 members. The
            board members are elected every two years by members of this
            organization. The board of directors manages, organizes, and
            conducts day-to-day activities of the masjid and its Islamic school.
          </p>
        </div>
        <div className="member-cards">
          <div className="member-container">
            <div className="member-image">
              <img src={require("../images/profile.jpg")} alt="member photo" />
              <div className="overlay" />
            </div>
            <div className="member-content">
              <div className="member-name">Moheb Argand</div>
              <div className="member-job">President</div>
            </div>
          </div>
          <div className="member-container">
            <div className="member-image">
              <img src={require("../images/profile.jpg")} alt="member photo" />
              <div className="overlay" />
            </div>
            <div className="member-content">
              <div className="member-name">Zabih Zaca</div>
              <div className="member-job">Vice President</div>
            </div>
          </div>
          <div className="member-container">
            <div className="member-image">
              <img src={require("../images/profile.jpg")} alt="member photo" />
              <div className="overlay" />
            </div>
            <div className="member-content">
              <div className="member-name">Zabih Azizpor</div>
              <div className="member-job">Secretary</div>
            </div>
          </div>
          <div className="member-container">
            <div className="member-image">
              <img src={require("../images/profile.jpg")} alt="member photo" />
              <div className="overlay" />
            </div>
            <div className="member-content">
              <div className="member-name">Homayun Niazmand</div>
              <div className="member-job">Treasurer</div>
            </div>
          </div>
          <div className="member-container">
            <div className="member-image">
              <img src={require("../images/profile.jpg")} alt="member photo" />
              <div className="overlay" />
            </div>
            <div className="member-content">
              <div className="member-name">Amin Shamal</div>
              <div className="member-job" />
            </div>
          </div>
          <div className="member-container">
            <div className="member-image">
              <img src={require("../images/profile.jpg")} alt="member photo" />
              <div className="overlay" />
            </div>
            <div className="member-content">
              <div className="member-name">Fawad Ebrahimi</div>
              <div className="member-job" />
            </div>
          </div>
          <div className="member-container">
            <div className="member-image">
              <img src={require("../images/profile.jpg")} alt="member photo" />
              <div className="overlay" />
            </div>
            <div className="member-content">
              <div className="member-name">Tariq Mojaddidi</div>
              <div className="member-job" />
            </div>
          </div>
          <div className="member-container">
            <div className="member-image">
              <img src={require("../images/profile.jpg")} alt="member photo" />
              <div className="overlay" />
            </div>
            <div className="member-content">
              <div className="member-name">Saifur Rahman Dadgar</div>
              <div className="member-job" />
            </div>
          </div>
          <div className="member-container">
            <div className="member-image">
              <img src={require("../images/profile.jpg")} alt="member photo" />
              <div className="overlay" />
            </div>
            <div className="member-content">
              <div className="member-name">Sher Hatef</div>
              <div className="member-job" />
            </div>
          </div>
          <div className="member-container">
            <div className="member-image">
              <img src={require("../images/profile.jpg")} alt="member photo" />
              <div className="overlay" />
            </div>
            <div className="member-content">
              <div className="member-name">Musadeq Tarin</div>
              <div className="member-job" />
            </div>
          </div>
          <div className="member-container">
            <div className="member-image">
              <img src={require("../images/profile.jpg")} alt="member photo" />
              <div className="overlay" />
            </div>
            <div className="member-content">
              <div className="member-name">Mansoor Halimi</div>
              <div className="member-job" />
            </div>
          </div>
          <div className="member-container">
            <div className="member-image">
              <img src={require("../images/profile.jpg")} alt="member photo" />
              <div className="overlay" />
            </div>
            <div className="member-content">
              <div className="member-name">Zubair Shah</div>
              <div className="member-job" />
            </div>
          </div>
          <div className="member-container">
            <div className="member-image">
              <img src={require("../images/profile.jpg")} alt="member photo" />
              <div className="overlay" />
            </div>
            <div className="member-content">
              <div className="member-name">Khalil Mashkoor</div>
              <div className="member-job" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
