import React from 'react'


export const Card = ({title, img}) => {
    return (
      <div className="card text-center bg-dark">
        <img src={img} alt="" />
        <div className="card-body text-light">
          <h4 className="card-title">{title}</h4>
          <p className="card-text text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            dignissimos corrupti eveniet laborum obcaecati ducimus laboriosam
            possimus, atque quod suscipit neque unde eligendi blanditiis
            veritatis nam quae omnis explicabo consectetur!
          </p>
          <a href="#!" className="btn btn-outline-secondary rounded-0">
            Go to the website
          </a>
        </div>
      </div>
    );
}
