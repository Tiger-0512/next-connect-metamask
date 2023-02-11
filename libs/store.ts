import { create } from "zustand";

type Address = {
  address: string;
  setAddress: (_address: string) => void;
}

export const useStore = create<Address>((set) => ({
  address: "",
  setAddress: (_address) => set({ address: _address }),
}));
