import CONFIG from 'react-native-config';

export const fullUrlFrom = (endpoint) => {
  const baseUrl = CONFIG.SERVER_URL;
  const fullUrl = baseUrl + endpoint;
  return fullUrl;
};
