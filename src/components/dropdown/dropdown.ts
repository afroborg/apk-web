import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'dropdown',
  props: {
    categories: {
      type: Array,
      required: true,
    },
    selectedCategories: {
      type: Array,
      requried: true,
    },
  },
  setup(_, { emit }) {
    const toggled = ref(false);

    const toggleCategory = (category: string) => {
      emit('category-toggle', category);
    };

    const toggle = () => {
      toggled.value = !toggled.value;
    };

    return {
      toggled,
      toggleCategory,
      toggle,
    };
  },
});
