import { Component } from 'react';
export declare class DSRScroller extends Component<any> {
    host: HTMLElement;
    private isPrevHidden;
    private isNextHidden;
    private intersectionObserver;
    private scrollAreaElement;
    render(): JSX.Element;
}
