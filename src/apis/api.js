import axios from "axios";

const fetchBungalow = async () => {
  const response = await axios.get(
    "https://media-f5133-default-rtdb.firebaseio.com/bungalow.json"
  );

  return response.data;
};

const postBungalow = async (bungalow) => {
  const response = await axios.post(
    "https://media-f5133-default-rtdb.firebaseio.com/bungalow.json",
    bungalow
  );
  return response.data;
};

export { fetchBungalow, postBungalow };
