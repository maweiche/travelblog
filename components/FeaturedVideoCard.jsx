import React from 'react';


const FeaturedVideoCard = () => (
  <div 
    className="
      flex
      flex-col
      items-center
      justify-center
    "
   >
    <iframe className='w-1/3 aspect-video' src="https://www.youtube.com/embed/0twRkbNhHLU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
);

export default FeaturedVideoCard;