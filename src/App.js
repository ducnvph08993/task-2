import React, { useState } from 'react';
import './App.css';
import dataFake from './dataFake';
import firebase from './firebase';

function App() {
  const [items, setItems] = useState(dataFake);
  const [inputValue, setInputValue] = useState('');
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }
  const onHandleClick = () => {
    if (image === null) {
      const newItem = {
        name: inputValue,
        isSlected: false,
      }
      const newItems = [...items, newItem];
      setItems(newItems);
    }
    else {
      const uploadTask = firebase.storage().ref(`images/${image.name}`);
      uploadTask.put(image).then(() => {
        uploadTask.getDownloadURL()
          .then((url) => {
            console.log(url);
            const newItem = {
              name: inputValue,
              isSlected: false,
              image: url
            }
            const newItems = [...items, newItem];
            setItems(newItems);
          })
      })
    }
  }
  const toggleHandle = (index) => {
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  }
  return (
    <div className="App">
      <div className='container'>
        <h1 className="my-5">Shopping List</h1>
        <div className='add-item row mb-5'>
          <div className="form-group col-8">
            <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className='col-4'>
            <button type="submit" className="btn btn-primary" style={{ float: "left", width: 150 }} onClick={() => onHandleClick()}>Add New Item</button>
          </div>
          <div className="w-100"></div>
          <div className="form-group-file col-8">
            <input type="file" className="form-control" onChange={handleChange} />
          </div>
        </div>
        <div className='item-list row'>
          {items.map((item, index) => (
            (item.isSelected) ? (
              <div className="input-group col-12 mb-3" key={index}>
                <div className="input-group-text">
                  <input type="checkbox" aria-label="Checkbox for following text input" defaultChecked onClick={() => toggleHandle(index)} />
                </div>
                <label className='pl-3'><del>{item.name}</del></label>
                <div className='img-thumbnail ml-5'>
                  <img src={item.image} style={{ width: 50, height: 50, float: "left" }} alt='' />
                </div>
              </div>
            ) :
              (
                <div className="input-group col-12 mb-3" key={index}>
                  <div className="input-group-text">
                    <input type="checkbox" aria-label="Checkbox for following text input" onClick={() => toggleHandle(index)} />
                  </div>
                  <label className='pl-3 text-decoration-line-through'>{item.name}</label>
                  <div className='img-thumbnail ml-5'>
                    <img src={item.image} style={{ width: 50, height: 50, float: "left" }} alt='' />
                  </div>
                </div>
              )
          ))}
          {/* <div className='col-8'>
            <img src='#' style={{ width: 50, height: 100, float: "left" }} />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
