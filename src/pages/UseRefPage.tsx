import { useRef, useEffect } from "react";

export default function UseRefPage() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  const handleFocusClick = () => {
    buttonRef.current?.focus();
  };

  return (
    <div>
      <div>
        <h3>Focus Button</h3>
        <button ref={buttonRef} onClick={() => alert("Clicked")}>
          Focusable Button
        </button>
        <button onClick={handleFocusClick}>Focus it</button>
      </div>

      <div>
        <h3>Render Counter</h3>
        <p>Rendered {renderCount.current} times</p>
      </div>
    </div>
  );
}
