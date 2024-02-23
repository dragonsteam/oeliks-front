import { QueryKey, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { getHeaders } from "./useData";
import apiClient from "../services/api-client";

const useEntities = ({keys, url, staleTime, logoutOn404 = false}) => {
    const navigate = useNavigate();

    const fetchEntities = () =>
        apiClient.get(url, {headers: getHeaders()}).then((res) => { console.log("data**", res.data.data); return res.data.data});

    const query = useQuery({
        // queryKey: ["drivers"],
        queryKey: keys,
        queryFn: fetchEntities,
        staleTime: staleTime,
    });

    useEffect(() => {
        if (logoutOn404 && query.error?.response?.status === 401) {
            // this shit it causing to force user to login twice
            navigate("/login");
            // so i fixed it by changing status code, it doesnt execute here again
            query.error.response.status = 0;
        }
    }, [query.error]);

    

    return query;
}

export default useEntities;