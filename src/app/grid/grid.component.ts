import { Component, OnInit } from '@angular/core';
import { DragulaDirective } from 'ng2-dragula/ng2-dragula';
import { DragulaService } from 'ng2-dragula/ng2-dragula';


@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  todo:string = "To do";
  today:string = "Today";
  inProgress:string = "In Progress";
  done:string = "Done";
  groups: any[];

  constructor(private dragulaService: DragulaService) {
    dragulaService.drag.subscribe((value) => {
        this.onDrag(value.slice(1))
    });

    dragulaService.drop.subscribe((value) => {
        this.onDrop(value.slice(1));
    });

    dragulaService.over.subscribe((value) => {
        this.onOver(value.slice(1));
    });

    dragulaService.out.subscribe((value) => {
        this.onOut(value.slice(1));
    })

   }

  /*ngOnInit() {
    this.groups = [
      {name: this.todo, items: []},
      {name: this.today, items: []},
      {name: this.inProgress, items: []},
      {name: this.done, items: []}
      ]
  }*/

  ngOnInit() {
    this.groups = [
        {
          name: this.todo,
          items: [
            {
                id: 1,
                name: 'Faire les courses',
                description: 'Integer tincidunt vestibulum diam, at tristique nunc consectetur id. '
            }
            
          ]
        },
        {
          name: this.today,
          items: [
            {
                id: 1,
                name: 'Ranger barak',
                description: 'Integer tincidunt vestibulum diam, at tristique nunc consectetur id. '
            }
            
          ]
        },
        {
          name: this.inProgress,
          items: [
            {
                id: 1,
                name: 'Monter en competence',
                description: 'Integer tincidunt vestibulum diam, at tristique nunc consectetur id. '
            }
            
          ]
        },
        {
          name: this.done,
          items: [
            {
                id: 1,
                name: 'RAS',
                description: 'Integer tincidunt vestibulum diam, at tristique nunc consectetur id. '
            }
            
          ]
        }
      ]
  }

    private onDrag(args) {
    let [e, el] = args;
    this.removeClass(e, 'ex-moved');
  }

   private onDrop(args) {
    console.log('onDrop args', args);
    let [e, el] = args;
    console.log(e);
    this.addClass(e, 'ex-moved');
  }

  private onOver(args) {
    let [e, el, container] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args) {
    let [e, el, container] = args;
    this.removeClass(el, 'ex-over');
  }

  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

}
