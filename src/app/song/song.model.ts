export class Song {
    constructor(
        public id: number,
        public title: string,
        public by: string,
        public bpm?: number    
    ) {}
}