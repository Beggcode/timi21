import { useState } from "react";

export default function UseStatePage() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div>
        <h3>Counter</h3>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </div>

      <div>
        <h3>Name Input</h3>
        <input
          placeholder="Type your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Hello, {name || "stranger"}!</p>
      </div>

      <div>
        <h3>Password Toggle</h3>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => setShowPassword((prev) => !prev)}>
          Toggle
        </button>
      </div>
    </div>
  );
}
