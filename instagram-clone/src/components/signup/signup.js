import React, { useState, useEffect } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";

import classes from "./signup.module.css";
const images = 3;
function SignUp() {
  const [showIphone, setShowPhone] = useState(true);
  const [imageNo, setImageNo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imageNo < images) {
        
        setImageNo((prev) => prev + 1);
      } else {
      
        setImageNo(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  });
  useEffect(() => {
    function resize(e) {
      if (  window.innerWidth < 878 ) {
        setShowPhone(false);
      } else {
        setShowPhone(true);
      }
    }
    if (Math.max(window.screen.width, window.innerWidth) > 500 ){
      window.onload = resize;
      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    }
    else{
      setShowPhone(false);
    }
  }, [showIphone]);

  return (
    <div className={classes.body}>
      <div className={classes.main}>
        <div className={classes.main_content}>
          {showIphone && (
            <div style={{ position: "relative" }}>
              <img
                key={"1"}
                src={process.env.PUBLIC_URL + "/iphone.png"}
                className={classes.image}
                alt="iphone"
              />
              {imageNo === 0 ? (
                <div>
                  <img
                    key={"2"}
                    src={
                      "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg"
                    }
                    className={classes.screen + " " + classes.fadeOut}
                    alt="screen"
                  />
                  <img
                    key={"3"}
                    src={
                      "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg"
                    }
                    className={classes.screen}
                    alt="screen"
                  />
                </div>
              ) : imageNo === 1 ? (
                <div>
                  <img
                    key={"4"}
                    src={
                      "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg"
                    }
                    className={classes.screen + " " + classes.fadeOut}
                    alt="screen"
                  />
                  <img
                    key={"5"}
                    src={
                      "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg"
                    }
                    className={classes.screen}
                    alt="screen"
                  />
                </div>
              ) : imageNo === 2 ? (
                <div>
                  <img
                    key={"6"}
                    src={
                      "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg"
                    }
                    className={classes.screen + " " + classes.fadeOut}
                    alt="screen"
                  />
                  <img
                    key={"7"}
                    src={
                      "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg"
                    }
                    className={classes.screen}
                    alt="screen"
                  />
                </div>
              ) : imageNo === 3 ? (
                <div>
                  <img
                    key={"8"}
                    src={
                      "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg"
                    }
                    className={classes.screen + " " + classes.fadeOut}
                    alt="screen"
                  />
                  <img
                    key={"9"}
                    src={
                      "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg"
                    }
                    className={classes.screen}
                    alt="screen"
                  />
                </div>
              ) : null}
            </div>
          )}
          <div className={classes.form}>
            <div className={classes.logForm}>
              <img
                src={process.env.PUBLIC_URL + "/instagram-new-logo (1).png"}
                className={classes.logo}
                alt="instagram logo"
              />
              <InputGroup className={"mb-3 "} id={classes.userInput}>
                <FormControl
                  placeholder="username or email"
                  aria-label="username"
                ></FormControl>
              </InputGroup>
              <Form.Group
                controlId="formBasicPassword"
                style={{ width: "100%" }}
              >
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <button className={classes.btn}>Log In</button>
              <div className={classes.divider}>
                <hr />
                <span>OR</span>
                <hr />
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <img
                  src="https://th.bing.com/th/id/R087cee988ba1403955cb9fd09a448c0e?rik=e9HutjjrgS03KA&riu=http%3a%2f%2fdelacourcommunications.com%2fwp-content%2fuploads%2f2014%2f05%2ffacebook-icon.png&ehk=IJR6ZnSGwN8o3ocWQXG8M1Ii86GPIfvuVy%2fb2TiqSA0%3d&risl=&pid=ImgRaw"
                  className={classes.fb_icon}
                  alt="facebook icon"
                ></img>
                <span className={classes.facebookText}>
                  <span>&nbsp;</span>
                  Login in with Facebook
                </span>
              </div>
              <div style={{ fontSize: "0.8rem", color: "rgb(0, 76, 138)" }}>
                Forgot Password?
              </div>
            </div>
            <div className={classes.logForm + " " + classes.smallForm}>
              Don't have an account?{" "}
              <span style={{ color: "rgb(0, 140, 255)", fontWeight: "600" }}>
                Sign up
              </span>
            </div>
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
                padding: "1rem",
              }}
            >
              Get the app.
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a
                href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
                style={{
                  width: "40%",
                  padding: "0.2rem",
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png"
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    padding: "0.2rem",
                  }}
                  alt="app store"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=A78769EE-0FAE-4E4E-BF52-AEE2C0F6F94B&utm_content=lo&utm_medium=badge"
                style={{
                  width: "40%",
                  padding: "0.2rem",
                }}
              >
                <img
                  src="https://www.freepngimg.com/thumb/android/67015-play-google-app-store-android-free-transparent-image-hd.png"
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    padding: "0.2rem",
                  }}
                  alt="android store"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className={classes.footer}>
        <div className={classes.links}>
          <span>About</span>
          <span>Blog</span>
          <span>Jobs</span>
          <span>Help</span>
          <span>API</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Top Accounts</span>
          <span>Hashtags</span>
          <span>Locations</span>
        </div>
        <div className={classes.links_2}>
          <select name="languages" className={classes.select}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
          <span>&copy; 2021 instagram from Facebook</span>
        </div>
      </footer>
    </div>
  );
}
export default SignUp;
