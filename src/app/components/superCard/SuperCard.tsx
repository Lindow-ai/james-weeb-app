'use client'

import React, { useState } from "react";
import Frame from "@/app/assets/Frame";
import "./styles.css";
import Button from "../Button/Button";
import Download from "@/app/assets/Download";
import { VARIANT_BUTTON } from "../Button/variantButton";
import Satellites from "@/app/assets/Satellites";

const SuperCard = () => {

  const [isSatellitesHover, setIsSatellitesHover] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const spacingValues = [
    0.8,
    0.8,
    0.8,
    0.8,
    0.8,
    0.8, // lignes 1 à 6
    1, // lignes 6 à 7
    1.2, // lignes 7 à 8
    1.3, // lignes 8 à 9
    1.4, // lignes 9 à 10
    1.6, // lignes 10 à 11
    1.85, // lignes 11 à 12
    1.95, // lignes 12 à 13
    2.05, // lignes 13 à 14
    2.4, // lignes 14 à 15
    2.6, // lignes 15 à 16
    3.3, // lignes 16 à 17
    3.9, // lignes 17 à 18
    4, // lignes 18 à 19
    4.8, // lignes 19 à 20
    5.3, // lignes 20 à 21
    6, // lignes 21 à 22
  ];

  const verticalLines = spacingValues.map((spacing, index) => (
    <div
      key={index}
      className="vertical-line"
      style={{ marginLeft: `${spacing}vw` }}
    />
  ));

  console.log('openModal', openModal)

  return (
    <div className="super-card">
      <div className="super-card-container-title">
        <h3>Our motto is to</h3>
        <h1>Push the boundaries of human knowledge</h1>
        <div className="super-card-subhead">
          <h3 className="subtitle">
            to the formation of the first galaxies and the horizons of other
            worlds
          </h3>
        </div>
      </div>
      <div className="super-card-container-line">{verticalLines}</div>
      <div className="super-card-container-footer">
        <div className="super-card-container-button-footer">
          <Button variant={VARIANT_BUTTON.itemsButton}>
            <h1 className="super-card-container-footer-title">402</h1>
            <span className="super-card-container-footer-text">
              Days in space
            </span>
          </Button>
          <Button
            style={{ marginLeft: "4vw" }}
            variant={VARIANT_BUTTON.itemsButton}
          >
            <h1 className="super-card-container-footer-title">74</h1>
            <span className="super-card-container-footer-text">
              Space photos
            </span>
          </Button>
          <Button
            style={{ marginLeft: "4vw" }}
            variant={VARIANT_BUTTON.itemsButton}
          >
            <h1 className="super-card-container-footer-title">98</h1>
            <span className="super-card-container-footer-text">Articles</span>
          </Button>
        </div>
        <div
          className={!openModal ? "super-card-container-footer-satellites" : "super-card-container-footer-satellites-open"}
          onMouseEnter={() => setIsSatellitesHover(true)}
          onMouseLeave={() => { setIsSatellitesHover(false), setOpenModal(false) }}
        >
          {isSatellitesHover && <div className={!openModal ? "position-container-footer-span-hover" : "position-container-footer-span-click"}>
            <span className={!openModal ? "text-container-footer-hover" : "text-container-footer-click"}>{!openModal ? "CLICK" : "Generate a new quick fact!"}</span>
          </div>
          }
          {
            isSatellitesHover && <div className={!openModal ? "position-container-footer-span-second-hover" : "position-container-footer-span-second-click"}>
              {
                !openModal ? <span className="text-container-footer-second-hover">CLICK</span> : <span onClick={() => setOpenModal(false)} className="text-container-footer-second-click">Close quick facts</span>
              }
            </div>
          }
          <div onClick={() => setOpenModal(true)}>
            <Satellites />
          </div>
          {
            isSatellitesHover && <div className={!openModal ? "position-container-footer-span" : "position-container-footer-span-open"}>
              <span onClick={() => setOpenModal(!openModal)} className={!openModal ? "text-container-footer-span" : "text-container-footer-span-open"}>{!openModal ? "Get a quick fact!" : "<- QUICK FACT!"}</span>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default SuperCard;
