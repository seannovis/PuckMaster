import React from "react";

export default function TeamModal({ show, onClose, teamName, onFetchData, modalContent }) {
  function closeModal(){
    onClose(null);
  };

  function handleFetchPlayers(){
    onFetchData("players");
  };

  function handleFetchStats(){
    onFetchData("stats");
  };

  function handleFetchDraftees() {
    onFetchData("draftees")
  }

  return (
    <div className={`modal fade ${show ? "show d-block" : ""}`} tabIndex="-1" role="dialog" style={{ display: show ? "block" : "none" }} >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{teamName}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal} >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="modal-buttons">
            <button type="button" className="btn btn-primary" onClick={handleFetchStats} >
                2023 Statistics
              </button>
              <button type="button" className="btn btn-primary" onClick={handleFetchPlayers} >
                Current Roster
              </button>
              <button type="button" className="btn btn-primary" onClick={handleFetchDraftees} >
                2023 Draftees
              </button>
            </div>
          <div>
              {modalContent ? (
                <>
                  {modalContent.stat ? (
                    <div>
                      <p>Conference Rank: {modalContent.stat.conference_rank}/16</p>
                      <p>Wins: {modalContent.stat.wins}</p>
                      <p>Losses: {modalContent.stat.losses}</p>
                      <p>OT: {modalContent.stat.ot}</p>
                      <p>Percentage: {modalContent.stat.perecentage}</p>
                      <p>Points: {modalContent.stat.points}</p>
                      <p>Goals Scored: {modalContent.stat.goals_scored}</p>
                      <p>Goals Conceded: {modalContent.stat.goals_conceded}</p>
                    </div>
                  ) : null}

                  {modalContent.players ? (
                    <div>
                      <ul>
                        {modalContent.players.map((player) => player.active == 1 ?(
                          <p key={player.id}>
                            {player.full_name} - {player.position}
                          </p>
                        ):null)}
                      </ul>
                    </div>
                  ) : null}

                  {modalContent.draftees ? (
                    <div>
                    <ul>
                      {modalContent.draftees.map((draftee) => (
                        <p key={draftee.id}>
                          {draftee.full_name} - {draftee.position}
                        </p>
                      ))}
                    </ul>
                  </div>
                  ) : null} 
                </>
              ) : null
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
