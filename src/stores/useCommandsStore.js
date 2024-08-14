import { create } from "zustand";
import { commands, createUserCommand } from "@/providers/commandsProvider";

const useCommandsStore = create((set) => ({
  userCommands: [],
  getCommand: (user) => {},
  addCommand: async (productList, user) => {
    const commands = await createUserCommand(productList, user);

    console.log(commands);

    set({ userCommands: commands });
  },
}));

export { useCommandsStore };
