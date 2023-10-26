import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-3/4">
          <img src={img4} className="w-full rounded-xl" />
          <div className="absolute h-full flex justify-start items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
            <div className="text-white space-y-7 pl-3 pt-3 w-3/4">
              <h2 className="text-6xl text-white font-bold">
                Affordable price for car services
              </h2>
              <p>
                There are many variations of passages available . select from
                your list given on our website
              </p>
              <div className="flex gap-2">
                <button className="btn btn-primary">Discover more</button>
                <button className="btn btn-outline btn-secondary">
                  latest projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute h-full flex justify-start items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
            <div className="text-white space-y-7 pl-3 pt-3 w-3/4">
              <h2 className="text-6xl text-white font-bold">
                Affordable price for car services
              </h2>
              <p>
                There are many variations of passages available . select from
                your list given on our website
              </p>
              <div className="flex gap-2">
                <button className="btn btn-primary">Discover more</button>
                <button className="btn btn-outline btn-secondary">
                  latest projects
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />
          <div className="absolute h-full flex justify-start items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
            <div className="text-white space-y-7 pl-3 pt-3 w-3/4">
              <h2 className="text-6xl text-white font-bold">
                Affordable price for car services
              </h2>
              <p>
                There are many variations of passages available . select from
                your list given on our website
              </p>
              <div className="flex gap-2">
                <button className="btn btn-primary">Discover more</button>
                <button className="btn btn-outline btn-secondary">
                  latest projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl" />
          <div className="absolute h-full flex justify-start items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
            <div className="text-white space-y-7 pl-3 pt-3 w-3/4">
              <h2 className="text-6xl text-white font-bold">
                Affordable price for car services
              </h2>
              <p>
                There are many variations of passages available . select from
                your list given on our website
              </p>
              <div className="flex gap-2">
                <button className="btn btn-primary">Discover more</button>
                <button className="btn btn-outline btn-secondary">
                  latest projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
