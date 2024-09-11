export default function FullSpeed({ labelName, pValue }) {
  return (
    <>
      <nav>
        <label htmlFor="">{labelName} &nbsp; </label>{" "}
        <progress className="prog" value={pValue} max={100}>
          {pValue}
        </progress>
      </nav>
    </>
  );
}

export function ZeroLayout() {
  return (
    <>
      <div className="container ">
        <div className="row mb-2">
          <div className="col-12 bg-warning hi">Designed for your favourite</div>
        </div>
        <div className="row gap-2 ">
          <div className="col bg-success hi">one</div>
          <div className="col bg-secondary hi">two</div>
          <div className="col bg-info hi">Three</div>
        </div>
        <div className="row mt-2">
            <div className="col-12 bg-danger hi">Last</div>
        </div>
      </div>
    </>
  );
}
