import React from 'react';

function CardBlock({price, change}) {
    return (
        <>
            {change === "true" &&
            <div className="d-flex flex-column card-block pr-xl-3 pr-0">
                <div className="list--title">% Change</div>
                <div className="card list--value red">
                    -0.23%
                </div>
            </div>
            }
            {price === "true" &&
            <div className="d-flex flex-column card-block pl-0">
                <div className="list--title">Current Price</div>
                <div className="card list--value ml-0">
                    $300.29
                </div>
            </div>
            }
        </>
    );
}

export default CardBlock;