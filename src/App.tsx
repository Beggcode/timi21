import './App.css';
import UseStatePage from './pages/UseStatePage';
import UseRefPage from './pages/UseRefPage';
import UseMemoPage from './pages/UseMemoPage';
import UseCallbackPage from './pages/UseCallbackPage';
import Timaverkefni21 from './pages/Timaverkefni21';
import { JSX } from 'react';

function HomePage(): JSX.Element {
  return (
    <main>
      <header>
        <h1>Demo Hooks Playground</h1>
        <p>Fresh Vite + React + TypeScript project</p>
      </header>

      <section>
        <h2>UseState</h2>
        <UseStatePage />
      </section>

      <section>
        <h2>UseRef</h2>
        <UseRefPage />
      </section>

      <section>
        <h2>UseMemo</h2>
        <UseMemoPage />
      </section>

      <section>
        <h2>UseCallback</h2>
        <UseCallbackPage />
      </section>
      <section>
        <h2>Timaverkefni21</h2>
        <Timaverkefni21 />
      </section>
    </main>
  );
}

export default function App(): JSX.Element {
  return <HomePage />;
}
