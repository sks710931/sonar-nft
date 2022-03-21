/* eslint-disable no-useless-computed-key */
import React from "react";
import { makeStyles } from "@mui/styles";
import alpha from "../assets/images/alpha.svg";
import InfoIcon from "@mui/icons-material/Info";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
export const RightComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.col1}>
      <div className={classes.heading}>
        <img className={classes.alpha} width={35} src={alpha} alt="alpha" />
        <div className={classes.divider}>
          <span className={classes.genesis}>Genesis</span>
          <span className={classes.collection}>Collection</span>
        </div>
      </div>
      <p>
        The Genesis Collection will be the first NFT series launched in the
        Sonar ecosystem.
      </p>
      <p>
        It features several founding members as pixel animated avatars with
        unique frames that border the image representing different rarities.
      </p>
      <p>
        This type of collection is referred to as a PFP NFT series (Profile
        Picture NFTs) since most people tend to set theirs as a profile picture
        on social platforms such as Telegram, Discord and Twitter.
      </p>

      <div className={classes.warning}>
        <span className={classes.iconInvert}>
          <InfoOutlined />
        </span>
        <p className={classes.red}>You need to hold at least 250.000 PING</p>
        <span className={classes.icon}>
          <InfoIcon />
        </span>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  col1: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "justify",
    textJustify: "inter-word",
    "& p": {
      color: "white",
      fontSize: 20,
    },
    ['@media (max-width:991px)']:{
      "& p": {
        color: "white",
        fontSize: 16,
      },
    },
  },
  heading: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    ['@media (max-width:767px)']:{
      marginTop: 40,
    }
  },
  green: {
    color: "green",
  },
  alpha: {
    marginRight: 12,
    
  },
  genesis: {
    textTransform: "uppercase",
    fontSize: 35,
    color: "whitesmoke",
    ['@media (max-width:767px)']:{
      fontSize: 30,
    }
  },
  collection: {
    textTransform: "uppercase",
    fontSize: 35,
    color: "grey",
    marginLeft: 12,
    ['@media (max-width:767px)']:{
      fontSize: 30,
    }
  },
  divider: {
    borderLeft: `2px solid grey`,
    paddingLeft: 12,
  },
  icon: {
    marginLeft: 8,
    
    color: "rgba(255, 104, 133, 1) !important",
  },
  red: {
    color: "rgba(255, 104, 133, 1) !important",
  },
  iconInvert: {
    marginRight: 8,
    transform: `rotate(180deg)`,
    color: "rgba(255, 104, 133, 1) !important",
    marginBottom: 15
  },
  warning: {
    display: "flex",
  },
}));
