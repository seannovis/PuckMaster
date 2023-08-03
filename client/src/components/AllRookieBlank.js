import React, {useEffect} from "react";
import gk from "../helpers/gk.png";
import def from "../helpers/def.png";
import ctr from "../helpers/ctr.png";
import lw from "../helpers/lw.png";
import rw from "../helpers/rw.png";

export default function AllRookieBlank({rookieGoalie, rookieDefenseman, rookieRightWing, rookieLeftWing, rookieCenter}){

    useEffect(() => {
        localStorage.setItem("rookieGoalie", rookieGoalie);
        localStorage.setItem("rookieDefenseman", rookieDefenseman);
        localStorage.setItem("rookieRightWing", rookieRightWing);
        localStorage.setItem("rookieLeftWing", rookieLeftWing);
        localStorage.setItem("rookieCenter", rookieCenter);
      }, [rookieGoalie, rookieDefenseman, rookieRightWing, rookieLeftWing, rookieCenter]);

    return (
            <div className="player-cards-container">
                <div className="placeholder-card">
                    <p>Goalie</p>
                    <img src={gk} alt="player" />
                    {
                        rookieGoalie == "undefined" ?
                        "" :
                        <p><b>{rookieGoalie}</b></p>
                    }
                    
                </div>

                <div className="placeholder-card">
                    <p>Defenseman</p>
                    <img src={def} alt="player" />
                    {
                        rookieDefenseman == "undefined" ?
                        "" :
                        <p><b>{rookieDefenseman}</b></p>
                    }
                </div>

                <div className="placeholder-card">
                    <p>Right Wing</p>
                    <img src={rw} alt="player" />
                    {
                        rookieRightWing == "undefined" ?
                        "" :
                        <p><b>{rookieRightWing}</b></p>
                    }
                </div>

                <div className="placeholder-card">
                    <p>Left Wing</p>
                    <img src={lw} alt="player" />
                    {
                        rookieLeftWing == "undefined" ?
                        "" :
                        <p><b>{rookieLeftWing}</b></p>
                    }                
                </div>

                <div className="placeholder-card">
                    <p>Centre</p>
                    <img src={ctr} alt="player" />
                    {
                        rookieCenter == "undefined" ?
                        "" :
                        <p><b>{rookieCenter}</b></p>
                    } 
                </div>
            </div>
    )
}