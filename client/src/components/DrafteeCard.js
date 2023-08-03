import React, {useState, useEffect} from "react";
import DrafteeModal from "./DrafteeModal";

export default function DrafteeCard({ draftee, isChecked, onCheckboxChange }) {
  
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    console.log(modalContent);
  }, [modalContent]);

  function handleProfileClick() {
    setShowModal(true);

    fetch(`/draftees/${draftee.id}`)
      .then((r) => r.json())
      .then((data) => {
        setModalContent(data);
      });
  }

  function closeModal() {
    setShowModal(false);
  }

  function handleCheckboxChange() {
    if (!draftee.isDisabled) {
      onCheckboxChange(draftee.id);
    }
  }
    
  return (
      <div className={`player-card${isChecked ? " checked" : ""}`}>
        <h2>{draftee.full_name}</h2>
        <p>{draftee.current_team}</p>
        <p>{draftee.position}</p>
        <button className='profile-button' onClick={handleProfileClick}>Profile</button>
        <br />
        <div className="player-checkbox-container">
          <label className={`custom-checkbox-label${draftee.isDisabled ? " disabled" : ""}`}>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} disabled={draftee.isDisabled} />
            <span className={`custom-checkbox${isChecked ? " checked" : ""}`}/>
          </label>
        </div>
        <DrafteeModal show={showModal} onClose={closeModal} drafteeName={draftee.full_name} modalContent={modalContent} />
      </div>
    );
}
