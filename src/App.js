import Lottie from "lottie-react"
import './App.css';
import Home from "./Component/img/Home/home";
import  AboutMoney  from "./Component/AboutMoney/aboutMoney.js";
import  Block  from "./Component/Blocks/block.js";
import  Experienced  from "./Component/Experience/experience.js"
import  Transaction  from "./Component/Transaction/transaction.js"
import Bottom from "./Component/Bottom/bottom.js";
import Navbar from "./Component/Navbar/navbar";



function App() {
  return (
  
    <div className="App">
      {/* <Lottie animationData = {Girl} /> */}
      <Navbar />
      <Home/>
      
      <Block />
      <AboutMoney />
      <Experienced />
      <Transaction />
      <Bottom />
    </div>
  );
}

export default App;
