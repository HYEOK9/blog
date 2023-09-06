import SvelteIcon from "/public/logo/stack/svelte.jpeg";
import ReactIcon from "/public/logo/stack/react.png";
import NextIcon from "/public/logo/stack/next.png";
import RecoilIcon from "/public/logo/stack/recoil.png";
import ReduxIcon from "/public/logo/stack/redux.png";
import ZustandIcon from "/public/logo/stack/zustand.png";
import TailwindIcon from "/public/logo/stack/tailwind.jpeg";
import StyledComponentIcon from "/public/logo/stack/styled.jpeg";
import MuiIcon from "/public/logo/stack/mui.png";
import SassIcon from "/public/logo/stack/sass.png";
import JiraIcon from "/public/logo/stack/jira.png";
import AmplifyIcon from "/public/logo/stack/amplify.png";
import VercelIcon from "/public/logo/stack/vercel.png";
import EBIcon from "/public/logo/stack/eb.png";
import JSIcon from "/public/logo/stack/js.png";
import TSIcon from "/public/logo/stack/ts.png";
import GQLIcon from "/public/logo/stack/gql.png";
import CPPIcon from "/public/logo/stack/C++.png";
import PythonIcon from "/public/logo/stack/python.png";
// constants
import { STACK_LINK } from "@constant/Link";

const lang = [
  { name: "Javascript", icon: JSIcon },
  { name: "TypeScript", icon: TSIcon, link: STACK_LINK.TS_URL },
  { name: "C++", icon: CPPIcon, link: STACK_LINK.CPP_URL },
  { name: "Python", icon: PythonIcon, link: STACK_LINK.PYTHON_URL },
] as const;

const frameWork = [
  {
    name: "Next.js",
    icon: NextIcon,
    link: STACK_LINK.NEXT_JS_URL,
  },
  {
    name: "Sveltekit",
    icon: SvelteIcon,
    link: STACK_LINK.SVELTEKIT_URL,
  },
  {
    name: "React",
    icon: ReactIcon,
    link: STACK_LINK.REACT_URL,
  },
] as const;

const stateManagement = [
  { name: "Redux", icon: ReduxIcon, link: STACK_LINK.REDUX_URL },
  {
    name: "Recoil",
    icon: RecoilIcon,
    link: STACK_LINK.RECOIL_URL,
    props: { className: "w-20" },
  },
  {
    name: "Zustand",
    icon: ZustandIcon,
    link: STACK_LINK.ZUSTAND_URL,
    props: { className: "w-22" },
  },
] as const;

const style = [
  {
    name: "Sass",
    icon: SassIcon,
    link: STACK_LINK.SASS_URL,
    props: { className: "w-18" },
  },
  {
    name: "Styled Component",
    icon: StyledComponentIcon,
    link: STACK_LINK.STYLED_COMPONENT_URL,
  },
  {
    name: "Tailwind",
    icon: TailwindIcon,
    link: STACK_LINK.TAILWIND_URL,
  },

  { name: "Mui", icon: MuiIcon, link: STACK_LINK.MUI_URL },
] as const;

const devOps = [
  {
    name: "Amplify",
    icon: AmplifyIcon,
    link: STACK_LINK.AMPLIFY_URL,
  },
  {
    name: "Elastic beanstalk",
    icon: EBIcon,
    link: STACK_LINK.EB_URL,
  },
  { name: "Vercel", icon: VercelIcon, link: STACK_LINK.VERCEL_URL },
  {
    name: "Jira",
    icon: JiraIcon,
    link: STACK_LINK.JIRA_URL,
    props: { className: "w-28" },
  },
] as const;
const etc = [
  {
    name: "GraphQL",
    icon: GQLIcon,
    link: STACK_LINK.GQL_URL,
  },
] as const;

const STACKS = {
  lang,
  frameWork,
  stateManagement,
  style,
  devOps,
  etc,
} as const;

export default STACKS;
