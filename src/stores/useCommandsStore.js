import { create } from "zustand";
import {
  createUserCommand,
  getUserCommands,
} from "@/providers/commandsProvider";

const useCommandsStore = create((set) => ({
  userCommands: [],
  getCommands: async (user) => {
    try {
      const commands = await getUserCommands(user);

      set({ userCommands: commands });
    } catch (e) {
      throw new Error(e);
    }
  },
  addCommand: async (productList, user) => {
    const updatedCommands = await createUserCommand(productList, user);

    set({ userCommands: updatedCommands });
  },
}));

export { useCommandsStore };
