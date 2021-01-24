import React, { useState } from 'react'
import agedata from "../Data/AgeData";
import racedata from "../Data/RaceData";
import arr from "../Data/MonthData";
import totaldata from "../Data/TotalData";
import monthdata from "../Data/MonthData2";
import monthdata2 from "../Data/MonthData3";
import Box from "@material-ui/core/Box";
import 'tippy.js/dist/tippy.css';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { scaleLinear, scaleBand, max, min } from 'd3';
import {arc, pie} from "d3";
import './state.css';
const width = 1500;
const height = 600;
const centerX = width/2 - 200;
const centerY = (height)/2;
const margin = { top: 10, right: 325, bottom: 65, left: 80 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;


const useStyles = makeStyles({
    root: {
        width: 1000,
    },
});


const arr3 = [
    {
        id: 0,
        value: "All Cases"
    },
    {
        id: 1,
        value: "Ever Hospitaltized"
    },
    {
        id: 2,
        value: "Deaths"
    },
]

const arr2 = [
    {
        id: 0,
        value: "Positive Total"
    },
    {
        id: 1,
        value: "Positive New"
    },
]

const pieArc = arc()
    .innerRadius(0)
    .outerRadius(200).padAngle(.05).padRadius(50);

const findMonth = (val) => {
    let month = ""
    arr.forEach((d) => {
        if (d.id === val) {
            month = d.value
        }
    })
    return month
}

const findMonth2 = (val) => {
    let month = ""
    monthdata.forEach((d) => {
        if (d.id === val) {
            month = d.value
        }
    })
    return month
}

const findMonth3 = (val) => {
    let month = ""
    monthdata2.forEach((d) => {
        if (d.id === val) {
            month = d.value
        }
    })
    return month
}

const findCase = (val) => {
    let cases = ""
    arr2.forEach((d) => {
        if (d.id === val) {
            cases = d.value
        }
    })
    return cases
}

const findSituation = (val) => {
    let situation = ""
    arr3.forEach((d) => {
        if (d.id === val) {
            situation = d.value
        }
    })
    return situation
}

function State() {
    const classes = useStyles();
    const [value, setValue] = React.useState(10);
    const [value2, setValue2] = useState(1);
    const [value3, setValue3] = useState(2);
    const [selectedRace, setSelectedRace] = useState("White, non-Hispanic");
    const [selectedAge, setSelectedAge] = useState("0-19 years")
    const [cases, setCases] = React.useState(1);
    const [situation, setSituation] = React.useState(0);

    let dataArr = [];
    let dataArr2 = [];
    let dataArr3 = [];

    const filldataArr = (m) => {
        dataArr = [];
        totaldata.forEach((d) => {
            const index = d.Date.indexOf('-') + 1;
            const month = d.Date.substring(index);
            if (month === m) {
                dataArr.push(d)
            }
        })
    }

    const filldataArr2 = (m) => {
        dataArr2 = [];
        racedata.forEach((d) => {
            const index = d.Date.indexOf('-') + 1;
            const month = d.Date.substring(index);
            if (month === m) {
                dataArr2.push(d)
            }
        })
    }

    const filldataArr3 = (m) => {
        dataArr3 = [];
        agedata.forEach((d) => {
            console.log(d)
            const index = d.Date.indexOf('-') + 1;
            const month = d.Date.substring(index);
            if (month === m) {
                dataArr3.push(d)
            }
        })
    }

    const handleLegend = (legend) => {
        setSelectedRace(legend)
    }

    const handleLegend2 = (legend) => {
        setSelectedAge(legend)
    }

    filldataArr(findMonth(value));
    filldataArr2(findMonth2(value2));
    filldataArr3(findMonth3(value3));


    const xScale = scaleBand()
        .domain(dataArr.map(d => d.Date))
        .range([0, innerWidth])
        .padding(0.1)
    ;

    const yScale = scaleLinear()
        .domain([min(dataArr, d => d[findCase(cases)]), max(dataArr, d => d[findCase(cases)])])
        .range([innerHeight, 0])


    const arcs = pie()(dataArr2.map(function(d) { return d[findSituation(situation)]; }));

    console.log("+++++++++++++++++");
    console.log(dataArr3);
    console.log("+++++++++++++++++");

    const arcs2 = pie()(dataArr3.map(function (d) {return d.data}))

    const colorArray = ['#90B0F0', '#477EED', '#3964BD', '#42506E', '#213A6E',
        '#C0ECF0','#76E4EE', '#5DB2BA'];

    return (
        <>
            <div className={"Heading"}>
                Total Coronavirus Cases in Massachusetts:
            </div>
            <div className={"Months"}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="March" />
                <BottomNavigationAction label="April"  />
                <BottomNavigationAction label="May"  />
                <BottomNavigationAction label="June" />
                <BottomNavigationAction label="July"  />
                <BottomNavigationAction label="August"  />
                <BottomNavigationAction label="September" />
                <BottomNavigationAction label="October"  />
                <BottomNavigationAction label="November"  />
                <BottomNavigationAction label="December"  />
                <BottomNavigationAction label="January"  />
            </BottomNavigation>
            </div>
        <div className={"Main1"}>
            <Box
                boxShadow={6}
                bgcolor="#121212"
                m={1}
                p={1}
                borderRadius={30}
                style={{ width: '80rem', height: '40rem' }}
            >
                <svg width={width} height={height} style={{ margin: 20 }}>
                    <g transform={`translate(${margin.left}, ${margin.top})`}>
                        {yScale.ticks().map(tickValue => {
                            return (
                                <g className="tick" transform={`translate(0, ${yScale(tickValue)})`}>
                                    <line x2={innerWidth}/>
                                    <text x={-30} style={{
                                        textAnchor: "middle",
                                        fill: "#fff"
                                    }} dy={".71em"}>{tickValue}</text>
                                </g>
                            )
                        })}
                        {xScale.domain().map(tickValue => {
                            return (
                                <g transform={`translate(${xScale(tickValue) + xScale.bandwidth()/2 + 20}, 0)`}>
                                    <text y={innerHeight + 20} style={{
                                        textAnchor: "middle",
                                        fill: "#fff"
                                    }} fontSize={"0.6em"} dy={".71em"}>{tickValue}</text>
                                </g>
                            )
                        })}
                        }

                        {dataArr.map(d => <rect className="rectangles" x={innerWidth - xScale(d.Date)} y={innerHeight - yScale(d[findCase(cases)]) } width={xScale.bandwidth() - 5} height={yScale(d[findCase(cases)])} style={{ fill: "#39ace7"}} />)}
                    </g>
                </svg>
            </Box>
            <div className={"Choice"}>
                <BottomNavigation
                    value={cases}
                    onChange={(event, newValue) => {
                        setCases(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction label="Total" />
                    <BottomNavigationAction label="New"  />
                </BottomNavigation>
            </div>
        </div>
            <div className={"Heading3"}>
                Coronavirus Cases in Massachusetts by Race:
            </div>
            <div className={"Months2"}>
                <BottomNavigation
                    value={value2}
                    onChange={(event, newValue) => {
                        setValue2(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction label="December"  />
                    <BottomNavigationAction label="January"  />
                </BottomNavigation>
            </div>
            <div className={"Main1"}>
                <Box
                    boxShadow={6}
                    bgcolor="#121212"
                    m={1}
                    p={1}
                    borderRadius={30}
                    style={{ width: '80rem', height: '40rem' }}
                >
                <svg width={width + 150} height={height} style={{ margin: 20 }}>
                    <g transform={`translate(${centerX},${centerY})`}>
                        {arcs.map((d,i) => (
                            <path fill={colorArray[i]} d={pieArc(d)}>
                                <title> <text> {findSituation(situation)} : {d.data} </text></title>
                            </path>
                        ))}
                    </g>
                    <g>
                        <g transform={`translate(1275, 110)`} onClick={() => handleLegend("White, non-Hispanic")}>
                            <rect height={20} width={20} fill={"#90B0F0"} />
                            <text x={35} y={15}> White, non-Hispanic </text>
                        </g>
                        <g transform={`translate(1275, 140)`} onClick={() => handleLegend("Black or African American, non-Hispanic")}>
                            <rect height={20} width={20} fill={"#477EED"}/>
                            <text x={35} y={15}> Black or African American, non-Hispanic </text>
                        </g>
                        <g transform={`translate(1275, 170)`} onClick={() => handleLegend("Hispanic")}>
                            <rect height={20} width={20} fill={"#3964BD"}/>
                            <text x={35} y={15}> Hispanic </text>
                        </g>
                        <g transform={`translate(1275, 200)`} onClick={() => handleLegend("Asian, non-Hispanic")}>
                        <rect height={20} width={20} fill={"#42506E"}/>
                        <text x={35} y={15}> Asian, non-Hispanic </text>
                        </g>
                        <g transform={`translate(1275, 230)`} onClick={() => handleLegend("Other race, non-Hispanic")}>
                            <rect height={20} width={20} fill={"#213A6E"}/>
                            <text x={35} y={15}> Other race, non-Hispanic </text>
                        </g>
                        <g transform={`translate(1275, 260)`} onClick={() => handleLegend("Unknown, missing, or refused")}>
                            <rect height={20} width={20} fill={"#C0ECF0"}/>
                            <text x={35} y={15}> Unknown, missing, or refused </text>
                        </g>
                        <g transform={`translate(1275, 290)`} onClick={() => handleLegend("Native Hawaiian/ Pacific Islander, non-Hispanic")}>
                            <rect height={20} width={20} fill={"#76E4EE"}/>
                            <text x={35} y={15}> Native Hawaiian/ Pacific Islander, non-Hispanic </text>
                        </g>
                        <g transform={`translate(1275, 320)`} onClick={() => handleLegend("American Indian/Alaskan Native, non-Hispanic")}>
                            <rect height={20} width={20} fill={"#5DB2BA"}/>
                            <text x={35} y={15}> American Indian/Alaskan Native, non-Hispanic </text>
                        </g>
                    </g>
                </svg>
            </Box>
                <div className={"Choice2"}>
                    <BottomNavigation
                        value={situation}
                        onChange={(event, newValue) => {
                            setSituation(newValue);
                        }}
                        showLabels
                        className={classes.root}
                    >
                        <BottomNavigationAction label="All Cases" />
                        <BottomNavigationAction label="Ever Hospitaltized"  />
                        <BottomNavigationAction label="Deaths"  />
                    </BottomNavigation>
                </div>

                <div className={"Heading2"}>
                    Coronavirus Cases in Massachusetts by Age:
                </div>

                <div className={"Months2"}>
                    <BottomNavigation
                        value={value3}
                        onChange={(event, newValue) => {
                            setValue3(newValue);
                        }}
                        showLabels
                        className={classes.root}
                    >
                        <BottomNavigationAction label="November"  />
                        <BottomNavigationAction label="December"  />
                        <BottomNavigationAction label="January"  />
                    </BottomNavigation>
                </div>
                <div className={"Main2"}>
                    <Box
                        boxShadow={6}
                        bgcolor="#121212"
                        m={1}
                        p={1}
                        borderRadius={30}
                        style={{ width: '80rem', height: '40rem', marginBottom: 100 }}
                    >
                        <svg width={width + 150} height={height} style={{ margin: 20 }}>
                            <g transform={`translate(${centerX},${centerY})`}>
                                {arcs2.map((d,i) => (
                                    <path fill={colorArray[i]} d={pieArc(d)}>
                                        <title> <text> {findSituation(situation)} : {d.data} </text></title>
                                    </path>
                                ))}
                            </g>
                            <g>
                                <g transform={`translate(1275, 110)`} onClick={() => handleLegend2("0-19 years")}>
                                    <rect height={20} width={20} fill={"#90B0F0"} />
                                    <text x={35} y={15}> 0-19 years </text>
                                </g>
                                <g transform={`translate(1275, 140)`} onClick={() => handleLegend2("20-29 years")}>
                                    <rect height={20} width={20} fill={"#477EED"}/>
                                    <text x={35} y={15}> 20-29 years </text>
                                </g>
                                <g transform={`translate(1275, 170)`} onClick={() => handleLegend2("30-39 years")}>
                                    <rect height={20} width={20} fill={"#3964BD"}/>
                                    <text x={35} y={15}> 30-39 years </text>
                                </g>
                                <g transform={`translate(1275, 200)`} onClick={() => handleLegend2("40-49 years")}>
                                    <rect height={20} width={20} fill={"#42506E"}/>
                                    <text x={35} y={15}> 40-49 years </text>
                                </g>
                                <g transform={`translate(1275, 230)`} onClick={() => handleLegend2("50-59 years")}>
                                    <rect height={20} width={20} fill={"#213A6E"}/>
                                    <text x={35} y={15}> 50-59 years </text>
                                </g>
                                <g transform={`translate(1275, 260)`} onClick={() => handleLegend2("60-69 years")}>
                                    <rect height={20} width={20} fill={"#C0ECF0"}/>
                                    <text x={35} y={15}> 60-69 years </text>
                                </g>
                                <g transform={`translate(1275, 290)`} onClick={() => handleLegend2("70-79 years")}>
                                    <rect height={20} width={20} fill={"#76E4EE"}/>
                                    <text x={35} y={15}> 70-79 years </text>
                                </g>
                                <g transform={`translate(1275, 320)`} onClick={() => handleLegend2("80+ years")}>
                                    <rect height={20} width={20} fill={"#5DB2BA"}/>
                                    <text x={35} y={15}> 80+ years </text>
                                </g>
                            </g>
                        </svg>
                    </Box>
                </div>
            </div>
        </>
    )
}


export default State;
