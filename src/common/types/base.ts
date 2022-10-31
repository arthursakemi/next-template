import { ReactNode } from 'react';

export type ComponentWithChildren = (props: { children: ReactNode }) => JSX.Element;
