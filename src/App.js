import React, { useState } from 'react';
import './App.css';
import { Switch, Route, HashRouter } from 'react-router-dom';
import ShoppingList from './components/ShoppingList';
import Detail from './components/Detail'
import dataFake from './dataFake';

function App() {
  const [items, setItems] = useState(dataFake);
  const onHandleAdd = (item) => {
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
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/" exact>
            <ShoppingList items={items} onAdd={onHandleAdd} onChange={onChangeStatus} />
          </Route>
          <Route path="/detail-product/:id">
            <Detail items={items} />
          </Route>
        </Switch>
      </HashRouter>
    </div >
  );
}

export default App;

