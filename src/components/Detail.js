import React from 'react'
import { useParams } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Detail = ({ items }) => {
    let { id } = useParams();
    var item = items.find(item => item.id === id);
    const url = window.location.href;
    return (
        <div className="container">
            <h1 className="my-5">Detail Product</h1>
            <div className="row">
                <div className="col 4">
                    <img src={item.image} alt="" style={{ width: 500, height: 450 }} />
                </div>
                <div className="col 8" >
                    <h2 className="text-left">{item.name}</h2>
                    <div className="button-share text-left mt-5">
                        <CopyToClipboard text={url}>
                            <button className="btn btn-primary">Share</button>
                        </CopyToClipboard>
                    </div>
                </div>
            </div>
        </div >
    )
}

Detail.propTypes = {

}

export default Detail
