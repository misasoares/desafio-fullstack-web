import { memo } from "react";
import {
  IconButton,
  Snackbar,
  SnackbarContent,
  Typography,
  styled,
} from "@mui/material";
import { amber, blue, green } from "@mui/material/colors";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  hideMessage,
  selectMessageOptions,
  selectMessageState,
} from "../slice";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";

export type MessageVariantType = "success" | "error" | "warning" | "info";

type StyledSnackbarProps = {
  variant?: MessageVariantType;
};

const StyledSnackbar = styled(Snackbar)<StyledSnackbarProps>(
  ({ theme, variant }) => ({
    "& .Message-content": {
      ...(variant === "success" && {
        backgroundColor: green[600],
        color: "#FFFFFF",
      }),

      ...(variant === "error" && {
        backgroundColor: theme.palette.error.dark,
        color: theme.palette.getContrastText(theme.palette.error.dark),
      }),

      ...(variant === "info" && {
        backgroundColor: blue[600],
        color: "#FFFFFF",
      }),

      ...(variant === "warning" && {
        backgroundColor: amber[600],
        color: "#FFFFFF",
      }),
    },
  })
);

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorOutlineIcon,
  info: InfoIcon,
};

function Message() {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectMessageState);
  const options = useAppSelector(selectMessageOptions);
  const IconComponent = variantIcon[options.variant];
  console.log("oi");
  return (
    <StyledSnackbar
      {...options}
      open={state}
      onClose={() => dispatch(hideMessage())}
    >
      <SnackbarContent
        className="Message-content"
        message={
          <div className="flex items-center">
            {IconComponent && <IconComponent style={{ marginRight: 8 }} />}
            <Typography className="mx-8">{options.message}</Typography>
          </div>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => dispatch(hideMessage())}
            size="large"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </StyledSnackbar>
  );
}

export default memo(Message);
