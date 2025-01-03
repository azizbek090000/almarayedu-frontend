import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Announcement = ({ children }: Props) => {
  return <>{children}</>;
};
