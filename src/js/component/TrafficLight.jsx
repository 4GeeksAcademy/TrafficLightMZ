import React, { useState } from "react";

const TrafficLight = () => {
    const [redLight, setRedLight] = useState("danger");
    const [yellowLight, setYellowLight] = useState("warning");
    const [greenLight, setGreenLight] = useState("success");

    const glow1 = () => {
        setRedLight((prevColor) => (prevColor === "danger" ? "danger shine" : "danger"));
        setYellowLight("warning");
        setGreenLight("success");
    };

    const glow2 = () => {
        setYellowLight((prevColor) => (prevColor === "warning" ? "warning shine" : "warning"));
        setRedLight("danger");
        setGreenLight("success");
    };

    const glow3 = () => {
        setGreenLight((prevColor) => (prevColor === "success" ? "success shine" : "success"));
        setYellowLight("warning");
        setRedLight("danger");
    };

    return (
        <div className="container bg-dark d-flex justify-content-evenly flex-column rounded" style={{ height: "580px", width: "200px", paddingLeft: "32px", marginTop: "150px" }}>
            <div className={"rounded-circle bg-" + redLight} style={{ width: "140px", height: "120px", cursor: "pointer" }} onClick={glow1}></div>
            <div className={"rounded-circle bg-" + yellowLight} style={{ width: "140px", height: "120px", cursor: "pointer" }} onClick={glow2}></div>
            <div className={"rounded-circle bg-" + greenLight} style={{ width: "140px", height: "120px", cursor: "pointer" }} onClick={glow3}></div>
        </div>
    );
};

export default TrafficLight;
