import { defineComponent } from 'vue';
import alcohol from '../alcohol/alcohol.vue';

export default defineComponent({
  name: 'alcohol-list',
  props: {
    alcohols: {
      type: Array,
      required: true,
    },
  },
  components: {
    alcohol,
  },
});
