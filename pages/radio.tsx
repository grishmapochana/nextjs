import { useState } from "react";

export default function App() {
  const [focused, setFocused] = useState(false);
  const onFocus = () => {
    setFocused(true);
    console.log(true);
  };
  const onBlur = () => {
    setFocused(false);
    console.log(true);
  };

  return (
    <div className="bg-red-100  text-center container mx-auto">
      <input id="message" type="radio" onFocus={onFocus} onBlur={onBlur} />
      {/* <input ref={ref} autoFocus type="radio" id="message" name="message" /> */}
      <label
        htmlFor="message"
        className={`${
          focused
            ? `text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600`
            : `text-black`
        }`}
      >
        Is Checked
      </label>
    </div>
  );
}
