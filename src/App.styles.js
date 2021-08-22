import { makeStyles } from '@material-ui/core/styles'

const usestyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1
    },
    heading:{
        marginTop: "50px",
        marginBottom: "30px"
    },
    file:{
        display: "None",
        color: "rgba(0, 0, 0, 0)"
    },
    icon:{
        marginRight: "20px"
    },
    buttons:{
        marginTop: "40px"
    },
    Cardgrid:{
        padding: "20px 0"
    },
    card:{
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardmedia:{
        paddingTop:"56.25%"
    },
    navigations:{
        '& > *': {
            margin: theme.spacing(1),
        }
    }
}))

export default usestyles