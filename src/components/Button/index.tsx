import React, { PropsWithChildren } from "react";
import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";

interface ISytleButtonProps extends ButtonProps {}

const StyleButton = ({
  children,
  ...props
}: PropsWithChildren<ISytleButtonProps>) => {
  return <Button {...props}>{children}</Button>;
};

export default StyleButton;
