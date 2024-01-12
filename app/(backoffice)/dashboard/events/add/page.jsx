'use client'
import React, { useState } from 'react';
import axios from 'axios';

const EventForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    location: '',
    description: '',
    picture: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, picture: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('date', formData.date);
    data.append('time', formData.time);
    data.append('location', formData.location);
    data.append('description', formData.description);
    data.append('picture', formData.picture);

    try {
      const response = await axios.post('/api/events', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      // Handle success, e.g., redirect or show a success message
    } catch (error) {
      console.error(error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-lg text-black">
      <label className="block mb-4">
        <span className="text-gray-700">Date:</span>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          className="mt-1 p-2 block w-full rounded-md border-gray-300"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Time:</span>
        <input
          type="time"
          name="time"
          onChange={handleChange}
          className="mt-1 p-2 block w-full rounded-md border-gray-300"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Location:</span>
        <input
          type="text"
          name="location"
          onChange={handleChange}
          className="mt-1 p-2 block w-full rounded-md border-gray-300"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Description:</span>
        <textarea
          name="description"
          onChange={handleChange}
          className="mt-1 p-2 block w-full rounded-md border-gray-300"
        ></textarea>
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Picture:</span>
        <input
          type="file"
          name="picture"
          onChange={handleFileChange}
          className="mt-1 p-2 block w-full rounded-md border-gray-300"
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Create Event
      </button>
    </form>
  );
};

export default EventForm;
