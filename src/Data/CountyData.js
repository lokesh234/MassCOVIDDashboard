import React from "react"

const countydata = [
    {
        "id": "Barnstable County",
        "datepublished": "01/21/2021",
        "percentpositivity": "6.82%",
        "source": "https://www.mass.gov/doc/weekly-covid-19-public-health-report-january-21-2021/download",
        "casecount": 1576,
        "totalcasecount": 7591,
        "total2weektests": 25292,
        "totalcumtests": 229821,
        "adir": 52,
        "totalpositivetests": 1725
    },
    {
        "id": "Berkshire County",
        "totalcumtests": 211619,
        "adir": 52.1,
        "source": "https://www.mass.gov/doc/weekly-covid-19-public-health-report-january-21-2021/download",
        "percentpositivity": "4.49%",
        "casecount": 922,
        "totalcasecount": 4123,
        "total2weektests": 22012,
        "totalpositivetests": 988,
        "datepublished": "01/21/2021"
    },
    {
        "id": "Bristol County",
        "total2weektests": 81993,
        "datepublished": "01/21/2021",
        "percentpositivity": "11.14%",
        "totalcumtests": 772546,
        "totalpositivetests": 9134,
        "adir": 100.9,
        "totalcasecount": 45852,
        "source": "https://www.mass.gov/doc/weekly-covid-19-public-health-report-january-21-2021/download",
        "casecount": 8073
    },
    {
        "id": "Dukes and Nantucket Counties",
        "percentpositivity": "7.42%",
        "source": "https://www.mass.gov/doc/weekly-covid-19-public-health-report-january-21-2021/download",
        "datepublished": "01/21/2021",
        "adir": 84,
        "casecount": 339,
        "totalcasecount": 1688,
        "totalpositivetests": 349,
        "totalcumtests": 51900,
        "total2weektests": 4706
    },
    {
        "id": "Essex County",
        "adir": 95.9,
        "total2weektests": 140576,
        "casecount": 10702,
        "totalcumtests": 1322274,
        "source": "https://www.mass.gov/doc/weekly-covid-19-public-health-report-january-21-2021/download",
        "totalcasecount": 72394,
        "percentpositivity": "9.06%",
        "datepublished": "01/21/2021",
        "totalpositivetests": 12730
    },
    {
        "id": "Franklin County",
        "adir": 27.6,
        "total2weektests": 10898,
        "totalpositivetests": 302,
        "casecount": 275,
        "percentpositivity": "2.77%",
        "datepublished": "01/21/2021",
        "source": "https://www.mass.gov/doc/weekly-covid-19-public-health-report-january-21-2021/download",
        "totalcasecount": 1637,
        "totalcumtests": 108883
    },
    {
        "id": "Hampden County",
        "total2weektests": 71512,
        "datepublished": "01/21/2021",
        "casecount": 5647,
        "totalcumtests": 647516,
        "percentpositivity": "9.39%",
        "source": "https://www.mass.gov/doc/weekly-covid-19-public-health-report-january-21-2021/download",
        "adir": 85.7,
        "totalpositivetests": 6718,
        "totalcasecount": 33910
    },
    {
        "id": "Hampshire County",
        "totalcasecount": 5139,
        "totalcumtests": 390441,
        "percentpositivity": "4.19%",
        "totalpositivetests": 1104,
        "datepublished": "01/21/2021",
        "total2weektests": 26355,
        "casecount": 975,
        "source": "https://www.mass.gov/doc/weekly-covid-19-public-health-report-january-21-2021/download",
        "adir": 42.5
    },
    {
        "id": "Middlesex County",
        "totalcumtests": 3175090,
        "percentpositivity": "5.20%",
        "adir": 62.1,
        "datepublished": "01/21/2021",
        "source": "https://www.mass.gov/doc/weekly-covid-19-public-health-report-january-21-2021/download",
        "casecount": 14139,
        "totalpositivetests": 15996,
        "totalcasecount": 94636,
        "total2weektests": 307372
    },
    {
        "id": "Norfolk County",
        "datepublished": "01/21/2021",
        "totalcumtests": 1115819,
        "casecount": 6584,
        "totalcasecount": 36134,
        "adir": 65.7,
        "total2weektests": 118128,
        "totalpositivetests": 7257,
        "percentpositivity": "6.14%",
        "source": "https://www.mass.gov/doc/weekly-covid-19-public-health-report-january-21-2021/download"
    },
    {
        "id": "Plymouth County",
        "adir": 83.5,
        "percentpositivity": "9.16%",
        "total2weektests": 74111,
        "totalpositivetests": 6785,
        "datepublished": "01/21/2021",
        "source": "https://www.mass.gov/doc/weekly-covid-19-public-health-report-january-21-2021/download",
        "totalcumtests": 632245,
        "casecount": 6171,
        "totalcasecount": 32629
    },
    {
        "id": "Suffolk County",
        "datepublished": "01/21/2021",
        "percentpositivity": "5.31%",
        "totalcumtests": 2351752,
        "totalcasecount": 66478,
        "total2weektests": 198803,
        "totalpositivetests": 10554,
        "source": "https://www.mass.gov/doc/weekly-covid-19-public-health-report-january-21-2021/download",
        "casecount": 9095,
        "adir": 80.2
    },
    {
        "id": "Worcester County",
        "totalcumtests": 1309626,
        "adir": 75.6,
        "casecount": 8881,
        "total2weektests": 121261,
        "percentpositivity": "8.01%",
        "source": "https://www.mass.gov/doc/weekly-covid-19-public-health-report-january-21-2021/download",
        "datepublished": "01/21/2021",
        "totalpositivetests": 9715,
        "totalcasecount": 54513
    }
]

export default countydata;
