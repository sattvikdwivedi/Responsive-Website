import React from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <>
              <div className="col-md-4 col-10 mx-auto" >
                <div className="card" >
                  <img className="card-img-top" src={props.imgsrc} alt="https://img.freepik.com/free-vector/programmer-working-flat-style_52683-15041.jpg?w=740&t=st=1663627329~exp=1663627929~hmac=c7c4f5ff607c6d0202528760919ba0d655d973c9dd82a9d4c32f15b4fe43cc19" />
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold ">{props.title}</h5>
                    <p class="card-text">
                    </p>
                    <p className="card-text">
                        The world depend on the {props.title} to become an advance person.
                    </p>
                    <Link to="" class="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
           
    </>
  );
};
export default Card;
