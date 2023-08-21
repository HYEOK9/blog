declare global {
  interface Window {}
}

export const GITHUB_URL = "https://github.com/HYEOK9" as const;
export const VELOG_URL = "https://velog.io/@leejaehyuck9" as const;

export const OPEN_WINDOW_CONFIG =
  typeof window !== "undefined"
    ? (`width=800, height=450, top=${window.innerHeight / 3}, left=${
        window.innerWidth / 4
      }` as const)
    : ("" as const);
