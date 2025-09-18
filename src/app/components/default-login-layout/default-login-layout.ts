import { Component, Input, input } from '@angular/core';
// import { ɵEmptyOutletComponent } from "../../../../node_modules/@angular/router/router_module.d";

@Component({
  selector: 'app-default-login-layout',
  imports: [],
  templateUrl: './default-login-layout.html',
  styleUrl: './default-login-layout.scss'
})
export class DefaultLoginLayout {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secundaryBtnText: string = "";
}
