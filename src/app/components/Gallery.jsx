'use client';

import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75  z-50">
      <div className="relative">
        <button
          className="absolute top-0 right-0 m-4 text-bold text-3xl text-black font-extrabold"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          className="rounded-lg"
          src={imageSrc}
          alt="Enlarged view"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

const Gallery = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };

  return (
    <div className='py-28'>
      <h1 className="text-center font-bold text-3xl text-orange-300 " >Gallery</h1>
      <div className="grid-cols-1 sm:grid md:grid-cols-3">
        {[
        '/images/01.JPG',
        '/images/02.JPG',
        '/images/03.JPG',
        '/images/04.JPG',
        '/images/05.JPG',
        '/images/06.JPG',
        '/images/07.JPG',
        '/images/08.JPG',
        '/images/09.JPG',
        '/images/10.JPG',
        '/images/11.JPG',
        '/images/12.JPG',
        '/images/13.JPG',
        '/images/14.JPG',
        '/images/15.JPG',
        ].map((src, index) => (
          <div
            key={index}
            className="mx-3 mt-6 flex flex-col rounded-lg bg-blue-400 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0"
          >
            <a href="#" onClick={() => handleImageClick(src)}>
              <img className="rounded-lg" src={src} alt={`Image ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />
    </div>
  );
};

export default Gallery;
