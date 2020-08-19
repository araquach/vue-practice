<template>
  <div>
    <router-link :to="{ name: 'parent-card' }">Example 1</router-link>
    <router-link :to="{ name: 'parent' }">Example 2</router-link>
    <router-link :to="{ name: 'main-selector' }">Example 3</router-link>
    <router-link :to="{ name: 'accordian' }">Accordian</router-link>
  </div>
</template>