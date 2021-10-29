import { createContext, useState, Dispatch, SetStateAction } from 'react';

export type TemplateState = {
  demoState: string;
  setDemoState: Dispatch<SetStateAction<string>>;
};

export const TemplateContext = createContext({} as TemplateState);

export const TemplateProvider: React.FC = ({ children }) => {
  const [demoState, setDemoState] = useState('demo state');

  const providerValue: TemplateState = { demoState, setDemoState };

  return (
    <TemplateContext.Provider value={providerValue}>
      {children}
    </TemplateContext.Provider>
  );
};
