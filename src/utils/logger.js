export const logger = (error) => {
  console.error('Request Failed:', error.config);
  if (error.response) {
    console.error('Status:', error.response.status);
    console.error('Data:', error.response.data);
    console.error('Headers:', error.response.headers);
  } else {
    console.error('Error Message:', error.message);
  }
};
