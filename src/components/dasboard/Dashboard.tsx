import DayPicker from '@components/dasboard/DayPicker';
import NutrionalValueProgress from '@components/partials/NutrionalValueProgress';
import { withStyles } from '@material-ui/core/styles';
import { IUserState, withUser } from '@state/user/user.container';
import { IClasses } from 'core/interfaces/IClasses';
import * as React from 'react';
import { branch, compose, renderNothing } from 'recompose';

const styles = {};

class Dashboard extends React.PureComponent<IUserState & IClasses> {
  public render() {
    const { user, classes } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div>
        <NutrionalValueProgress name="Calories" maxValue={user.dailyLimit.calories} value={820} />
        <NutrionalValueProgress name="Carbs" maxValue={user.dailyLimit.carbs} value={10} />
        <NutrionalValueProgress name="Fat" maxValue={user.dailyLimit.fat} value={80} />
        <NutrionalValueProgress name="Protein" maxValue={user.dailyLimit.protein} value={15} />

        <DayPicker className={classes.dayPicker} />
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  withUser(),
  branch(
    (props: IUserState) => !props.user,
    renderNothing
  )
)(Dashboard);
