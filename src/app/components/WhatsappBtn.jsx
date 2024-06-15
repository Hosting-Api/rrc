import React from "react";
import { FaWhatsapp } from "react-icons/fa";



const WhatsappBtn = () => {
    const buttonStyle = {
        position: "fixed",
        bottom: "60px",
        right: "20px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
    };

   

    return (
        <a
            href="https://wa.me/+918160737499"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
        >
            <FaWhatsapp className="text-3xl  text-white cursor-pointer " 
            
                style={{
                    marginRight: "5px",
                    marginLeft: "5px",
                    height: "45px",
                    alignContent: "center",
                    
                }}
            />
        </a>
    );
};

export default WhatsappBtn;
