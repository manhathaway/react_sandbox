import './Calculator.css'

function Calculator() {
    return (
        <div className="body">
            <h2 className="heading">Calculator</h2>
            <div className="content Calculator-content">
                <div className="Calculator-output">
                    <div className="Calculator-previous-operand"></div>
                    <div className="Calculator-current-operand"></div>
                </div>
                <div className="Calculator-grid">
                    <button style={{gridArea: "-AC"}} id="AC">AC</button>
                    <button style={{gridArea: "-DEL"}} id="DEL">DEL</button>
                    <button style={{gridArea: "-EQU"}} id="EQU">=</button>
                    
                    <button style={{gridArea: "-MUL"}} id="MUL">*</button>
                    <button style={{gridArea: "-DIV"}} id="DIV">/</button>
                    <button style={{gridArea: "-ADD"}} id="ADD">+</button>
                    <button style={{gridArea: "-SUB"}} id="SUB">-</button>
                    <button style={{gridArea: "-DEC"}} id="DEC">.</button>

                    <button style={{gridArea: "one"}} id="one">1</button>
                    <button style={{gridArea: "two"}} id="two">2</button>
                    <button style={{gridArea: "thr"}} id="thr">3</button>
                    <button style={{gridArea: "fou"}} id="fou">4</button>
                    <button style={{gridArea: "fiv"}} id="fiv">5</button>
                    <button style={{gridArea: "six"}} id="six">6</button>
                    <button style={{gridArea: "sev"}} id="sev">7</button>
                    <button style={{gridArea: "eig"}} id="eig">8</button>
                    <button style={{gridArea: "nin"}} id="nin">9</button>
                    <button style={{gridArea: "nu1"}} id="nu1"></button>
                    <button style={{gridArea: "zer"}} id="zer">0</button>
                    <button style={{gridArea: "nu2"}} id="nu2"></button>
                    
                </div>
            </div>
        </div>
    );
}

export default Calculator;