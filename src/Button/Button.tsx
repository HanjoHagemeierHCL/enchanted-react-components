/* ======================================================================== *
 * Copyright 2024 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */
import React from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { Components, Theme } from '@mui/material';

export enum ButtonVariants {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
  TEXT = 'text',
}

export enum ButtonTestIds {
  CONTAINED = 'Contained',
  OUTLINED = 'Outlined',
  TEXT = 'Text',
}

/**
 * @typedef ButtonProps
 * @type {object}
 * @property {boolean} hover - toggles hover appearance for visual test
 */
export type ButtonProps = MuiButtonProps & {
  hover?: boolean,
}

const Button = React.forwardRef(({ ...props }: ButtonProps, forwardRef) => {
  return (
    <MuiButton
      id={props.variant}
      variant={props.variant}
      {...props}
      ref={forwardRef as ((instance: HTMLButtonElement | null) => void)}
    />
  );
}) as React.FC<ButtonProps>;

Button.defaultProps = {
  variant: ButtonVariants.CONTAINED,
  disableElevation: true,
  disableFocusRipple: true,
  fullWidth: false,
  centerRipple: false,
  disableRipple: false,
  disableTouchRipple: false,
  focusRipple: false,
  tabIndex: 0,
};

export const getMuiButtonThemeOverrides = (): Components<Omit<Theme, 'components'>> => {
  return {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          return ({
            borderRadius: '2px',
            padding: '6px 12px',
            ...theme.typography.subtitle2,
            textTransform: 'none',
            '&.Mui-focusVisible, &.force-to-focus': {
              outline: `${theme.palette.primary.main} 1px solid`,
              outlineOffset: '2px',
            },
            '& .MuiButtonBase-root:disabled': {
              cursor: 0,
              pointerEvent: 'auto',
            },
            '& .MuiSvgIcon-root': {
              height: '16px',
              width: '16px',
              borderRadius: '2px',
              variant: 'contained',
              disabled: false,
              color: 'primary',

            },
            '& .MuiButton-endIcon': {
              marginLeft: '4px',
            },
            '& .MuiButton-startIcon': {
              marginRight: '4px',
            },
            ...(ownerState.variant === 'contained'
             && ownerState.color === 'primary' && {
              backgroundColor: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
              '&.force-to-focusHover': {
                outline: `${theme.palette.primary.main} 1px solid`,
                outlineOffset: '2px',
                backgroundColor: theme.palette.primary.dark,
              },
            }),
            ...(ownerState.variant === 'outlined'
            && ownerState.color === 'primary' && {
              backgroundColor: theme.palette.background.paper,
              borderColor: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              },
              '&.force-to-focusHover': {
                outline: `${theme.palette.primary.main} 1px solid`,
                outlineOffset: '2px',
                backgroundColor: theme.palette.action.hover,
              },
            }),
            ...(ownerState.variant === 'text'
            && ownerState.color === 'primary' && {
              backgroundColor: theme.palette.background.paper,
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              },
              '&.force-to-focusHover': {
                outline: `${theme.palette.primary.main} 1px solid`,
                outlineOffset: '2px',
                backgroundColor: theme.palette.action.hover,
              },
            }),
          });
        },
      },
    },
  };
};
export * from '@mui/material/Button';
export default Button;
