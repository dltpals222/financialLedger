import { ComponentType, createElement, useEffect, useState } from 'react';
import { pathType } from '../types/Component';
import React from 'react';

const RouteComponent: React.FC<pathType> = ({ path }) => {
  const [component, setComponent] = useState<ComponentType | null>(null);
  useEffect(() => {
    const importModule = async () => {
      const { default: C } = await import(`views/${path}`);
      setComponent(() => C);
    };
    importModule();
  }, [path]);

  return <>{component ? createElement(component) : null}</>;
};

export default RouteComponent;
