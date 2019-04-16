import { NutrionalValue } from '@model/NutrionalValue';

export interface IUser {
  id: string;
  name: string;
  email: string;
  weight: number;
  dailyLimit?: NutrionalValue;
  displayName?: string;
}

export class User {
  public id: string;
  public name: string;
  public email: string;
  public weight: number;
  public dailyLimit: NutrionalValue;
  public displayName: string;

  // tslint:disable-next-line:no-any
  constructor(props?: IUser) {
    if (props) {
      this.id = props.id;
      this.name = props.name;
      this.email = props.email;
      this.weight = props.weight;

      this.setDailyLimit(props);
      this.setDisplayName(props);
    }
  }

  private setDailyLimit = (props: IUser) => {
    if (props.dailyLimit) {
      this.dailyLimit = props.dailyLimit;
    } else {
      this.dailyLimit = {
        calories: 1800,
        carbs: 20,
        fat: 152,
        protein: 38
      };
    }
  }

  private setDisplayName = (props: IUser) => {
    if (props.name) {
      this.displayName = props.name.split(' ')[0];
    }
    else if (props.email) {
      this.displayName = props.name.split('@')[0];
    }
    else {
      this.displayName = 'User';
    }
  }
}