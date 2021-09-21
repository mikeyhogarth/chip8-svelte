<script lang="ts">
  import store from "./store";
  import Display from "./Display.svelte";
  import Controls from "./Controls.svelte";

  const { cpuStore, cpuState } = store;

  // pretty print instruction
  function ppInstruction(num) {
    var s = "00" + num.toString(16);
    return s.substr(s.length - 2);
  }
</script>

<div>
  <div>
    <Display pixels={$cpuStore.io.display} />
  </div>

  <Controls io={$cpuStore.io} />

  <dl>
    <dt>Program Counter</dt>
    <dd>{$cpuStore.pc.toString(16)}</dd>
    <dt>I</dt>
    <dd>{$cpuStore.i.toString(16)}</dd>
  </dl>

  <div>Stack: {$cpuStore.stack}</div>
  <div>Stack Pointer: {$cpuStore.sp.toString(16)}</div>
  <div>delay: {$cpuStore.delayTimer}</div>
  <div>sound: {$cpuStore.soundTimer}</div>

  <div>
    Instr:
    {ppInstruction($cpuStore.memory[$cpuStore.pc])}
    {ppInstruction($cpuStore.memory[$cpuStore.pc + 1])}
  </div>
  <div>
    Registers: {$cpuStore.registers}
  </div>
</div>
