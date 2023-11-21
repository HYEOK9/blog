import { memo, ForwardedRef, forwardRef } from "react";
// store
import { IApp, appStore } from "@store/appStore";
// constants
import { IFRAME_VSCODE_URL } from "@constant/link";
// components
import AppContainer from "./appLayout/AppContainer";
// import Finder from "./Finder";
import ITerm from "./ITerm";
import Iframe from "./Iframe";
import Memo from "./Memo";
import Developer from "./Developer";
import DisplaySetting from "./displaySetting";

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
      className={`relative w-fit h-fit ${app.hide ? "invisible" : ""}`}
      ref={ref}
      onMouseDown={() => setCurApp(app.name)}
      role="presentation"
    >
      {/* eslint-disable-next-line consistent-return */}
      {(() => {
        switch (app.name) {
          case "Finder":
            return;
          // return (
          //   <AppContainer app={app}>
          //     <Finder />
          //   </AppContainer>
          // );

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
              <AppContainer app={app} backgroundColor="var(--color-navy-deep)">
                <Iframe src={IFRAME_VSCODE_URL} />
              </AppContainer>
            );

          case "Memo":
            return (
              <AppContainer app={app}>
                <Memo />
              </AppContainer>
            );

          case "About Developer":
            return (
              <AppContainer app={app}>
                <Developer />
              </AppContainer>
            );

          case "DisplaySetting":
            return (
              <AppContainer
                app={app}
                width={500}
                initialPosition={{
                  x: -window.innerWidth / 6,
                  y: window.innerHeight / 12,
                }}
              >
                <DisplaySetting />
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
