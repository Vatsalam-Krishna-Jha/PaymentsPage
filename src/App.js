import logo from "./logo.svg";
// import './App.css';
import UPI from "./Upin";
import NetBank from "./NetBank.js";
import DebCard from "./DebCard.js";

function App() {
  return (
    <div className="App">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="card col-8 mt-5">
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <div className="col-6 mt-5 mb-5 accordion" id="accordionExample">
              <h1
                class="text-center display-4"
                style={{ fontFamily: "Times New Roman, Times, serif" }}
              >
                Payment Page
              </h1>
              {/* <h1 class="text-center font-weight-bold">Payments Page</h1> */}
              {/* <h1 style={{ textAlign: "center" }}>Payments Page</h1> */}
              {/* <p class="text-center text-xl ">Payments Page</p> */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    UPI
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <UPI></UPI>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Credit/Debit Card
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <DebCard></DebCard>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Net Banking
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <NetBank></NetBank>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
