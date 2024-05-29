import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = ({ fERTILIZERS }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const menuButtons = [
    { label: "Schemes", path: "/schemes" },
    { label: "Industries", path: "/industries" },
    { label: "Individuals", path: "/individuals" },
    { label: "Subsidies", path: "/subsidies" },
    { label: "Dry-zone", path: "/dryzone" },
    { label: "Water management", path: "/wm" },
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
        {fERTILIZERS}
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




const Fertilizers = () => {
  
  const handleShopNowClick = (shopUrl) => {
    window.location.href = shopUrl; // Redirect to the provided shop URL
  };

  return (
    <div style={{ display: "flex", backgroundColor: "#000000" }}>
      {/* Left side */}
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", marginTop: "155px", flexDirection: "column", alignItems: "center" }}>
          {/* Image 1 */}
          <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
            <img
              style={{ width: "120px", marginBottom: "30px", height: "auto", borderRadius: "20px" }}
              loading="lazy"
              alt=""
              src="/shopping-1@2x.png"
            />
            <div style={{ width:"250px",height:"75px",  backgroundColor: "#34cc54", padding: "10px", borderRadius: "20px", marginLeft: "20px",marginBottom:"23px" }}>
              <p>N. P. K. (19-19-19) 100% Water Soluble Fertiliser For Foliar Spray and Fertigation</p>
              <button style={{ backgroundColor: "#34cc54", color: "#000000", border: "none", borderRadius: "5px", padding: "5px 10px", marginTop: "10px" }} onClick={() => handleShopNowClick("https://www.iffcobazar.in/en/product/n-p-k-19-19-19#wsf-19-19-19-imported-1-kg")}>Shop Now</button>
            </div>
          </div>
          {/* Image 2 */}
          <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
            <img
              style={{ width: "120px", marginBottom: "10px", height: "auto", borderRadius: "20px" }}
              loading="lazy"
              alt=""
              src="/shopping-1-1@2x.png"
            />
            <div style={{width:"250px",height:"75px",  backgroundColor: "#34cc54", padding: "10px", borderRadius: "20px", marginLeft: "20px",marginBottom:"23px" }}>
              <p>Urea fertilizer is a high-quality fertilizer that is used to help plants grow.</p>
              <button style={{ backgroundColor: "#34cc54", color: "#000000", border: "none", borderRadius: "5px", padding: "5px 10px", marginTop: "10px" }} onClick={() => handleShopNowClick("https://samalagrotech.in/product/3330178/urea-fertilizer-1Kg?utm_source=GMC")}>Shop Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", marginTop: "155px", flexDirection: "column", alignItems: "center" }}>
          {/* Image 3 */}
          <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
            <img
              style={{ width: "120px", marginBottom: "30px", height: "auto", borderRadius: "20px" }}
              loading="lazy"
              alt=""
              src="/shopping-3-1@2x.png"
            />
            <div style={{width:"250px",height:"60px",  backgroundColor: "#34cc54", padding: "10px", borderRadius: "20px", marginLeft: "20px",marginBottom:"23px" }}>
              <p>Tata Surplus Micro Nutrients Fertilizer in enhancing crop nutrition.</p>
              <button style={{ backgroundColor: "#34cc54", color: "#000000", border: "none", borderRadius: "5px", padding: "5px 10px", marginTop: "10px" }} onClick={() => handleShopNowClick("https://kisancenter.in/product/23803954/Tata-Surplus-Micro-Nutrients-Fertilizer")}>Shop Now</button>
            </div>
          </div>
          {/* Image 4 */}
          <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
            <img
              style={{ width: "105px", marginBottom: "30px", height: "auto", borderRadius: "20px" }}
              loading="lazy"
              alt=""
              src="/shopping-2-1@2x.png"
            />
            <div style={{width:"250px",height:"75px",  backgroundColor: "#34cc54", padding: "10px", borderRadius: "20px", marginLeft: "20px",marginBottom:"23px" }}>
              <p>This potash fertilizer is a concentrated form of potassium that is essential for plant growth.</p>
              <button style={{ backgroundColor: "#34cc54", color: "#000000", border: "none", borderRadius: "5px", padding: "5px 10px", marginTop: "10px" }} onClick={() => handleShopNowClick("https://samalagrotech.in/product/3330151/potash-fertilizer-1KG?utm_source=GMC")}>Shop Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <Menu fERTILIZERS="FERTILIZERS" />
    </div>
  );
};

export default Fertilizers;



