import React, {useEffect, useState} from 'react'
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CountUp from "react-countup";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './counties.css'
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import towndata from "../Data/TownData";

const useStyles = makeStyles(theme => ({
    inputRoot: {
        borderRadius: 40
    }
}));

function Town() {
    const classes = useStyles();
    const intialtcc = 458089;
    const intialcc = 73601;
    const intialadir = 75.5;
    const intialtt = 12536712;
    const intialtt2 = 1221035;
    const intialtpt = 83583;
    const intialpp = "6.85%";

    const [town, setTown] = useState("Massachusetts")
    const [data, setData] = useState(null);
    const [tcc, setTcc] = useState(intialtcc);
    const [cc, setCC] = useState(intialcc);
    const [adir, setAdir] = useState(intialadir);
    const [tt, setTT] = useState(intialtt);
    const [tt2, setTT2] = useState(intialtt2);
    const [tpt, setTPT] = useState(intialtpt);
    const [pp, setPP] = useState(intialpp);

    const fetchData = () => {
        setData(towndata)
    }

    useEffect(() => {
        fetchData()
    }, []);


    const handlechange = (e) => {
        if (e) {
            setTown(e.id)
            setTcc(e.totalcasecount);
            setCC(e.casecount);
            setAdir(e.adir);
            setTT(e.totalcumtests);
            setTT2(e.total2weektests);
            setTPT(e.totalpositivetests);
            setPP(e.percentpositivity);
        }
        else {
            setTown("Massachusetts");
            setTcc(intialtcc);
            setCC(intialcc);
            setAdir(intialadir);
            setTT(intialtt);
            setTT2(intialtt2);
            setTPT(intialtpt);
            setPP(intialpp);
        }
    }

    return (
        <>
            <div className={"Search"}>
                <Autocomplete
                    id="combo-box-demo"
                    classes={classes}
                    options={data}
                    getOptionLabel={(option) => option.id}
                    onChange={(event, value) => handlechange(value)}
                    style={{ width: 500 }}
                    renderInput={(params) => <TextField {...params} label="Search" variant="outlined" />}
                />
            </div>
            <div className={"Townname"}>
            <div className={"Update"}>
                COVID-19 Cases in {town} as of 01/21/2021 :
            </div>
            </div>
            <div className={"textArea"}>
                <Grid container spacing={0} style={{
                    margin: 0,
                    width: '100%',
                }}>
                    <Grid item xs={6} >
                        <Box
                            boxShadow={6}
                            bgcolor="#121212"
                            m={1}
                            p={1}
                            borderRadius={30}
                            style={{ width: '45rem', height: '10rem' }}
                        >
                            <div className={"outter"}>
                                <div>
                                    Total Case Count : <CountUp end={tcc} duration={1} className={"Text"}/>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={6} >
                        <Box
                            boxShadow={6}
                            bgcolor="#121212"
                            m={1}
                            p={1}
                            borderRadius={30}
                            style={{ width: '45rem', height: '10rem' }}
                        >

                            <div className={"outter"}>
                                <div>
                                    Case Count (14 Days) : <CountUp end={cc} duration={1} className={"Text"}/>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={0} style={{
                    margin: 0,
                    width: '100%',
                }}>
                    <Grid item xs={6} >
                        <Box
                            boxShadow={6}
                            bgcolor="#121212"
                            m={1}
                            p={1}
                            borderRadius={30}
                            style={{ width: '45rem', height: '10rem' }}
                        >
                            <div className={"outter"}>
                                <div>
                                    Average Daily Incidence Rate per 100,000 (Last 14 days) : <CountUp end={adir} duration={1} className={"Text"}/>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={6} >
                        <Box
                            boxShadow={6}
                            bgcolor="#121212"
                            m={1}
                            p={1}
                            borderRadius={30}
                            style={{ width: '45rem', height: '10rem' }}
                        >
                            <div className={"outter"}>
                                <div>
                                    Percent Positivity (Last 14 days)  : {pp}
                                </div>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={0} style={{
                    margin: 0,
                    width: '100%',
                }}>
                    <Grid item xs={6} >
                        <Box
                            boxShadow={6}
                            bgcolor="#121212"
                            m={1}
                            p={1}
                            borderRadius={30}
                            style={{ width: '45rem', height: '10rem' }}
                        >
                            <div className={"outter"}>
                                <div>
                                    Total Tests : <CountUp end={tt} duration={1} className={"Text"}/>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={6} >
                        <Box
                            boxShadow={6}
                            bgcolor="#121212"
                            m={1}
                            p={1}
                            borderRadius={30}
                            style={{ width: '45rem', height: '10rem' }}
                        >
                            <div className={"outter"}>
                                <div>
                                    Total Tests (Last 14 days) : <CountUp end={tt2} duration={1} className={"Text"}/>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={0} style={{
                    margin: 0,
                    width: '100%',
                }}>
                    <Grid item xs={12} >
                        <Box
                            boxShadow={6}
                            bgcolor="#121212"
                            m={1}
                            p={1}
                            borderRadius={30}
                            style={{ width: '45rem', height: '10rem' }}
                        >
                            <div className={"outter"}>
                                <div>
                                    Total Positive Tests : <CountUp end={tpt} duration={1} className={"Text"}/>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}


export default Town;
