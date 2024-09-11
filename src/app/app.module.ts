import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { UsageChartComponent } from './components/usage-chart/usage-chart.component';
import { TicketCardComponent } from './components/ticket-card/ticket-card.component';
import { QRCodeModule } from 'angularx-qrcode';
@NgModule({
  declarations: [AppComponent, UsageChartComponent, TicketCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    QRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
