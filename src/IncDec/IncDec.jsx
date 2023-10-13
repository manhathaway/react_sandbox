import './IncDec.css'
import { useState } from "react";

const names = [
  "James",
  "Olivia",
  "Rodondo",
  "Wolfgang Armadeus",
  "Chio",
  "Andorrus",
];
let count = 0;

function IncDec() {
  const [name, setName] = useState("James");

  const handleClickInc = () => {
    if (count < names.length - 1) {
      ++count;
      setName(names[count]);
    }
  };

  const handleClickDec = () => {
    if (count > 0) {
      --count;
      setName(names[count]);
    }
  };

  return (
    <div className="body">
      <h1 className="heading">Increment & Decrement</h1>
      <div className="content IncDec-content">
        <p className="IncDec-subheading">Interact with the buttons below.</p>
        <div className="IncDec-subcontent">
          <div className="IncDec-buttons">
            <button className="IncDec-button" onClick={handleClickDec}>
              Decrement
            </button>
            <button className="IncDec-button" onClick={handleClickInc}>
              Increment
            </button>
          </div>
          <p id="IncDec-name">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default IncDec;
