import {
  Dialog,
  DialogTitle,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, {useEffect} from "react";
import Slide from "@mui/material/Slide";
import metamask from "../assets/images/metamask.svg";
import TWT from "../assets/images/TWT.svg";
import wc from "../assets/images/walletconnect.svg";
import walletImg from "../assets/images/sonarwallet.png";
import { activateInjectedProvider, injectedConnector } from "../connectors/injected-connector";
import { useWeb3React } from "@web3-react/core";
import { walletConnect } from "../connectors/wallet-connect";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const WalletConnection = (props) => {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };
  const {activate, error, account} = useWeb3React();
  const handleMetamask = () => {
    activateInjectedProvider("MetaMask");
    activate(injectedConnector);
    onClose(true);
  }
  const handleTrust = () => {
    activateInjectedProvider("TrustWallet");
    activate(injectedConnector);
    onClose(true);
  }

  const handleWalletConnect = async () => {
    await activate(walletConnect);
    onClose(true);
  }
  const classes = useStyles();

  useEffect(() => {
    
    console.log(account)
  }, [error, account]);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      maxWidth="sm"
      className={classes.dlg}
    >
      <DialogTitle className={classes.title}>
        <img width={50} src={walletImg} alt="" />
      </DialogTitle>
      <div className={classes.main}>
          <Typography className={classes.desc}>Please connect your wallet</Typography>
            <div onClick={handleMetamask} className={classes.item}>
                <div className={classes.icon}>
                    <img width={24} height={24} src={metamask} style={{marginRight:15}} alt="" />
                </div>
                <span className={classes.name}>Metamask</span>
            </div>
            <div onClick={handleWalletConnect} className={classes.item}>
                <div className={classes.icon}>
                    <img width={24} height={24} src={wc} style={{marginRight:15}} alt="" />
                </div>
                <span className={classes.name}>WalletConnect</span>
            </div>
            <div onClick={handleTrust} className={classes.item}>
                <div className={classes.icon}>
                    <img width={24} height={24} src={TWT} style={{marginRight:15}} alt="" />
                </div>
                <span className={classes.name}>Trust Wallet</span>
            </div>
      </div>
    </Dialog>
  );
};
const useStyles = makeStyles((theme) => ({
  main: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    textAlign: "center",
    paddingLeft: 30,
    paddingRight: 30
  },
  dlg:{
      "& .MuiDialog-paper":{
        borderRadius: "27px !important"
      }
      
  },
  desc:{
      fontSize: "18px !important",
      fontWeight: "600 !important",
      marginBottom: `15px !important`
  },
  item:{
      display:"flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "13px 18px",
      border: "1px solid rgba(151, 151, 151, 0.31)",
      borderRadius: 17,
      marginBottom: 8,
      "&:hover":{
        border: "1px solid rgba(151, 151, 151, 0.81)",
        cursor: "pointer"
      }
  },
  name:{
    fontSize: 19,
    lineHeight: `27px`
  },
  
  title:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }
}));
