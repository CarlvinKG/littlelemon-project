import React from "react";

const HeroText = ({Text}) => {
    const text = ["<p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p><a href='/reservations'><button class='btn'>Reserve a Table</button></a>", "<h2 class='resrv'>Reserve a Table</h2>", "<h2 class='resrv'>Personal Details</h2>", "<h2 class='resrv'>Confirmation</h2>"];

    return (
        <div dangerouslySetInnerHTML={{__html: text[Text]}} />
    );
};

export default HeroText;