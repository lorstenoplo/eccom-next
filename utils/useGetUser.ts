import { useState, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import me from "../api-functions/queries/me";

const useGetUser = () => {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    setToken(localStorage.getItem("qid") || "");
  }, []);

  const { data, isLoading, isError } = useQuery(
    ["me", token],
    async () => {
      const data = await me(token!);
      return data;
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  const user = data?.user;

  const resArray: any = [user, isLoading, isError];

  return useMemo<any>(() => resArray, resArray);
};

export default useGetUser;
