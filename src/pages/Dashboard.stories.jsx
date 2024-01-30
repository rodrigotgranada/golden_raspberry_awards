import Dashboard from "./Dashboard";

export default {
  title: "components/Dashboard",
  component: Dashboard,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

export const DefaultDashboard = () => {
  return <Dashboard />;
};
