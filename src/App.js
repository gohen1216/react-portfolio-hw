import logo from './logo.svg';
import './App.css';

function App() {
  return ( 
  <><div className="ui menu">
      <div className="header item">
        Sanusi Cole
      </div>
      <a className="item" href="#About-Me">
        About Me
      </a>
      <a className="item" href="#Projects">
        Projects
      </a>
      <a className="item" href="#Contact">
        Contact
      </a>
    </div><img className="ui fluid image" src="https://www.klaviyo.com/wp-content/uploads/2016/09/abstract-background-1024x273.jpg">
        <div className="ui celled grid stackable">
          <div className="row" id="About-Me">
            <div className="three wide column">
              <p>About Me</p>
            </div>
            <div className="thirteen wide column">
              <p>Hello My name is Sanusi Cole I'm 18 just graduated Highschool about five months early. I was born in Columbus Ohio currently live in Charlotte North Carolina. I enjoy playing video games, wathcing anime, and my favorite food is pizza. I have a stong work ethic and my favorite color is red.</p> </div>
          </div>
        </div>
        <div className="row" id="Projects">
          <div className="three wide column">
            <p>Projects</p>
          </div>
          <div className="thirteen wide row column centered">
            <div className="ui column card">
              <a className="image" href="#">
                <img src="public/photo's/password.PNG"></img>
              </a>
              <div className="content">
                <a className="header" href="https://gohen1216.github.io/password-generator">Site</a>
                <a className="header" href="https://github.com/gohen1216/password-generator">Repo</a>

              </div>
            </div>
            <div className="ui column card">
              <a className="image" href="#">
                <img src="public/photo's/Capture3.PNG"></img>
              </a>
              <div className="content">
                <a className="header" href="https://gohen1216.github.io/week1-hw/">Site</a>
                <a className="header" href="https://github.com/gohen1216/week1-hw/tree/master/Documents/week1-hw-main">Repo</a>

                <div className="ui card">
                  <a className="image" href="#">
                    <img src="public/photo's/dayplanner.PNG"></img>
                  </a>
                  <div className="content">
                    <a className="header" href="https://gohen1216.github.io/day-planner/">Site</a>
                    <a className="header" href="https://github.com/gohen1216/day-planner">Repo</a>


                  </div>
                </div>
              </div>
            </div>
            <div className="ui column card">
              <a className="image" href="#">
                <img src="public/photo's/newproject.PNG"></img>
              </a>
              <div className="content">
                <a className="header" href="https://gohen1216.github.io/Hiketunez/">Site</a>
                <a className="header" href="https://github.com/gohen1216/Hiketunez">Repo</a>

              </div>
            </div>
          </div>
        </div>
        <div className="row" id="Contact">
          <div className="three wide column">
            <p>Contact</p>
          </div>
          <div className="thirteen wide column">
            <a className="header" href="mailto:sanusi1612@icloud.com">Email</a>
            <a className="header" href="tel:614-584-8612">Phone</a>

            <a className="header" href="https://github.com/gohen1216">Github</a>

            <a className="header" href="http://linkedin.com/in/sanusi-cole-3a290a185">LinkedIn</a>
            <a className="header" href="https://1drv.ms/w/s!AvZ_NJ0ROivwiSjkLhoxQScUhUW_?e=nSAYIG">Resume</a>


          </div>
        </div>
      </img> </>

  );
}

export default App;
