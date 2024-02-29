import { CanceledError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/api-client";

const useRequest = (endpoint, redirectOn401 = false, requestConfig) => {
  const [resData, setResData] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [resErrors, setResErrors] = useState({})
  const [isLoading, setLoading] = useState(false);
  //
  const navigate = useNavigate();

  const post = (data, callback = ()=>{}) => {
    // clean before fetching
    setLoading(true);
    setErrorMsg("");
    setResErrors({});
    apiClient
      .post(endpoint, data, { ...requestConfig })
      .then((res) => {
        setResData(res.data);
        setLoading(false);
        callback(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrorMsg(err.message);
        setLoading(false);

        if(err.response?.data)
        setResErrors(err.response?.data)

        if (redirectOn401 && err.response?.status === 401) navigate('/login')
        if (err.response?.status === 400 && err.response.data) {
          setResErrors(err.response.data);
          console.log('reserr', err.response.data)
        }
      });
  }

  const put = (data, callback = ()=>{}) => {
    // clean before fetching
    setLoading(true);
    setErrorMsg("");
    setResErrors({});
    apiClient
      .put(endpoint, data, { ...requestConfig })
      .then((res) => {
        setResData(res.data);
        setLoading(false);
        callback(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrorMsg(err.message);
        setLoading(false);

        if(err.response?.data)
        setResErrors(err.response?.data)

        if (redirectOn401 && err.response?.status === 401) navigate('/login')
        if (err.response?.status === 400 && err.response.data) {
          setResErrors(err.response.data);
          console.log('reserr', err.response.data)
        }
      });
  }

  return { post, put, resData, errorMsg, resErrors, isLoading };
};

export default useRequest;