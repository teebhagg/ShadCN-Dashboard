import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CircleIcon,
  XCircle,
} from "lucide-react";
import { QuestionMarkCircleIcon, ClockIcon, CheckCircleIcon, } from '@heroicons/react/24/outline'

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircleIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: ClockIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircleIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: XCircle,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
];
