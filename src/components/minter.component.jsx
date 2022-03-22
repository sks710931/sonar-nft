/* eslint-disable no-useless-computed-key */
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, {useState} from "react";
import { WalletConnection } from "../dialogs/connect.dlg";

export const Minter = () => {
  const [isWalletConnectOpen, setWalletConnectOpen] = useState(false);
  const classes = useStyles();
  const handleConnect = () => {
      setWalletConnectOpen(true);
  }
  const handleConnectClose = () => {
    setWalletConnectOpen(false);
  }
  return (
    <div className={classes.container}>
      <Button variant="contained" onClick={handleConnect} className={classes.connectBtn}>
        Connect Wallet
      </Button>
      <Button variant="contained" className={classes.mintBtn}>
        Mint 0/250
      </Button>
      <WalletConnection open={isWalletConnectOpen} onClose={handleConnectClose} />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    ['@media (max-width:767px)']:{
     justifyContent:"center",
     marginBottom: 60
    },
  },
  connectBtn: {
    background: `linear-gradient(180deg, rgba(0, 255, 93, 0.02) 0%, rgba(0, 0, 0, 0.0061462) 100%), rgba(255, 255, 255, 0.05) !important`,
    boxShadow: `0px 8px 8px rgba(0, 0, 0, 0.0367952) !important`,
    borderRadius: `12px !important`,
    textTransform: "capitalize !important",
    padding: `10px 16px !important`,
    fontSize: "18px !important",
    marginRight:` 8px !important`,
    width: 180,
  },
  mintBtn: {
    background: `linear-gradient(225deg, rgba(123, 0, 254, 0.120144) 0%, rgba(166, 246, 0, 0.0962751) 100%), #191721 !important`,
    boxShadow: `0px 8px 16px rgba(0, 0, 0, 0.396689)!important`,
    borderRadius: `12px !important`,
    borderLeft: `1px solid rgba(90, 71, 211, .3) !important`,
    borderBottom: `1px solid rgba(53, 223, 75, .3) !important`,
    borderRight: `1px solid rgba(255, 178, 0, .3) !important`,
    borderTop: `1px solid rgba(239, 24, 174, .3) !important`,
    textTransform: "capitalize !important",
    padding: `8px 16px !important`,
    fontSize: "18px !important",
    width: 180,
  },
}));
