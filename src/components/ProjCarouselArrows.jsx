import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/pro-solid-svg-icons";

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    const [hover, setHover] = useState(false);
    const [press, setPress] = useState(false);

    return (
        <div
            className={className}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseDown={() => setPress(true)}
            onMouseUp={() => setPress(false)}
            style={{
                ...style,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "none",
                zIndex: "10",
                // left: "60px",
                fontSize: "46px"
            }}
        >
            <FontAwesomeIcon
                icon={faChevronLeft}
                color={
                    hover
                    ? press
                    ? "#d1b11f"
                    : "#f0cd31"
                    : "#1d3557"
                }
            />
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    const [hover, setHover] = useState(false);
    const [press, setPress] = useState(false);

    return (
        <div
            className={className}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseDown={() => setPress(true)}
            onMouseUp={() => setPress(false)}
            style={{
                ...style,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                zIndex: "10",
                right: "-35px",
                fontSize: "46px"

            }}
        >
            <FontAwesomeIcon
                icon={faChevronRight}
                color={
                    hover
                    ? press
                    ? "#d1b11f"
                    : "#f0cd31"
                    : "#1d3557"
                }
            />
        </div>
    );
};

export {CustomPrevArrow, CustomNextArrow}