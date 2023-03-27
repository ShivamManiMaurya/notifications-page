import React from "react";


function Account(props) {

    return (
        <div className="acc-div">
            <div className="acc-details-div">
                <a href="#"><img src={props.picLoc} alt="profile-pic" /></a>
                <p><a href="#">{props.name}</a>{props.notification}<a href="#">{props.link}</a></p>
                <a href="#"><img src={props.pics} alt="" /></a> 
            </div>
            <p className="acc-time-para">{props.time}</p>
            <div className="extra-data-div">
                <p>{props.extraData}</p>
            </div>
        </div>
    );

}


export default Account;