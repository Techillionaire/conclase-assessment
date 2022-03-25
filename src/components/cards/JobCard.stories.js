import JobCard from "./JobCard";

export default {
  title: "GetJob/Cards",
  component: JobCard,
};

const Template = (args) => <JobCard {...args} />;

export const TestJobCard = Template.bind({});
TestJobCard.args = {};
