import { create } from "zustand";

import { User } from "@/interfaces/user";

interface UserState {
  user: User;
  setUser: (payload: User) => void;
}

const initialState: User = {
  isReady: false,
  address: "",
  balance: "",
};

const useUserStore = create<UserState>()(set => ({
  user: initialState,
  setUser: payload => set(() => ({ user: payload })),
  resetUser: () => set({ user: initialState }),
}));

export default useUserStore;
