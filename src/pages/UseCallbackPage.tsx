import React, { useState, useCallback } from "react";

const TodoList = React.memo(function TodoList({
  items,
  onAddItem
}: { items: string[]; onAddItem: () => void }) {
  console.log("TodoList rendered");
  return (
    <div>
      <ul>{items.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
      <button onClick={onAddItem}>Add item</button>
    </div>
  );
});

export default function UseCallbackPage() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddItem = useCallback(() => {
    setTodos(prev => [...prev, `Todo ${prev.length + 1}`]);
  }, []);

  return (
    <div>
      <h3>UseCallback Todo</h3>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
      <TodoList items={todos} onAddItem={handleAddItem} />
    </div>
  );
}
