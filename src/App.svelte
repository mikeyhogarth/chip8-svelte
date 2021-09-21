<script lang="ts">
  import { onMount } from "svelte";
  import Explaination from "./Explaination.svelte";
  import Chip8 from "./Chip8.svelte";
  import store from "./store";
  const { cpuStore, cpuState } = store;

  const romLocations = [
    { name: "Maze", location: "/roms/Maze.ch8" },
    { name: "Invaders", location: "/roms/Invaders.ch8" },
    { name: "Tic Tac Toe", location: "/roms/TicTacToe.ch8" },
    { name: "Wall", location: "/roms/Wall.ch8" },
  ];

  let select;
  let selectedRomLocation = romLocations[0].location;

  async function fetchRom() {
    if (!selectedRomLocation) return;
    return fetch(selectedRomLocation)
      .then((r) => r.arrayBuffer())
      .then((data) => new Uint8Array(data))
      .then((rom) => {
        // The blur here unfocuses the select input so that the first keypress
        // doesn't change the value of it.
        select.blur();
        cpuStore.load(rom);
        cpuStore.reset();
        cpuStore.play();
      });
  }
  onMount(fetchRom);
</script>

<main>
  <div id="content">
    <div id="rom-controls">
      <label for="romSelector">Select Rom</label>
      <select
        id="romSelector"
        bind:value={selectedRomLocation}
        bind:this={select}
        on:change={fetchRom}
      >
        {#each romLocations as romLocation}
          <option value={romLocation.location}>
            {romLocation.name}
          </option>
        {/each}
      </select>
    </div>
    <div id="cpu-controls">
      <button disabled={$cpuState === "playing"} on:click={cpuStore.step}
        ><span class="material-icons" title="Step">forward</span>
        <span class="buttonText">Step</span>
      </button>
      <button class:active={$cpuState === "playing"} on:click={cpuStore.play}
        ><span class="material-icons" title="Play">play_arrow</span>
        <span class="buttonText">Play</span>
      </button>
      <button class:active={$cpuState === "paused"} on:click={cpuStore.stop}
        ><span class="material-icons" title="Pause">pause</span>
        <span class="buttonText">Pause</span>
      </button>
      <button on:click={cpuStore.reset}
        ><span class="material-icons" title="Reset">reset_tv</span>
        <span class="buttonText">Reset</span></button
      >
    </div>
    <Chip8 />
  </div>
  <Explaination />
</main>

<style>
  main {
    width: 100%;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }
  main div#content {
    display: inline-block;
  }
</style>
