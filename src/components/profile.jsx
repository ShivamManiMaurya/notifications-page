import React from "react";


function Profile(props) {


    console.log(props.id);

    return (
        <div className="acc-details-div">
                    <a href="#"><img className="profile-pic" src={props.picLoc} alt="profile-pic" /></a>
                    <p className="acc-details-para">
                        <a className="one-anc" href="#">{props.name}</a>
                        {props.notification}
                        {   
                            (props.id === 2 || props.id === 6) ? 
                            <a className="two-anc" style={{color: "hsl(219, 85%, 26%)"}} href="#">{props.link}</a> : 
                            <a className="two-anc" href="#">{props.link}</a>
                        }
                        <span className="red-point"> .. . </span>
                    </p>
                    {(props.id === 4) && <a href="#"><img className="my-pic" src={props.pics} alt="" /></a> }
                    
                </div>
                
    );

}


export default Profile;