import React, { useEffect, useRef, useState } from 'react'

const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data:null, loading: true, error: null });

    useEffect(() => {
      return () => {
        return () => {
            isMounted.current = false;
        }
      }
    }, []);
    

    useEffect(() => {
      fetch(url)
        .then(resp => resp.json())
        .then(data => {

            if (isMounted.current) {
                setState({
                    loading: false,
                    error: null,
                    data
                });
            }

        });
    }, [url])
    
    return state;
  
}

export default useFetch
