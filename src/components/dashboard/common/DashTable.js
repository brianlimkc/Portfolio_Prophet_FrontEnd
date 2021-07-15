import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {Button, Form, Modal} from "react-bootstrap";
import Axios from "../../../lib/Axios"

function DashTable({topFive, recoStocks, watchlist, setWatchList}) {

    useEffect(()=>{
        async function getWatchlist(){
            let {data} = await Axios.get('/api/watchlist/')
            setWatchList(data["watchlist_stocks"])
        }
        getWatchlist()
    },[])

    async function addToWatchlist(stock_id){
        let {data} = await Axios.post('/api/watchlist/', {"id": stock_id})
        // getWatchlist()
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="d-flex flex-column dash-card-block">
                <div className="list--title">{recoStocks === "true" ? "Recommended Stocks" : "Watch List" }</div>
                <div className="card forecast-data-table list--value mr-0">
                    <table>
                        <thead>
                        <tr>
                            <td>Name</td>
                            <td>Latest Price</td>
                            <td>% Change</td>
                            <td>Volume Transacted</td>
                            <td>Prediction</td>
                            <td>Actions</td>
                        </tr>
                        </thead>
                        <tbody>
                        {topFive && topFive.map((stock)=>(
                            <tr key={stock.id}>
                                <td data-label="Name">
                                    <NavLink to={`/dashboard/details/${stock.symbol}`}>{stock.symbol}</NavLink></td>
                                <td data-label="Latest Price">${stock.currentPrice}9</td>
                                <td data-label="% Change" className={`${(stock.price_change.toString().charAt(0) == "-") ? "red" : "green"}`}>{stock.percent_change}%</td>
                                <td data-label="Volume Transacted">{stock.volume}</td>
                                <td data-label="Prediction" className={`${stock.yhat_30_advice == "BUY" && "green"} ${stock.yhat_30_advice == "HOLD" && "orange"}  ${stock.yhat_30_advice == "SELL" && "red"}`}>{stock.yhat_30_advice}</td>
                                <td><span className="material-icons"><span className="material-icons-outlined">close </span><span
                                    className="material-icons-outlined" onClick={()=>addToWatchlist(stock.id)}>playlist_add</span><span className="material-icons-outlined" onClick={handleShow}>add</span></span> </td>
                            </tr>
                        ))}
                        {watchlist && watchlist.map((stock)=>(
                            <tr key={stock.id}>
                                <td data-label="Name">
                                    <NavLink to={`/dashboard/details/${stock.symbol}`}>{stock.symbol}</NavLink></td>
                                <td data-label="Latest Price">${stock.currentPrice}9</td>
                                <td data-label="% Change" className={`${(stock.price_change.toString().charAt(0) == "-") ? "red" : "green"}`}>{stock.percent_change}%</td>
                                <td data-label="Volume Transacted">{stock.volume}</td>
                                <td data-label="Prediction" className={`${stock.yhat_30_advice == "BUY" && "green"} ${stock.yhat_30_advice == "HOLD" && "orange"}  ${stock.yhat_30_advice == "SELL" && "red"}`}>{stock.yhat_30_advice}</td>
                                <td><span className="material-icons"><span className="material-icons-outlined">close </span><span
                                    className="material-icons-outlined" onClick={addToWatchlist}>playlist_add</span><span className="material-icons-outlined" onClick={handleShow}>add</span></span> </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="registerUsername">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control name={"username"} type="text" />
                        </Form.Group>
                        <Form.Group controlId="registerUsername">
                            <Form.Label>Symbol</Form.Label>
                            <Form.Control name={"username"} type="text" />
                        </Form.Group>
                        <Form.Group controlId="registerUsername">
                            <Form.Label>Qty</Form.Label>
                            <Form.Control name={"qty"} type="text" />
                        </Form.Group>
                        <Form.Group controlId="registerUsername">
                            <Form.Label>Price</Form.Label>
                            <Form.Control name={"Price"} type="text" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Add to Portfolio
                    </Button>
                    <Button className="btn-white" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DashTable;