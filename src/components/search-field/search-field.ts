import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'search-field',
  setup(props, { emit }) {
    const search = ref('');

    const submit = (e?: Event) => {
      e?.preventDefault();
      emit('search', search.value);
    };
    return {
      search,
      submit,
    };
  },
});
