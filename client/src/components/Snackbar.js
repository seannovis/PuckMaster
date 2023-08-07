import React, { useEffect } from "react";

export default function Snackbar({ errorSnackbar, duration = 3000, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  console.log('error snackbar' + errorSnackbar)

  return (
    <React.Fragment>
      <div className="snackbar-modal-overlay"></div>
      <div className="snackbar-modal">
        {
          errorSnackbar ?
          <React.Fragment>
            <h5>Failed!</h5>
            <p>Player not found</p>
          </React.Fragment>
          :
          <React.Fragment>
            <h5>Success!</h5>
            <p>Player traded</p>
          </React.Fragment>
        }
        
      </div>
    </React.Fragment>
  );
}
