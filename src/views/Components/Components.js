import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import WorkSection from "../LandingPage/Sections/WorkSection";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

//images for this page
import YerbbaLogo from "assets/img/yerbba/yerbba.png";
import UpliftLogo from "assets/img/uplift/uplift.png";
import SecondBrainLogo from "assets/img/secondBrain/2ndbrain.png";

import compStyles from "assets/jss/material-kit-react/views/components.js";
import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
  ...compStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="EJ Jung"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/graphic_03.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Make It Happen</h1>
                <h3 className={classes.subtitle}>
                  A UX Designer and Developer Who Understand Data 
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem cs={12} sm={12} md={8} style={{textAlign:"center"}}>
              <h2 className={classes.title} style={{fontSize:'2.25rem'}}>Recent Works</h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4} style={{paddingLeft:"30px"}}>
              <Card style={{width: "20rem"}}>
                <img
                  style={{height: "180px", width: "100%", display: "block"}}
                  className={classes.imgCardTop}
                  src={YerbbaLogo}
                  alt="Card-img-yerbba"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>Yerbba</h4>
                  <p>When you need knowledge about your condition, we help you get the knowledge effortlessly. You can manage your conditions in one place.</p>
                  <Button color="primary" href="https://yerbba.com" target="_blank">Learn More</Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card style={{width: "20rem"}}>
                <img
                  style={{height: "180px", width: "100%", display: "block"}}
                  className={classes.imgCardTop}
                  src={SecondBrainLogo}
                  alt="Card-img-2ndbrain"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>Second Brain</h4>
                  <p>A medication reminder system. The application is for teens who have chronic illnesses to stay on their medication schedule</p>
                  <Button color="primary" href="/second-brain-page">Learn More</Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card style={{width: "20rem"}}>
                <img
                  style={{height: "180px", width: "100%", display: "block"}}
                  className={classes.imgCardTop}
                  src={UpliftLogo}
                  alt="Card-img-uplift"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>Uplift</h4>
                  <p>A commuter-to-commuter ridesharing service for enabling low-income commuters to use ride sharing without giving financial burden.</p>
                  <Button color="primary" href="/uplift-page">Learn More</Button>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
