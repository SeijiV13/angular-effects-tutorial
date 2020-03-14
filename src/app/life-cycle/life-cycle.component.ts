import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit, OnChanges{
  @Input() message: string;
  @Input() user: string;
  comment: string;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cd.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes);
  }

  addComment() {
    this.comment = 'hey im a comment';
  }

  changeMessage() {
    this.message = 'i have changed the message';

  }

}
