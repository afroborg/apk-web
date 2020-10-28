import alcoholList from '@/components/alcohol-list/alcohol-list.vue';
import dropdown from '@/components/dropdown/dropdown.vue';
import searchField from '@/components/search-field/search-field.vue';
import { getAsync } from '@/helpers/http-helpers';
import { IAlcohol } from '@/models/IAlcohol';
import { IPaginatedResponse } from '@/models/IPaginatedResponse';
import qs from 'query-string';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'home-view',
  components: {
    searchField,
    dropdown,
    alcoholList,
  },
  setup: () => {
    const alcohols = useAlcohols();
    const search = useSearch();
    const selectedCategories = useCategories((categories: string[]) =>
      alcohols.getAlcohols(categories, '')
    );

    return { ...search, ...alcohols, ...selectedCategories };
  },
});

const useCategories = (cb: (categories: string[]) => void) => {
  const selectedCategories = ref<string[]>([]);

  const toggleCategory = (category: string) => {
    const index = selectedCategories.value.indexOf(category);
    if (index > -1) {
      selectedCategories.value.splice(index, 1);
    } else {
      selectedCategories.value.push(category);
    }

    cb(selectedCategories.value);
  };

  return {
    selectedCategories,
    toggleCategory,
  };
};

const useSearch = () => {
  const search = (val: string) => {
    console.log(val);
  };
  return {
    search,
  };
};

const useAlcohols = () => {
  const alcohols = ref<IAlcohol[]>([]);
  const categories = ref<string[]>([]);

  const getAlcohols = (cats: string[] = [], search = '') => {
    const query = qs.stringify({
      search,
      categories: cats,
    });

    getAsync<IPaginatedResponse<IAlcohol>>(`alcohols?${query}`).then(
      (response) => {
        alcohols.value = response.data;
        categories.value = [
          ...new Set(
            response.data
              .map((a) => a.categories)
              .flat()
              .filter((c) => c)
          ),
        ];
      }
    );
  };

  onMounted(() => {
    getAlcohols();
  });

  return {
    alcohols,
    categories,
    getAlcohols,
  };
};
