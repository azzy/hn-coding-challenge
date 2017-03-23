export class Item {
    id: string;
    text: string;
    created: Date;
    author: string;
    points: number;
    children: Comment[];
}

export class Story extends Item {
    title: string;
    url: string;
}

export class Comment extends Item {
    parentId: number; // can nix these?
    storyId: number;
}
