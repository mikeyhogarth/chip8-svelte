<script lang="ts">
  import store from "./store";
  const { cpuStore } = store;

  // pretty print instruction
  function ppInstruction(num) {
    var s = "00" + num.toString(16);
    return s.substr(s.length - 2);
  }
</script>

<table>
  <tr>
    <th>PC</th>
    <td>{$cpuStore.pc.toString(16)}</td>
  </tr>
  <tr>
    <th>I</th>
    <td>{$cpuStore.i.toString(16)}</td>
  </tr>
  <tr>
    <th>Stack Pointer</th>
    <td>{$cpuStore.sp.toString(16)}</td>
  </tr>
  <tr>
    <th>Stack</th><td> {$cpuStore.stack}</td>
  </tr>
  <tr>
    <th>Delay Timer</th>
    <td>
      {$cpuStore.delayTimer}
    </td>
  </tr>
  <tr>
    <th>Sound Timer</th>
    <td> {$cpuStore.soundTimer}</td>
  </tr>
  <tr>
    <th>Instruction</th>
    <td>
      {ppInstruction($cpuStore.memory[$cpuStore.pc])}
      {ppInstruction($cpuStore.memory[$cpuStore.pc + 1])}</td
    >
  </tr>
  <tr>
    <th>Registers</th>
    <td>{$cpuStore.registers}</td>
  </tr>
</table>

<style>
  td,
  th {
    text-align: left;
  }
  td {
    max-width: 100px;
  }

  @media only screen and (max-width: 600px) {
    th {
      max-width: 100px;
    }
  }
</style>
