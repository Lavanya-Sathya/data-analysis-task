import Flavanoid from "./Flavanoid";
import { useState } from "react";
import Gamma from "./Gamma";
function App() {
  const [isFlavanoid, setIsFlavanoid] = useState(false);
  const [isGamma, setIsGamma] = useState(false);
  const [isHome, setIsHome] = useState(true);

  const handleHomeClick = () => {
    setIsFlavanoid(false);
    setIsGamma(false);
    setIsHome(true);
  };
  const handleFlavanoid = () => {
    setIsFlavanoid(true);
    setIsGamma(false);
    setIsHome(false);
  };
  const handleGamma = () => {
    setIsGamma(true);
    setIsFlavanoid(false);
    setIsHome(false);
  };
  return (
    <div className="App">
      {/* Header  */}
      <div className="header">
        <ul>
          <li onClick={handleHomeClick}>Home</li>
          <li onClick={handleFlavanoid}>Flavanoid</li>
          <li onClick={handleGamma}>Gamma</li>
        </ul>
      </div>
      {/* table will be loaded here */}
      <div className="table-container">
        {isFlavanoid && <Flavanoid />}
        {isGamma && <Gamma />}
        {isHome && (
          <div className="home">
            <h3>Data Analysis</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
