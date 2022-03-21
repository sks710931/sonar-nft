import { makeStyles } from "@mui/styles";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {LeftComponent} from "../components/left.component";
import { MintInfo } from "../components/mint-info";
import { Minter } from "../components/minter.component";
import { RightComponent } from "../components/right.component";
export const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <Container >
          <Row>
              <Col lg={5} md={5} sm={12} xs={12} xl={5}>
                  <LeftComponent />
              </Col>
              <Col lg={7} md={7} sm={12} xs={12} xl={7}>
                  <RightComponent />
              </Col>
              
          </Row>
          <Row style={{marginTop:"15px"}}>
          <Col lg={5} md={5} sm={12} xs={12} xl={5}>
                  <MintInfo />
              </Col>
              <Col lg={7} md={7} sm={12} xs={12} xl={7}>
                 <Minter />
              </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#181621",
    height: "100%",
  },
  content: {
    height: "100%",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  fx:{
      width: "100%",
      position: "absolute"
  },
  col1:{
      position:"relative",
      display:"flex",
      flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
       
  }
}));
