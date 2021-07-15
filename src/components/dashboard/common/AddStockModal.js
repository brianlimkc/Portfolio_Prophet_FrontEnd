import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import Axios from '../../../lib/Axios'

function AddStockModal({setShow, show, stockToAdd}) {
    let [stock, setStock] = useState({})

    useEffect(()=>{
        setStock(currState => ({...currState,...{
                "id": stockToAdd.id,
                "date": new Date(),
                "price": stockToAdd.price,
        }}))
    },[stockToAdd])

    const handleClose = () => setShow(false);
    async function addToPortfolio(e){
        let {data} = await Axios.post('/api/portfolio/', stock)
        handleClose()
    }
    function change(e){
        setStock(currState => ({...currState,...{ [e.target.name] : e.target.value}}))
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group controlId="stock">
                            <Form.Label>Stock</Form.Label>
                            <div>
                                {stockToAdd.name}
                            </div>
                        </Form.Group>
                        <Form.Group controlId="symbol">
                            <Form.Label>Symbol</Form.Label>
                            <div>
                                {stockToAdd.symbol}
                            </div>
                        </Form.Group>
                        <Form.Group controlId="quantity">
                            <Form.Label>Qty</Form.Label>
                            <Form.Control name={"quantity"} type="text" onChange={change}/>
                        </Form.Group>
                        <Form.Group controlId="currentPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control name={"price"} type="text" onChange={change} defaultValue={stockToAdd.price} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type={"submit"} onClick={addToPortfolio} >
                        Add to Portfolio
                    </Button>
                    <Button className="btn-white" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default AddStockModal;
