import { create } from "zustand";
import { commands } from "@/providers/commandsProvider";

const useCommandsStore = create((set) => ({
  //commands: [],
  commands: commands,
  setCommands: (commands) => set({ commands }),
  addCommands: (command) =>
    set((state) => ({
      commands: [...state.commands, command],
    })),
}));

export { useCommandsStore };
