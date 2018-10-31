/*eslint react/jsx-filename-extension: 0 */

import React from 'react';
// import ReactDOM from 'react-dom';
// import Lock from '@material-ui/icons/Lock';
import '../styling/app.css';
// import gitlabLogoImage from '../images/gitlablogo.png';
import HomePageComponent from './HomePageComponent';

export default  function App(){
    
        return(
            // <div className="App">
            //     <Lock /><br />
            //     Please Signin GitLab<br />
            //     <a href=""><img src={gitlabLogoImage} className="gitlablogo" /></a>
            // </div>
            <div>
                <HomePageComponent />
            </div>
        )
    
}

