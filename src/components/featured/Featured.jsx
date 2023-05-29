import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/5214997/pexels-photo-5214997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="none"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Consultation</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="none"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Diagnosis</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="none"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Treatment</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
