import * as Lucide from "lucide-react";

export const Icons = {
  // brandLogo: (props: IconProps) => <Logo {...props} />,
  externalLink: Lucide.ExternalLink,
  arrowLeft: Lucide.ArrowLeft,
  eye: Lucide.Eye,
  eyeOff: Lucide.EyeOff,
  loader: Lucide.LoaderCircle,
  home: Lucide.Home,
  lineChart: Lucide.LineChart,
  slidersVertical: Lucide.SlidersVertical,
  chevronRight: Lucide.ChevronRight,
  chevronLeft: Lucide.ChevronLeft,
  slash: Lucide.Slash,
  search: Lucide.Search,
  fileText: Lucide.FileText,
  chevronDown: Lucide.ChevronDown,
  creditCard: Lucide.CreditCard,
  user: Lucide.User,
  signOut: Lucide.LogOut,
  support: Lucide.Headset,
  theme: Lucide.SunMoon,
  sun: Lucide.Sun,
  moon: Lucide.Moon,
  sunMoon: Lucide.SunMoon,
  plus: Lucide.Plus,
  gripVertical: Lucide.GripVertical,
  ellipsisVertical: Lucide.EllipsisVertical,
  calendarIcon: Lucide.CalendarIcon,
  link: Lucide.Link,
};

export type IconsType = typeof Icons;
export type IconsTypeGeneric = Record<
  string,
  ((props: IconProps) => React.JSX.Element) | Lucide.LucideIcon
>;
export type IconProps = React.HTMLAttributes<SVGElement> & Lucide.LucideProps;
