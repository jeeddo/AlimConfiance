export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL || 'http://localhost:8000';
export const LOCATION_PATH = import.meta.env.VITE_BACKEND_LOCATION_PATH || '/api/location';
export const RESTAURANT_PATH = import.meta.env.VITE_BACKEND_RESTAURANT_PATH || '/api/restaurant';
export const MOBILE_DEVICES_WIDTH = 640;
export const MAX_MOBILE_DEVICES_WIDTH = 768;
export const NB_MAX_DATA = 10000;  
export const LIMIT = 6;  
export const PAGE_COUNT = Math.floor(NB_MAX_DATA / LIMIT)