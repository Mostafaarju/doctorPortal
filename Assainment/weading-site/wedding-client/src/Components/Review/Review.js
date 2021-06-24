import React from 'react';

const Review = ({ data }) => {
    return (
        <div className='col-md-4 col-sm-6 card-item'>
            <div className="profile row">
                <div className='col-4'>
                    <img src={data.img} alt="" />
                </div>
                <div className='col-8'>
                    <h4>{data.name}</h4>
                    <h6>{data.resig || "Manager, Business Farm"}</h6>
                </div>
            </div>
            <div>
                <p>{data.review}</p>
            </div>
            <div className="rating">
                <h2>*****</h2>
            </div>
        </div>
    );
};

export default Review;