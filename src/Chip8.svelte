<script lang="ts">
  import store from "./store";
  import Display from "./Display.svelte";
  import Controls from "./Controls.svelte";
  import CpuDetail from "./CpuDetail.svelte";

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

  <div>
    <section id="keypad">
      <Controls io={$cpuStore.io} />
    </section>
    <section id="detail">
      <CpuDetail />
    </section>
  </div>
</div>

<style>
  #keypad {
    vertical-align: top;
    float: left;
  }
  #detail {
    float: left;
    padding-left: 2em;
  }

  section {
    display: inline-block;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    #keypad,
    #detail {
      float: none;
      display: block;
      padding: 0.1em 0;
    }
  }
</style>
