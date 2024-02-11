import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/sp_logo.png";
import { colors } from "../utils/colors"

const linkStyle = {
    color: colors.tertiary,
    marginRight: "10px",
    fontSize: "30px",
};

function MainHeader() {
    return (
        <>
            <nav
                style={{
                    backgroundColor: colors.primary,
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    justifyContent: "space-between",
                }}
            >
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ marginRight: "10px", width: "25%", height: "25%" }}
                    />
                    <Link to="/" style={linkStyle}>Home</Link>
                    <Link to="/products" style={linkStyle}>Products</Link>
                </div>
                <Link to="/login" style={{ ...linkStyle, padding: "20px" }}>Login</Link>
            </nav>
        </>
    );
}

export default MainHeader;