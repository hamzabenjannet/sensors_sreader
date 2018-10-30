import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { SensorsComponent } from './layout/sensors/sensors.component';
import { SensorComponent } from './layout/sensor/sensor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, SensorsComponent, SensorComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
