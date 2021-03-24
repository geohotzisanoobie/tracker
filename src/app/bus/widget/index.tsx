import { FC } from "react";

// Interface
import { IFetchAsync } from './hooks';

// Hooks
import { useFetchAsync } from './hooks';

export const Widget: FC = () => {
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
      <div className='Widget'>
        {isLoading && <h1>Loading...</h1>}
        {global ? globalJsx : null}
      </div>
    );
  };