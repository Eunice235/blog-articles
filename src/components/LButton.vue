<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { withDefaults, defineProps } from "vue";

interface Props {
  type?: "primary" | "default" | "error" | "tertiary" | "ghost";
  loading?: boolean;
}
const props = withDefaults(defineProps<Props>(), { type: "default" });
const getClasses = () => {
  let classes =
    "px-4 py-2 rounded transition-all duration-300 ease-in-out text-sm ";
  if (props.type === "primary") {
    classes +=
      "bg-orange-600 text-primary-50 hover:bg-primary-400 focused:ring-1 focused:ring-primary-400/50 ";
  }
  if (props.type === "error") {
    classes +=
      " bg-rose-500 text-rose-50 hover:bg-rose-400 focused:ring-1 focused:ring-rose-400/50 ";
  }
  if (props.type === "ghost") {
    classes += "bg-transparent ";
  }
  if (props.type === "default") {
    classes +=
      "bg-transparent border border-neutral-300 text-neutral-500 hover:bg-neutral-50 focused:ring-1 focused:ring-neutral-400/50 ";
  }
  // sizes

  return classes;
};
</script>

<template>
  <button :class="twMerge(getClasses(), $attrs.class || '')" v-bind="$attrs">
    <slot />
  </button>
</template>
