import { useEffect, useState } from "react";

function useApi(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(false);
        const response = await fetch(url);

        if (response.ok) {
          const json = response.json();
          setData(json);
        } else {
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
}

export default useApi;
