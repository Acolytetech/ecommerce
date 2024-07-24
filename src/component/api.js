// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Update this with your actual API base URL

export const fetchOrders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders`);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

export const fetchAddress = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/address`);
    return response.data;
  } catch (error) {
    console.error('Error fetching address:', error);
    throw error;
  }
};
