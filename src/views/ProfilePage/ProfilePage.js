import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Skills from '@material-ui/icons/Settings';
import Experiences from '@material-ui/icons/Work';
import Education from '@material-ui/icons/ImportContacts';
import Palette from '@material-ui/icons/Palette';
import CodeIcon from '@material-ui/icons/Code';
import LayersIcon from '@material-ui/icons/Layers';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from '@material-ui/core/Icon';
import InfoArea from "components/InfoArea/InfoArea.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

//images
import profile from "assets/img/faces/profile-ejjung.jpg";
import figma from "assets/img/icons/figma.svg";
import adobeXD from "assets/img/icons/adobe_XD.svg";
import sketch from "assets/img/icons/sketch.svg";
import axure from "assets/img/icons/axure.png";
import balsamiq from "assets/img/icons/balsamiq.png";
import photoshop from "assets/img/icons/photoshop.svg";
import illustrator from "assets/img/icons/illustrator.svg";
import premiere from "assets/img/icons/premiere.svg";
import afterEffects from "assets/img/icons/after_effects.svg";
import userResearch from "assets/img/icons/userResearch.svg";
import reactIcon from "assets/img/icons/react.svg";
import meteorIcon from "assets/img/icons/meteor.svg";
import pythonIcon from "assets/img/icons/python.svg";
import htmlCssIcon from "assets/img/icons/htmlCss.svg";
import phpIcon from "assets/img/icons/php.svg";
import mysqlIcon from "assets/img/icons/mysql.svg";
import mongodbIcon from "assets/img/icons/mongodb.svg";
import sparkIcon from "assets/img/icons/spark.svg";
import tableauIcon from "assets/img/icons/tableau.png";
import maxIcon from "assets/img/icons/3dsMax.svg";
import rhinocerosIcon from "assets/img/icons/rhinoceros.svg";
import BusinessIcon from '@material-ui/icons/Business';
import { ReactComponent as YerbbaLogo} from "assets/img/icons/yerbba.svg";
import { ReactComponent as UmichLogo} from "assets/img/icons/umich.svg";
import { ReactComponent as HealthHubLogo} from "assets/img/icons/healthhub.svg";
import { ReactComponent as HumaxLogo} from "assets/img/icons/humax.svg";
import { ReactComponent as HandongLogo} from "assets/img/icons/handong.svg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import javaStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";
import infoStyles from "assets/jss/material-kit-react/components/infoStyle.js";

const useStyles = makeStyles(styles);
const useJavaStyles = makeStyles(javaStyles);
const useInfoStyles = makeStyles(infoStyles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const javaClasses = useJavaStyles();
  const infoClasses = useInfoStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        color="transparent"
        brand="EJ Jung"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/graphic_02.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Euijin Jung</h3>
                    <h6>DESIGNER & Developer</h6>
                    {/* <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button> */}
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                A designer & developer with new ideas. Bring better user experiences Combining versatile abilities such as Design, Development, Data Analysis, and Data Visualization. Focus on enhancing user experience in Healthcare IT area {" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Skills",
                      tabIcon: Skills,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <Card style={{marginBottom:'60px'}}>
                              <CardHeader color="info" className={classes.cardHeader}>
                                <Palette fontSize="large"/>
                                <h4>Design & Prototyping</h4>
                              </CardHeader>
                              <CardBody>
                              <Tooltip
                                id="tooltip-bottom"
                                title="Expert in Figma"
                                placement="bottom"
                                classes={{tooltip: javaClasses.tooltip}}
                              >
                                <img alt="figma" src={figma} className={javaClasses.icon} style={{width:"32px", height:"32px"}} />
                              </Tooltip>
                              <Tooltip
                                id="tooltip-bottom"
                                title="Expert in Sketch"
                                placement="bottom"
                                classes={{tooltip: javaClasses.tooltip}}
                              >
                                <img alt="sketch" src={sketch} className={javaClasses.icon} style={{width:"32px", height:"32px"}} />
                              </Tooltip>
                              <Tooltip
                                id="tooltip-bottom"
                                title="Expert in Axure RP"
                                placement="bottom"
                                classes={{tooltip: javaClasses.tooltip}}
                              >
                                <img alt="axure" src={axure} className={javaClasses.icon} style={{width:"32px", height:"32px"}} />
                              </Tooltip>
                              <Tooltip
                                id="tooltip-bottom"
                                title="Expert in Balsamiq"
                                placement="bottom"
                                classes={{tooltip: javaClasses.tooltip}}
                              >
                                <img alt="balsamiq" src={balsamiq} className={javaClasses.icon} style={{width:"32px", height:"32px"}} />
                              </Tooltip>
                              <Tooltip
                                id="tooltip-bottom"
                                title="Expert in Adobe XD"
                                placement="bottom"
                                classes={{tooltip: javaClasses.tooltip}}
                              >
                                <img alt="adobeXd" src={adobeXD} className={javaClasses.icon} style={{width:"32px", height:"32px"}} />
                              </Tooltip>
                              <Tooltip
                                id="tooltip-bottom"
                                title="Expert in Photoshop CC"
                                placement="bottom"
                                classes={{tooltip: javaClasses.tooltip}}
                              >
                                <img alt="photoshop" src={photoshop} className={javaClasses.icon} style={{width:"32px", height:"32px"}} />
                              </Tooltip>
                              <Tooltip
                                id="tooltip-bottom"
                                title="Expert in Illustrator CC"
                                placement="bottom"
                                classes={{tooltip: javaClasses.tooltip}}
                              >
                                <img alt="illustrator" src={illustrator} className={javaClasses.icon} style={{width:"32px", height:"32px"}} />
                              </Tooltip>
                              <Tooltip
                                id="tooltip-bottom"
                                title="Expert in Premiere Pro CC"
                                placement="bottom"
                                classes={{tooltip: javaClasses.tooltip}}
                              >
                                <img alt="premiere" src={premiere} className={javaClasses.icon} style={{width:"32px", height:"32px"}} />
                              </Tooltip>
                              <Tooltip
                                id="tooltip-bottom"
                                title="Expert in After Effects CC"
                                placement="bottom"
                                classes={{tooltip: javaClasses.tooltip}}
                              >
                                <img alt="aftereffects" src={afterEffects} className={javaClasses.icon} style={{width:"32px", height:"32px"}} />
                              </Tooltip>
                              </CardBody>
                            </Card>
                            <Card>
                              <CardHeader color="info" className={classes.cardHeader}>
                                <Icon style={{width:'46px',height:'46px'}}>
                                  <img alt="userresearch" src={userResearch} width={46} height={40}/>
                                </Icon>
                                <h4>User Research</h4>
                              </CardHeader>
                              <CardBody>
                                <Tooltip
                                  id="tooltip-right"
                                  title="Expert: A semi-structured interview method to obtain information about the context of use"
                                  placement="right"
                                  classes={{tooltip: javaClasses.tooltip}}
                                >
                                  <Button color="primary" simple size="sm">Contextual Inquiry</Button>
                                </Tooltip>
                                <Tooltip
                                  id="tooltip-right"
                                  title="Expert: A method to determine how well your competitors are performing"
                                  placement="right"
                                  classes={{tooltip: javaClasses.tooltip}}
                                >
                                  <Button color="primary" simple size="sm">Competitive Analysis</Button>
                                </Tooltip>
                                <Tooltip
                                  id="tooltip-right"
                                  title="Expert: The practice of testing how easy a design is to use on a group of representative users"
                                  placement="right"
                                  classes={{tooltip: javaClasses.tooltip}}
                                >
                                  <Button color="primary" simple size="sm">Usability Testing</Button>
                                </Tooltip>
                                <Tooltip
                                  id="tooltip-right"
                                  title="Expert: The practice of organizing related facts into distinct clusters"
                                  placement="right"
                                  classes={{tooltip: javaClasses.tooltip}}
                                >
                                  <Button color="primary" simple size="sm">Aﬃnity Diagramming</Button>
                                </Tooltip>
                                <Tooltip
                                  id="tooltip-right"
                                  title="Expert: The imaginary user that humanize complex data and help give UX design teams a consistent focus and design target"
                                  placement="right"
                                  classes={{tooltip: javaClasses.tooltip}}
                                >
                                  <Button color="primary" simple size="sm">User Persona</Button>
                                </Tooltip>
                                <Tooltip
                                  id="tooltip-right"
                                  title="Expert: A study through direct observation of users in their natural environment rather than in a lab"
                                  placement="right"
                                  classes={{tooltip: javaClasses.tooltip}}
                                >
                                  <Button color="primary" simple size="sm">Ethnography</Button>
                                </Tooltip>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <Card style={{marginBottom:'60px'}}>
                              <CardHeader color="info" className={classes.cardHeader}>
                                <CodeIcon fontSize="large" />
                                <h4>Programming Skills</h4>
                              </CardHeader>
                              <CardBody>
                                <Tooltip
                                  id="tooltip-bottom"
                                  title="React JS: focusing frontend development framework"
                                  placement="bottom"
                                  classes={{tooltip: javaClasses.tooltip}}
                                >
                                  <img alt="reactjs" src={reactIcon} className={javaClasses.icon} style={{width:"32px", height:"32px"}} />
                                </Tooltip>
                                <Tooltip
                                  id="tooltip-bottom"
                                  title="Meteor JS: focusing on backend/ routing development"
                                  placement="bottom"
                                  classes={{tooltip: javaClasses.tooltip}}
                                >
                                  <img alt="meteorjs" src={meteorIcon} className={javaClasses.icon} style={{width:"32px", height:"32px"}} />
                                </Tooltip>
                                <Tooltip
                                  id="tooltip-bottom"
                                  title="Python: focusing on data processing and analyzation"
                                  placement="bottom"
                                  classes={{tooltip: javaClasses.tooltip}}
                                >
                                  <img alt="python" src={pythonIcon} className={javaClasses.icon} style={{width:"32px", height:"32px"}} />
                                </Tooltip>
                                <Tooltip
                                  id="tooltip-bottom"
                                  title="HTML5 & CSS3: focusing on frontend"
                                  placement="bottom"
                                  classes={{tooltip: javaClasses.tooltip}}
                                >
                                  <img alt="htmlcss" src={htmlCssIcon} className={javaClasses.icon} style={{width:"56px", height:"32px"}} />
                                </Tooltip>
                                <Tooltip
                                  id="tooltip-bottom"
                                  title="PHP: focusing on web development"
                                  placement="bottom"
                                  classes={{tooltip: javaClasses.tooltip}}
                                >
                                  <img alt="php" src={phpIcon} className={javaClasses.icon} style={{width:"32px", height:"32px"}} />
                                </Tooltip>
                                <Tooltip
                                  id="tooltip-bottom"
                                  title="MySQL: focusing on server/ structured data analysis"
                                  placement="bottom"
                                  classes={{tooltip: javaClasses.tooltip}}
                                >
                                  <img alt="mysql" src={mysqlIcon} className={javaClasses.icon} style={{width:"32px", height:"32px"}} />
                                </Tooltip>
                                <Tooltip
                                  id="tooltip-bottom"
                                  title="MongoDB: focusing on unstructured data and use for static webpage"
                                  placement="bottom"
                                  classes={{tooltip: javaClasses.tooltip}}
                                >
                                  <img alt="mongodb" src={mongodbIcon} className={javaClasses.icon} style={{width:"32px", height:"32px"}} />
                                </Tooltip>
                                <Tooltip
                                  id="tooltip-bottom"
                                  title="Spark-Apache: focusing on machine learning/ natural language processing"
                                  placement="bottom"
                                  classes={{tooltip: javaClasses.tooltip}}
                                >
                                  <img alt="spark" src={sparkIcon} className={javaClasses.icon} style={{width:"64px", height:"32px"}} />
                                </Tooltip>
                                <Tooltip
                                  id="tooltip-bottom"
                                  title="Tableau: focusing on data visualization"
                                  placement="bottom"
                                  classes={{tooltip: javaClasses.tooltip}}
                                >
                                  <img alt="tableau" src={tableauIcon} className={javaClasses.icon} style={{width:"32px", height:"32px"}} />
                                </Tooltip>
                              </CardBody>
                            </Card>
                            <Card>
                              <CardHeader color="info" className={classes.cardHeader}>
                                <LayersIcon fontSize="large" />
                                <h4>3D Modeling</h4>
                              </CardHeader>
                              <CardBody>
                                <Tooltip
                                  id="tooltip-bottom"
                                  title="3D Max: focusing on 3d objects for augmented reality Apps"
                                  placement="bottom"
                                  classes={{tooltip: javaClasses.tooltip}}
                                >
                                  <img alt="max 3d" src={maxIcon} className={javaClasses.icon} style={{width:"32px", height:"32px"}} />
                                </Tooltip>
                                <Tooltip
                                  id="tooltip-bottom"
                                  title="3D Max: focusing on 3d objects for hardware product design"
                                  placement="bottom"
                                  classes={{tooltip: javaClasses.tooltip}}
                                >
                                  <img alt="rhinoceros" src={rhinocerosIcon} className={javaClasses.icon} style={{width:"32px", height:"32px"}} />
                                </Tooltip>
                              </CardBody>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Experiences",
                      tabIcon: Experiences,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={10}>
                            <InfoArea
                              title="Yerbba Corp."
                              description="Frontend & Design Lead . Ann Arbor, MI . 04.2018 - Present"
                              icon={YerbbaLogo}
                              iconColor='rose'
                            />
                            <p className={infoClasses.description} style={{marginLeft:"67px"}}>Developed a consumer health information cloud web application using Meteor JS, React JS, Mongo DB, and AWS EC2</p>
                            <p className={infoClasses.description} style={{marginLeft:"67px"}}>Designed user workflow, wireframes, user interactions, and visual components for the web application, and graphic/ motion design for logo, video editing</p>
                            <p className={infoClasses.description} style={{marginLeft:"67px"}}>Determined user needs, behaviors, and motivations through observation skills such as usability testing, surveys, interviews, and comparative analysis</p>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={10}>
                            <InfoArea
                              title="I-tech USA Inc."
                              description="User Experience Designer . Farmington, MI . 12.2017 - Present"
                              icon={BusinessIcon}
                            />
                            <p className={infoClasses.description} style={{marginLeft:"67px"}}>Designed Business Identity and redesign the website using Adobe XD and Illustrator to optimize user flow and minimize complexity in user interface</p>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={10}>
                            <InfoArea
                              title="Kellogg Eye Center, University of Michigan "
                              description="Interaction Designer . Ann Arbor,MI . 02.2017 - 12.2017"
                              icon={UmichLogo}
                            />
                            <p className={infoClasses.description} style={{marginLeft:"67px"}}>Designed User Interactions and introductory videos with ophthalmologists using Adobe Creative Suite and 3D Max tools to assist 100+ glaucoma patients</p>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={10}>
                            <InfoArea
                              title="Health Hub"
                              description="User Experience Designer . Seoul, South Korea . 06.2015 - 03.2016"
                              icon={HealthHubLogo}
                            />
                            <p className={infoClasses.description} style={{marginLeft:"67px"}}>Constructed data schema for data exchange between the hospitals for a teleradiology so that radiologists communicate each other with various devices</p>
                            <p className={infoClasses.description} style={{marginLeft:"67px"}}>Designed user interfaces of the web, mobile, and Medical Image Viewer to help visual communication between radiologists and health practitioners</p>
                            <p className={infoClasses.description} style={{marginLeft:"67px"}}>Evaluated and visualized the service flow map based on the qualitative research and user interviews on work protocol of health practitioners in radiology</p>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={10}>
                            <InfoArea
                              title="Humax"
                              description="User Interface Designer . Seoul, South Korea . 01.2012 - 05.2014"
                              icon={HumaxLogo}
                            />
                            <p className={infoClasses.description} style={{marginLeft:"67px"}}>Produced product specifications for hardware/ software engineers and visual designers to clarify their jobs on manufacturing the Set-top boxes, and apps</p>
                            <p className={infoClasses.description} style={{marginLeft:"67px"}}>Led Multilanguage Translation Management tool development for software developers to improve their words translation process and quality of translation</p>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Education",
                      tabIcon: Education,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={10}>
                            <InfoArea
                              title="University of Michigan"
                              description="M.S. in Health Informatics . Ann Arbor,MI . 08.2018"
                              icon={UmichLogo}
                            />
                            <p className={infoClasses.description} style={{marginLeft:"67px"}}>NR-MHI Scholarship Recipient, Specialized in Human-Computer Interaction and Data Analysis</p>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={10}>
                            <InfoArea
                              title="Handong Global University"
                              description="B.S. in Contents Convergence Design . Pohang, South Korea . 03.2012"
                              icon={HandongLogo}
                            />
                            <p className={infoClasses.description} style={{marginLeft:"67px"}}>Tae-Sung Scholarship Recipient, Duel degree in Product Design & Visual Communication Design</p>
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
