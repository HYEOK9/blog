import { memo, ForwardedRef, forwardRef } from "react";
// store
import { IApp, appStore } from "@store/appStore";
// constants
import { IFRAME_POSTMAN_URL, IFRAME_VSCODE_URL } from "@constants/Link";
// components
import AppContainer from "./AppContainer";
import Finder from "../Finder";
import ITerm from "../ITerm";
import Memo from "../Memo";
import Iframe from "../Iframe";

interface AppHeaderProps {
  app: IApp;
}

function AppRenderer(
  { app }: AppHeaderProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { setCurApp } = appStore();

  return (
    <div
      className={`relative w-window ${app.hide ? "invisible" : ""}`}
      ref={ref}
      onMouseDown={() => setCurApp(app.name)}
    >
      {(() => {
        switch (app.name) {
          case "Finder":
            return (
              <AppContainer app={app}>
                <Finder />
              </AppContainer>
            );

          case "ITerm":
            return (
              <AppContainer
                app={app}
                width={670}
                height={480}
                backgroundColor="black"
              >
                <ITerm />
              </AppContainer>
            );

          case "Vscode":
            return (
              <AppContainer app={app}>
                <Iframe src={IFRAME_VSCODE_URL} />
              </AppContainer>
            );

          case "Postman":
            return (
              <AppContainer app={app}>
                <Iframe src={IFRAME_POSTMAN_URL} />
              </AppContainer>
            );

          case "Memo":
            return (
              <AppContainer app={app}>
                <Memo />
              </AppContainer>
            );

          default:
            break;
        }
      })()}
    </div>
  );
}

export default memo(forwardRef(AppRenderer));
