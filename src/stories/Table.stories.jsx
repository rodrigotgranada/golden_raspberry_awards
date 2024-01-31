import Table from "../components/Others/Table";

export default {
  title: "components/Table",
  component: Table,
  tags: ["autodocs"],
};

export const Producers = {
  args: {
    titles: ["Producer", "Interval", "Previous Year	", "Following Year"],
    items: ["producer", "interval", "previousWin", "followingWin"],
    isLoading: false,
    data: [
      {
        producer: "resposta1",
        interval: "1",
        previousWin: "9999",
        followingWin: "9999",
      },
    ],
  },
};
