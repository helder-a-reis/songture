import { Phrase } from "./phrase.model";

export interface Section {
    name: SectionName;
    phrases: Phrase[];
}

export enum SectionName {
    Intro = "Intro",
    Verse = "Verse",
    Chorus = "Chorus",
    SoloGuitar = "Guitar solo",
    SoloKeyboard = "Keyboard solo",
    SoloOther = "Other solo",
    ProChorus = "Pre-chorus",
    PostChorus = "Post-chorus",
    Bridge = "Bridge",
    Outro = "Outro"
}