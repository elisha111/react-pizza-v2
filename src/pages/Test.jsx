import React from "react";

const Test = () => {
  const [valText, setValText] = React.useState("");
  const onChange = (event) => setValText(event.target.value);

  let num = 10;

  let minNum = 10;
  let maxNum = 99;

  const [valRange, setValRange] = React.useState(10);
  const onChangeRange = (event) => setValRange(event.target.value);

  const onChangeNum = (event) => {
    const value = Number(event.target.value);

    if (value < minNum) {
      setValRange(minNum);
    } else if (value > maxNum) {
      setValRange(maxNum);
    } else {
      setValRange(Number(value));
    }
  };
  //   const onChangeNum = (event) => setValRange(event.target.value);
  return (
    <div>
      <div>обычное поле ввода</div>
      <input type="text" value={valText} onChange={onChange} />
      <button onClick={() => alert(valText)}>Алерт</button>
      <br />

      <div>range</div>
      <input
        onChange={onChangeRange}
        value={valRange}
        type="range"
        min={minNum}
        max={maxNum}
        step="1"
      />
      <input
        onChange={onChangeNum}
        type="number"
        min={minNum}
        max={maxNum}
        value={valRange}
      />
      <div>сумма: {num * valRange}</div>
    </div>
  );
};

export default Test;
