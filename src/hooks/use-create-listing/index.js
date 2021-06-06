import axios from 'axios';
import { useState } from 'react';
import { TOKEN_KEY } from 'constants/constants';

const useCreateListing = () => {
  const [isCreating, setIsCreating] = useState(false);

  const createListing = async (parameters) => {

    // define the request
    const url = `/api/listing`;

    const formData = new FormData();
    formData.append('id', );
    formData.append('string', );
    formData.append('picture_1', fs.createReadStream('./yinyang.png'));

    const returnObj = {};

    setIsCreating(true);
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
        }
      });
      if (response.status === 200) {
        returnObj.ListingId = response.data;
      }
    } catch (err) {
      returnObj.error = err;
    } finally {
      setIsCreating(false);
      return returnObj;
    }
  };

  return { isCreating, creating };
};

export default useCreateListing;
