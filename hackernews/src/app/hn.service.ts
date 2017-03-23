import { Injectable } from '@angular/core';
import { Story } from './types';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class HNService {
    constructor(private http: Http) {
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    private extractStories(res:Response): Story[] {
        let body = res.json();
        let items = body.hits || {};
        let stories = _.map(items, storyTransformer);
        console.log('stories', stories);
        return stories;
    }

    private extractStory(res:Response): Story {
        var commentTransformer = function(comment:any) {
            return {
                id: comment.id,
                author: comment.author,
                text: comment.text,
                created: comment.created_at,
                points: comment.points,
                parentId: comment.parent_id,
                storyId: comment.story_id,
                children: _.map(comment.children || [], commentTransformer)
            };
        };

        let data = res.json();
        let story = storyTransformer(data);
        let comments = _.map(data.children, commentTransformer);
        console.log('story', story, 'comments', comments);
        story.children = comments;
        return story;
    }

    getStories() {
        let url = "https://hn.algolia.com/api/v1/search?tags=front_page";
        return this.http.get(url)
            .map(this.extractStories)
            .catch(this.handleError);
    }

    getStory(storyId: string) {
        let url = `https://hn.algolia.com/api/v1/items/${storyId}`;
        return this.http.get(url)
            .map(this.extractStory)
            .catch(this.handleError);
    }
}

var storyTransformer = function(item:any):Story {
    return {
        id: item.objectID || String(item.id),
        author: item.author,
        created: item.created_at,
        points: item.points,
        text: item.story_text,
        title: item.title,
        url: item.url,
        numComments: item.num_comments,
        children: []
    }
}
