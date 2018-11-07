import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { SensorsComponent } from './layout/sensors/sensors.component';
import { SensorComponent } from './layout/sensor/sensor.component';


import { RoutingModule } from '../routing.module';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LeftSideColumnComponent } from './left-side-column/left-side-column.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { DevicesComponent } from './layout/devices/devices.component';
import { DeviceComponent } from './layout/device/device.component';

@NgModule({
  imports: [
    RoutingModule,
    CommonModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SensorsComponent,
    SensorComponent,
    DashboardComponent,
    LeftSideColumnComponent,
    ControlSidebarComponent,
    DevicesComponent,
    DeviceComponent
  ],
  exports: [LayoutComponent]
})
export class UiModule { }
