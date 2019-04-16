import { Moment } from '@model/Moment.enum';
import { NutrionalValue } from '@model/NutrionalValue';

export class FoodEntry {
    public name: string;
    public amount: number;
    public measure: string;
    public nutrionalValue: NutrionalValue;
    public date: Date;
    public moment: Moment;
}