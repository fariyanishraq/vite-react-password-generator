/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Clipboard, ArrowBigRight, ClipboardCheck } from "lucide-react";
import React, { useState } from "react";
export default function App() {
  //useStates
  const [clipboard, setClipboard] = useState<boolean>();
  const [password, setPassword] = React.useState<string>("");
  const [length, setLength] = React.useState<number>(8);
  const [lowercase, setLowerCase] = React.useState<boolean>(true);
  const [uppercase, setUppercase] = React.useState<boolean>(true);
  const [numbers, setNumbers] = React.useState<boolean>(false);
  const [specialCharacter, setSpecialCharacter] = React.useState<boolean>(false);
  //password generate function
  const generatePassword = () => {
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const specialChars = "!@#$%^&*";
    const numberChar = "0123456789";
    let charset = "";
    let newPassword = "";
    //conditions
    if (uppercase) charset += upperCaseChar;
    if (lowercase) charset += lowerCaseChar;
    if (specialCharacter) charset += specialChars;
    if (numbers) charset += numberChar;
    //for-loop
    for (let index = 0; index < length; index++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };
  //onState Change fn
  const onStateLowercase = () => {
    setLowerCase(!lowercase);
  };
  const onStateUppercase = () => {
    setUppercase(!uppercase);
  };
  const onStateNumber = () => {
    setNumbers(!numbers);
  };
  const onStateSpecialChar = () => {
    setSpecialCharacter(!specialCharacter);
  };
  const onStateClipboard = () => {
    if (password === null) {
      setClipboard(false);
    } else {
      setClipboard(!clipboard);
      navigator.clipboard.writeText(password);
    }
  };
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setClipboard(false);
    }, 1000);
    return () => clearTimeout(timer)
  }, [clipboard]);
  React.useEffect(()=>{
    generatePassword()
  },[])
  // checkbox in array
  const checklist = [
    {
      id: 0,
      name: "Include Lowercase",
      onChangeFn: onStateLowercase,
      checked: lowercase,
    },
    {
      id: 1,
      name: "Include Uppercase",
      onChangeFn: onStateUppercase,
      checked: uppercase,
    },
    {
      id: 2,
      name: "Include Special Charracter",
      onChangeFn: onStateSpecialChar,
      checked: specialCharacter,
    },
    {
      id: 3,
      name: "Include Numbers",
      onChangeFn: onStateNumber,
      checked: numbers,
    },
  ];

  return (
    <div className="w-[300px] flex flex-col gap-1">
      <h1 className="w-full text-center text-mauve-30 text-lg">
        Password Generator
      </h1>
      <div className="flex justify-between items-center bg-mauve-90 rounded-t-md p-4">
        <div>
          <input
            type="text"
            className="input-pass"
            placeholder="Password Generates here"
            value={password}
            readOnly
          />
        </div>
        <div>
          <button onClick={onStateClipboard}>
            {clipboard ? <ClipboardCheck /> : <Clipboard />}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 rounded-b-md bg-mauve-90">
        <div>
          <div className="flex justify-between ">
            <h1>Character Length</h1>
            <h1>{length}</h1>
          </div>
          <input
            className="input-range"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            type="range"
            min={0}
            max={100}
          />
        </div>
        <div>
          {checklist.map((index) => (
            <p key={index.id} className="flex justify-start items-center gap-5">
              <span>
                <input
                  className="accent-green-500"
                  checked={index.checked}
                  onChange={index.onChangeFn}
                  type="checkbox"
                />
              </span>
              <span>
                <h1>{index.name}</h1>
              </span>
            </p>
          ))}
        </div>
        <button
          type="submit"
          onClick={generatePassword}
          className="flex p-2 justify-center gap-2 items-center border border-mauve-70 transition hover:border-green-500 hover:text-green-500 hover:delay-100 "
        >
          <span>GENERATE</span>
          <span>
            <ArrowBigRight />
          </span>
        </button>
      </div>
    </div>
  );
}
