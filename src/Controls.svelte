<script lang="ts">
  export let io;
  import debounce from "lodash.debounce";
  import { keyLayout, keyMap } from "./keymap";

  const keyBoardKeys = Object.keys(keyMap);

  function keyPressed(key: number) {
    io.keyDown(key);
  }
  function keyReleased(key: number) {
    io.keyUp(key);
  }
  function handleKeyUp(event) {
    const key = keyMap[event.key];
    if (key !== undefined) keyReleased(key);
  }
  function handleKeyDown(event) {
    const key = keyMap[event.key];
    if (key !== undefined && !io.isKeyDown(key)) keyPressed(key);
  }

  // debounce keypresses so that the function does not get
  // called multiple times when the user holds a key down.
  function createDebouncedKeypress(func) {
    return debounce(func, 100, {
      leading: true,
      trailing: false,
    });
  }

  const debouncedKeyUp = createDebouncedKeypress(handleKeyUp);
  const debouncedKeyDown = createDebouncedKeypress(handleKeyDown);
</script>

<svelte:window on:keyup={debouncedKeyUp} on:keydown={debouncedKeyDown} />
<div id="keypad">
  {#each keyLayout as key, i}
    <button
      class={io.isKeyDown(i) ? "down" : ""}
      on:touchstart={() => keyPressed(i)}
      on:touchend={() => keyReleased(i)}
      on:mouseleave={() => keyReleased(i)}
      on:mousedown={() => keyPressed(i)}
      on:mouseup={() => keyReleased(i)}><kbd>{keyBoardKeys[i]}</kbd></button
    >
    {#if (i + 1) % 4 === 0}
      <br />
    {/if}
  {/each}
</div>

<style>
  .down {
    color: red;
  }
</style>
