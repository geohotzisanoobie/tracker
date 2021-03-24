import { useState, useEffect } from "react";
import { api } from "../../../api";

export interface IFetchAsync {
  Date: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalRecovered: number;
  TotalDeaths: number;
  NewRecovered: number;
}

export const useFetchAsync = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [global, setGlobal] = useState<IFetchAsync | null>(null);

  useEffect(() => {
    (async () => {
      const response = await api.summary.fetch();
      const data = await response.json();
      console.log(data.Global);
      setIsLoading(false);
      setGlobal(data.Global);
    })();
  }, []);

  return { isLoading, global };
};