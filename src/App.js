import "./App.css";

function App() {
  return (
    <main>
      <h1>
        400<span>.00</span>
      </h1>
      <form>
        <div className="basic">
          <input type="text" placeholder="+200 new samsung tv" />
          <input type="date" />
        </div>
        <div className="description">
          <input type="text" placeholder="Add description" />
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung Tv</div>
            <div className="description">It was time for new tv</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2022-12-18 15.45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">For new Website</div>
            <div className="description">It was time for new tv</div>
          </div>
          <div className="right">
            <div className="price green">+$500</div>
            <div className="datetime">2022-12-18 15.45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Iphone</div>
            <div className="description">It was time for new tv</div>
          </div>
          <div className="right">
            <div className="price red">-$900</div>
            <div className="datetime">2022-12-18 15.45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
