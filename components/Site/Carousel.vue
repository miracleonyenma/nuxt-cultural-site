<script setup lang="ts">
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";

const { images } = defineProps({
  images: {
    type: Array as PropType<
      {
        src?: string;
        alt?: string;
        type?: string;
        color?: string;
      }[]
    >,
    // required: true,
  },
});

const [emblaNode, emblaAPI] = emblaCarouselVue(
  {
    loop: true,
  },
  [
    Autoplay({
      stopOnInteraction: true,
      delay: 8000,
    }),
  ]
);

const scrollNext = () => emblaAPI?.value?.scrollNext();
const scrollPrev = () => emblaAPI?.value?.scrollPrev();

const activeSlide = ref(emblaAPI.value?.selectedScrollSnap());

watch(
  () => emblaAPI.value,
  (emblaAPIValue) => {
    if (!emblaAPI.value) return;
    emblaAPI.value.on("select", () => {
      activeSlide.value = emblaAPIValue?.selectedScrollSnap();
    });
  }
);

const slideImages = ref(
  images || [
    {
      src: "/images/heritage-pageant-1.jpg",
      alt: "Heritage pageant 1",
    },
    {
      src: "/images/heritage-pageant-2.jpg",
      alt: "Heritage pageant 2",
    },
    {
      src: "/images/heritage-pageant-3.jpg",
      alt: "Heritage pageant 3",
    },
    {
      src: "/images/heritage-pageant-4.jpg",
      alt: "Heritage pageant 4",
    },
  ]
);
</script>

<template>
  <div class="embla">
    <div class="embla__viewport" ref="emblaNode">
      <div class="embla__container">
        <div
          v-for="(image, index) in slideImages"
          :key="index"
          class="embla__slide"
        >
          <figure class="img-cont">
            <NuxtImg :src="image.src" :alt="image.alt" class="embla__img" />
          </figure>
        </div>
      </div>
      <UButton
        @click="scrollPrev"
        class="embla__button embla__prev"
        icon="i-heroicons-chevron-left"
      >
      </UButton>
      <UButton
        @click="scrollNext"
        class="embla__button embla__next"
        icon="i-heroicons-chevron-right"
      >
      </UButton>
      <ul class="embla__dots">
        <li v-for="(image, index) in slideImages" :key="index">
          <UButton
            class="embla__dot btn btn--alt"
            :class="{ 'btn--active': index === activeSlide }"
            @click="emblaAPI?.scrollTo(index)"
          ></UButton>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.embla {
  @apply w-full;
}

.embla__viewport {
  @apply relative h-full overflow-hidden rounded-2xl;
}

.embla__container {
  @apply flex;
}
.embla__slide {
  flex: 0 0 100%;
  @apply mx-4 max-h-[42rem] min-w-0 max-w-full;
}

.embla__button {
  @apply absolute top-1/2 z-10 -translate-y-1/2;
}

.embla__prev {
  @apply left-3;
}

.embla__next {
  @apply right-3;
}

.embla__dots {
  @apply absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2;
}

.embla__dot {
  @apply h-3 w-3 rounded-full p-0 lg:h-5 lg:w-5;
}

.embla__img {
  @apply rounded-3xl;
}

.img-cont {
  @apply h-full;
}
</style>
