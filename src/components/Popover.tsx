import * as React from 'react';
import Popover from '@mui/material/Popover';

export default function BasicPopover(props: any | { childre: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal; }) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
      <span aria-describedby={id} onClick={handleClick}>
          {props.children}
      </span>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                {props.popover}
            </Popover>
        </div>
    );
}
