import SearchBar from "./index";

export default {
  title: "GetJob/Searchbar",
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Search = Template.bind({});
Search.args = {};
