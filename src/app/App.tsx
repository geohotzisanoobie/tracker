import { FC, useState, useEffect } from "react";
import { api } from "./api";

interface IFetchAsync {
  Date: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalRecovered: number;
  TotalDeaths: number;
  NewRecovered: number;
}

const useFetchAsync = () => {
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

export const App: FC = () => {
  const { isLoading, global } = useFetchAsync();

  let globalJsx;

  global &&
    (globalJsx = (
      <div>
        {Object.keys(global)
          .map((key) => ({
            title: key,
            value: global[key as keyof IFetchAsync],
          }))
          .map(({ title, value }) => (
            <h1>
              {title}: {value}
            </h1>
          ))}
      </div>
    ));

  return (
    <div className='App'>
      {isLoading && <h1>Loading...</h1>}
      {global ? globalJsx : null}
    </div>
  );
};
