import { Component, OnInit } from '@angular/core';
import { Story } from './types';
import { HNService } from './hn.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'front-page',
    templateUrl: './frontpage.component.html',
    styleUrls: ['./frontpage.component.css'],
    providers: [HNService]
})
export class FrontPageComponent implements OnInit {
    stories: Story[];
    selectedStory: Story;

    constructor(private hnService: HNService) { }

    ngOnInit(): void {
        this.getData();
    }

    onSelect(story: Story): void {
        this.selectedStory = story;
    }

    getData(): void {
        this.hnService.getStories().subscribe(
            stories => this.stories = stories,
            error => console.error(error)
        );
    }
}
