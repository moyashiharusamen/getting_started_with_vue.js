<template>
  <div class="foo">
    <h1 class="header">Fooコンポーネント</h1>
    <p>これはFOOコンポーネントです。</p>
  </div>
</template>

<!-- 先の例で Root コンポーネントのスタイルが定義されていた p 要素のスタイルを Foo コンポーネントに移動 -->
<style>
p {
  text-decoration: underline;
}
</style>

<style scoped>
.foo {
  border: 1px solid green;
  margin: 4px;
  padding: 4px;
}
.header {
  font-size: 150%;
}
</style>