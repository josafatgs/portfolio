import '../styles.css';

const TechnologiesCarousel = ({ technologies }) => {
  return (
    <div className="slide-left colorPrimary text-black">
      
        {technologies.map((tech, index) => (
          <span key={index} className="inline-block py-4 px-6 text-6xl font-bold">
            {"•" + tech }
          </span>
        ))}
      
    </div>
  );
};

export default TechnologiesCarousel;
