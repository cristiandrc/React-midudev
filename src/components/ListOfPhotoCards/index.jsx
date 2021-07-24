import React from "react";
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCards = () => (
    <ul>
        {[1, 23, 3, 32].map((item) => (
            <PhotoCard key={item} />
        ))}
    </ul>
);
