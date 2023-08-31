export const GITHUB_URL = "https://github.com/HYEOK9" as const;
export const VELOG_URL = "https://velog.io/@leejaehyuck9" as const;
export const IFRAME_VSCODE_URL =
  "https://stackblitz.com/github/HYEOK9/blog?embed=1&file=src/components/Home.tsx&hideNavigation=1&theme=dark&view=editor" as const;
export const IFRAME_POSTMAN_URL =
  "https://www.postman.com/postman/workspace/postman-public-workspace/request/create" as const;

export const OPEN_WINDOW_CONFIG =
  typeof window !== "undefined"
    ? (`width=800, height=450, top=${window.innerHeight / 3}, left=${
        window.innerWidth / 4
      }` as const)
    : ("" as const);
