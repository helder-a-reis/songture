import { Section } from "./section.model";

export interface Song {
    id: number;
    title: string;
    by: string;
    bpm?: number;
    key?: string;
    structure?: Section[];
}