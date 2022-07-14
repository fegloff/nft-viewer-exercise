import { useWeb3React } from "@web3-react/core";
import { truncateAddressString } from "../../utils/web3/web3.utils";
import { connectors } from "../../utils/web3/connectors";
import "./header.styles.scss";

const Header = () => {
  const { activate, deactivate, account, active } = useWeb3React();

  const handleClick = () => {
    if (!active) {
      activate(connectors.injected);
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
    </div>
  );
};

export default Header;
