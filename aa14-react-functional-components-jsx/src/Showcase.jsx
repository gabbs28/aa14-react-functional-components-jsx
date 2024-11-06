import squirtle from "./images/squirtle.jpg"
import styles from "./Showcase.css"

const favPokemon = "Squirtle";

const pokeCharacteristics = {
    type: "Water",
    move: "Bubble beam"
}

function Showcase() {
    return (
      <div className="parent">
        <h1>{favPokemon}&apos;s Showcase Component</h1>
        <br></br>
        <img src={squirtle} alt= "Squirtle" width="400" className="img"/>
        <br></br>
        <h2>Squirtle&apos;s type is <span className="type" >{pokeCharacteristics.type}</span> and one of his moves is <span  className="move">{pokeCharacteristics.move}</span></h2>
      </div>
    );
  }
  
  export default Showcase;