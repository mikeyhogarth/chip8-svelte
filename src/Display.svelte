<script lang="ts">
  import { onMount } from "svelte";
  export let pixels: number[][];
  let canvas;
  let PIXEL_SIZE = 10;
  let WIDTH = PIXEL_SIZE * 64;
  let HEIGHT = PIXEL_SIZE * 32;

  onMount(() => {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#7CFC00";

    let frame = requestAnimationFrame(loop);
    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pixels.forEach((row, y) => {
        row.forEach((column, x) => {
          if (column)
            ctx.fillRect(
              x * PIXEL_SIZE,
              y * PIXEL_SIZE,
              PIXEL_SIZE,
              PIXEL_SIZE
            );
        });
      });
      frame = requestAnimationFrame(loop);
    }
    return () => {
      cancelAnimationFrame(frame);
    };
  });
</script>

<div style="text-align: center">
  <canvas id="canvasDisplay" bind:this={canvas} width={WIDTH} height={HEIGHT} />
</div>

<style>
  #canvasDisplay {
    background-color: black;
    width: 90%;
  }
</style>
