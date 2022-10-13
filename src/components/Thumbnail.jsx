const Thumbnail = ({ title, img, price }) => {
  return (
    <div className="thumbnail">
      <img src={img} alt={title} height={120} />
      <div>
        <h4>{title}</h4>
        <h4>${price}</h4>
      </div>
    </div>
  );
};

export default Thumbnail;
