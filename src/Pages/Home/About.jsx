import img1 from "../../assets/images/about_us/parts.jpg";
import img2 from "../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-row">
          <div className="lg:w-1/2 relative">
            <img src={img2} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={img1}
              className="w-1/2 rounded-lg shadow-2xl right-5 top-1/2 absolute border-8 border-white"
            />
          </div>

          <div className="lg:w-1/2">
            <h1 className="text-xl font-bold text-red-500">About Us!</h1>
            <h1 className="text-4xl font-bold ">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-error">Get more info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
