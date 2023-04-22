import React from "react";
import "../../Styles/WorkExperience.scss";

function WorkExperience() {
  return (
    <div className="WorkExperience">
      <div id="left-col"></div>
      <div id="mid-col">
        <div id="heading">
          <h2>Work Experience</h2>
        </div>
        <div id="content">
          <div className="subheading">
            <h3>Spak Engineering (Oct-2021 - Current)</h3>
          </div>
          <div className="we_detail">
            <ol>
              <li>
                <strong>ItsUs :</strong>
                <p>
                  It is a showcase platform for Photographer’s and Director’s
                  portfolios.
                  <ul>
                    <li>Custom Video Player, Reels, Atomic Design Pattern</li>
                    <li>Multi-Platform, React, Typescript, Docker</li>
                  </ul>
                </p>
              </li>
              <li>
                <strong>Maintenance Manager :</strong>{" "}
                <p>
                  An application to maintain and monitor industrial machines and
                  notify the salesforce team. 
                  <ul> 
                      <li>Frontend Ownership, Feature
                  separated Architecture, react-formik, redux-state-sync</li></ul>
                </p>
              </li>
              <li>
                <strong>Pitstop :</strong>{" "}
                <p>
                  Task creation and management, web and mobile based
                  application. 
                  <ul>
                      <li>Created frontend from scratch using React,
                  CoreUI</li>
                  </ul>
                </p>
              </li>
            </ol>
          </div>
          <div className="subheading">
            <h3>NEC Corporation (Jan-2020 - Sep-2021)</h3>
          </div>
          <div className="we_detail">
            <p>
            In NEC I have worked on React with Redux workflow, created components, and
sagas using Redux-Saga for side effects.
            </p>
          </div>
        </div>
      </div>
      <div id="right-col"></div>
    </div>
  );
}

export default WorkExperience;
