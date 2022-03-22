import {
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Slide from "@mui/material/Slide";
import metamask from "../assets/images/metamask.svg";
import TWT from "../assets/images/TWT.svg";
import wc from "../assets/images/walletconnect.svg";
import CloseIcon from '@mui/icons-material/Close';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const WalletConnection = (props) => {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle className={classes.title}>
        <IconButton onClick={handleClose}>
            <CloseIcon />
        </IconButton>
      </DialogTitle>
      <div className={classes.main}>
        <List>
          <ListItem className={classes.item} button key="metamask">
            <div className={classes.walletItem}>
              <ListItemAvatar className={classes.avatar}>
                <img className={classes.icon} src={metamask} alt="" />
              </ListItemAvatar>
            </div>
          </ListItem>
          <ListItem className={classes.item} button key="trustwallet">
            <div className={classes.walletItem}>
              <ListItemAvatar className={classes.avatar}>
                <img className={classes.icon} src={TWT} alt="" />
              </ListItemAvatar>
            </div>
          </ListItem>
          <ListItem className={classes.item} button key="wallet_connect">
            <div className={classes.walletItem}>
              <ListItemAvatar className={classes.avatar}>
                <img className={classes.icon} src={wc} alt="" />
              </ListItemAvatar>
            </div>
          </ListItem>
        </List>
      </div>
    </Dialog>
  );
};
const useStyles = makeStyles((theme) => ({
  main: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 60,
  },
  item: {
    display: "flex",
    justifyContent: "center !important",
    alignItems: "center !important",
  },
  avatar: {
    display: "flex",
    justifyContent: "center !important",
    alignItems: "center !important",
  },
  text: {
    width: 200,
    "& span": {
      fontSize: `22px !important`,
      fontWeight: 500,
      color: "graytext",
    },
  },
  walletItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 50,
  },
  title:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  }
}));
