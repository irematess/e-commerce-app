import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Gallery',
  components: {
    Carousel,
    Slide
  },
  data: () => ({
    currentSlide: 0
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val
    }
  }
})
