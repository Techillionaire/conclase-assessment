import CategoryCard from "./CategoryCard";

export default {
  title: "GetJob/Cards",
  component: CategoryCard,
};

const Template = (args) => <CategoryCard {...args} />;

export const Category = Template.bind({});
Category.args = {};
