import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [openLoginCard, setOpenLoginCard] = useState(true);

  const [openConfirmPassward, setopenConfirmPassward] = useState(false);

  const [user, setUser] = useState({
    usermail: "",
    passward: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="loginContainer">
      <img
        className="LoginBackgroundImg"
        src="https://img.freepik.com/free-photo/tablet-modern-technology-wooden-desk-indoors-generative-ai_188544-19434.jpg?w=1380&t=st=1685597131~exp=1685597731~hmac=f0baf9a683f0080828822cdafc00c154156957678ee80f8c9fcd0d4df3018e5b"
        alt="Background IMG"
      />

      {openLoginCard ? (
        <div className="loginCard">
          {console.log("user", user)}

          <button className="cross" onClick={() => setOpenLoginCard(false)}>
            X
          </button>
          <div>
            <div className="userIconBack" />
            <FontAwesomeIcon className="userIcon" icon={faUser} />
          </div>

          <div className="logininput">
            <h2 className="loginText">User Registeration</h2>

            <form action=""></form>

            <h2 className="loginText">ComicVerse Login</h2>
            <div className="usermail">
              <label htmlFor="usermail"></label>
              <input
                type="text"
                placeholder="usermail"
                name="usermail"
                value={user.usermail}
                onChange={handleChange}
                id="usermail"
              />
            </div>
            <div className="loginItem">
              <label htmlFor="password"></label>
              <input
                type="password"
                placeholder="passward"
                name="passward"
                value={user.passward}
                onChange={handleChange}
                id="passward"
              />
            </div>
            <button type="submit" className="loginBtn">
              Login
            </button>
            <Link to="/Register">
              <button className="registerBtn">Register</button>
            </Link>

            <div className="forgotpasss">Forgot passward?</div>
          </div>
        </div>
      ) : (
        <h2 className="loginMsg">
          Escape into worlds unknown. Join our book reading community today and
          unlock the magic of imagination. Sign in now!
          <button className="loginBtn" onClick={() => setOpenLoginCard(true)}>
            Login/register
          </button>
          <Link to="/Register">
            <button className="registerBtn">Register</button>
          </Link>
        </h2>
      )}
    </div>
  );
};
