import React from "react";
import styles from "./style";
import {
  NavBar,
  Billing,
  Card,
  Business,
  Clients,
  Stats,
  Feedback,
  Footer,
  Testimonial,
  Hero,
  CallToAction,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <Card />
          <Testimonial />

          <Clients />
          <CallToAction />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
