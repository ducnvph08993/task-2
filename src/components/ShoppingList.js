import React, { useState } from 'react'
import firebase from '../firebase';
import { Link } from 'react-router-dom';

const ShoppingList = ({ items, onAdd, onChange }) => {
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
                id: Math.random().toString(36).substr(2, 9),
                name: inputValue,
                isSelected: false,
                image: null
            }
            onAdd(newItem);
        }
        else {
            const uploadTask = firebase.storage().ref(`images/${image.name}`);
            uploadTask.put(image).then(() => {
                uploadTask.getDownloadURL()
                    .then((url) => {
                        const newItem = {
                            id: Math.random().toString(36).substr(2, 9),
                            name: inputValue,
                            isSelected: false,
                            image: url
                        }
                        console.log(newItem);
                        onAdd(newItem);
                    })
            })
        }
    }
    const toggleHandle = (index) => {
        items[index].isSelected = !items[index].isSelected;
        onChange(items);
    }
    return (
        <div className='container'>
            <h1 className="my-5">Shopping List.</h1>
            <div className='add-item row mb-5'>
                <div className="form-group col-7">
                    <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className='col-5'>
                    <button type="submit" className="btn btn-primary" style={{ float: "left", width: 150 }} onClick={() => onHandleClick()}>Add New Item</button>
                </div>
                <div className="w-100"></div>
                <div className="form-group-file col-7">
                    <input type="file" className="form-control" onChange={handleChange} />
                </div>
            </div>
            <div className='item-list row'>
                <table className="table table-bordered col-7">
                    <thead>
                        <tr>
                            <td>Mark</td>
                            <td>Product Name</td>
                            <td>Image</td>
                            <td>Status</td>
                            <td>Detail</td>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    {
                                        item.isSelected === false ?
                                            (
                                                <input type="checkbox" aria-label="Checkbox for following text input" style={{ width: 25, height: 25 }} onClick={() => toggleHandle(index)} />
                                            ) :
                                            (
                                                <input type="checkbox" aria-label="Checkbox for following text input" style={{ width: 25, height: 25 }} defaultChecked onClick={() => toggleHandle(index)} />
                                            )
                                    }
                                </td>
                                <td className="font-weight-bold">{item.name}</td>
                                <td>
                                    <img src={item.image} style={{ width: 50, height: 50 }} alt='' />
                                </td>
                                <td>
                                    {
                                        item.isSelected === false ?
                                            (
                                                <span className="font-weight-bold" style={{ color: 'red' }}>
                                                    Not owned
                                                </span>
                                            ) :
                                            (
                                                <span className="font-weight-bold" style={{ color: 'green' }}>
                                                    Owned
                                                </span>
                                            )
                                    }
                                </td>
                                <td>
                                    <Link to={`/detail-product/${item.id}`} className="btn btn-primary">Detail</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="owner col-5">
                    <h3>Owned List</h3>
                    {items.map((item, index) => (
                        (
                            (item.isSelected === true) ?
                                (
                                    <h5 key={index} style={{ textAlign: "center" }}>
                                        <i className="far fa-check-circle" style={{ color: 'green', fontSize: 35 }}></i>
                                        {item.name}
                                    </h5>
                                ) : null
                        )
                    ))}
                </div>
            </div>
        </div >
    )
}

ShoppingList.propTypes = {

}

export default ShoppingList
