import React, { useState, useEffect } from 'react';
import meta from '../meta';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date(meta.birthdate);
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  // {
  //   key: 'countries',
  //   label: 'Countries visited',
  //   value: 53,
  //   link:
  //     'https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2',
  // },
  {
    key: 'location',
    label: 'Current city',
    value: meta.currentCity,
  },
  {
    key: 'location',
    label: 'Hometown',
    value: meta.hometown,
  },
  {
    key: 'movie',
    label: 'My Favorite Movie',
    value: meta.myFavoriteThings.movie,
  },
  {
    key: 'song',
    label: 'My Current Favorite Song',
    value: meta.myFavoriteThings.favoriteSong,
  },
  {
    key: 'album',
    label: 'My Favorite Album',
    value: meta.myFavoriteThings.album,
  },
  {
    key: 'sport',
    label: 'My Favorite Sport',
    value: meta.myFavoriteThings.sport,
  },
  {
    key: 'musician',
    label: 'My Favorite Classical Musician',
    value: meta.myFavoriteThings.musician,
  },
];

export default data;
