import React from 'react';
import Slider from 'react-slick'; // For the carousel
import { FaQuoteLeft, FaSchool } from 'react-icons/fa'; // For icons

// Sample reviews array
const reviews = [
  {
    review: "Lumina has revolutionized the way we prepare our annual reports. It's seamless and efficient.",
    school: "Greenwood High School"
  },
  {
    review: "With Lumina, we can now integrate all our departmental data into one comprehensive report.",
    school: "Oakridge International School"
  },
  {
    review: "The real-time syncing and secure data storage are just amazing features that Lumina offers.",
    school: "Silver Oak School"
  },
  {
    review: "Our reporting process is now automated and hassle-free thanks to Lumina.",
    school: "Sunrise Academy"
  },
  {
    review: "The ability to visualize our data through customizable dashboards has been a game-changer.",
    school: "Bright Future School"
  }
];

const ReviewsCarousel = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 800, // Transition speed in milliseconds
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 3000, // 3 seconds per slide
    pauseOnHover: false, // Don't pause on hover
    arrows: false, // Hide next/previous arrows
    adaptiveHeight: true // Adapts to content height
  };

  return (
    <div className="py-16 border border-cyan-400 text-center p-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-8">Why Institutes Love Lumina Software</h2>
        <div className="max-w-4xl mx-auto">
          
          {/* Carousel */}
          <Slider {...settings}>
            {reviews.map((item, index) => (
              <div key={index} className="p-6">
                <FaQuoteLeft className="text-blue-500 text-4xl mx-auto mb-4" />
                <p className="text-lg italic text-gray-700 mb-4">{item.review}</p>
                <div className="flex justify-center items-center">
                  <FaSchool className="text-cyan-400 mr-2" />
                  <h3 className="text-xl text-cyan-400 font-semibold">{item.school}</h3>
                </div>
              </div>
            ))}
          </Slider>
          
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
