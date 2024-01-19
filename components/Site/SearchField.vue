<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
const router = useRouter();
const schema = object({
  search: string().min(2).max(50).required(),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  search: "",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);

  router.push({
    name: "search",
    query: { q: event.data.search },
  });
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="flex flex-row gap-2"
    @submit="onSubmit"
  >
    <UFormGroup class="w-full" size="lg">
      <UInput
        class="w-full"
        placeholder="Search"
        icon="i-heroicons-magnifying-glass"
      />
    </UFormGroup>
    <UButton type="submit"> Go </UButton>
  </UForm>
</template>
