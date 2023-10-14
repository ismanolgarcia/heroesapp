import { useEffect, useState } from 'react';
import { getApi } from '../helpers/getApi';
export const useFetch = () => {
  const [quoteData, setQuoteData] = useState({
    id: '',
    fullName: '',
    aliases: '',
    biography: '',
    name: '',
    image: '',
  });

  const getFetchQuote = async () => {
    const quote = await getApi();
    setQuoteData(quote);
  };

  useEffect(() => {
    getFetchQuote();
  }, []);

  const { id, fullName, aliases, biography, name, image } = quoteData;

  return {
    id,
    fullName,
    aliases,
    biography,
    name,
    image,
  };
};
