
import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { connect, Effects, Effect, State, changes, Context, HostEmitter, latest } from 'ng-effects';
@Component({
  selector: 'app-name-changer',
  templateUrl: './name-changer.component.html',
  styleUrls: ['./name-changer.component.scss'],
  providers: [Effects]
})
export class NameChangerComponent {
  @Input() username = '';
  @Input() fullname = '';
  @Output() usernameEmitter = new EventEmitter(true);
  @Output() usernameEmitterHost = new HostEmitter(true);
  @HostListener('click', ['$event'])
  clicked = new HostEmitter<MouseEvent>();
  clickTemplate = new HostEmitter<MouseEvent>();

  constructor() {
    connect(this);
  }

  @Effect()
  loguUsernameChange(state: State<NameChangerComponent>) {
    return changes(state.username).subscribe((data) => { console.log(data); });
  }

  @Effect()
  emitUserNameHost(state: State<NameChangerComponent>, context: Context<NameChangerComponent>) {
    return state.username.subscribe(context.usernameEmitter)
  }

  @Effect('usernameEmitterHost')
  emitUserName(state: State<NameChangerComponent>) {
    return state.username;
  }

  @Effect()
  logClick(state: State<NameChangerComponent>) {
    return state.clicked.subscribe(event => console.log(event));
  }


  @Effect()
  logClickTemplate(state: State<NameChangerComponent>) {
    return state.clickTemplate.subscribe(event => console.log(event));
  }

  @Effect()
  logState(state: State<NameChangerComponent>) {
      return latest(state).subscribe(({ username, fullname}) => console.log(username, fullname))
  }

  changeUsername() {
    this.username = 'user3';
  }

  changeDetails() {
    this.username = 'user4';
    this.fullname = 'seiji villafranca';
  }

}
