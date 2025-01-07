/*
 *  Copyright kone christian ( 07/08/2023 13:20 )
 */

import {NzConfig} from "ng-zorro-antd/core/config";

export const ngZorroConfig: NzConfig = {
  table: {
    nzSize: "small",
    nzBordered: false,
  },
  avatar: {
    nzShape: "circle",
    nzSize: 35
  },
  notification: {
    nzAnimate: true,
    nzMaxStack: 3,
    nzPauseOnHover: true,
  },
  message: {
    nzPauseOnHover: true,
    nzAnimate: true,
    nzMaxStack: 2,
  },
  pagination: {
    nzSize: "small",
    nzShowQuickJumper: false
  },

};

