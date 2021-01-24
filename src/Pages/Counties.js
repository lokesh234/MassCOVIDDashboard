import React, {useEffect, useState} from 'react'
import './counties.css'
import MassachusettsData from "../Countiesmap/Massachusetts";
import { geoAlbers, geoPath } from 'd3-geo';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { feature } from 'topojson';
import CountUp from 'react-countup';
import countydata from "../Data/CountyData";


const projection = geoAlbers().scale(15000);
const path = geoPath(projection);

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: 2,
    },
}));

function Counties() {
    const classes = useStyles();
    const MassCounties = feature(MassachusettsData, MassachusettsData.objects.cb_2015_massachusetts_county_20m).features;
    const [county, setCounty] = useState("Massachusetts")
    const [data, setData] = useState(null);
    const [tcc, setTcc] = useState(458089);
    const [cc, setCC] = useState(73601);
    const [adir, setAdir] = useState(75.5);
    const [tt, setTT] = useState(12536712);
    const [tt2, setTT2] = useState(1221035);
    const [tpt, setTPT] = useState(83583);
    const [pp, setPP] = useState("6.85%");


    const ChangeSelected = (s) => {
        if (data) {
            data.forEach((d) => {
                const se = s + " County"
                if (d.id === se) {
                    setCounty(se);
                    setTcc(d.totalcasecount);
                    setCC(d.casecount);
                    setAdir(d.adir);
                    setTT(d.totalcumtests);
                    setTT2(d.total2weektests);
                    setTPT(d.totalpositivetests);
                    setPP(d.percentpositivity);
                }
            })
        }
    }

    const fetchData = () => {
        setData(countydata)
    }

    useEffect(() => {
        fetchData()
    }, []);

    console.log(data);


    return (
        <>
            <svg className={"map"}>
                <g className="marks" transform="translate(-4300,1600)">
                {MassCounties.map(Counties => (
                    <path d={path(Counties)} fill="#121212" stroke="#fff" onClick={() => ChangeSelected(Counties.properties.NAME)}/>
                ))}
                </g>
            </svg>
            <div className={"Instructions"}>
                Click on a county to see the cases
            </div>
            <div className={"Update"}>
                COVID-19 Cases in {county} as of 01/21/2021 :
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
                              Total Tests (Last 14 days) : <CountUp end={tt2} duration={1} className={"Text"} />
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


export default Counties;
