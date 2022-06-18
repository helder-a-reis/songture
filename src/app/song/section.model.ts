import { Phrase } from "./phrase.model";

export interface Section {
    name: string;
    phrases: Phrase[];
}