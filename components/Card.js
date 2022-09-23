import React from 'react';
import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';

const Card = ({result}) => {
    const BASE_URL = 'https://image.tmdb.org/t/p/original'
    return (
        <div>
            <Image 
                src={BASE_URL + result.backdrop_path}
                alt={result.title}
                layout='responsive'
                height={100}
                width={200}
            />
            <div>
                <p className='truncate'>{result.overview}</p>
                <h2>{result.title || result.name}</h2>
                <p>{result.release_date || result.first_air_date}
                <ThumbUpIcon className='h-5' />
                {result.vote_count}
                </p>
            </div>
        </div>
    );
}

export default Card;
