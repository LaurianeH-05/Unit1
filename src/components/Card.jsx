function Card({ title, description, link, image }) {
    return (
      <div className="card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
          Learn More
        </a>
      </div>
    );
  }
  
  export default Card;