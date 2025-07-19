import React from "react";
import Title from "./Title";
import Button from "./Button";

const GameModeCard = ({ title, description, buttonText, image }) => {
  return (
    <div className="bg-black p-6 rounded-lg overflow-hidden relative">
      <div className="bg-gradient-to-br from-purple-600 to-blue-400 absolute inset-0 transform -skew-x-12 opacity-50" />
      <div className="relative z-10">
        <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <Title title={title} description={description} classNameTitle="text-center !text-3xl sm:!text-4xl !mb-2" />
        <Button className="mx-auto mt-4">{buttonText}</Button>
      </div>
    </div>
  );
};

const GameModeGrid = () => {
  const gameModes = [
    {
      title: "BATTLE ROYALE",
      description: "EPIC / DEATHRUN / COMBAT",
      buttonText: "PLAY NOW",
      image: "/images/battle-royale.jpg",
    },
    {
      title: "BATTLE LAB",
      description: "ROLEPLAY / CREATING / ADVENTURE / EPIC",
      buttonText: "CREATE NOW",
      image: "/images/battle-lab.jpg",
    },
    {
      title: "TEAM RUMBLE",
      description: "ZONEWARS / EPIC / COMBAT",
      buttonText: "JOIN NOW",
      image: "/images/team-rumble.jpg",
    },
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gameModes.map((mode, index) => (
            <GameModeCard key={index} {...mode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameModeGrid;
