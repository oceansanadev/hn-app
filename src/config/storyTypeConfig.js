import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import StarsIcon from "@mui/icons-material/Stars";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import WorkIcon from "@mui/icons-material/Work";
import PublicIcon from "@mui/icons-material/Public";

// export const storyTypeConfig = {
//   top: {
//     icon: <StarsIcon />,
//     label: "Top Stories",
//   },
//   new: {
//     icon: <LocalFireDepartmentIcon />,
//     label: "New Stories",
//   },
//   best: {
//     icon: <EmojiEventsIcon />,
//     label: "Best Stories",
//   },
//   ask: {
//     icon: <QuestionAnswerIcon />,
//     label: "Ask Stories",
//   },
//   show: {
//     icon: <PublicIcon />,
//     label: "Show Stories",
//   },
//   job: {
//     icon: <WorkIcon />,
//     label: "Job Stories",
//   },
// };
export const storyTypeConfig = {
  top: {
    icon: StarsIcon,
    label: "Top Stories",
    // iconColor: "#FFD700",
    iconColor: "#FFD700",
    path: "/",
  },
  new: {
    icon: LocalFireDepartmentIcon,
    label: "New Stories",
    iconColor: "#FF3737",
    path: "/new-stories",
  },
  best: {
    icon: EmojiEventsIcon,
    label: "Best Stories",
    iconColor: "#FFC107",
    path: "/best-stories",
  },
  ask: {
    icon: QuestionAnswerIcon,
    label: "Ask Stories",
    iconColor: "#4682B4",
    path: "/ask-stories",
  },
  show: {
    icon: PublicIcon,
    label: "Show Stories",
    iconColor: "#964B00",
    path: "/show-stories",
  },
  job: {
    icon: WorkIcon,
    label: "Job Stories",
    iconColor: "#786C3B",
    path: "/job-stories",
  },
};
