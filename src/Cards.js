import React from "react";
import img from "./IMG-Main.jpg";

export default function Cards(props)
{
    return(
        <div class="card">
            {props.item.badge && <div className="card-badge">{props.item.badge}</div>}
            <img src={img} alt="Downtown Solapur"/>
            <div class="card-details">
                <h3 class="card-title">{props.item.place}</h3>
                <p class="card-rating">Rating: {props.item.rating}</p>
                <p class="card-description">{props.item.description}</p>
                <p class="card-author">Author: {props.item.author}</p>
            </div>
        </div>
    );
}

