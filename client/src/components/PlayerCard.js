import React, {useState, useEffect} from "react";
import PlayerModal from "./PlayerModal";

export default function PlayerCard({ player, isChecked, onCheckboxChange }) {

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    console.log(modalContent);
  }, [modalContent]);

  function handleProfileClick() {
    setShowModal(true);

    fetch(`/players/${player.id}`)
      .then((r) => r.json())
      .then((data) => {
        setModalContent(data);
      });
  }

  function closeModal() {
    setShowModal(false);
  }

   function handleCheckboxChange() {
    if (!player.isDisabled) {
      onCheckboxChange(player.id);
    }
  }
  
    return (
      <div className={`player-card${isChecked ? " checked" : ""}`}>
        <h2>{player.full_name}</h2>
        <p>{player.current_team}</p>
        <p>{player.position}</p>
        <button className='profile-button' onClick={handleProfileClick}>Profile</button>
        <br />
        <div className="player-checkbox-container">
          <label className={`custom-checkbox-label${player.isDisabled ? " disabled" : ""}`}>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} disabled={player.isDisabled}/>
            <span className={`custom-checkbox${isChecked ? " checked" : ""}`}/>
          </label>
        </div>
        <PlayerModal show={showModal} onClose={closeModal} playerName={player.full_name} modalContent={modalContent} />
      </div>
    );

  }
