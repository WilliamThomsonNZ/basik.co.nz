import Head from "next/head";
import Image from "next/image";
import background from "../public/background.jpg";
import styles from "../styles/home.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ButtonArrow from "../components/ArrowButton";
import { variants, mobileVariants } from "../variants";
import useWindowWidth from "../hooks/useWindowWidth";

export default function Home() {
  const [animationRunning, setAnimationRunning] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [signUpMessage, setSignUpMessage] = useState("Email signed up ✓");
  const [showMessage, setShowMessage] = useState(false);
  const width = useWindowWidth();

  useEffect(() => {
    setTimeout(() => {
      setAnimationRunning(false);
    }, 2500);
  });

  async function subcribeEvent() {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail))
      return;
    const url = `/api?email=${userEmail}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (json.code === 200) {
      setSignUpMessage("Email signed up ✓");
    } else {
      setSignUpMessage("Error adding email address");
    }
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 6000);
  }
  return (
    <motion.div className={styles.container}>
      <Head>
        <title>Basik</title>
        <meta
          name="description"
          content="Basik - We support indivduals and businesses with multi media services
                to help them acheive their digitial goals."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <motion.div className={styles.imageOuterContainer}>
        <motion.div
          className={styles.imageInnerContainer}
          variants={variants.imageScale}
          initial={"initial"}
          animate={"animate"}
        >
          <Image src={background} />
        </motion.div>
      </motion.div>
      <AnimatePresence exitBeforeEnter={width > 1000 ? false : true}>
        {animationRunning ? (
          <motion.div
            className={styles.preloaderContainer}
            variants={variants.preloaderContainer}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            key={"preloader"}
          >
            <motion.div className={styles.preloaderInnerContainer}>
              <div className={styles.loaderTextContainer}>
                <motion.h6 variants={variants.preloaderText1}>
                  Try to get outside
                </motion.h6>
              </div>
              <div className={styles.loaderTextContainer}>
                <motion.h6 variants={variants.preloaderText2}>more.</motion.h6>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            className={styles.mainContainer}
            variants={width > 1000 ? variants.main : variants.mainMobile}
            initial={"initial"}
            animate={"Animate"}
            key={"main"}
          >
            <div className={styles.comingSoonTextContainer}>
              <motion.h2
                className={styles.basikLogo}
                variants={
                  width > 1000
                    ? variants.textContainer
                    : variants.textContainerMobile
                }
              >
                basik
              </motion.h2>
            </div>

            <motion.div
              className={styles.copySection}
              variants={variants.contentContainer}
              key={"container"}
            >
              <motion.h6
                className={styles.comingSoonText}
                variants={
                  width > 1000
                    ? variants.textContainer
                    : variants.textContainerMobile
                }
                key={"comingSoon"}
              >
                Coming Soon
              </motion.h6>
              <motion.p
                className={styles.copyText}
                variants={
                  width > 1000
                    ? variants.textContainer
                    : variants.textContainerMobile
                }
                key={"p"}
              >
                We believe getting outside of your comfort zone is where
                individuals and businesses grow. Our online presence is
                launching soon so in the meantime follow us on{" "}
                <a
                  href={"https://www.instagram.com/basikcollective/"}
                  className={styles.instaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>{" "}
                or subscribe below for updates.{" "}
              </motion.p>

              <div className={styles.emailContainer}>
                <motion.input
                  type={"email"}
                  className={styles.emailInput}
                  placeholder={"Email"}
                  variants={
                    width > 1000
                      ? variants.textContainer
                      : variants.textContainerMobile
                  }
                  onChange={(e) => setUserEmail(e.target.value)}
                  value={userEmail}
                />
                <motion.div
                  className={styles.underline}
                  variants={variants.underline}
                ></motion.div>
                <motion.div
                  className={styles.emailButton}
                  variants={
                    width > 1000
                      ? variants.textContainer
                      : variants.textContainerMobile
                  }
                >
                  <ButtonArrow cb={subcribeEvent} />
                </motion.div>
                <motion.span
                  variants={variants.signUpMessage}
                  className={`${styles.signUpMessage} ${
                    showMessage ? styles.showMessage : undefined
                  }`}
                >
                  {signUpMessage}
                </motion.span>
              </div>
            </motion.div>

            <motion.footer
              className={styles.footer}
              variants={variants.textContainer}
            >
              <span>&#xa9;Basik 2022. All Rights Resevered</span>
              <a
                href={"https://www.instagram.com/basikcollective/"}
                className={styles.footerLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </motion.footer>
          </motion.main>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
