import React from "react";
import Link from "gatsby-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPaperPlane,
  faCalendarAlt,
  faHeart,
  faInbox,
  faLightbulb,
  faSeedling,
  faArrowRight,
  faBrain,
  faCodeBranch,
  faRobot,
  faUsers,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import IEEELogo from "../images/IEEESDLogo.png";
import photo1 from "../images/outreach.jpg";
import photo2 from "../images/technical.jpg";
import EventCard from "../components/eventCard.js";
import ProjectSpace from "../images/projectspace.jpg";
import Sponsors from "../images/sponsors2019-2020.png";
import QP from "../images/quarter.jpg";
import AP from "../images/micromouse.jpg";

var mainColors = {
  Default: "#81b71a",
  Blue: "#0059da",
  Yellow: "#ffb100",
  skyBlue: "#00cdda",
  Red: "#ff5051",
  discord: "#7289d9",
};

const IndexPage = () => (
  <div>
    <div className="sidebar">
      <img src={IEEELogo} className="logo" />
      <ul>
        <a className="active" href="/">
          <FontAwesomeIcon className="icon" icon={faHome} />
          <div className="text">Overview</div>
        </a>
        <a href="#about">
          <FontAwesomeIcon className="icon" icon={faPaperPlane} />
          <div className="text">About</div>
        </a>
        <a href="#getinvolved">
          <FontAwesomeIcon className="icon" icon={faSeedling} />
          <div className="text">Get Involved</div>
        </a>
        <a href="#events">
          <FontAwesomeIcon className="icon" icon={faCalendarAlt} />
          <div className="text">Events</div>
        </a>
        <a href="#projects">
          <FontAwesomeIcon className="icon" icon={faLightbulb} />
          <div className="text">Projects</div>
        </a>
        <a href="#sponsorship">
          <FontAwesomeIcon className="icon" icon={faHeart} />
          <div className="text">Sponsorship</div>
        </a>
        <a href="#contact">
          <FontAwesomeIcon className="icon" icon={faInbox} />
          <div className="text">Contact Us</div>
        </a>
      </ul>
    </div>

    <div className="content">
      <div className="Main">
        <div className="blob"></div>
        <div className="TextGroup">
          <h1>IEEE UC San Diego</h1>
          <p>
            IEEE at UC San Diego is a non-profit pre-professional student
            organization. We are dedicated to provide engineering students with
            hands-on experiences, technical and professional development and
            other resources to help them achieve their potential.
          </p>
          <div>
            <a className="getInvolvedButton" href="#getinvolved">
              <FontAwesomeIcon className="rightArrow" icon={faArrowRight} />
              Get Involved
            </a>
          </div>
        </div>
        <div className="Photos">
          <h1>Photos</h1>
          <div className="PhotoGrid">
            <img src={photo1}></img>
            <img classname="photo2" src={photo2}></img>
          </div>
        </div>
      </div>
      <div className="Events">
        <h1>Events</h1>
        <EventCard
          title="ML Bootcamp"
          icon={faBrain}
          link="https://ieeeucsd.github.io/mlbootcamp/"
          text="8:30pm Sept 20th"
          color="#0059DA"
        />
        <EventCard
          title="HARD Hack"
          icon={faCodeBranch}
          link="https://hardhacksd.com"
          text="8:30pm, Sept 20th"
          color="#FFB100"
        />
        <EventCard
          title="QP Fall 2020"
          icon={faUsers}
          link="http://www.ieeeqp.com"
          text="8:30pm, Sept 20th"
          color="#00CDDA"
        />
        <EventCard
          title="RoboFest"
          icon={faRobot}
          link="http://www.ieeeqp.com"
          text="8:30pm, Sept 20th"
          color="#FF5051"
        />
      </div>
    </div>
    <div className="content2">
      <div className="about" id="about">
        <h1>About Us</h1>
        <div className="aboutText">
          <p1>
            We are dedicated to helping develop students into professional
            Engineers
          </p1>
          <p>
            As an organization, we strive to provide opportunities to students
            both at UC San Diego and in the larger STEM community to gain
            hands-on experience with autonomous robotics and its various
            disciplines. Throughout the year, we host dozens of events and
            workshops to teach skills not frequently taught in the classroom, as
            well as outreach events for students looking to give back to the
            STEM community. We also provide professional development and other
            resources to help students achieve their true potential as they
            develop into professional engineers.
          </p>
        </div>
      </div>
      <div className="contact" id="contact">
        <h1>Contact Us</h1>
        <div className="contactText">
          <div className="verticalStack">
            <a className="generalRow" href="mailto:ieee@eng.ucsd.edu">
              <p2 className="generalButton">General</p2>
              <p1>ieee@eng.ucsd.edu</p1>
            </a>
            <a className="projectsRow" href="mailto:projects@ieeeucsd.org">
              <p2 className="projectsButton">Projects</p2>
              <p1>projects@ieeeucsd.org</p1>
            </a>
            <a className="outreachRow" href="mailto:outreach@ieeeucsd.org">
              <p2 className="outreachButton">Outreach</p2>
              <p1>outreach@ieeeucsd.org</p1>
            </a>
            <a className="technicalRow" href="mailto:tech@ieeeucsd.org">
              <p2 className="technicalButton">Technical</p2>
              <p1>tech@ieeeucsd.org</p1>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="content3">
      <div className="getInvolved" id="getinvolved">
        <h1>Get Involved!</h1>
        <div className="getInvolvedText">
          <div className="involvementStack">
            <div className="involvementButton">
              <button className="learn-more">
                <span
                  className="circle"
                  aria-hidden="true"
                  style={{ background: mainColors.Blue }}
                >
                  <span className="icon arrow"></span>
                </span>
                <a
                  href="https://www.ieee.org/membership/join/index.html"
                  className="button-text"
                >
                  Join IEEE
                </a>
              </button>
            </div>
            <div className="involvementButton">
              <button className="learn-more">
                <span
                  className="circle"
                  aria-hidden="true"
                  style={{ background: mainColors.Yellow }}
                >
                  <span className="icon arrow"></span>
                </span>
                <a href="http://eepurl.com/gkUclH" className="button-text">
                  Our Newsletter
                </a>
              </button>
            </div>
            <div className="involvementButton">
              <button className="learn-more">
                <span
                  className="circle"
                  aria-hidden="true"
                  style={{ background: mainColors.skyBlue }}
                >
                  <span className="icon arrow"></span>
                </span>
                <a
                  href="https://www.facebook.com/ieeeucsd/?view_public_for=851520398231493"
                  className="button-text"
                >
                  Our Facebook
                </a>
              </button>
            </div>
            <div className="involvementButton">
              <button className="learn-more">
                <span
                  className="circle"
                  aria-hidden="true"
                  style={{ background: mainColors.Red }}
                >
                  <span className="icon arrow"></span>
                </span>
                <a
                  href="https://www.facebook.com/ieeeucsd/?view_public_for=851520398231493"
                  className="button-text"
                >
                  I-TRIPLE-EATS
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ProjectSpace">
        <h1>Project Space</h1>
        <div className="ProjectSpaceContent">
          <div className="ProjectSpaceText">
            <p2>@EBU1-4710</p2>
            <p1>
              The Project Space is an open collaborative space for students to
              work on projects, practice technical skills, or meet new people
              and hang out.
            </p1>
            <div className="DiscordButton">
              <button className="learn-more">
                <span
                  className="circle"
                  aria-hidden="true"
                  style={{ background: mainColors.discord }}
                >
                  <span className="icon arrow"></span>
                </span>
                <a href="https://discord.gg/NvvP5eF" className="button-text">
                  Our Discord
                </a>
              </button>
            </div>
          </div>
          <img className="ProjectSpacePhoto" src={ProjectSpace}></img>
        </div>
      </div>
    </div>
    <div className="content4">
      <div className="Sponsorship">
        <h1>Sponsorship</h1>
        <div className="SponsorText">
          <p1>
            IEEE Student Branch at UC San Diego is a non-profit organization
            focused on developing bright engineers to serve the community around
            us by hosting various events, community outreach, and several
            technical project national competitions. These programs would not
            have been possible without the generousity of our sponsors. Thus, we
            invite you to support and be a part of our efforts to strengthen our
            future scientists and engineers.
          </p1>
          <div className="sponsorButton">
            <button className="learn-more">
              <span
                className="circle"
                aria-hidden="true"
                style={{ background: mainColors.Red }}
              >
                <span className="icon arrow"></span>
              </span>
              <a href="/sponsor" className="button-text">
                Support Us
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="OurSponsors">
        <div className="SponsorTitleGroup">
          <h1>Our Sponsors</h1>
          <FontAwesomeIcon className="SponsorHeart" icon={faHeart} />
        </div>
        <img className="SponsorImage" src={Sponsors}></img>
      </div>
    </div>
    <div className="content5">
      <div className="Projects">
        <h1>Projects</h1>
        <div className="QPandAP">
          <div className="projectText">
            <img src={QP}></img>
            <p2>Quarterly Projects</p2>
            <p1>
              Applications open the beginning of every quarter and is a great
              opportunity for students to work together and gain more hands-on
              technical experience.
            </p1>
            <div className="projectButton">
              <button className="learn-more">
                <span
                  className="circle"
                  aria-hidden="true"
                  style={{ background: mainColors.Blue }}
                >
                  <span className="icon arrow"></span>
                </span>
                <a href="http://tinyurl.com/QPTeamApp" className="button-text">
                  Learn More
                </a>
              </button>
            </div>
          </div>
          <div className="projectText">
            <img src={AP}></img>
            <p2>Annual Projects</p2>
            <p1>
              Applications open the beginning of Fall quarter each year.
              Students are able to work together in a team all year long to
              build projects for a multitude of different competitions!
            </p1>
            <button className="learn-more">
              <span
                className="circle"
                aria-hidden="true"
                style={{ background: mainColors.Yellow }}
              >
                <span className="icon arrow"></span>
              </span>
              <a href="/" className="button-text">
                Learn More
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
