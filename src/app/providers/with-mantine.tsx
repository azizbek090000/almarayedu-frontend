import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import { ComponentType, createElement } from "react";

export const withMantine = (component: ComponentType) => () => {
  const theme = createTheme({});

  return (
    <MantineProvider
      theme={theme}
      withCssVariables
      defaultColorScheme="light"
      stylesTransform={emotionTransform}>
      <MantineEmotionProvider>
        <Notifications limit={3} position="bottom-center" zIndex={100000} />
        {createElement(component)}
      </MantineEmotionProvider>
    </MantineProvider>
  );
};
