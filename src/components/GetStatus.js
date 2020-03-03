import React, { useState } from "react";
import Alert from '@material-ui/lab/Alert';

export default function GetStatus({ loaded, username }) {
    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);

    if(loaded) {
        return (
            <Alert severity="success">
              Welcome, {username}! You can see all of your lists here!
            </Alert>
          );
        } return (
            <Alert severity="error">
              Welp! We were unable to get your lists!
            </Alert>
        );
    } 