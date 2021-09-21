import { createCpu } from "typescript-chip8";
import { writable } from "svelte/store";

enum CpuState {
  paused = "paused",
  playing  = "playing",
}

const cpuState = writable(CpuState.playing);

function createCpuStore() {
  let cpu = createCpu();
  let timerId = undefined;
  let currentRom;
  const { subscribe, set } = writable(cpu);
  return {
    
    subscribe,
    load: (rom) => {
      currentRom = rom;
      cpu.load(rom);
    },
    play: () => {
      cpuState.set(CpuState.playing);
      if(timerId)      
        clearInterval(timerId);

      timerId = setInterval(() => {
        cpu.cycle();
        set(cpu);
      }, 1);
    },
    stop: () => {
      cpuState.set(CpuState.paused);
      clearInterval(timerId);
    },
    step: () => {
      cpu.cycle();
      set(cpu);
    },

    reset: () => {
      cpu = createCpu();
      if(currentRom) cpu.load(currentRom)
      set(cpu);
    },
  };
}

export default {
  cpuStore: createCpuStore(),
  cpuState
}