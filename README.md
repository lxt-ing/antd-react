# ANTD-based UI framework for Nubomed  

react && antd

## Install

Before install the libarary, you need to : 
1. install antd 
```
npm i antd -S
```
2. install less、less-loader, you can install other versions, but need to  configure it correctly
```
npm i less@4.1.2 less-loader@7.3.0 -D
```
you can configure the react project as you want. Here are some suggestions provided.
* using npm run eject to produce the config file and add some config for less and less-options
* using some plugins to override configuration sucn as customize-cra、customize-cra-less-loader

after your configuration , checked if everything(like antd and less) work fine. Now, you can start to install the packages
```
npm i nb-ui-components -S
```
3. add color config in less modifyvars to override some antd's theme
```
{
    "@primary-color":"#0066E0",
    "@input-hover-border-color":"#0066E0",
    "@input-placeholder-color":"rgba(24, 29, 65, 0.5)",
    "@input-border-color":"#CAD0E0",
    "@input-color":" #181D41",
    "@border-radius-base":"8px",
    "@picker-date-hover-range-border-color":"#0066E0",
    "@picker-date-hover-range-color":"#0066E0",
    "@picker-basic-cell-hover-color": "#0066E0",
    "@picker-panel-cell-height":"48px",
    "@picker-panel-width":"560px",
    "@picker-text-height":"96px",
    "@tooltip-arrow-color":"rgba(24, 29, 65, 0.5)",
    "@tooltip-arrow-width":"40px"
}

```

### Usage

import components and use it like antd.

```
import {NbButton} from "nb-ui-components"
<NbButton></NbButton>
```
