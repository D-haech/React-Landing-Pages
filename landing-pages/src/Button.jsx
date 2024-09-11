import { Link } from "react-router-dom";



export default function Button({ name, footer }) {
  return (
    <>
      <div>
        <div className="mt-5 text-center title-div">{name}</div>

        <div className="ps-0 text-light text-center m-auto title-div2">
          {footer}
        </div>
      </div>
    </>
  );
}
export function LittleButton() {
  return (
    <>
      <a className="btn rounded-pill bg-white link-primary text-decoration-underline ">
        Get Started
      </a>
      <button className="ms-5 btn rounded-pill bg-dark text-white">
        npm create Astro@Latest
      </button>
    </>
  );
}

export function SearchBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="#">
            Clarity
          </a>
          <nav className="navbar-brand ">
          <Link to="/" className="ms-3 fs-6 ms-5">Go Home</Link>
          </nav>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ul1">
              <li className="nav-item me-3">
                <a className="nav-link text-white" aria-current="page" href="#">
                  Documentation
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link text-white" href="#">
                  Showcase
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link text-white" href="#">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Blog
                </a>
              </li>
            </ul>

            <ul className="ul2  d-flex ">
              <li className="me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </li>
              <li className="me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  class="bi bi-discord"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  class="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export function OverLap({ name }) {
  return (
    <>
      <div className="d-flex one-div  border border-white rounded-pill  m-auto mt-5">
        <div className=" text-white div-2 rounded-pill">{name}</div>
        <a className="mx-4 text-white text-decoration-underline">Learn more</a>
      </div>
    </>
  );
}

export function VideoDiv() {
  return (
    <>
      <div className="ms-5 rounded-3 bg-secondary h-75">
        Let them see me for who i am
      </div>
    </>
  );
}

