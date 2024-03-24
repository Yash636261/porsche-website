import { Component } from 'react';
export declare class DSRCarousel extends Component<any> {
    host: HTMLElement;
    private amountOfPages;
    private splide;
    private container;
    private btnPrev;
    private btnNext;
    private paginationEl;
    private slides;
    private get hasNavigation();
    render(): JSX.Element;
}
