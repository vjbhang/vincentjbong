import React from "react";

// Assets
import Logo from "../../../Assets/Images/homepage_logo_stacked.png"; // Exbody Logo

// Atoms & Molecules
import Grouping from "../../Atoms/Grouping";
import Img from "../../Atoms/Img/Img";
import Button from "../../Atoms/Button";

export function LandingModal({ onClick }) {
  return (
    <Grouping
      inputStyle={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "white",
        top: "0px",
        left: "0px",
        height: "50vh",
        width: "15vw",
        minWidth: "230px",
      }}
    >
      <Grouping
        inputStyle={{ width: "12vw", margin: "0 auto", position: "initial" }}
      >
        <Img src={Logo} alt="Logo" />
      </Grouping>
      <Grouping
        inputStyle={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          position: "initial",
          marginTop: "21%",
        }}
      >
        <Grouping inputStyle={{ position: "initial", height: "8vh" }}>
          <Button
            buttonName="Language"
            type="modal"
            inputStyle={{}}
            onClick={onClick}
          />
        </Grouping>
        <Grouping inputStyle={{ position: "initial", height: "8vh" }}>
          <Button
            buttonName="한국어"
            type="modal"
            inputStyle={{
              backgroundColor: "white",
              color: "#0C0F5B",
              borderWidth: "1px",
            }}
          />
        </Grouping>
      </Grouping>
    </Grouping>
  );
}
