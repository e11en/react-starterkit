import LinearProgress from '@material-ui/core/LinearProgress';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { IClasses } from 'core/interfaces/IClasses';
import * as React from 'react';
import { compose } from 'recompose';

const styles = createStyles({
  amount: {
    color: 'white',
    position: 'absolute',
    zIndex: 1,
    fontSize: 'small',
    lineHeight: '18px',
    right: '8px'
  },
  wrapper: {
    padding: 5,
    display: 'grid',
    gridTemplateColumns: '75px auto'
  },
  label: {
    marginRight: 10
  },
  progressWrapper: {
    flexGrow: 1
  },
  progress: {
    height: 18
  }
});

interface IProps {
  name: string;
  maxValue: number;
  value: number;
}

class NutrionalValueProgress extends React.PureComponent<IProps & IClasses> {
  public render() {
    const { classes, name, value, maxValue } = this.props;

    return (
      <div className={classes.wrapper}>
        <Typography component="span" className={classes.label}>{name}</Typography>
        <div className={classes.progressWrapper}>
          <Typography component="span" className={classes.amount}>{maxValue - value}</Typography>
          <LinearProgress className={classes.progress} value={this.getProgress()} variant="determinate" />
        </div>
      </div>
    );
  }

  private getProgress = (): number => {
    const { maxValue, value } = this.props;

    return (value / maxValue) * 100;
  }
}

export default compose<{}, IProps>(
  withStyles(styles)
)(NutrionalValueProgress);
