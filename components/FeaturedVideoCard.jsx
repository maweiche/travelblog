import React from 'react';


const FeaturedVideoCard = () => (
  <div 
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    data-aos-duration="1000"
    className='w-full h-full responsive-youtube items-center justify-center bg-white shadow-lg rounded-lg p-0 lg:p-8 mb-2 items-center justify-center'>
    <iframe src="https://www.youtube.com/embed/0twRkbNhHLU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
);

export default FeaturedVideoCard;