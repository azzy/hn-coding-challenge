import { Component, Input } from '@angular/core';
import { Comment } from './types';

@Component({
    selector: 'comment',
    templateUrl: './comment.component.html'
})
export class CommentComponent {
    @Input()
    data: Comment;

}
