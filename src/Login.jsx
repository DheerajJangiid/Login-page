import react from 'react'
import reactdom from 'react-dom'

import lawimag from './images/law-image.jpg';
import lawimag01 from './images/img01.png';
import lawimag02 from './images/img02.png';
import lawimag03 from './images/img03.png';

function Login(){
    return(
     <>
      <div className="main-container">
      <div className="card">
        {/* Left Image Section */}
        <div className="left-section">
          <img src={lawimag} alt="Law Statue" className="law-image" />
          <div className="overlay-text">
            <h1>LAW CONNECT</h1>
          <p className='para-text'>Legal Help, Right <br/>from Your Phone</p>
            <button className="signup-btn">SIGN UP</button>
          </div>
        </div>

        {/* Right Login Section */}
        <div className="right-section">
          <div className="form-container">
            <div className="icon">
              <img src={lawimag01} alt="img01" className="law-image01"/>
            </div>
            <input type="text" placeholder="Username" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
            <div className="login-footer">
              <button className="login-btn">LOGIN</button>
              <a href="#" className="forgot-password">Forgot password</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="images">
      <img src={lawimag03} alt="img03" className='img1'/>
      <img src={lawimag02} alt="img02" className='img2'/>
      <img src={lawimag03} alt="img03" className='img3'/>
      <img src={lawimag02} alt="img02" className='img4'/>
    </div>
     </>
    );
}

export default Login;
