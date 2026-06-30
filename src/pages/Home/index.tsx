import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    {
      to: "/products/shade",
      src: "/images/products/shades/main.png",
      alt: "shade category",
    },
    {
      to: "/products/pot",
      src: "/images/products/pots/main.png",
      alt: "pot category",
    },
    {
      to: "/products/hearth",
      src: "/images/products/hearths/main.png",
      alt: "hearth category",
    },
    {
      to: "/products/chair",
      src: "/images/products/chairs/main.png",
      alt: "chair category",
    },
    {
      to: "/products/light",
      src: "/images/products/lights/main.png",
      alt: "light category",
    },
  ];

  useEffect(() => {
    document.body.style.backgroundImage = "url('/images/background/main.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";

    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundAttachment = "";
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-wrap justify-center content-center gap-3 bg-gray-100/50 border-2 rounded-lg p-3">
        {categories.map((category, index) => (
          <div
            key={index.toString()}
            className="w-35 rounded-lg overflow-hidden ring-1 ring-transparent transition-all duration-300 ease-out hover:scale-105 hover:shadow-md hover:ring-gray-300"
          >
            <Link to={category.to}>
              <img src={category.src} alt={category.alt} className="w-full" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
