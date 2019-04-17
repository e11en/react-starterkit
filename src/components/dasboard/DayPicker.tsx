import { IClasses } from '@core/interfaces/IClasses';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import * as React from 'react';
import { compose } from 'recompose';

const styles = createStyles({
  wrapper: {
    display: 'flex'
  },
  buttonWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    display: 'flex'
  },
  label: {
    flexGrow: 1,
    textAlign: 'center',
    lineHeight: '48px'
  }
});

class DayPicker extends React.PureComponent<IClasses> {
  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <div className={classes.buttonWrapper}>
          <IconButton color="inherit" aria-label="Menu">
            <KeyboardArrowLeft />
          </IconButton>
        </div>
        <Typography component="span" className={classes.label}>{this.getDateText()}</Typography>
        <div className={classes.buttonWrapper}>
          <IconButton color="inherit" aria-label="Menu">
            <KeyboardArrowRight />
          </IconButton>
        </div>
      </div>
    );
  }

  private getDateText = (): string => {
    return 'Today';
  }

}

export default compose<{}, React.HTMLAttributes<HTMLDivElement>>(
  withStyles(styles)
)(DayPicker);
