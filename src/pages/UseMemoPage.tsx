import { useState, useMemo } from "react";

function slowFib(n: number) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const t = a + b;
    a = b;
    b = t;
  }
  return b;
}

export default function UseMemoPage() {
  const [number, setNumber] = useState(10);
  const [isDark, setIsDark] = useState(false);

  const fibValue = useMemo(() => slowFib(number), [number]);

  return (
    <div style={{ backgroundColor: isDark ? "black" : "white", color: isDark ? "white" : "black", padding: "1rem" }}>
      <h3>Memoized Fibonacci</h3>
      <input type="number" value={number} onChange={e => setNumber(Number(e.target.value))} />
      <p>Fib({number}) = {fibValue}</p>
      <button onClick={() => setIsDark(prev => !prev)}>Toggle Theme</button>
    </div>
  );
}
