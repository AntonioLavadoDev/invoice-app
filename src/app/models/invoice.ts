import { Client } from "./client";
import { Company } from "./company";
import { Item } from "./item";

export class invoice {
    id!: number;
    name!: string;
    client! : Client;
    company! : Company;
    items!: Item[];
}