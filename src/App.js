import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Website</h1>
      </header>
      
      <main>
        <section className="hero">
          <h2>Discover Amazing Content</h2>
          <p>Your journey starts here</p>
          <button>Explore More</button>
        </section>

        <section className="features">
          <div className="feature-card">
            <h3>Feature One</h3>
            <p>Description of your first feature</p>
          </div>
          <div className="feature-card">
            <h3>Feature Two</h3>
            <p>Description of your second feature</p>
          </div>
          <div className="feature-card">
            <h3>Feature Three</h3>
            <p>Description of your third feature</p>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
