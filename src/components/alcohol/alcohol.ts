import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'alcohol',
  props: {
    index: {
      type: Number,
      required: true,
      default: 0,
    },
    id: String,
    productId: String,
    productNumber: String,
    productName: String,
    systembolagetLink: String,
    brand: String,
    available: Boolean,
    categories: Array,
    image: String,
    percentage: Number,
    volume: Number,
    price: Number,
    apk: {
      type: Number,
      requried: true,
      default: 0,
    },
    lastUpdated: Date,
    packaging: String,
  },
  setup: (props) => ({
    ...useExpanding(props.index == 0),
    ...useColors(props.apk),
  }),
});

const useExpanding = (start: boolean) => {
  const expanded = ref(start);
  const expand = () => (expanded.value = !expanded.value);
  return {
    expanded,
    expand,
  };
};

const useColors = (apk: number) => {
  let color = 'blue';
  if (apk >= 2.5) {
    color = 'green';
  } else if (apk >= 2) {
    color = 'blue';
  } else {
    color = 'red';
  }
  return {
    color,
  };
};
