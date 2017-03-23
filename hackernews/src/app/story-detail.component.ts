import { Component, Input, OnInit } from '@angular/core';
import { Story } from './types';
import { HNService } from './hn.service';
import { CommentComponent } from './comment.component';

@Component({
    selector: 'story-detail',
    templateUrl: './story-detail.component.html',
    providers: [HNService],
})
export class StoryDetailComponent implements OnInit {
    @Input()
    story: Story;

    constructor(private hnService: HNService) { }

    ngOnInit(): void {
        this.getData();
    }

    getData(): void {
        this.hnService.getComments(this.story.id).subscribe(
            comments => this.story.children = comments,
            error => console.error(error)
        );
    }
}
