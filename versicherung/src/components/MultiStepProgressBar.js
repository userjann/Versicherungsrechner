import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = (props) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <ProgressBar
        percent={(props.step + 1) * 25}
        filledBackground="#8a1c1c"
        height="2px"
        style={{ margin: "auto" }}
      >
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div
              style={{
                height: "30px",
                width: "30px",
                border: "1px solid lightgray",
                borderRadius: "50%",
                backgroundColor: `${accomplished ? "#8a1c1c" : null}`
              }}
              className={`step ${accomplished ? "completed" : ""}`}
            >
              1
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div
              style={{
                height: "30px",
                width: "30px",
                border: "1px solid lightgray",
                borderRadius: "50%",
                backgroundColor: `${accomplished ? "#8a1c1c" : null}`
              }}
              className={`step ${accomplished ? "completed" : ""}`}
            >
              2
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div
              style={{
                height: "30px",
                width: "30px",
                border: "1px solid lightgray",
                borderRadius: "50%",
                backgroundColor: `${accomplished ? "#8a1c1c" : null}`
              }}
              className={`step ${accomplished ? "completed" : ""}`}
            >
              3
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div
              style={{
                height: "30px",
                width: "30px",
                border: "1px solid lightgray",
                borderRadius: "50%",
                backgroundColor: `${accomplished ? "#8a1c1c" : null}`
              }}
              className={`step ${accomplished ? "completed" : ""}`}
            >
              4
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
};

export default MultiStepProgressBar;
