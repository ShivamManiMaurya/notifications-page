// eslint-disable-next-line

import React from "react";
import Profile from "./profile";


const position = {
    position: "relative",
    top: "-1.2rem"
}

const changePos = {
    position: "block",
    top: "0"
}

const borderStyle = {
    paddingTop: "1rem",
    paddingBottom: "0.2rem",
    marginBottom: "1rem",
    marginLeft: "1rem",
    marginRight: "1rem",
    borderRadius: "0.5rem",
    backgroundColor: "hsl(211, 68%, 94%)"
}

// let arr = [];

function Account(props) {

    // console.log(props.value)

    

    // function styleChange() {

    //     for (let i = 0; i < props.value; i++) {
    //         if (props.id === i) {
    //             console.log(props.id);
    //             arr.push(props.id);
    //         }
    //     }

        // console.log(arr);

    // }

    // styleChange();

    return (
        <div className="acc-div">
            <div className="acc-border-div">
                
                <Profile 
                    id={props.id}
                    picLoc={props.picLoc}
                    name={props.name}
                    notification={props.notification}
                    link={props.link}
                    pics={props.pics}
                />

                {
                    (props.id === 1 || props.id === 6) ? 
                    <p className="acc-time-para" style={position}>{props.time}</p> : 
                    <p className="acc-time-para" style={changePos}>{props.time}</p>
                }
            </div>
            {
                (props.id === 3) &&
                    <div className="extra-data-div">
                        <p className="extra-data-para">{props.extraData}</p>
                    </div>
            }
        </div>
    );

}


export default Account;