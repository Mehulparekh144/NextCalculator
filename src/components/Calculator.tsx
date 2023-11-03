"use client";
import React, { useState } from "react";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState<string>("0");

  const changeValue = (item: string) => {
    if (currentValue === "0") {
      setCurrentValue(item);
    } else {
      setCurrentValue(currentValue + item);
    }
  };

  const clearValue = () => {
    setCurrentValue("0");
  };

  const calculate = (value: string) => {
    try {
      const validValue = validateInput(value);
      const result = eval(validValue);

      if (isNaN(result)) {
        setCurrentValue("NaN");
      } else {
        setCurrentValue(result);
      }
    } catch (error) {
      setCurrentValue("NaN");
    }
  };

  const validateInput = (input: string) => {
    const validatedInput = input.replace(/[^0-9+\-*/.]/g, "");
    if (/[0-9.]$/.test(validatedInput)) {
      return validatedInput;
    } else {
      return "0";
    }
  };

  return (
    <div className="grid ring-4 px-2 py-12 ring-blue-900/10 shadow-2xl text-white bg-blue-400 rounded-md grid-cols-4 grid-rows-6 gap-3 mx-4 md:mx-10">
      <div className="col-span-4 w-full ">
        <input
          type="text"
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          defaultValue={0}
          className="w-full text-3xl text-blue-800 bg-white/60 backdrop-blur-3xl py- px-2 rounded-lg outline-none text-right"
        />
      </div>
      <button
        onClick={clearValue}
        className="col-span-3 buttonStyle "
      >
        C
      </button>
      <button
        onClick={() => changeValue("/")}
        className="col-span-1 buttonStyle"
      >
        /
      </button>
      <button
        onClick={() => changeValue("7")}
        className="col-span-1 buttonStyle"
      >
        7
      </button>
      <button
        onClick={() => changeValue("8")}
        className="col-span-1 buttonStyle"
      >
        8
      </button>
      <button
        onClick={() => changeValue("9")}
        className="col-span-1 buttonStyle"
      >
        9
      </button>
      <button
        onClick={() => changeValue("*")}
        className="col-span-1 buttonStyle"
      >
        *
      </button>
      <button
        onClick={() => changeValue("4")}
        className="col-span-1 buttonStyle"
      >
        4
      </button>
      <button
        onClick={() => changeValue("5")}
        className="col-span-1 buttonStyle"
      >
        5
      </button>
      <button
        onClick={() => changeValue("6")}
        className="col-span-1 buttonStyle"
      >
        6
      </button>
      <button
        onClick={() => changeValue("+")}
        className="col-span-1 buttonStyle"
      >
        +
      </button>
      <button
        onClick={() => changeValue("1")}
        className="col-span-1 buttonStyle"
      >
        1
      </button>
      <button
        onClick={() => changeValue("2")}
        className="col-span-1 buttonStyle"
      >
        2
      </button>
      <button
        onClick={() => changeValue("3")}
        className="col-span-1 buttonStyle"
      >
        3
      </button>
      <button
        onClick={() => changeValue("-")}
        className="col-span-1 buttonStyle"
      >
        -
      </button>
      <button
        onClick={() => changeValue("0")}
        className="col-span-2 buttonStyle"
      >
        0
      </button>
      <button
        onClick={() => changeValue(".")}
        className="col-span-1 buttonStyle"
      >
        .
      </button>
      <button
        onClick={() => calculate(currentValue)}
        className="col-span-1 buttonStyle"
      >
        =
      </button>
    </div>
  );
};

export default Calculator;
