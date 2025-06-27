import "./App.css";
import Vijay from "./components/Vijay";
import vijayImg from "./assets/image/vijay.jpg"
import dhanushImg from "./assets/image/dhanush.jpg"
import vikramImg from "./assets/image/vikram.jpg"

function App() {
  return (
    <div className="container">
      <h1>Actors</h1>
      <Vijay DPimg={vijayImg} Name={"Vijay"} About='Joseph Vijay Chandrasekhar (born 22 June 1974), known professionallyas Vijay, is an Indian actor and playback singer who works in Tamilcinema. In a career spanning over three decades, Vijay has acted in 68films and is one of the most commercially successful actors in Tamilcinema with multiple films amongst the highest-grossing Tamil films ofall time and is amongst the highest paid actors in India. He has wonseveral awards as an actor. Referred to as "Thalapathy"(transl. Commander), Vijay has a significant fan following.' NoOfMoviesActed="68"/>

      <Vijay DPimg={dhanushImg} Name="Dhanush" About={'Joseph Vijay Chandrasekhar (born 22 June 1974), known professionallyas Vijay, is an Indian actor and playback singer who works in Tamilcinema. In a career spanning over three decades, Vijay has acted in 68films and is one of the most commercially successful actors in Tamilcinema with multiple films amongst the highest-grossing Tamil films ofall time and is amongst the highest paid actors in India. He has wonseveral awards as an actor. Referred to as "Thalapathy"(transl. Commander), Vijay has a significant fan following.'} NoOfMoviesActed="48"/>

      <Vijay DPimg={vikramImg} Name="Vikram" About={'Joseph Vijay Chandrasekhar (born 22 June 1974), known professionallyas Vijay, is an Indian actor and playback singer who works in Tamilcinema. In a career spanning over three decades, Vijay has acted in 68films and is one of the most commercially successful actors in Tamilcinema with multiple films amongst the highest-grossing Tamil films ofall time and is amongst the highest paid actors in India. He has wonseveral awards as an actor. Referred to as "Thalapathy"(transl. Commander), Vijay has a significant fan following.'} NoOfMoviesActed="70"/>
    </div>
  );
}

export default App;
