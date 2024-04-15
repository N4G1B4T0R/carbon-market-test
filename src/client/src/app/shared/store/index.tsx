'use client';
import { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';
import { IProduct } from '@/app/shared/types';

interface IProps {
  products: IProduct[];
  addProduct?: (props: IProduct) => void;
}

const AppContext = createContext<IProps>({
  products: []
});

export function ContextProvider({ children }: { children: ReactNode }) {
  let [products, setProducts] = useState<IProduct[]>([]);

  const addProduct = (props: IProduct) => setProducts([...products, props]);

  return <AppContext.Provider value={{ products, addProduct }}>{children}</AppContext.Provider>;
}

export function useAppProvider() {
  return useContext(AppContext);
}
