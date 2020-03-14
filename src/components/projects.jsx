import React from 'react';

const dagger = require('../images/dagger.png');
const audit = require('../images/audit.png');

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cherylLeeInfo: false,
      studentTrackerInfo: false,
      nasaViewerInfo: false,
      movieFinderInfo: false,
      weatherAppInfo: false
    };
    this.cherylLeeToggle = this.cherylLeeToggle.bind(this);
    this.studentTrackerToggle = this.studentTrackerToggle.bind(this);
    this.nasaViewerToggle = this.nasaViewerToggle.bind(this);
    this.movieFinderToggle = this.movieFinderToggle.bind(this);
    this.weatherAppToggle = this.weatherAppToggle.bind(this);
  }

  cherylLeeToggle() {
    if (this.state.cherylLeeInfo === true) {
      this.setState({ cherylLeeInfo: false });
    } else {
      this.setState({ cherylLeeInfo: true });
    }
  }

  studentTrackerToggle() {
    if (this.state.studentTrackerInfo === true) {
      this.setState({ studentTrackerInfo: false });
    } else {
      this.setState({ studentTrackerInfo: true });
    }
  }

  nasaViewerToggle() {
    if (this.state.nasaViewerInfo === true) {
      this.setState({ nasaViewerInfo: false });
    } else {
      this.setState({ nasaViewerInfo: true });
    }
  }

  movieFinderToggle() {
    if (this.state.movieFinderInfo === true) {
      this.setState({ movieFinderInfo: false });
    } else {
      this.setState({ movieFinderInfo: true });
    }
  }

  weatherAppToggle() {
    if (this.state.weatherAppInfo === true) {
      this.setState({ weatherAppInfo: false });
    } else {
      this.setState({ weatherAppInfo: true });
    }
  }

  render() {
    return (
      <div className='container-A'>
        <main className='container-B'>
          <header className='center-wrap'>
          <h3><img className='dagger1' src={ dagger } alt='dagger' rel='preload' />
            Projects
          <img className='dagger2' src={ dagger } alt='dagger' rel='preload' /></h3>
          </header>
          <section className='center-wrap'>
            <h4>MilesMickelson.com</h4>
            <img className='dark-glow-image' id='audit' src={ audit } alt='audit score' />
            <p>
              Description coming soon, thank you for your interest
              <a
                href='https://github.com/MilesMickelson/MilesMickelson.github.io'
                className='post-link'
                rel='noopener noreferrer'
                target='_blank'
                title='Miles Mickelsons Portfolio Project Github Repository'
              >
              -view repository.
              </a>
            </p>
          </section>
          <section className='center-wrap'>
            <h4>The Total Machine</h4>
            <p>
              At the 2018 Tealium Hackathon event, my team built a data statistic display tool 
              to give Tealium an added service for their clients, supplying them a way to achieve 
              coordinated marketing strategies through a simple information viewing system. As a 
              result of our quality interface, overall presentation, and camaraderie, we finished in the top 3 finalists. My responsibilities were designing the user interface and presenting our project to a panel judges
              <a
                href='https://github.com/MilesMickelson/tealium-hackathon'
                rel='noopener noreferrer'
                target='_blank'
                title='The Total Machine Project Github Repository'
              >
              -view repository.
              </a>
            </p>
          </section>
          <section className='center-wrap'>
            <h4>Ranger Radar</h4>
            <p>
              At the 2019 San Diego Global Zoo Hackathon event, we built an application to provide African Rangers a way to track live animal movements and human encroachment. Providing a solution for this is a tough challenge to overcome. The problem is getting the data in real-time and then not allowing it to fall into the wrong hands. Doing with the best with what was available, we integrated multiple API's to display the objective of our application and provide ideas for future technology implementations such as motion sensors and thumbprinting/facial+shape recognition technology. I created the interface of the application and assisted in; our search of resources, planning with the team and accepted the role as primary presentee to the panel of judges
              <a
                href='https://github.com/MilesMickelson/Ranger-Radar'
                className='post-link'
                rel='noopener noreferrer'
                target='_blank'
                title='Ranger Radar Project Github Repository'
              >
              -view repository.
              </a>
            </p>
          </section>
          <section>
            <div className='center-wrap'>
            <h4>San Diego Code School Highlights</h4>
            <p>
              I am very proud of how much I learned and gained both professionally and personally going through code school. Listed below are a few of the projects I'm most proud of with a description and link to their Github repository where available, thank you for viewing.
            </p>
            </div>
            <div className='large-list-wrap'>
              <ul>
                <li>
                  Cheryl Lee's Custom Portfolio Website - 
                  <button
                    type='submit'
                    className={ `details-button ${this.state.cherylLeeInfo ? 'inVisible' : 'visible'}` }
                    onClick={ this.cherylLeeToggle }
                  >
                    View Details
                  </button>
                  <button
                    type='submit'
                    className={ `details-button ${this.state.cherylLeeInfo ? 'visible' : 'inVisible'}` }
                    onClick={ this.cherylLeeToggle }
                  >
                    Close Details
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.cherylLeeInfo ? 'visible' : 'inVisible'}` }> 
                <p aria-hidden='true'>
                My mid-term code school group project, creating a custom portfolio website for Ms. Cheryl Lee to showcase her achievements, affiliations, and credentials with a clean and classy appearance, including an automated contact page. Leveraging my soft skills and proficiencies in HTML and CSS w/SASS, I played a crucial leading role in this project by helping others and developing a responsive cross-platform website with well-kept code. I was responsible for designing the main title, navigation bar, the home page, and the footer specifically. Being passionate about this project, I followed up with Ms. Lee to update and finalize the project; video demonstration is coming soon
                <a
                  href='https://github.com/MilesMickelson/Cheryl-Lee-Review'
                  rel='noopener noreferrer'
                  target='_blank'
                  title='Cheryl Lees Portfolio Website Project Github Repository'
                >
                  -view repository.
                </a>
                </p>
              </div>
            </div>
            <div className='large-list-wrap'>
              <ul>
                <li>
                  SDCS Student Tracker -
                  <button
                    type='submit'
                    className={ `details-button ${this.state.studentTrackerInfo ? 'inVisible' : 'visible'}` }
                    onClick={ this.studentTrackerToggle }
                  >
                    View Details
                  </button>
                  <button
                    type='submit'
                    className={ `details-button ${this.state.studentTrackerInfo ? 'visible' : 'inVisible'}` }
                    onClick={ this.studentTrackerToggle }
                  >
                    Close Details
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.studentTrackerInfo ? 'visible' : 'inVisible'}` }>                
                <p aria-hidden='true'>
                My final SDCS group project engaged numerous technologies simultaneously, built with React/Redux, MongoDB, Loopback, and various API's. Planning and workflow executed with Git, Scrum, and Agile. We successfully integrated a custom command into the school's slack workspace to input your information and have it saved to a database, which allows both the administration and students to view their current progress trend on a dashboard. Was individually responsible for incorporating the Github API for feedback on total commits in the last seven days-private school repository.
                </p>
              </div>
            </div>
            <div className='large-list-wrap'>
              <ul>
                <li>
                  NASA Viewer - 
                  <button
                    type='submit'
                    className={ `details-button ${this.state.nasaViewerInfo ? 'inVisible' : 'visible'}` }
                    onClick={ this.nasaViewerToggle }
                  >
                    View Details
                  </button>
                  <button
                    type='submit'
                    className={ `details-button ${this.state.nasaViewerInfo ? 'visible' : 'inVisible'}` }
                    onClick={ this.nasaViewerToggle }
                  >
                    Close Details
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.nasaViewerInfo ? 'visible' : 'inVisible'}` }>                
                <p aria-hidden='true'>
                  A React web app project, allows users to view the NASA astronomy picture of the day and read all the information conveyed with it. Axios integrated on the server-side to fulfill the API call to the NASA database and a theme for the user interface to match
                <a
                  href='https://github.com/MilesMickelson/NASA-Viewer'
                  target='_blank'
                  rel='noopener noreferrer preload'
                  aria-label='NASA Viewer project github repository link'
                >
                  -view repository.
                </a>
                </p>
              </div>
            </div>
            <div className='large-list-wrap'>
              <ul>
                <li>
                  Movie Finder - 
                  <button
                    type='submit'
                    className={ `details-button ${this.state.movieFinderInfo ? 'inVisible' : 'visible'}` }
                    onClick={ this.movieFinderToggle }
                  >
                    View Details
                  </button>
                  <button
                    type='submit'
                    className={ `details-button ${this.state.movieFinderInfo ? 'visible' : 'inVisible'}` }
                    onClick={ this.movieFinderToggle }
                  >
                    Close Details
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.movieFinderInfo ? 'visible' : 'inVisible'}` }>                
                <p aria-hidden='true'>
                  React/Redux web app for movie searching, implemented with React router for navigating to a second movie details page. Making the API call to an online movie database is fulfilled with Axios on the server-side,  integrated into the front end's search bar. Pulls results from a data cache if recently searched for in the last 24 hours to save hitting the API too frequently
                <a
                  href='https://github.com/MilesMickelson/REACT200-Movie-Finder'
                  target='_blank'
                  rel='noopener noreferrer preload'
                  aria-label='React 200 Movie Finder project github repository link'
                >
                -view repository.
                </a>
                </p>
              </div>
            </div>
            <div className='large-list-wrap'>
              <ul>
                <li className='last-item'>
                  Weather App - 
                  <button
                    type='submit'
                    className={ `details-button ${this.state.weatherAppInfo ? 'inVisible' : 'visible'}` }
                    onClick={ this.weatherAppToggle }
                  >
                    View Details
                  </button>
                  <button
                    type='submit'
                    className={ `details-button ${this.state.weatherAppInfo ? 'visible' : 'inVisible'}` }
                    onClick={ this.weatherAppToggle }
                  >
                    Close Details
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.weatherAppInfo ? 'visible' : 'inVisible'}` }>                
                <p aria-hidden='true'>
                  React/Redux web app allows users to search for a multitude of current weather information in any city by name. Includes default city buttons and recent search history. Making the API call to an online weather database is fulfilled with Axios on the server-side,  integrated into the front end's search bar. Pulls results from a data cache if recently searched for in the last 24 hours to save hitting the API too frequently
                <a
                  href='https://github.com/MilesMickelson/REACT200-Weather-App'
                  target='_blank'
                  rel='noopener noreferrer preload'
                  aria-label='React 200 Weather App project github repository link'
                >
                -view repository.
                </a>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}