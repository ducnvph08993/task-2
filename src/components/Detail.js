import React from 'react'
import { useParams } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Detail = ({ items }) => {
    let { id } = useParams();
    var item = items.find(item => item.id === id);
    const url = window.location.href;
    return (
        <div className="container">
            <h1 className="my-5">Detail Product.</h1>
            <div className="card mx-auto mb-5" style={{ width: '36rem' }}>
                <img className="card-img-top mx-auto mt-5 " src={item.image} style={{ width: 300, height: 250 }} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-body mb-3">
                    <CopyToClipboard text={url}>
                        <button className="btn btn-primary ml-3">Share</button>
                    </CopyToClipboard>
                </div>
            </div>
        </div >
    )
}

Detail.propTypes = {

}

export default Detail
