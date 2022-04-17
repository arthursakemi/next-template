import { createContext, useState, Dispatch, SetStateAction, ReactNode, useMemo, FC } from 'react';

export type TemplateState = {
  demoState: string;
  setDemoState: Dispatch<SetStateAction<string>>;
};

type TemplateProviderPropsType = {
  children: ReactNode;
};

export const TemplateContext = createContext({} as TemplateState);

export const TemplateProvider: FC<TemplateProviderPropsType> = ({ children }) => {
  const [demoState, setDemoState] = useState('demo state');

  const providerValue: TemplateState = useMemo(
    () => ({ demoState, setDemoState }),
    [demoState, setDemoState]
  );

  return <TemplateContext.Provider value={providerValue}>{children}</TemplateContext.Provider>;
};
