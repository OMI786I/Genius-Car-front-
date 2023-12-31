const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div>
      <div className="card card-compact w-60 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" className="h-[150px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
