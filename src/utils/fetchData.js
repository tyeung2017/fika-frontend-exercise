import axios from "axios";

const fetchData = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    throw err;
  }
};

export default fetchData;
