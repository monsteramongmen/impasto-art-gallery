import React from 'react';
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../store";
import { ClearSnackbar } from '../../slice/snackbar';

const CustomSnackbar = () => {

    const dispatch = useDispatch();
    const { snackbarMessage, snackbarOpen, snackbarStatus } = useSelector((state: RootState) => state.Snackbar);

    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref
    ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    return (
        <>
            {
                snackbarOpen && snackbarStatus === "success" && <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={snackbarOpen}
                    autoHideDuration={2000}
                    onClose={() => {
                        // dispatch(ClearSnackbar());
                    }}
                    className="success_snackbar"
                >
                    <Alert severity="success">
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            }
            {
                snackbarOpen && snackbarStatus === "failure" &&
                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={snackbarOpen}
                    autoHideDuration={2000}
                    onClose={() => {
                        // dispatch(ClearSnackbar());
                    }}
                    className="failure_snackbar"
                >
                    <Alert severity="error" sx={{ color: "white" }}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            }
        </>
    )
}

export default CustomSnackbar;