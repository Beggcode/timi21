import React, { useState, useRef, useMemo, useCallback } from "react";

export default function Timaverkefni21() {
  /* -------------------- ANSWER FUNCTIONS -------------------- */

  /* useState */
  function StateAnswer1() {
    // Verkefni 1 - Counter
    // Notið useState
    const [count, setCount] = useState(0);

    return (
      <div>
        <h3>Counter</h3>
        <p>Count: {count}</p>

        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </div>
    );
  }
  function StateAnswer2() {
    // Verkefni 2 - Nafn
    // Notið useState
    const [name, setName] = useState("");
    return (
      <div>
        <input value={name} onChange={e => setName(e.target.value)} />
        <p>Halló, {name}!</p>
      </div>
    );
  }

  function StateAnswer3() {
    // Verkefni 3 - Lykilorð
    // Notið useState
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div>
        <input type={showPassword ? "text" : "password"} />
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Fela" : "Sýna"} lykilorð
        </button>
      </div>
    );
  }

  /* useRef */
  function RefAnswer1() {
    // Verkefni 1 - Fókus
    // Notið useRef á input til að fókusa á hann þegar user ýtir á takka
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const handleFocusClick = () => {
      buttonRef.current?.focus();
    };
    return (
      <div>
        <button ref={buttonRef} onClick={() => alert("Clicked")}>
          Focusable Button
        </button>
        <button onClick={handleFocusClick}>Focus it</button>
      </div>
    );
  }

  function RefAnswer2() {
    // Verkefni 2 - Fyrra gildi
    // Notið useRef til að geyma fyrra gildið á input
    const previous = useRef("");
    const [value, setValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      previous.current = value;
      setValue(e.target.value);
    };
    return (
      <div>
        <input value={value} onChange={handleChange} />
        <p>Núverandi gildi: {value}</p>
        <p>Fyrra gildi: {previous.current}</p>
      </div>
    )
  }

  function RefAnswer3() {
    // Verkefni 3 - Takki sem mælir tíma
    // Notið useRef til að mæla tímann sem user haldir inni takka
    //  hint: mousedown og mouseup events
    return <div>{/* Lausn */}</div>;
  }

  /* useMemo */
  function MemoAnswer1() {
    // Verkefni 1 - Heildarsumma og meðaltal lista
    // Notið useMemo til að reikna heildarsummu og meðaltal lista
    const [numbers, setNumbers] = useState([10, 5, 7, 3]);
    const [newNumber, setNewNumber] = useState(0);

    function addNumber() {
      // bætið við virkni inn í addNumber function sem bætir við nýju tölu í lista
      return;
    }
    // bætið við útreikningum hér inn
    const stats = useMemo(() => {
      console.log("Reikna summu og meðaltal...");
      const sum = 0; // bæta við summa útreikningum hér inn
      const avg = 0; // bæta við meðaltal útreikningum hér inn
      return { sum, avg };
    }, [numbers]);

    return (
      <div>
        <p>Heildarsumma & meðaltal lausn</p>
        <p>Listi: {numbers.length === 0 ? "tómur" : numbers.join(", ")}</p>
        <p>Heildarsumma: {stats.sum}</p>
        <p>Meðaltal: {stats.avg.toFixed(2)}</p>

        <div style={{ marginTop: "0.5rem" }}>
          <input
            type="number"
            value={newNumber}
            onChange={(e) => setNewNumber(Number(e.target.value))}
            style={{ width: "4rem" }}
          />
          <button onClick={addNumber} style={{ marginLeft: "0.5rem" }}>
            Bæta við tölu
          </button>
        </div>
      </div>
    );
  }

  function MemoAnswer2() {
    const users = ["Anna", "Bjarni", "Katrín", "Björk"];
    const [search, setSearch] = useState("");

    //   notið useMemo til að sía lista útfrá input sem notandi skrifar inn
    // const filtered = ???????
    return (
      <div>
        <p>Sía lista lausn</p>
        <input
          placeholder="Leit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
          {/* Takið commentið frá þegar filtered er búið til */}
          {/* {filtered.map((u) => (
            <li key={u}>{u}</li>
          ))} */}
        </ul>
      </div>
    );
  }

  function MemoAnswer3() {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    // notið 2 input sem notandi getur skrifað inn fornafn og eftirnafn og notaðu useMemo til að búa til fullt nafn og birtið það fyrir neðan input
    return <div>{/* Lausn */}</div>;
  }

  /* useCallback */
  function CallbackAnswer1() {
    // Verkefni 1 - Memoized handler
    // Notið useCallback til að memoize handler function sem hækkar teljara
    return <div>{/* Lausn */}</div>;
  }

  function CallbackAnswer2() {
    // Verkefni 2 - Toggle theme
    // Notið useCallback til að memoize handler function sem skiptir um þema á síðunni
    const [dark, setDark] = useState(false);
    const toggleTheme = () => {
      // Bæta við virkni á toggle theme með useCallback
      return;
    };
    const themeStyles = useMemo(
      () => ({
        backgroundColor: dark ? "#111" : "#fff",
        color: dark ? "#f5f5f5" : "#111",
        padding: "1rem",
        borderRadius: "8px",
        border: `1px solid ${dark ? "#333" : "#ddd"}`,
        transition: "background-color 200ms ease, color 200ms ease",
      }),
      [dark]
    );

    return (
      <div style={themeStyles}>
        <p>Toggle þema lausn</p>
        <button onClick={toggleTheme}>Skipta um þema</button>
        <p>{dark ? "Dökkt" : "Bjart"} þema</p>
      </div>
    );
  }

  function CallbackAnswer3() {
    const items = ["banana", "apple", "orange", "pear"];
    const [search, setSearch] = useState("");

    // notið useCallback til að memoize handler function sem filterar lista útfrá input sem notandi skrifar inn
    const filterItems = () => {
      // bæta við filterItems útreikningum hér inn
      return [];
    };

    return (
      <div>
        <p>Callback filter lausn</p>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Leit..."
        />
        <ul>
          {filterItems().map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    );
  }

  /* -------------------- PAGE STRUCTURE -------------------- */

  return (
    <div style={{ padding: "1.5rem", maxWidth: "800px" }}>
      <h2>Tímaverkefni 21</h2>
      <p>
        Í þessu verkefni æfir þú þig í <code>useState</code>,{" "}
        <code>useRef</code>, <code>useMemo</code> og <code>useCallback</code>.
      </p>

      {/* useState */}
      <section style={{ marginTop: "2rem" }}>
        <h3>1. useState</h3>

        <h4>Verkefni 1 – Counter</h4>
        <p>
          Búðu til teljara með <code>useState</code> sem:
        </p>
        <ul>
          <li>Byrjar í 0</li>
          <li>Hækkar um 1 þegar ýtt er á &quot;+&quot; hnapp</li>
          <li>Lækkar um 1 þegar ýtt er á &quot;-&quot; hnapp</li>
          <li>Reset hnappur setyr teljarann aftur í 0</li>
        </ul>
        <h3>Lausn:</h3>
        {StateAnswer1()}

        <h4>Verkefni 2 – Nafn í rauntíma</h4>
        <p>
          Búðu til input sem uppfærir „Halló, nafn!“ textann. Þegar notandi
          skrifar inn nafn, þá á að birta það í textann.
        </p>
        <h3>Lausn:</h3>
        {StateAnswer2()}

        <h4>Verkefni 3 – Sýna/Fela lykilorð</h4>
        <p>
          Búðu til lykilorðsinput sem notandi getur ýtt á takka til að
          sýna/fela.
        </p>
        <h3>Lausn:</h3>
        {StateAnswer3()}
      </section>

      {/* useRef */}
      <section style={{ marginTop: "2rem" }}>
        <h3>2. useRef</h3>

        <h4>Verkefni 1 – Fókusa á input</h4>
        <p>Búðu til input sem notandi getur fókus á með því að ýta á takka.</p>
        <h3>Lausn:</h3>
        {RefAnswer1()}

        <h4>Verkefni 2 – Geyma fyrra gildi</h4>
        <p>
          Búðu til input sem notandi getur skrifað inn gildi, birtu núverandi
          gili og fyrra gildið með previous.current.
        </p>
        <h3>Lausn:</h3>
        {RefAnswer2()}

        <h4>Verkefni 3 – Takki sem mælir tíma</h4>
        <p>
          Búðu til takka sem notandi getur ýtt á til að byrja tíman og telja
          hversu lengi hnappurinn hefur verið haldinn inni.
        </p>
        <h3>Lausn:</h3>
        {RefAnswer3()}
      </section>

      {/* useMemo */}
      <section style={{ marginTop: "2rem" }}>
        <h3>3. useMemo</h3>

        <h4>Verkefni 1 – Heildarsumma og meðaltal lista</h4>
        <p>
          Búðu til lista af tölum og notaðu <code>useMemo</code> til að reikna
          heildarsummu og meðaltal. Útreikningurinn á bara að keyra þegar
          listinn breytist.
        </p>
        <h3>Lausn:</h3>
        {MemoAnswer1()}

        <h4>Verkefni 2 – Filter listi</h4>
        <p>
          Búðu til lista af notendum og notaðu <code>useMemo</code> til að
          filter listann útfrá input sem notandi skrifar inn.
        </p>
        <h3>Lausn:</h3>
        {MemoAnswer2()}

        <h4>Verkefni 3 – Fullt nafn</h4>
        <p>
          Búðu til input sem notandi getur skrifað inn fornafn og eftirnafn og
          notaðu <code>useMemo</code> til að búa til fullt nafn.
        </p>
        <h3>Lausn:</h3>
        {MemoAnswer3()}
      </section>

      {/* useCallback */}
      <section style={{ marginTop: "2rem" }}>
        <h3>4. useCallback</h3>

        <h4>Verkefni 1 – Memoized handler</h4>
        <p>
          Notið useCallback til að memoize handler function sem hækkar teljara.
        </p>
        <h3>Lausn:</h3>
        {CallbackAnswer1()}

        <h4>Verkefni 2 – Toggle theme</h4>
        <p>
          Búðu til takka sem notandi getur ýtt á til að skipta um þemað á
          síðunni.
        </p>
        <h3>Lausn:</h3>
        {CallbackAnswer2()}

        <h4>Verkefni 3 – Filter callback</h4>
        <p>
          Búðu til input sem notandi getur skrifað inn leit og notaðu
          <code>useCallback</code> til að filter lista útfrá leitinni.
        </p>
        <h3>Lausn:</h3>
        {CallbackAnswer3()}
      </section>
    </div>
  );
}

