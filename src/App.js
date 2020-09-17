import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShoppingList from './components/ShoppingList';
import Detail from './components/Detail'
import dataFake from './dataFake';

function App() {
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
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <ShoppingList items={items} onAdd={onHandleAdd} onChange={onChangeStatus} />
          </Route>
          <Route path="/:id">
            <Detail items={items} />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
