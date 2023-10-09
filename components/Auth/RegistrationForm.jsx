import React, { useState } from "react";
import styles from "../../styles/Auth/RegistrationForm.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import Image from "next/image";
import Confetti from "../utils/Confetti";
import { useRouter } from "next/router";
const RegistrationForm = ({ login }) => {
  const [confettiOn, setConfettiOn] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <h2>{login ? <>Log in </> : <>Create</>} Your Account</h2>
      {login ? (
        <div className={styles.question}>
          Don't Have an Account ?{" "}
          <span onClick={() => rotuer.push("/register")}>Sign Up</span>
        </div>
      ) : (
        <div className={styles.question}>
          Already Have an Account ?{" "}
          <span onClick={() => router.push("/login")}>Log in</span>
        </div>
      )}
      <form>
        {!login && (
          <>
            {" "}
            <div className={styles.inputField}>
              <input type="text" placeholder="Username" />
              <span>
                <PermIdentityIcon style={{ color: "grey", fontSize: "150%" }} />
              </span>
            </div>
          </>
        )}
        <div className={styles.inputField}>
          <input type="text" placeholder="Email" />
          <span>
            <MailOutlineIcon style={{ color: "grey", fontSize: "140%" }} />
          </span>
        </div>

        <div className={styles.inputField}>
          <input type="text" placeholder="Password" />
          <span>
            <HttpsOutlinedIcon style={{ color: "grey", fontSize: "140%" }} />
          </span>
          <span className={styles.eye}></span>
        </div>
      </form>
      {/* <div className={styles.validations}>
        <div> 8 characters</div>
        <div> 8 characters</div>
        <div> 8 characters</div>
        <div> 8 characters</div>
        <div> 8 characters</div>
      </div> */}
      <div className={styles.aggrements}></div>
      {login ? (
        <div className={styles.btn}>Log in</div>
      ) : (
        <div className={styles.btn} onClick={() => setConfettiOn(true)}>
          Create Account
        </div>
      )}

      <h3 className={styles.social__sign}>Or Sign in with Social</h3>
      <div className={styles.flex}>
        <span>
          <Image
            src="/images/google.png"
            alt="Facebook"
            width="16px"
            height="16px"
          />
        </span>
        <span>
          {" "}
          <Image
            src="/images/facebook.png"
            alt="Facebook"
            width="16px"
            height="16px"
          />
        </span>
        <span>
          <Image
            src="/images/instagram.png"
            alt="Facebook"
            width="16px"
            height="16px"
          />
        </span>
      </div>
      {confettiOn && <Confetti setConfettiOn={setConfettiOn} />}
    </div>
  );
};

export default RegistrationForm;
