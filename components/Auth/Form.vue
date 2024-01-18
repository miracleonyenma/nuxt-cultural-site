import type { _flex } from '#tailwind-config/theme';
<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const props = defineProps<{
  type: "login" | "register" | "forgot-password";
}>();

const loginSchema = object({
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});
const registerSchema = object({
  name: string().required("Required"),
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
  confirmPassword: string()
    .oneOf([ref("password")], "Passwords must match")
    .required("Required"),
});

const forgotPasswordSchema = object({
  email: string().email("Invalid email").required("Required"),
});

const schema = computed(() => {
  switch (props.type) {
    case "login":
      return loginSchema;
    case "register":
      return registerSchema;
    case "forgot-password":
      return forgotPasswordSchema;
  }
});

type Schema = InferType<typeof schema>;

const state = reactive({
  name: undefined,
  email: undefined,
  password: undefined,
  confirmPassword: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
}

const showPassword = ref(false);
</script>
<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4 w-96"
    @submit="onSubmit"
  >
    <UFormGroup label="Name" name="name" v-if="props.type === 'register'">
      <UInput icon="i-heroicons-user" v-model="state.name" />
    </UFormGroup>

    <UFormGroup
      v-if="props.type === 'login' || props.type === 'register'"
      label="Email"
      name="email"
    >
      <UInput icon="i-heroicons-envelope" v-model="state.email" />
    </UFormGroup>

    <UFormGroup
      v-if="props.type === 'login' || props.type === 'register'"
      label="Password"
      name="password"
    >
      <div class="flex w-full gap-1">
        <UInput
          v-model="state.password"
          :type="showPassword ? 'text' : 'password'"
          class="w-full"
        />
        <UButton
          variant="ghost"
          icon="i-heroicons-eye"
          @click="showPassword = !showPassword"
        />
      </div>
    </UFormGroup>

    <UFormGroup
      label="Confirm Password"
      name="confirmPassword"
      v-if="props.type === 'register'"
    >
      <div class="flex w-full gap-1">
        <UInput
          v-model="state.confirmPassword"
          :type="showPassword ? 'text' : 'password'"
          class="w-full"
        />
        <UButton
          variant="ghost"
          icon="i-heroicons-eye"
          @click="showPassword = !showPassword"
        />
      </div>
    </UFormGroup>

    <UFormGroup
      label="Email"
      name="email"
      v-if="props.type === 'forgot-password'"
    >
      <UInput icon="i-heroicons-envelope" v-model="state.email" />
    </UFormGroup>

    <!-- forgot password -->
    <div v-if="props.type !== 'forgot-password'" class="flex justify-end">
      <ULink inactive-class="text-gray-500" to="/forgot-password"
        >Forgot Password?</ULink
      >
    </div>

    <UButton type="submit">
      <template v-if="props.type === 'login'"> Sign In </template>
      <template v-if="props.type === 'register'"> Register </template>
      <template v-if="props.type === 'forgot-password'">
        Reset Password
      </template>
    </UButton>
  </UForm>
</template>
