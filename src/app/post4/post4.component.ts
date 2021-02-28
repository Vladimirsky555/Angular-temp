import {Component} from '@angular/core';

@Component({
  selector: 'app-post4',
  template: `
    <div class="post4">
      <h2>Post4</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nam.</p>
    </div>
  `,
  styles: [`
  .post4 {
    padding: .5em;
    border: 2px solid black;
  }
    h2{
      font-size: 2rem;
    }
  `]
})

export class Post4Component {

}
