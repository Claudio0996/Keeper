import React from "react";


function Footer(){
    const time = new Date().getFullYear();

    return(
        <footer>
            <p>
                <p>Copyright {time}</p>
            </p>
        </footer>
    );
}

export default Footer;