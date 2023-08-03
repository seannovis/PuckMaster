import React, {useEffect} from "react";
import gk from "../helpers/gk.png";
import def from "../helpers/def.png";
import ctr from "../helpers/ctr.png";
import lw from "../helpers/lw.png";
import rw from "../helpers/rw.png";

export default function AllStarBlank({favGoalie, favDefenseman, favRightWing, favLeftWing, favCenter}){

    useEffect(() => {
        localStorage.setItem("favGoalie", favGoalie);
        localStorage.setItem("favDefenseman", favDefenseman);
        localStorage.setItem("favRightWing", favRightWing);
        localStorage.setItem("favLeftWing", favLeftWing);
        localStorage.setItem("favCenter", favCenter);
      }, [favGoalie, favDefenseman, favRightWing, favLeftWing, favCenter]);

    return (
            <div className="player-cards-container">
                <div className="placeholder-card">
                    <p>Goalie</p>
                    <img src={gk} alt="player" />
                    {
                        favGoalie == "undefined" ?
                        "" :
                        <p><b>{favGoalie}</b></p>
                    }                
                    </div>

                <div className="placeholder-card">
                    <p>Defenseman</p>
                    <img src={def} alt="player" />
                    {
                        favDefenseman == "undefined" ?
                        "" :
                        <p><b>{favDefenseman}</b></p>
                    }                
                    </div>

                <div className="placeholder-card">
                    <p>Right Wing</p>
                    <img src={rw} alt="player" />
                    {
                        favRightWing == "undefined" ?
                        "" :
                        <p><b>{favRightWing}</b></p>
                    }                
                    </div>

                <div className="placeholder-card">
                    <p>Left Wing</p>
                    <img src={lw} alt="player" />
                    {
                        favLeftWing == "undefined" ?
                        "" :
                        <p><b>{favLeftWing}</b></p>
                    }                
                    </div>

                <div className="placeholder-card">
                    <p>Centre</p>
                    <img src={ctr} alt="player" />
                    {
                        favCenter == "undefined" ?
                        "" :
                        <p><b>{favCenter}</b></p>
                    }                
                    </div>
            </div>
    )
}