import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = ({ hOME = "AGROCOM" }) => {
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
    { label: "Workers", path: "/work" },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navigateToPage = (path) => {
    navigate(path);
    toggleMenu();
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

  const handleAddClick = () => {
    // Define what happens when the add button is clicked
    console.log("Add button clicked");
    navigate("/createpost");
  };

  const menuStyles = {
    position: "absolute",
    top: "80px",
    right: "10px",
    backgroundColor: "#1c1c1c",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "1rem",
    borderRadius: "0.5rem",
    zIndex: 1000,
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
    <div style={{ backgroundColor: "#000000", minHeight: "100vh", color: "#34cc54" }}>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
          boxSizing: "border-box",
          width: "100%",
          textAlign: "left",
          fontSize: "20px",
          backgroundColor: "#34cc54",
          color: "#000000",
          fontFamily: "timesroman",
          position: "fixed",
          top: 0,
          zIndex: 1000,
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
          {hOME}
        </h1>
        <div
          style={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            padding: "0",
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
            <button
              onClick={handleAddClick}
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
                src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
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

      <div style={{ paddingTop: "5rem" }}>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <div style={{ width: '80%', padding: '1rem' }}>
            {/* Content */}
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "1rem",
              }}
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
