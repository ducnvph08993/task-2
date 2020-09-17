import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import ShoppingList from './components/ShoppingList';
import Detail from './components/Detail'
import dataFake from './dataFake';

function App() {
  console.log("a:" + process.env.PUBLIC_URL);
  const [items, setItems] = useState(dataFake);
  const onHandleAdd = (item) => {
    console.log(item);
    setItems([
      ...items,
      item
    ])
  }
  const onChangeStatus = () => {
    setItems([
      ...items
    ])
  }
  const Abc = function () {
    return <h1>ABC</h1>;
  }

  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact>
            <ShoppingList items={items} onAdd={onHandleAdd} onChange={onChangeStatus} />
          </Route>
          <Route path="/detail-product/:id">
            <Detail items={items} />
          </Route>
          <Route path="/abc">
            <Abc />
          </Route>
        </Switch>
      </HashRouter>
    </div >
  );
}

export default App;
