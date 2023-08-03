import React from "react";

export default function PlayerModal({ show, onClose, playerName, modalContent }) {
    function closeModal(){
    onClose(null);
    };

    return (
        <div className={`modal fade ${show ? "show d-block" : ""}`} tabIndex="-1" role="dialog" style={{ display: show ? "block" : "none" }} >
        <div className="modal-dialog" role="document">
            <div className="modal-content" >
            <div className="modal-header">
                <h5 className="modal-title"><b>{playerName}</b></h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal} >
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            {modalContent ? (
                <div>
                    <p><b>Team:</b> {modalContent.current_team}</p>
                    <p><b>Position:</b> {modalContent.position}</p>
                    <p><b>Jersey Number:</b> {modalContent.jersey_number}</p>
                    <p><b>Previous Teams:</b> {modalContent.previous_teams}</p>
                    <p><b>Hockey stick:</b> {modalContent.hand}</p>
                </div>
                ) : null}
            </div>
        </div>
    </div>
    );
}
