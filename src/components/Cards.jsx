import React from "react";
import SingleCard from "./SingleCard";

const Cards = () => {
  return (
    <div>
      <div className="h-[90vh] flex items-center justify-center gap-20 mx-auto max-w-screen-xl">
        <SingleCard
          title="Writes Upside-Down"
          to="/cards/card1"
          src="/card.png"
          desc="The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space."
        />
        <SingleCard
          title="Dark Mode"
          src="/grid.png"
          to="/cards/card2"
          desc="Now that dark mode is a first-class feature of many operating systems, it’s becoming more and more common to design."
        />
      </div>
    </div>
  );
};

export default Cards;
