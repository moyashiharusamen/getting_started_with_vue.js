<template>
  <div id="root">
    <h1 class="header">Rootコンポーネント</h1>
    <p>これはRootコンポーネントでし。</p>
    <foo />
    <bar />
  </div>
</template>

<script>
import Foo from './foo'
import Bar from './bar'

export default {
  components: {
    Foo,
    Bar
  }
}
</script>

<style>
#root {
  border: 1px solid blue;
  margin: 4px;
  padding: 4px;
}
.header {
  font-size: 200%;
}
p {
  text-decoration: underline;
}
</style>