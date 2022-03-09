import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedVideoCard = () => (
    <div className='overflow-hidden items-center justify-center bg-white shadow-lg rounded-lg p-0 lg:p-8 mb-2 items-center justify-center'>
    
   <iframe  width="560" height="315" src="https://www.youtube.com/embed/1KQDSlGeT70" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

  </div>
);

export default FeaturedVideoCard;