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
import MuiTabs, { TabsProps } from '@mui/material/Tabs';

const Tabs = ({ ...props }: TabsProps) => {
  return <MuiTabs {...props} />;
};

const defaultProps: TabsProps = {
  allowScrollButtonsMobile: false,
  centered: false,
  indicatorColor: 'primary',
  orientation: 'horizontal',
  scrollButtons: 'auto',
  textColor: 'primary',
  variant: 'standard',
  visibleScrollbar: false,
  tabIndex: 0,
  disabled: false,
  centerRipple: false,
  disableRipple: false,
  disableTouchRipple: false,
  focusRipple: false,
};

Tabs.defaultProps = defaultProps;

export * from '@mui/material/Tabs';
export default Tabs;