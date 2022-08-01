import { IStep } from './Step'
export class IBlogPost {
    _id: number = 0;
    title: string = '';
    ingridients: Array<string> = [];
    steps: Array<IStep> = [];
}