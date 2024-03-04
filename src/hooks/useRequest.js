import { CanceledError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useRequest = (endpoint, redirectOn401 = false, appendAuth = false) => {
  const [resData, setResData] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [resErrors, setResErrors] = useState({});
  const [isLoading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  //
  const navigate = useNavigate();

  const getAuth = () => {
    if (!appendAuth) return {};
    const auth = queryClient.getQueryData("auth");
    console.log("fuckers", auth);
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT " + auth.access,
      },
    };
  };

  const post = (data, callback = () => {}) => {
    // clean before fetching
    setLoading(true);
    setErrorMsg("");
    setResErrors({});
    apiClient
      .post(endpoint, data, { ...getAuth() })
      .then((res) => {
        setResData(res.data);
        setLoading(false);
        callback(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrorMsg(err.message);
        setLoading(false);

        if (err.response?.data) setResErrors(err.response?.data);

        if (redirectOn401 && err.response?.status === 401) navigate("/login");
        if (err.response?.status === 400 && err.response.data) {
          setResErrors(err.response.data);
          console.log("reserr", err.response.data);
        }
      });
  };

  const put = (data, callback = () => {}) => {
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

        if (err.response?.data) setResErrors(err.response?.data);

        if (redirectOn401 && err.response?.status === 401) navigate("/login");
        if (err.response?.status === 400 && err.response.data) {
          setResErrors(err.response.data);
          console.log("reserr", err.response.data);
        }
      });
  };

  return { post, put, resData, errorMsg, resErrors, isLoading };
};

export default useRequest;
