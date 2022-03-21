/* eslint-disable no-useless-computed-key */
import React from "react";
import {makeStyles} from "@mui/styles"
import logo from "../assets/images/logo.svg";
import fx from "../assets/images/fx.png";
import frame from "../assets/images/frame.gif";

export const LeftComponent = () => {
    const classes = useStyles();
  return (
    <div className={classes.col1}>
      <img className={classes.fx} src={fx} alt="fx" />
      <img src={logo} alt="logo" />
      <img className={classes.frame} src={frame} alt="" />
      <div className={classes.counter}>
          <span >
              <span className={classes.green}>0</span> / 250 MINTED
          </span>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
    frame:{
        width: 300,
        marginTop: 40
    },
    fx:{
        width: "150%",
        position: "absolute",
        left: -150,
        ['@media (max-width:1399px)']:{
          left: -135
        },
        ['@media (max-width:1199px)']:{
          width: "175%",
          left: -145
        },
        ['@media (max-width:991px)']:{
          width: "275%",
          left: -250
        },
        ['@media (max-width:767px)']:{
          width: "120%",
          left: -50
        }
    },
    col1:{
        position:"relative",
        display:"flex",
        flexDirection: "column",
          justifyContent:"center",
          alignItems:"center",
          ['@media (max-width:767px)']:{
            marginTop: 500
          } 
    },
    counter:{
        backgroundColor:"black",
        padding: `10px 20px`,
        marginTop:  25,
        borderRadius: 10, 
        color: "#b1b5b2",
    },
    green:{
        color: "green"
    },

  }));
  