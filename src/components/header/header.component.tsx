import { useState } from "react";
import { useWeb3React } from "@web3-react/core";

import { truncateAddressString } from "../../utils/web3/web3.utils";
import { connectors } from "../../utils/web3/connectors";
import AlertDialog from "../alert-dialog/alert-dialog.component";

import "./header.styles.scss";


/**
 * Component that displays the page header and handles Wallet connection
 */
const Header = () => {
  /**
  * account: Wallet account address 
  * active: Wallet connection status
  * activate: Connect Wallet
  * deactive: Disconnect Wallet
  */
  const { activate, deactivate, account, active } = useWeb3React();
  /** Hook that handles error Message  */
  const [ errorMessage, setErrorMessage ] = useState('');

  const handleClick = () => {
    if (errorMessage) {
      setErrorMessage('');
    }
    if (!active) {
      activate(connectors.injected, (error) => {
        setErrorMessage(error.toString());
      });
    } else {
      deactivate();
    }
  };

  return (
    <div className="header"> 
      <button className="header-button" onClick={handleClick}>
        {active && account
          ? truncateAddressString(account, 6)
          : "Connect Wallet"}
      </button>
      {errorMessage && <AlertDialog errorMessage={errorMessage} openAction={true} />}
    </div>
  );
};

export default Header;
