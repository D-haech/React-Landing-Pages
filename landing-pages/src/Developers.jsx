import Button from "./Button";
import rokt from "./images/rokt2.png";
//import google from "./images/"
import guax from "./images/gaux.png";
import viewBg from './images/llm.png';

//Code starts here

export default function Developers() {
    return (
      <>
        <div>
          <p className="m-auto   dev-1">
            Used by the best developers and teams around the world
          </p>
          <div className="fs-3 m-auto w-50 ">
            <span>
              <img src={rokt} width={100} alt="" />{" "}
            </span>
            <span>
              <img src={guax} width={100} alt="" />
            </span>
            <span> NordVpn</span>
            <span> ROKT</span>
            <span> trivago</span>
          </div>
        </div>
      </>
    );
  }
  
  export function Cards({ CardTitle, imageSrc }) {
    return (
      <>
        <div className="card" style={{ width: "25rem" }}>
          <img src={imageSrc} className="card-img-top" alt="..." />
          <div className="card-body bg-dark text-ligt">
            <h5 className="card-title text-white">{CardTitle}</h5>
            <p className="card-text text-light">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {/* <a href="#" className="btn btn-primary">
        Go somewhere
      </a> */}
          </div>
        </div>
      </>
    );
  }
  
  export function ManyDiv() {
    return (
      <>
        <div className="many-div ">
          <div className="h-25  position-absolute bg-info" style={{ zIndex: 5, backgroundImage:`URL(${viewBg})`,  }}>
            firstbox
          </div>
          <div className="h-25 z-3 border border-secondary position-absolute bg-danger">
            second box
          </div>
          <div className="h-25 z-2 border border-secondary position-absolute bg-dark">
            Third box
          </div>
          <div className="h-25 z-1 border border-secondary position-absolute bg-dark">
            FourthBox
          </div>
          <div className="h-25 z-0 border border-secondary position-absolute bg-dark">
            fifthbox
          </div>
        </div>
      </>
    );
  }
  
  export function BlogsDiv() {
    return (
      <>
        <div className="blog-div ps-3 pt-2">
          <Marketing blog={"Blogs"} />
          <Marketing blog={"Marketing"} />
          <Marketing blog={"Agency"} />
          <Marketing blog={"E-commerce"} />
          <Marketing blog={"Portfolio"} />
        </div>
      </>
    );
  }
  
  export function Marketing({ blog }) {
    return (
      <>
        <div className="bg-dark p-2 text-white position-relative">
          {" "}
          {blog}
          <i className="bi bi-plus-lg position-absolute top-0 end-0"></i>
        </div>
      </>
    );
  }
  