import { useEffect, useState } from "react";
// our url is http://localhost:8000/blogs
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(`Sorry! Cannot Fetch the data`);
        }
        return res.json();
      })
      .then((fetchData) => {
        setData(fetchData);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        console.log(err.message);
      });
  }, [url]);
  return { data, isPending, error };
};
export default useFetch;
