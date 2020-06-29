import { useState, useEffect } from 'react';
import useAuth from '../contexts/auth'
const useFetch = () => {
const{user}=useAuth();

  const [requestObject, request] = useState(null);
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Wrap async call in useEffect
  // this effect runs anytime the requestObject changes
  //  ... i.e. when the component calls request() with an object, this kicks off
  useEffect(() => {
    const fetchData = async () => {
      if (!requestObject) { return; }
      setIsLoading(true);
      try {
        requestObject.options.headers = { 'Content-Type': 'application/json' };
        if(user && user.token){
          requestObject.options.headers['Authorization']=`Bearer ${user.token}`;
        }
        const res = await fetch(requestObject.url, requestObject.options);
        const json = res.status === 200 && await res.json();
        setResponse(json);
        setIsLoading(false)
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [requestObject]);

  // request - function that sets the request object
  // response - the response (this is stored in state, updated after the fetchdata function runs)
  // error - the response (this is stored in state, updated after the fetchdata function runs)
  // isLoading - boolean to toggle load state, changed during operation of the fetchData function
  return { request, response, error, isLoading };

};

export default useFetch;
