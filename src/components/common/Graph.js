import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Scatter,
    ResponsiveContainer,
} from 'recharts';

function Graph() {

const forecast_record = [
        {
            "date": "2016-07-14T00:00:00",
            "yhat": "14.46",
            "yhat_upper": "71.31",
            "yhat_lower": "-47.64"
        },
        {
            "date": "2016-07-15T00:00:00",
            "yhat": "15.59",
            "yhat_upper": "78.56",
            "yhat_lower": "-44.46"
        },
        {
            "date": "2016-07-18T00:00:00",
            "yhat": "22.30",
            "yhat_upper": "85.27",
            "yhat_lower": "-40.00"
        },
        {
            "date": "2016-07-19T00:00:00",
            "yhat": "23.06",
            "yhat_upper": "84.26",
            "yhat_lower": "-37.36"
        },
        {
            "date": "2016-07-20T00:00:00",
            "yhat": "23.55",
            "yhat_upper": "84.43",
            "yhat_lower": "-36.41"
        },
        {
            "date": "2016-07-21T00:00:00",
            "yhat": "23.69",
            "yhat_upper": "87.76",
            "yhat_lower": "-39.22"
        },
        {
            "date": "2016-07-22T00:00:00",
            "yhat": "23.35",
            "yhat_upper": "81.64",
            "yhat_lower": "-38.14"
        }
    ,]

    let historical_record = [
        {"date": "2016-07-14T00:00:00",
            "price": "44.31"},
        {"date": "2016-07-15T00:00:00",
            "price": "44.08"},
        {"date": "2016-07-18T00:00:00",
            "price": "45.25"},
        {"date": "2016-07-19T00:00:00",
            "price": "45.05"},
        {"date": "2016-07-20T00:00:00",
            "price": "45.67"},
        {"date": "2016-07-21T00:00:00",
            "price": "44.10"}
    ]

    let data = forecast_record.map((element,index) => {
        const dateConvert = new Date(element['date']).toLocaleDateString('en-GB', {  year: 'numeric', month: 'short'})
        if(index < historical_record.length){
            if(element['date'] === historical_record[index].date){
                return {
                    date : dateConvert,
                    yhat : element['yhat'],
                    yhat_range : [element["yhat_upper"], element["yhat_lower"]],
                    price: historical_record[index].price
                }
            }
        }else{
            return {
                date : dateConvert,
                yhat : element['yhat'],
                yhat_range : [element["yhat_upper"], element["yhat_lower"]]
            }
        }
    })

    let max = 0;
    let min = 0;

    for (let i in forecast_record){
        if(max < parseInt(forecast_record[i]['yhat_upper'])){
            max = parseInt(forecast_record[i]['yhat_upper'])
        }

        if(parseInt(forecast_record[i]['yhat_lower']) < 0){
            if(min > parseInt(forecast_record[i]['yhat_lower'])){
                min = parseInt(forecast_record[i]['yhat_lower'])
            }
        }else{
            if(min < parseInt(forecast_record[i]['yhat_lower'])){
                min = parseInt(forecast_record[i]['yhat_lower'])
            }
        }
    }

    max = max+100;
    if(min < 0){
        min = min-100;
    }else{
        min = min+100;
    }


    return (
        <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="date"/>
                <YAxis domain={[min,max]} tickCount={20} />
                <Tooltip />
                <Area type="monotone" dataKey="yhat_range" fill="#8884d8" stroke="#8884d8" />
                <Scatter dataKey="price" fill="#000000" />
                <Line type="monotone" dataKey="yhat" stroke="#8884d8" />
            </ComposedChart>
        </ResponsiveContainer>
    );
}

export default Graph;