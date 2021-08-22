import { Typography } from '@material-ui/core'
import usestyles from '../App.styles'

const Title = () => {
    const classes = usestyles()
    return (
        <div className="title">
            <Typography className={classes.heading} variant="h4">
                Family Pictures
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                Welcome back dear, explore through the Family saved pictures and do more with it like sharing it, etc
            </Typography>
        </div>
    )
}

export default Title