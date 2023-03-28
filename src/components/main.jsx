// eslint-disable-next-line 

// modules
import React, {useState} from "react";
import Account from "./account";

// data modules
import accData from "./accountsData";

// styles
import './styles/mobileFirst.css';

// fonts
import '../assets/fonts/static/PlusJakartaSans-ExtraBold.ttf';
import '../assets/fonts/static/PlusJakartaSans-Medium.ttf';
import '../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf';


function Main() {

    const [val, setVal] = useState(3);

    function handleClick() {
        setVal(0);
    }

    return (
        <section className="main">
            <div className="notification-div">
                <h3 className="notification-heading">Notifications <span className="notification-span">{val}</span></h3>
                <button type="button" className="notification-button" onClick={handleClick}>
                    <h4>Mark all as read</h4>
                </button>
            </div>
            
            {accData.map((acc, index) => {
                return (
                    <Account 
                        key={index}
                        id={index}
                        picLoc={acc.picLoc}
                        name={acc.name} 
                        notification={acc.notificatoin} 
                        link={acc.link}
                        time={acc.time}
                        extraData={acc.extradata}
                        pics={acc.pics}
                        value={val}
                    />
                );
            })}

        </section>
    );

}


export default Main;