export const GITHUB_URL = "https://github.com/HYEOK9" as const;
export const VELOG_URL = "https://velog.io/@leejaehyuck9" as const;
export const DOCK_GITHUB_URL = "https://github.com/HYEOK9/blog" as const;
export const IFRAME_VSCODE_URL =
  "https://stackblitz.com/github/HYEOK9/blog?embed=1&file=src/component/Home.tsx&hideNavigation=1&theme=dark&view=editor" as const;
export const IFRAME_POSTMAN_URL =
  "https://www.postman.com/postman/workspace/postman-public-workspace/request/create" as const;

export const HOSPITAL_EVENT_URL = "https://cashdoc.yeogiya.io" as const;
export const CASHDOC_COMMUNITY_URL = "https://community.cashdoc.me" as const;

export const OPEN_WINDOW_CONFIG =
  typeof window !== "undefined"
    ? (`width=800, height=540, top=${window.innerHeight / 3.5}, left=${
        window.innerWidth / 4
      }` as const)
    : ("" as const);

export const STACK_LINK = {
  MUI_URL: "https://mui.com",
  NEXT_JS_URL: "https://nextjs.org",
  REACT_URL: "https://react.dev",
  RECOIL_URL: "https://recoiljs.org",
  REDUX_URL: "https://redux.js.org",
  STYLED_COMPONENTS_URL: "https://styled-components.com",
  SVELTEKIT_URL: "https://kit.svelte.dev",
  TAILWIND_URL: "https://tailwindcss.com",
  ZUSTAND_URL: "https://github.com/pmndrs/zustand",
  JIRA_URL: "https://www.atlassian.com/software/jira",
  SASS_URL: "https://sass-lang.com",
  AMPLIFY_URL: "https://aws.amazon.com/amplify",
  VERCEL_URL: "https://vercel.com",
  EB_URL: "https://aws.amazon.com/elasticbeanstalk",
  TS_URL: "https://www.typescriptlang.org",
  GQL_URL: "https://graphql.org",
  CPP_URL: "https://learn.microsoft.com/en-us/cpp",
  PYTHON_URL: "https://www.python.org",
  REACT_QUERY_URL: "https://tanstack.com/query/v3/docs/react/overview",
  SWR_URL: "https://swr.vercel.app/ko",
} as const;
