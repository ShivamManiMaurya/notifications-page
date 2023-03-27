// modules
import React from "react";
import Account from "./account";

// data modules
import accData from "./accountsData";

// styles
import './styles/mobileFirst.css';


function Main() {

    return (
        <section className="main">
            <div className="notification-div">
                <h1 className="notification-heading">Notifications <span className="notification-span">3</span></h1>
                <button className="notification-button"><h4>Mark all as read</h4></button>
            </div>
            
            {accData.map((acc, index) => {
                return (
                    <Account 
                        key={index}
                        picLoc={acc.picLoc}
                        name={acc.name} 
                        notification={acc.notificatoin} 
                        link={acc.link}
                        time={acc.time}
                        extraData={acc.extradata}
                        pics={acc.pics}
                
                    />
                );
            })}

        </section>
    );

}


export default Main;