import styles from "./ContactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const CssTextField = styled(TextField)({
  "& label.Mui-outlined": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  input: {
    color: "white",
  },
});

const ContactForm = () => {
  return (
    <>
      <div className={styles.container} id="contact">
        <span className={styles.bigCircle}></span>
        <div className={styles.form}>
          <div className={styles.contactInfo}>
            <h3 className={styles.title}>We’re Ready, Let’s Talk.</h3>
            <p className={styles.text}>
            At CrownShoppy, we meticulously plan and execute every aspect of your online shopping experience. With exceptional customer service, we promptly address all inquiries, prioritizing your comfort and safety for a seamless and satisfying shopping journey
            </p>

            <div className={styles.info}>
              <div className={styles.information}>
                <p><FontAwesomeIcon icon={faEnvelope} /> &nbsp;&nbsp;nusaifputhiyakath1@gmail.com</p>
              </div>
              <div className={styles.information}>
                
                
                <p><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;+919497630421</p>
              </div>
            </div>

            <div className={styles.socialMedia}>
              <p>Connect with us :</p>
              <div className={styles.socialIcons}>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <span className={`${styles.circle} ${styles.one}`}></span>
            <span className={`${styles.circle} ${styles.two}`}></span>

            <form action="MainForm" autoComplete="off">
              <h3 className={styles.title1}>Contact us</h3>
              <div className={styles.inputContainer}>
                <CssTextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ style: { color: "white" } }}
                  InputProps={{ style: { color: "white" } }}
                  required
                />
              </div>
              <div className={styles.inputContainer}>
                <CssTextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ style: { color: "white" } }}
                  InputProps={{ style: { color: "white" } }}
                  required
                />
              </div>
              
              <div className={`${styles.inputContainer} ${styles.textarea}`}>
                <CssTextField
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ style: { color: "white" } }}
                  InputProps={{ style: { color: "white" } }}
                  required
                />
              </div>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#fff",
                  color: "#3c953c",
                  width: "100%",
                }}
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;