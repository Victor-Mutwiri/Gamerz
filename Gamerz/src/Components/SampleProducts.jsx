// sampleProducts.js
import React from 'react';
import image1 from '../assets/PS 5.jpg';
import image2 from '../assets/PlayStation 5 Console.jpg';
import image3 from '../assets/PlayStation 5 controllers.jpg'
import image4 from '../assets/PlayStation 5 - DualSense Charging Station.jpg'
import image5 from '../assets/Nintendo.jpg'

export const SampleProducts = [
  {
    id: 1,
    name: 'Gaming Console',
    description: 'Powerful gaming console for immersive gaming experiences.',
    price: 299.99,
    images: [image1, image2],
  },
  {
    id: 2,
    name: 'Wireless Game Controller',
    description: 'Responsive and ergonomic wireless game controller.',
    price: 49.99,
    images: [image3, image4, 'url_to_image3'],
  },
  {
    id: 3,
    name: 'Nintendo Switch',
    description: 'High-performance hand-held gaming console.',
    price: 1299.99,
    images: [image5, 'url_to_image2', 'url_to_image3'],
  },
];
