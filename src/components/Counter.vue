<script setup lang="ts">
import { IButton } from "@inkline/inkline";
import { useCounterStore } from "../stores/counter";
const counter = useCounterStore();
</script>

<template>
    <div class="counter">
        <IButton color="danger" @click="counter.decrement">-</IButton>
        <pre class="d6">Count is {{ counter.count }}.</pre>
        <IButton color="success" @click="counter.increment">+</IButton>
    </div>
    <div class="counter-message">
        <slot />
    </div>
</template>

<style scoped>
.counter {
    display: grid;
    font-size: 2em;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 2em;
    place-items: center;
}

.counter-message {
    text-align: center;
}
</style>