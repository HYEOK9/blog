import SvelteIcon from "/public/logo/stack/sveltekit.png";
import ReactIcon from "/public/logo/stack/react.png";
import NextIcon from "/public/logo/stack/next.png";
import RecoilIcon from "/public/logo/stack/recoil.png";
import ReduxIcon from "/public/logo/stack/redux.png";
import ZustandIcon from "/public/logo/stack/zustand.png";
import TailwindIcon from "/public/logo/stack/tailwind.png";
import StyledComponentsIcon from "/public/logo/stack/styled.jpeg";
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
  { name: "Javascript", src: JSIcon },
  { name: "TypeScript", src: TSIcon, link: STACK_LINK.TS_URL },
  {
    name: "C++",
    src: CPPIcon,
    link: STACK_LINK.CPP_URL,
    props: { className: "w-20" },
  },
  { name: "Python", src: PythonIcon, link: STACK_LINK.PYTHON_URL },
] as const;

const frameWork = [
  {
    name: "Next.js",
    src: NextIcon,
    link: STACK_LINK.NEXT_JS_URL,
  },
  {
    name: "Sveltekit",
    src: SvelteIcon,
    link: STACK_LINK.SVELTEKIT_URL,
    props: { className: "w-22" },
  },
  {
    name: "React",
    src: ReactIcon,
    link: STACK_LINK.REACT_URL,
  },
] as const;

const stateManagement = [
  { name: "Redux", src: ReduxIcon, link: STACK_LINK.REDUX_URL },
  {
    name: "Recoil",
    src: RecoilIcon,
    link: STACK_LINK.RECOIL_URL,
    props: { className: "w-20" },
  },
  {
    name: "Zustand",
    src: ZustandIcon,
    link: STACK_LINK.ZUSTAND_URL,
    props: { className: "w-22" },
  },
] as const;

const style = [
  {
    name: "Styled Components",
    src: StyledComponentsIcon,
    link: STACK_LINK.STYLED_COMPONENTS_URL,
  },
  {
    name: "Sass",
    src: SassIcon,
    link: STACK_LINK.SASS_URL,
    props: { className: "w-18" },
  },
  {
    name: "Tailwind",
    src: TailwindIcon,
    link: STACK_LINK.TAILWIND_URL,
  },

  { name: "Mui", src: MuiIcon, link: STACK_LINK.MUI_URL },
] as const;

const devOps = [
  {
    name: "Amplify",
    src: AmplifyIcon,
    link: STACK_LINK.AMPLIFY_URL,
  },
  {
    name: "Elastic beanstalk",
    src: EBIcon,
    link: STACK_LINK.EB_URL,
  },
  { name: "Vercel", src: VercelIcon, link: STACK_LINK.VERCEL_URL },
  {
    name: "Jira",
    src: JiraIcon,
    link: STACK_LINK.JIRA_URL,
    props: { className: "w-28" },
  },
] as const;
const etc = [
  {
    name: "GraphQL",
    src: GQLIcon,
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
