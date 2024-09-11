import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import { Popover } from "bootstrap";
import "./App.scss";
//import 'bootstrap/dist/css/bootstrap.min.css'
import Button, { LittleButton, VideoDiv } from "./Button";
import { SearchBar } from "./Button";
import { OverLap } from "./Button";
import image from "./images/sec.png";
import Developers, { Cards, ManyDiv, BlogsDiv } from "./Developers";
import FullSpeed, { ZeroLayout } from "./FullSpeed";


export default function Home(){
    return (
        <>
          <div className="container-fluid">
            <div className="row  nav-box">
              <SearchBar />
            </div>
            <div className="row main-box1">
              <div className="col-12 pt-5  h-50">
                <OverLap name="Astro 4.4 is now Available" />
                <Button
                  footer="Astro powers the world's fastest websites, client side web app"
                  name=" The web frame work content-driven Website"
                ></Button>
              </div>
              <div className="little-div w-50 position-absolute">
                <LittleButton />
              </div>
    
              <div className="col-12"></div>
              <div className="video-div  h-100 position-absolute z-0   ">
                <VideoDiv></VideoDiv>
              </div>
            </div>
            <div className="row">
              <div className="design1" style={{ backgroundImage: `url(${image})` }}>
                <Developers></Developers> <br />
                <Button
                  footer="step into the future with Island-Astro next Gen"
                  name="One frontend Architecture with endless possibilities"
                />
                <div className=" w-75 card-main mt-2 pt-3 justify-content-between d-md-flex gap-5 m-auto">
                  <Cards CardTitle="Content-first Website" />
                  <Cards CardTitle="Web Applications & API" />
                </div>
                <Button
                  name="Build it with Clarity"
                  footer={
                    "Astro has been downloaded millions of times by developers all over the world to build amazing websites"
                  }
                ></Button>
                <div className="clarity-div p-3 ms-3 gap-5 bg-danger  d-md-flex">
                  <BlogsDiv></BlogsDiv>
                  <ManyDiv />
                </div>
                <div className="full-speed">
                  <Button
                    name={"Full-speed"}
                    footer={"Island optimise your website"}
                  ></Button>
                  <div className="m-auto text-white fullest bg-dark w-50 p-3">
                    <span className="span1">Real-world Performance comparison</span>
                    <FullSpeed labelName={"Clarity"} pValue={98} />
                    <FullSpeed labelName={"Gatsby"} pValue={68} />
                    <FullSpeed labelName={"Next.Js"} pValue={63} />
                    <FullSpeed labelName={"WordPress"} pValue={58} />
                    <FullSpeed labelName={"Nuxt"} pValue={54} />
                  </div>
                </div>
                <div className="zero">
                  <Button name={`Zero to Website inwhoa`} />
                  <ZeroLayout/>
                </div>
                <div className="text-center">
                  <Button name={`start building with clarity today`}/>
                  <a href="" className="text-decoration-underline btn rounded-pill btn-light btn-lg text-primary">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}