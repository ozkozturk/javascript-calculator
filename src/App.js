import React from 'react';
import './App.css';
import Display from "./components/Display";
import OtherOperators from "./components/OtherOperators";
import FourOperations from "./components/FourOperations";
import Numbers from "./components/Numbers";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
const fourOperations = ["÷", "x", "-", "+", "="];
const otherOperators = ["C", "+/-", "%"];

const App = () => {
    return (
        <div className="App">
            <div className="display" id="display">
                <Display/>
            </div>
            <div className="buttons">
                <div className="nums">
                    <OtherOperators className="other-operators" otherOperators={otherOperators}/>
                    <Numbers className="numbers" numbers={numbers}/>
                </div>
                <div className="operators">
                    <FourOperations className="four-operations" fourOperations={fourOperations}/>
                </div>
            </div>
        </div>
    );
}

export default App;
