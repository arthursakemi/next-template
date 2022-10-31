import { ComponentWithChildren } from '../../types';

export const contextComposer = (...providers: ComponentWithChildren[]) => {
  const ComposedComponents: ComponentWithChildren = ({ children }) => (
    <>
      {providers.reduceRight(
        (child, Provider) => (
          <Provider>{child}</Provider>
        ),
        children
      )}
    </>
  );
  return ComposedComponents;
};
