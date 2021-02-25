import React from 'react'
import Proptypes from 'prop-types'

export const Card = ({title, img, text}) => {
    return (
      <div className="card text-center bg-dark">
        <div className="overflow">
          <img src={img} alt="" className="card-img-top" />
        </div>
        <div className="card-body text-light">
          <h4 className="card-title">{title}</h4>
          <p className="card-text text-secondary">
            {text
              ? text
              : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus accusamus eligendi cupiditate suscipit aut dolores nobis molestias vitae similique? Doloribus, rerum tenetur id corrupti consequuntur quas autem nihil quod dolore."}
          </p>
          <a href="#!" className="btn btn-outline-secondary rounded-0">
            Go to the website
          </a>
        </div>
      </div>
    );
}

Card.proptype = {
    title: Proptypes.string.isRequired,
    url: Proptypes.string,
    image: Proptypes.string,
    text: Proptypes.string
}