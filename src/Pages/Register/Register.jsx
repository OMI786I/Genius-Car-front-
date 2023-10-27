import { Link } from "react-router-dom";
import img1 from "../../assets/images/login/login.svg";
const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, name, password);
  };
  return (
    <div>
      <h1 className="text-5xl font-bold text-center bg-base-200">
        SIgnup now!
      </h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  flex-row">
          <div className="text-center lg:text-left">
            <img src={img1} className="w-1/2"></img>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-error">Login</button>
              </div>
            </form>
            <p>Already an account? </p>
            <Link to="/login">
              <button className="btn">Sign in</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
