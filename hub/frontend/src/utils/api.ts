const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const DEBUG = process.env.NEXT_PUBLIC_DEBUG === "true";

export const apiEndpoints = {
  login: `${API_BASE_URL}/users/login`,
  register: `${API_BASE_URL}/users/register`,
  products: `${API_BASE_URL}/products/`,
  farmers: `${API_BASE_URL}/farmers/`,
  orders: `${API_BASE_URL}/orders/`,
  aiChat: `${API_BASE_URL}/ai/chat`,
  cropAnalysis: `${API_BASE_URL}/ai/crop-analysis`,
  weatherAdvice: `${API_BASE_URL}/ai/weather-advice`,
  pestIdentification: `${API_BASE_URL}/ai/pest-identification`,
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
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (apiConfig.debug) {
    console.log(`[DEBUG] API Response from: ${endpoint}`, response.status);
  }

  return response;
}

// AI Chat Services
export async function sendChatMessage(
  message: string,
  language: string = "english"
) {
  try {
    const response = await apiRequest(apiEndpoints.aiChat, {
      method: "POST",
      body: JSON.stringify({ message, language }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending chat message:", error);
    throw error;
  }
}

export async function getCropAnalysis(cropType: string, symptoms: string) {
  try {
    const response = await apiRequest(apiEndpoints.cropAnalysis, {
      method: "POST",
      body: JSON.stringify({ crop_type: cropType, symptoms }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error getting crop analysis:", error);
    throw error;
  }
}

export async function getWeatherAdvice(weather: string, cropStage: string) {
  try {
    const response = await apiRequest(apiEndpoints.weatherAdvice, {
      method: "POST",
      body: JSON.stringify({ weather, crop_stage: cropStage }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error getting weather advice:", error);
    throw error;
  }
}

export async function getPestIdentification(description: string, crop: string) {
  try {
    const response = await apiRequest(apiEndpoints.pestIdentification, {
      method: "POST",
      body: JSON.stringify({ description, crop }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error getting pest identification:", error);
    throw error;
  }
}
