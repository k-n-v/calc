import {useState} from 'react';

function App() {


const [calc, setCalc] = useState('');
const [result, setResult] = useState('');


const operators = ['/', '*', '+', '-', '.'];

const updateCalc = value => {

  if(
    operators.includes(value) && calc === '' || 
    operators.includes(value) && operators.includes(calc.slice(-1))
  ) {
    return;
  }

  setCalc(calc + value);
  setResult()
}



const createDigits = () => {
  const digits = [];

  for(let i = 1; i < 10; i++) {
    digits.puch(
      <button onClick={() => updateCalc(i.toString())} key={i}>
        {i}
      </button>
    )
  }
  return digits;
}



  return (
    <div className="App">
      <div className="calculator">
        <div className="display"></div>
        <div className="operators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
          <button>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
        <button>0</button>
        <button>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
