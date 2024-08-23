import { create } from "zustand";
import {
  createUserCommand,
  getUserCommands,
} from "@/providers/commandsProvider";
import { clearCartStore } from "./useCartStore";

const useCommandsStore = create((set) => ({
  userCommands: [],
  getCommands: async (user) => {
    try {
      const commands = await getUserCommands(user);

      set({ userCommands: commands });
      return Promise.resolve(commands);
    } catch (e) {
      throw new Error(e);
    }
  },
  addCommand: async (productList, user) => {
    const updatedCommands = await createUserCommand(productList, user);

    set({ userCommands: updatedCommands });

    //reset cart store
    clearCartStore();
  },
}));

export const fetchUserCommands = async (user) => {
  const state = useCommandsStore.getState();
  const userCommand = await state.getCommands(user);
  const products = userCommand.map((command) => command.productList).flat();
  return Promise.resolve(products);
};

export { useCommandsStore };
