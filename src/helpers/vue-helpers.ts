import { ref } from 'vue';

export const useLoader = (initial = false) => {
  const isLoading = ref(initial);
  const setLoading = () => (isLoading.value = !isLoading.value);

  return {
    isLoading,
    setLoading,
  };
};
