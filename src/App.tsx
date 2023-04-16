import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <h2>Todos</h2>
          <div className="todoapp">
            <Counter />
            {/* <Footer /> */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
