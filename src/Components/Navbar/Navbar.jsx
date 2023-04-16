import "./Navbar.css";

export const NavComponent = () => {
  return (
    <div className="navbar">
      <a className="navbar-item" href="#">
        Welcome to Bounties
      </a>
      <span></span>
      <button className="connect-wallet"><img src="data:image/png;base64,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" className="metamask-logo"/> Connect Wallet </button>
    </div>
  );
};