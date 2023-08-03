import React, { useState } from "react";
import TeamModal from "./TeamModal";

export default function TeamCard({ team, isChecked, onCheckboxChange }) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  function handleCheckboxChange() {
    onCheckboxChange(team.id);
  }

  function handleImageClick() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function handleFetchData(option) {
    if (option === "players") {
      fetch(`/teams/${team.id}/players`)
        .then((r) => r.json())
        .then(setModalContent)
        console.log(modalContent)
    } else if (option === "stats") {
      fetch(`/teams/${team.id}/stats`)
        .then((response) => response.json())
        .then(setModalContent)
        console.log(modalContent)
    } else if (option === "draftees") {
      fetch(`/teams/${team.id}/draftees`)
        .then((response) => response.json())
        .then(setModalContent)
        console.log(modalContent)
    }}

  return (
    <div className={`team-card${isChecked ? " checked" : ""}`}>
      <h2>{team.name}</h2>
      <img className="team-img" src={".." + team.image_url} alt={team.name} onClick={handleImageClick} />
      <p>Stadium: {team.venue}</p>
      <p>Founded: {team.founded}</p>
      <p>Division: {team.division}</p>
      <p>Conference: {team.conference}</p>
      <br />
      <div className="checkbox-container">
        <label className="custom-checkbox-label">
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          <span className={`custom-checkbox${isChecked ? " checked" : ""}`} />
        </label>
      </div>
      <TeamModal show={showModal} onClose={closeModal} onFetchData={handleFetchData} teamName={team.name} modalContent={modalContent} />
    </div>
  );
}
