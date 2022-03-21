/* eslint-disable no-useless-computed-key */
import { makeStyles } from "@mui/styles";
import React from "react";
import costImg from "../assets/images/cost.svg";
import wallet from "../assets/images/wallet.svg";

export const MintInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div>
          <div>
            <span>
              <img width={20}  style={{ marginRight:5}} src={costImg} alt="" /> Mint Cost
            </span>
          </div>
          <div>
            <span className={classes.price}>
              0.5 <span className={classes.gray}>BNB</span>
            </span>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div>
          <div>
            <span><img width={25} style={{marginTop:"-5px", marginRight:5}} src={wallet} alt="wallet" /> Mint Limit</span>
          </div>
          <div>
            <span className={classes.price}>1 <span className={classes.walle}>/wallet</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    ['@media (max-width:767px)']:{
      marginBottom: 40
    },
  },
  gray: {
    color: "gray !important",
  },
  left: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 20,
    borderRight: `1px solid grey`,
    "& span": {
      color: "white",
      fontSize: 20
    },
    ['@media (max-width:991px)']:{
      paddingRight: 10,
      "& span": {
        color: "white",
        fontSize: 16
      },
    },
  },
  right: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 20,
    "& span": {
      color: "white",
      fontSize: 20
    },
    ['@media (max-width:991px)']:{
      paddingRight: 10,
      "& span": {
        color: "white",
        fontSize: 16
      },
    },
  },
  price: {
    marginLeft: 30,
  },
  walle:{
      color: 'gray !important',
      fontSize: 14
  }
}));
