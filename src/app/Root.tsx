import { RouterProvider } from "react-router-dom";

import { Router } from "@/app/app-router.tsx";
import { withProviders } from "@/app/providers";

const _Root = (): JSX.Element => {
  document.addEventListener("wheel", () => {
    const activeElement = document.activeElement as HTMLInputElement;
    if (activeElement && activeElement.type === "number") {
      activeElement.blur();
    }
  });

  return <RouterProvider router={Router()} />;
};

export const Root = withProviders(_Root);
