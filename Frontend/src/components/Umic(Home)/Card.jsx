import logo2 from "../../assets/Sed.png";

function Card() {
  return (
    <>
      <div
        className="p-5 mb-2 rounded-3"
        style={{
          background: "hsla(0, 0%, 100%, 0.15)",
          backdropFilter: "blur(30px)",
        }}
      >
        <div className="row d-flex align-items-stretch">
          {/* Left Image Box */}
          <div className="col-lg-6 d-flex align-items-stretch mb-3 mb-lg-0">
            <div className="w-100 border rounded shadow-sm position-relative">
              <img
                className="bd-placeholder-img w-100 h-100"
                src={logo2}
                alt="Logo"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Right Content Box */}
          <div className="col-lg-6 d-flex align-items-stretch">
            <div className="w-100 border rounded shadow-sm position-relative d-flex flex-column p-4">
            <strong class="d-inline-block mb-2 text-success-emphasis">Safe Drive</strong>
              <h3 className="mb-0">SeDriCa</h3>
              <br />
              <p className="mb-auto">
                In mid-2000's Raj Mashruwala gave students access to the resources they needed, and hence UMIC was born. Looking towards greater challenges, UMIC aligned its vision with the dream of autonomous mobility, and hence SeDriCa was born in 2011.
              </p>
              <p className="d-none d-xxl-block fs-xxl-5">
              Team SeDriCa aims to develop India's first self-driving car, trying to achieve Level 5
Autonomy, capable of autonomous driving under Indian Road Conditions. From
efficient performance to safety considerations, we plan to cover them all!
              </p>
              <br />
              <a href="/Teams/Sedrica" className="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;




