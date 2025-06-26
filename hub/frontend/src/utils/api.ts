const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const DEBUG = process.env.NEXT_PUBLIC_DEBUG === 'true';

export const apiEndpoints = {
  login: `${API_BASE_URL}/users/login`,
  register: `${API_BASE_URL}/users/register`,
  products: `${API_BASE_URL}/products/`,
  farmers: `${API_BASE_URL}/farmers/`,
  orders: `${API_BASE_URL}/orders/`,
};

export const apiConfig = {
  baseURL: API_BASE_URL,
  debug: DEBUG,
};

export async function apiRequest(endpoint: string, options: RequestInit = {}) {
  if (apiConfig.debug) {
    console.log(`[DEBUG] API Request to: ${endpoint}`, options);
  }
  
  const response = await fetch(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });
  
  if (apiConfig.debug) {
    console.log(`[DEBUG] API Response from: ${endpoint}`, response.status);
  }
  
  return response;
}
