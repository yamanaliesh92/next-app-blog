export interface ITask {
  id: number;
  title: string;
  firstObj: string;
  date: number;
  completed: boolean;
  important: boolean;
}
export const taskData: ITask[] = [
  {
    id: 1,
    title: "All Tasks",
    firstObj: "hello in this day",
    date: 21 / 5 / 2023,
    completed: true,
    important: true,
  },
  {
    id: 2,
    title: "important",
    date: 4 / 6 / 2023,

    firstObj: "hello in this 21",
    completed: true,
    important: true,
  },
  {
    id: 3,
    title: "completed",
    date: 4 / 5 / 2023,
    firstObj: "good in this day",
    completed: false,
    important: true,
  },
  {
    id: 4,
    title: "Do it now",
    date: 13 / 5 / 2023,
    firstObj: "wow in this day",
    completed: true,
    important: true,
  },

  {
    id: 4,
    title: "Do it tomorrow",
    date: 13 / 5 / 2023,
    firstObj: "wow in this day",
    completed: false,
    important: false,
  },

  {
    id: 5,
    title: "Do it now",
    date: 13 / 5 / 2023,
    firstObj: "wow in this day",
    completed: false,
    important: false,
  },

  {
    id: 6,
    title: "Do it tomorrow",
    date: 13 / 5 / 2023,
    firstObj: "wow in this day",
    completed: true,
    important: true,
  },
];
