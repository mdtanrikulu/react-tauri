import * as React from 'react';
import {styled} from '@mui/material/styles';
import Tooltip, {tooltipClasses, TooltipProps} from '@mui/material/Tooltip';

// const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
//   <Tooltip {...props} classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: theme.palette.common.white,
//     color: 'rgba(0, 0, 0, 0.87)',
//     boxShadow: theme.shadows[1],
//     fontSize: 11,
//   },
// }));
//
// const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
//   <Tooltip {...props} arrow classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.arrow}`]: {
//     color: theme.palette.common.black,
//   },
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: theme.palette.common.black,
//   },
// }));

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

export default function CustomizedTooltips(props:any) {
  return (
    <span>
      {/*<LightTooltip title="Add">*/}
      {/*  <Button>Light</Button>*/}
      {/*</LightTooltip>*/}
      {/*<BootstrapTooltip title="Add">*/}
      {/*  <Button>Bootstrap</Button>*/}
      {/*</BootstrapTooltip>*/}
      <HtmlTooltip
        title={
          <React.Fragment>
            {props.title}
          </React.Fragment>
        }
      >
        <span>{props.children}</span>
      </HtmlTooltip>
    </span>
  );
}
