import {useState} from 'react';

function App() {

const [number, setNumber] = useState('');
const [storedNumber, setStoredNumber] = useState('');
const [functionType, setFunctionType] = useState('');

const operators = ['/', '*', '+', '-'];
const point = '.';
//проверка вводимых данных
const displayValue = num => {
 if((!number.includes('') || num !== '.') && number.length < 8){
    setNumber(`${(number + num).replace(/^0+/, '')}`);
  }
};

//сохранение введенных данных
const SetStoredValue = () => {
  setStoredNumber(number);
  setNumber('');
}


//матем. вычисления
const doMath = () => {
  if (number && storedNumber) {
    switch (functionType) {
        case '+':
        setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`);
        break;
        case '-':
        setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 100}`) / 100}`);
        break; 
        case '/':
        setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 100}`) / 100}`);
        break;
        case '*':
        setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) * parseFloat(number)) * 100}`) / 100}`);
        break;
        default:
        break;  
    }
    setNumber('');
  }
};





const SetCalcFunction = type => {
  if(number) {
    setFunctionType(type);
    SetStoredValue();
  }
  if(storedNumber) {
    setFunctionType(type);
  }
};


//очистка
const clearValue = () => {
  setNumber('');
  setStoredNumber('');
  setFunctionType('');
}


//цыфровые кнопки
const createDigits = () => {
  const digits = [];
  for(let i = 0; i < 10; i++) {
    digits.push(
      <button onClick={() => displayValue(i.toString())} key={i}>
        {i}
      </button>
    )
  }
  return digits;
}

const createOperators = () => {
  const operator = operators.map((item, index) => <button 
    key={index} 
    onClick={() => SetCalcFunction(item.toString())}>
      {item}
      </button> );
      return operator;
}


//удаление символов
const deleteLast =() => {
  if(number !== '') {
    const deletedNumber = number.slice(0, number.length -1);
    setNumber(deletedNumber);
  }
}



  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>
            {!number.length && !storedNumber ?
             '0' : number || storedNumber}
          </span>
        </div>
        <div className="operators">
          {createOperators()}
          <button onClick={() => clearValue()}>C</button>
          <button onClick={() => deleteLast()}>DEL</button>
        </div>
        <div className="digits">
           {createDigits()}
         <button onClick={() => displayValue(point)}>.</button>
            
        <button onClick={() => doMath()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
