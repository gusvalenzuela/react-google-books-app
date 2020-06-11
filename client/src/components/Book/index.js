import React from "react";
import { ListItem } from "../List";
import "./style.css";

function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <ListItem>
      <div className="row flex-wrap-reverse">
        <div className="col-md-8">
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </div>
        <div className="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <p className="font-italic small">Written by {authors}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-4 col-md-2">
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </div>
        <div className="col-12 col-sm-8 col-md-10">
          <p>{description}</p>
        </div>
      </div>
    </ListItem>
  );
}

export default Book;
