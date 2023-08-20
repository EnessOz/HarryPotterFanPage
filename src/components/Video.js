import React, { useEffect, useState } from 'react';
import { ImMagicWand } from "react-icons/im"

export const Video = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const fadeInTimer = setTimeout(() => {
            setVisible(true);
        },);

        const fadeOutTimer = setTimeout(() => {
            setVisible(false);
        }, 2250);

        return () => {
            clearTimeout(fadeInTimer);
            clearTimeout(fadeOutTimer);
        };
    }, []);

    return (
        <div className="video-container">
            <video className="video" autoPlay muted loop>
                <source src="/videos/Hogwarts.mp4" type="video/mp4" />
            </video>
            <div className="overlay-text">
                <h1><ImMagicWand /></h1>
                <h2 className={`overlay-h ${visible ? 'fade-out' : 'fade-in'}`}>WELCOME</h2>
                <h2 className={`overlay-h ${visible ? 'fade-out' : 'fade-in'}`}>TO</h2>
                <h2 className={`overlay-h ${visible ? 'fade-out' : 'fade-in'}`}>HOGWARTS</h2>
                <h6 className={`overlay-h ${visible ? 'fade-out' : 'fade-in'}`}>Enjoy your magical journey...</h6>
                <div>
                    <form action="/arama-sonuclari" method="GET">
                        <input className={`overlay-h ${visible ? 'fade-out' : 'fade-in'}`} style={{ width: "100%", backgroundColor: "wheat" }} type="text" name="q" placeholder="Wizardly Exploration"></input>
                    </form>
                </div>
            </div>

        </div>
    );
};
