import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = ({ wORKERS }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const menuButtons = [
    { label: "Schemes", path: "/schemes" },
    { label: "Industries", path: "/industries" },
    { label: "Individuals", path: "/individuals" },
    { label: "Subsidies", path: "/subsidies" },
    { label: "Dry-zone", path: "/dryzone" },
    { label: "Water management", path: "/wm" },
    { label: "Fertilizers", path: "/fertilizers" },
    { label: "Shopping", path: "/shopping" },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navigateToPage = (path) => {
    navigate(path);
    toggleMenu();
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleSignOutClick = () => {
    const confirmed = window.confirm("Are you sure you want to sign out?");
    if (confirmed) {
      navigate("/login");
    }
  };

  const menuStyles = {
    position: "absolute",
    top: "80px",
    left: "1070px",
    backgroundColor: "#1c1c1c",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "1rem",
    borderRadius: "0.5rem",
    zIndex: 1, // Ensure the menu appears above other content
  };

  const buttonStyles = {
    display: "block",
    padding: "0.5rem 1rem",
    color: "#34cc54",
    backgroundColor: "#000000",
    cursor: "pointer",
    borderRadius: "0.25rem",
    marginBottom: "0.5rem",
    width: "100%",
    textAlign: "center",
    fontSize: "1.3rem",
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingRight: "10px",
        paddingLeft: "10px",
        boxSizing: "border-box",
        width: "100%",
        textAlign: "left",
        fontSize: "20px",
        backgroundColor: "#34cc54",
        color: "#000000",
        fontFamily: "timesroman",
        position: "fixed",
        zIndex: 2, // Ensure the menu icon appears above other content
      }}
    >
      <div
        style={{
          height: "32px",
          width: "100%",
          backgroundColor: "#000000",
          display: "none",
          maxWidth: "100%",
        }}
      />
      <h1
        style={{
          margin: "0",
          position: "relative",
          fontWeight: "bold",
          display: "inline-block",
          paddingLeft: "10px",
        }}
      >
        {wORKERS}
      </h1>
      <div
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          paddingTop: "1px",
          paddingRight: "0",
          paddingBottom: "0",
          paddingLeft: "0",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <button
            onClick={handleHomeClick}
            style={{
              backgroundColor: "#34cc54",
              cursor: "pointer",
              border: "none",
              height: "50px",
              width: "50px",
              position: "relative",
              overflow: "hidden",
              minWidth: "50px",
            }}
          >
            <img
              style={{
                height: "35px",
                width: "35px",
                position: "relative",
                overflow: "hidden",
                minWidth: "40px",
              }}
              loading="lazy"
              alt=""
              src="/flowbitehomesolid.svg"
            />
          </button>
          <button
            onClick={handleProfileClick}
            style={{
              backgroundColor: "#34cc54",
              cursor: "pointer",
              border: "none",
              height: "50px",
              width: "50px",
              position: "relative",
              overflow: "hidden",
              minWidth: "50px",
            }}
          >
            <img
              style={{
                height: "45px",
                width: "35px",
                position: "relative",
                overflow: "hidden",
                minWidth: "40px",
              }}
              loading="lazy"
              alt=""
              src="https://www.nicepng.com/png/full/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png"
            />
          </button>
          <button
            onClick={handleSignOutClick}
            style={{
              backgroundColor: "#34cc54",
              cursor: "pointer",
              border: "none",
              height: "50px",
              width: "50px",
              position: "relative",
              overflow: "hidden",
              minWidth: "50px",
            }}
          >
            <img
              style={{
                height: "35px",
                width: "35px",
                position: "relative",
                overflow: "hidden",
                minWidth: "40px",
              }}
              loading="lazy"
              alt=""
              src="/uilsignout.svg"
            />
          </button>
          <button
            onClick={toggleMenu}
            style={{
              backgroundColor: "#34cc54",
              cursor: "pointer",
              border: "none",
              height: "50px",
              width: "50px",
              position: "relative",
              overflow: "hidden",
              minWidth: "50px",
            }}
          >
            <img
              style={{
                height: "35px",
                width: "35px",
                position: "relative",
                overflow: "hidden",
                minWidth: "40px",
              }}
              loading="lazy"
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/54/54630.png"
            />
          </button>
        </div>
      </div>
      {showMenu && (
        <div style={menuStyles}>
          {menuButtons.map((button, index) => (
            <button
              key={index}
              onClick={() => navigateToPage(button.path)}
              style={buttonStyles}
            >
              {button.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

const Workers = () => {
  const containerStyle = {
    width: "100%",
    position: "relative",
    backgroundColor: "#000000",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    paddingTop: "0",
    paddingLeft: "0",
    paddingBottom: "0",
    paddingRight: "0",
    boxSizing: "border-box",
    lineHeight: "normal",
    letterSpacing: "normal",
  };

  const mainStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "center",
    paddingTop: "15px",
    paddingRight: "5px",
    paddingLeft: "0",
    boxSizing: "border-box",
    gap: "90px",
    maxWidth: "100%",
    textAlign: "left",
    fontSize: "10px",
    color: "#000000",
    fontFamily: "Timesroman",
  };

  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
  };

  const detailsContainerStyle = {
    width: "498px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    paddingTop: "97px",
    paddingLeft: "0",
    paddingBottom: "0",
    paddingRight: "0",
    boxSizing: "border-box",
  };

  const detailBoxStyle = {
    width: "498px",
    borderRadius: "11px",
    backgroundColor: "#34cc54",
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "end",
    paddingTop: "25px",
    paddingRight: "31px",
    paddingBottom: "30px",
    paddingLeft: "61px",
    boxSizing: "border-box",
  };

  const detailTextStyle = {
    width: "414px",
    position: "relative",
    display: "inline-block",
    flexShrink: 0,
    maxWidth: "100%",
    zIndex: 1,
    fontSize: "25px",
  };

  const verticalDividerStyle = {
    height: "570px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    paddingTop: "0",
    paddingRight: "31px",
    paddingLeft: "0",
    boxSizing: "border-box",
  };

  const dividerLineStyle = {
    width: "1px",
    flexGrow: 1,
    position: "relative",
    boxSizing: "border-box",
    borderRight: "1px solid white",
  };

  const rightDetailsContainerStyle = {
    width: "398px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    paddingTop: "97px",
    paddingLeft: "0",
    paddingBottom: "0",
    marginRight:"180px",
    paddingRight: "0",
    boxSizing: "border-box",
  };

  return (
    <div style={containerStyle}>
      <Menu wORKERS="WORKERS" />
      <main style={mainStyle}>
        <div style={sectionStyle}></div>
        <div style={detailsContainerStyle}>
          <div style={{ ...detailBoxStyle, marginBottom: "116px" }}>
            <div style={detailTextStyle}>
              <p style={{ margin: "0" }}>
                <b style={{ fontWeight: "" }}>HARVESTING</b>
              </p>
              <p style={{ margin: "0" }}>Contact No: 9876543210</p>
              <p style={{ margin: "0" }}>Location: Coimbatore</p>
              <p style={{ margin: "0" }}>Salary: 7000-10000</p>
            </div>
          </div>
          <div style={detailBoxStyle}>
            <div style={detailTextStyle}>
              <p style={{ margin: "0" }}>
                <b style={{ fontWeight: "bold" }}>CATTLE DOCTORING</b>
              </p>
              <p style={{ margin: "0" }}>Contact No: 9876543210</p>
              <p style={{ margin: "0" }}>Location: Erode</p>
              <p style={{ margin: "0" }}>Salary: 6000-12000</p>
            </div>
          </div>
        </div>
        <div style={verticalDividerStyle}>
          <div style={dividerLineStyle} />
        </div>
        <div style={rightDetailsContainerStyle}>
          <div style={{ ...detailBoxStyle, marginBottom: "122px" }}>
            <div style={detailTextStyle}>
              <p style={{ margin: "0" }}>
                <b style={{ fontWeight: "bold" }}>FERTILIZING</b>
              </p>
              <p style={{ margin: "0" }}>Contact No: 9876543210</p>
              <p style={{ margin: "0" }}>Location: Karur</p>
              <p style={{ margin: "0" }}>Salary: 5000-8000</p>
            </div>
          </div>
          <div style={detailBoxStyle}>
            <div style={detailTextStyle}>
              <p style={{ margin: "0" }}>
                <b style={{ fontWeight: "bold" }}>PACKING</b>
              </p>
              <p style={{ margin: "0" }}>Contact No: 9876543210</p>
              <p style={{ margin: "0" }}>Location: Ooty</p>
              <p style={{ margin: "0" }}>Salary: 6000-12000</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Workers;