import { Component, Input, OnInit } from '@angular/core';
import { Story } from './types';
import { HNService } from './hn.service';
import { CommentComponent } from './comment.component';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'story-detail',
    templateUrl: './story-detail.component.html',
    styleUrls: ['./story-detail.component.css'],
    providers: [HNService],
})
export class StoryDetailComponent implements OnInit {
    story: Story;

    constructor(private hnService: HNService,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.hnService.getStory(params['id']))
            .subscribe(story => this.story = story);
    }
}
