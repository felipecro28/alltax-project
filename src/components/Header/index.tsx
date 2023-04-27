import "./styles.css";

const Header: React.FC = () => {
  return (
    <header>
      <div className="menu-div">
        <p>Menu</p>
      </div>
      <div className="user-name-div">
        <div className="red-icon-div" />
        <p>User Name</p>
      </div>
      <div className="sales-report-div">
        <p>Sales Report</p>
      </div>
    </header>
  );
};

export default Header;
