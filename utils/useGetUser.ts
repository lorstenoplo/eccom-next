import { useState, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import me from "../api-functions/queries/me";
import { User } from "../types/User";

type getUserHookType<T> = [T | undefined, boolean, boolean];

type getUserHookReturnType = getUserHookType<User>;

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

  const user: User = data?.user;

  const resArray: getUserHookReturnType = [user, isLoading, isError];

  return useMemo<getUserHookReturnType>(() => resArray, resArray);
};

export default useGetUser;
