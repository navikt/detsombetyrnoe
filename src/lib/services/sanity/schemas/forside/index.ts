import { nøkkeltall } from "./nøkkeltall";
import { Panel } from "./panel";
import { Forside } from "./forside";
import { CustomComponent } from "./customComponent";
import { Tekstblokk } from "./tekstblokk";

export const forsideSchema = [Forside, Panel, CustomComponent, Tekstblokk, ...nøkkeltall];
