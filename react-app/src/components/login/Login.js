import React, { Component } from "react";
import "./Login.scss";
import uvfyImg from "../../assets/images/uvfy.svg";
import uvfyFeaturesImg from "../../assets/images/uvfyFeatures.svg";
import verseImg from "../../assets/images/verse.svg";
import doqetImg from "../../assets/images/doqet.svg";

class Login extends Component {
  state = {
    carousalImgs: [uvfyImg, uvfyFeaturesImg],
    activeCarousalImg: uvfyImg,
  };

  componentDidMount() {
    this.handleCarousalActive();
  }

  handleCarousalActive = () => {
    setInterval(() => {
      const { carousalImgs, activeCarousalImg } = this.state;
      const currentIndex = carousalImgs.indexOf(activeCarousalImg);
      const nextIndex =
        currentIndex + 1 >= carousalImgs.length ? 0 : currentIndex + 1;
      this.setState({ activeCarousalImg: carousalImgs[nextIndex] });
    }, 3000);
  };

  handleCarousalClick = (img) => () =>
    this.setState({ activeCarousalImg: img });

  render() {
    const { carousalImgs, activeCarousalImg } = this.state;

    return (
      <div className="login">
        <div className="img-container">
          <img src={activeCarousalImg} alt="UVFY" />
          <h2>UVFY Elevator</h2>
          <div className="description">
            A smart handrail for elevators which ensures that all the common
            touchpoints in an elevator are effectively sterilized within a span
            of four and a half minutes in the absence of humans and pets.
          </div>
          <div className="carousal-indicators">
            {carousalImgs &&
              carousalImgs.map((img, index) => (
                <span
                  key={img}
                  onClick={this.handleCarousalClick(img)}
                  className={
                    index === carousalImgs.indexOf(activeCarousalImg)
                      ? "active"
                      : ""
                  }
                ></span>
              ))}
          </div>
        </div>
        <div className="form-container">
          <img className="logo" src={verseImg} alt="Verse" />
          <h2>Welcome back 😎</h2>
          <div className="description">
            Access your Logs, Sterilization status and performance all in one
            place. Please login to continue,
          </div>
          <div className="form-field">
            <div className="label">Email</div>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="form-field">
            <div className="label">Password</div>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button>Continue to UVFY</button>
          <div className="options">
            <div>
              <input type="checkbox" /> Remember me
            </div>
            <a>Forgot Password?</a>
          </div>
          <div className="footer">
            <span>Powered by</span>
            <img className="powered-logo" src={doqetImg} alt="DOQET" />
            <span>Doqet</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
