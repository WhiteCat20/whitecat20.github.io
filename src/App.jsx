import "./App.css";

const App = () => {
  return (
    <>
      <div className="App" style={{
        marginTop: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1>Big changes will come, still cooking...</h1>
        <span style={{ fontSize: 90 }}>🍳</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <small style={{ textAlign: 'center', color: 'white' }}>Awesome ideas crafted by {" "}
          <a href="https://www.linkedin.com/in/fzrahmadan/">faizrahmadani</a></small>
      </div>
    </>

  );
};

export default App;
