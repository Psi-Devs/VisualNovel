import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [openLoginCard, setOpenLoginCard] = useState(true);

  const [openConfirmPassward, setopenConfirmPassward] = useState(false);

  const [user, setUser] = useState({
    name: "",
    usermail: "",
    passward: "",
    confirmPassward: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, usermail, passward, confirmPassward } = user;
    if (name && usermail && passward && passward === confirmPassward) {
      axios
        .post("http://localhost:9002/Register", user)
        .then((res) => console.log(res));
    } else {
      alert("invalid Credinsials");
    }
  };
  return (
    <div className="loginContainer">
      {/* {console.log("user", user)} */}
      <img
        className="LoginBackgroundImg"
        src="https://img.freepik.com/free-photo/tablet-modern-technology-wooden-desk-indoors-generative-ai_188544-19434.jpg?w=1380&t=st=1685597131~exp=1685597731~hmac=f0baf9a683f0080828822cdafc00c154156957678ee80f8c9fcd0d4df3018e5b"
        alt="Background IMG"
      />

      {openLoginCard ? (
        <div className="loginCard">
          <button className="cross" onClick={() => setOpenLoginCard(false)}>
            X
          </button>
          <div>
            <div className="userIconBack" />
            <FontAwesomeIcon className="userIcon" icon={faUser} />
          </div>

          <div className="logininput">
            <>
              <h2 className="loginText">User Registeration</h2>

              {/* <form action=""></form> */}

              <div className="userName">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  id="name"
                />
              </div>
              <div className="usermail">
                <label htmlFor="usermail"></label>
                <input
                  type="mail"
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
              <div className="loginItem confirm">
                <label htmlFor="confirmPassward"></label>
                <input
                  type="password"
                  placeholder="confirm passward"
                  name="confirmPassward"
                  value={user.confirmPassward}
                  onChange={handleChange}
                  id="confirmPassward"
                />
              </div>
            </>
            <button onClick={register} className="registerBtn">
              Register
            </button>
          </div>
        </div>
      ) : (
        <h2 className="loginMsg">
          Escape into worlds unknown. Join our book reading community today and
          unlock the magic of imagination. Sign in now!{" "}
          <Link to="/">
            <button className="loginBtn"> Existing user Sign in</button>{" "}
          </Link>
          <button
            className="registerBtn"
            onClick={() => setOpenLoginCard(true)}
          >
            Register as new User
          </button>
        </h2>
      )}
    </div>
  );
};
