import Image from "./index";

export default {
  title: "GetJob/Image",
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const HeaderImage = Template.bind({});
HeaderImage.args = {};
