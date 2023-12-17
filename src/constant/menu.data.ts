import { IconType } from "react-icons";
import {
  AiOutlineCheck,
  AiFillHome,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FcTodoList } from "react-icons/fc";

interface IMenu {
  id: number;
  title: string;
  link: string;
  icon: IconType;
}
export const menu: IMenu[] = [
  {
    id: 1,
    title: "All Tasks",
    link: "/",
    icon: AiFillHome,
  },
  {
    id: 2,
    title: "important",
    link: "/important",
    icon: AiOutlineCheck,
  },
  {
    id: 3,
    title: "completed",
    link: "/completed",
    icon: AiOutlineCheck,
  },
  {
    id: 4,
    title: "Do it now",
    link: "/uncompleted",
    icon: FcTodoList,
  },
];

//  todo check list home
