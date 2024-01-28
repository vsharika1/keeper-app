import React from "react";

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright {'\u00A9'} {currentYear}</p>
        </footer>
    );
}

export default Footer;