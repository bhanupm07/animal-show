import React from "react";
import AnimalShow from "./AnimalShow";
import "./App.css"

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

export default function App() {
    const [animals, setAnimals] = React.useState([]);

    function handleClick(e) {
        setAnimals([...animals, getRandomAnimal()]);
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })

  return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <p className="para">(Continuously click on any animal you like and watch your love💖flourish)</p>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
  )
}
