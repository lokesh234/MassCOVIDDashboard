import React from "react"

const totaldata = [
    {
        "Date": "1-Mar",
        "Positive Total": 3,
        "Positive New": 1
    },
    {
        "Date": "2-Mar",
        "Positive Total": 3,
        "Positive New": 0
    },
    {
        "Date": "3-Mar",
        "Positive Total": 4,
        "Positive New": 1
    },
    {
        "Date": "4-Mar",
        "Positive Total": 6,
        "Positive New": 2
    },
    {
        "Date": "5-Mar",
        "Positive Total": 14,
        "Positive New": 8
    },
    {
        "Date": "6-Mar",
        "Positive Total": 28,
        "Positive New": 14
    },
    {
        "Date": "7-Mar",
        "Positive Total": 72,
        "Positive New": 44
    },
    {
        "Date": "8-Mar",
        "Positive Total": 91,
        "Positive New": 19
    },
    {
        "Date": "9-Mar",
        "Positive Total": 96,
        "Positive New": 5
    },
    {
        "Date": "10-Mar",
        "Positive Total": 110,
        "Positive New": 14
    },
    {
        "Date": "11-Mar",
        "Positive Total": 132,
        "Positive New": 22
    },
    {
        "Date": "12-Mar",
        "Positive Total": 161,
        "Positive New": 29
    },
    {
        "Date": "13-Mar",
        "Positive Total": 222,
        "Positive New": 61
    },
    {
        "Date": "14-Mar",
        "Positive Total": 295,
        "Positive New": 73
    },
    {
        "Date": "15-Mar",
        "Positive Total": 363,
        "Positive New": 68
    },
    {
        "Date": "16-Mar",
        "Positive Total": 513,
        "Positive New": 150
    },
    {
        "Date": "17-Mar",
        "Positive Total": 762,
        "Positive New": 249
    },
    {
        "Date": "18-Mar",
        "Positive Total": 1021,
        "Positive New": 259
    },
    {
        "Date": "19-Mar",
        "Positive Total": 1299,
        "Positive New": 278
    },
    {
        "Date": "20-Mar",
        "Positive Total": 1687,
        "Positive New": 388
    },
    {
        "Date": "21-Mar",
        "Positive Total": 2009,
        "Positive New": 322
    },
    {
        "Date": "22-Mar",
        "Positive Total": 2295,
        "Positive New": 286
    },
    {
        "Date": "23-Mar",
        "Positive Total": 2904,
        "Positive New": 609
    },
    {
        "Date": "24-Mar",
        "Positive Total": 3622,
        "Positive New": 718
    },
    {
        "Date": "25-Mar",
        "Positive Total": 4368,
        "Positive New": 746
    },
    {
        "Date": "26-Mar",
        "Positive Total": 5303,
        "Positive New": 935
    },
    {
        "Date": "27-Mar",
        "Positive Total": 6246,
        "Positive New": 943
    },
    {
        "Date": "28-Mar",
        "Positive Total": 6900,
        "Positive New": 654
    },
    {
        "Date": "29-Mar",
        "Positive Total": 7423,
        "Positive New": 523
    },
    {
        "Date": "30-Mar",
        "Positive Total": 8661,
        "Positive New": 1238
    },
    {
        "Date": "31-Mar",
        "Positive Total": 9927,
        "Positive New": 1266
    },
    {
        "Date": "1-Apr",
        "Positive Total": 11265,
        "Positive New": 1338
    },
    {
        "Date": "2-Apr",
        "Positive Total": 12540,
        "Positive New": 1275
    },
    {
        "Date": "3-Apr",
        "Positive Total": 14020,
        "Positive New": 1480
    },
    {
        "Date": "4-Apr",
        "Positive Total": 15182,
        "Positive New": 1162
    },
    {
        "Date": "5-Apr",
        "Positive Total": 16159,
        "Positive New": 977
    },
    {
        "Date": "6-Apr",
        "Positive Total": 18091,
        "Positive New": 1932
    },
    {
        "Date": "7-Apr",
        "Positive Total": 20112,
        "Positive New": 2021
    },
    {
        "Date": "8-Apr",
        "Positive Total": 21976,
        "Positive New": 1864
    },
    {
        "Date": "9-Apr",
        "Positive Total": 23954,
        "Positive New": 1978
    },
    {
        "Date": "10-Apr",
        "Positive Total": 26009,
        "Positive New": 2055
    },
    {
        "Date": "11-Apr",
        "Positive Total": 27338,
        "Positive New": 1329
    },
    {
        "Date": "12-Apr",
        "Positive Total": 28268,
        "Positive New": 930
    },
    {
        "Date": "13-Apr",
        "Positive Total": 30254,
        "Positive New": 1986
    },
    {
        "Date": "14-Apr",
        "Positive Total": 33181,
        "Positive New": 2927
    },
    {
        "Date": "15-Apr",
        "Positive Total": 35721,
        "Positive New": 2540
    },
    {
        "Date": "16-Apr",
        "Positive Total": 38107,
        "Positive New": 2386
    },
    {
        "Date": "17-Apr",
        "Positive Total": 41096,
        "Positive New": 2989
    },
    {
        "Date": "18-Apr",
        "Positive Total": 42576,
        "Positive New": 1480
    },
    {
        "Date": "19-Apr",
        "Positive Total": 43665,
        "Positive New": 1089
    },
    {
        "Date": "20-Apr",
        "Positive Total": 46350,
        "Positive New": 2685
    },
    {
        "Date": "21-Apr",
        "Positive Total": 48536,
        "Positive New": 2186
    },
    {
        "Date": "22-Apr",
        "Positive Total": 51239,
        "Positive New": 2703
    },
    {
        "Date": "23-Apr",
        "Positive Total": 53644,
        "Positive New": 2405
    },
    {
        "Date": "24-Apr",
        "Positive Total": 55918,
        "Positive New": 2274
    },
    {
        "Date": "25-Apr",
        "Positive Total": 57410,
        "Positive New": 1492
    },
    {
        "Date": "26-Apr",
        "Positive Total": 58254,
        "Positive New": 844
    },
    {
        "Date": "27-Apr",
        "Positive Total": 60382,
        "Positive New": 2128
    },
    {
        "Date": "28-Apr",
        "Positive Total": 62485,
        "Positive New": 2103
    },
    {
        "Date": "29-Apr",
        "Positive Total": 64670,
        "Positive New": 2185
    },
    {
        "Date": "30-Apr",
        "Positive Total": 66717,
        "Positive New": 2047
    },
    {
        "Date": "1-May",
        "Positive Total": 68798,
        "Positive New": 2081
    },
    {
        "Date": "2-May",
        "Positive Total": 69827,
        "Positive New": 1029
    },
    {
        "Date": "3-May",
        "Positive Total": 70560,
        "Positive New": 733
    },
    {
        "Date": "4-May",
        "Positive Total": 72438,
        "Positive New": 1878
    },
    {
        "Date": "5-May",
        "Positive Total": 74171,
        "Positive New": 1733
    },
    {
        "Date": "6-May",
        "Positive Total": 75869,
        "Positive New": 1698
    },
    {
        "Date": "7-May",
        "Positive Total": 77546,
        "Positive New": 1677
    },
    {
        "Date": "8-May",
        "Positive Total": 78999,
        "Positive New": 1453
    },
    {
        "Date": "9-May",
        "Positive Total": 79681,
        "Positive New": 682
    },
    {
        "Date": "10-May",
        "Positive Total": 80066,
        "Positive New": 385
    },
    {
        "Date": "11-May",
        "Positive Total": 81371,
        "Positive New": 1305
    },
    {
        "Date": "12-May",
        "Positive Total": 82821,
        "Positive New": 1450
    },
    {
        "Date": "13-May",
        "Positive Total": 84132,
        "Positive New": 1311
    },
    {
        "Date": "14-May",
        "Positive Total": 85447,
        "Positive New": 1315
    },
    {
        "Date": "15-May",
        "Positive Total": 86551,
        "Positive New": 1104
    },
    {
        "Date": "16-May",
        "Positive Total": 87196,
        "Positive New": 645
    },
    {
        "Date": "17-May",
        "Positive Total": 87559,
        "Positive New": 363
    },
    {
        "Date": "18-May",
        "Positive Total": 88870,
        "Positive New": 1311
    },
    {
        "Date": "19-May",
        "Positive Total": 89943,
        "Positive New": 1073
    },
    {
        "Date": "20-May",
        "Positive Total": 90954,
        "Positive New": 1011
    },
    {
        "Date": "21-May",
        "Positive Total": 91917,
        "Positive New": 963
    },
    {
        "Date": "22-May",
        "Positive Total": 92779,
        "Positive New": 862
    },
    {
        "Date": "23-May",
        "Positive Total": 93166,
        "Positive New": 387
    },
    {
        "Date": "24-May",
        "Positive Total": 93467,
        "Positive New": 301
    },
    {
        "Date": "25-May",
        "Positive Total": 93665,
        "Positive New": 198
    },
    {
        "Date": "26-May",
        "Positive Total": 94529,
        "Positive New": 864
    },
    {
        "Date": "27-May",
        "Positive Total": 95216,
        "Positive New": 687
    },
    {
        "Date": "28-May",
        "Positive Total": 95855,
        "Positive New": 639
    },
    {
        "Date": "29-May",
        "Positive Total": 96385,
        "Positive New": 530
    },
    {
        "Date": "30-May",
        "Positive Total": 96656,
        "Positive New": 271
    },
    {
        "Date": "31-May",
        "Positive Total": 96817,
        "Positive New": 161
    },
    {
        "Date": "1-Jun",
        "Positive Total": 97325,
        "Positive New": 508
    },
    {
        "Date": "2-Jun",
        "Positive Total": 97772,
        "Positive New": 447
    },
    {
        "Date": "3-Jun",
        "Positive Total": 98231,
        "Positive New": 459
    },
    {
        "Date": "4-Jun",
        "Positive Total": 98609,
        "Positive New": 378
    },
    {
        "Date": "5-Jun",
        "Positive Total": 98946,
        "Positive New": 337
    },
    {
        "Date": "6-Jun",
        "Positive Total": 99094,
        "Positive New": 148
    },
    {
        "Date": "7-Jun",
        "Positive Total": 99245,
        "Positive New": 151
    },
    {
        "Date": "8-Jun",
        "Positive Total": 99597,
        "Positive New": 352
    },
    {
        "Date": "9-Jun",
        "Positive Total": 99939,
        "Positive New": 342
    },
    {
        "Date": "10-Jun",
        "Positive Total": 100198,
        "Positive New": 259
    },
    {
        "Date": "11-Jun",
        "Positive Total": 100424,
        "Positive New": 226
    },
    {
        "Date": "12-Jun",
        "Positive Total": 100678,
        "Positive New": 254
    },
    {
        "Date": "13-Jun",
        "Positive Total": 100775,
        "Positive New": 97
    },
    {
        "Date": "14-Jun",
        "Positive Total": 100851,
        "Positive New": 76
    },
    {
        "Date": "15-Jun",
        "Positive Total": 101086,
        "Positive New": 235
    },
    {
        "Date": "16-Jun",
        "Positive Total": 101284,
        "Positive New": 198
    },
    {
        "Date": "17-Jun",
        "Positive Total": 101532,
        "Positive New": 248
    },
    {
        "Date": "18-Jun",
        "Positive Total": 101772,
        "Positive New": 240
    },
    {
        "Date": "19-Jun",
        "Positive Total": 101947,
        "Positive New": 175
    },
    {
        "Date": "20-Jun",
        "Positive Total": 102040,
        "Positive New": 93
    },
    {
        "Date": "21-Jun",
        "Positive Total": 102119,
        "Positive New": 79
    },
    {
        "Date": "22-Jun",
        "Positive Total": 102343,
        "Positive New": 224
    },
    {
        "Date": "23-Jun",
        "Positive Total": 102532,
        "Positive New": 189
    },
    {
        "Date": "24-Jun",
        "Positive Total": 102742,
        "Positive New": 210
    },
    {
        "Date": "25-Jun",
        "Positive Total": 102948,
        "Positive New": 206
    },
    {
        "Date": "26-Jun",
        "Positive Total": 103146,
        "Positive New": 198
    },
    {
        "Date": "27-Jun",
        "Positive Total": 103280,
        "Positive New": 134
    },
    {
        "Date": "28-Jun",
        "Positive Total": 103351,
        "Positive New": 71
    },
    {
        "Date": "29-Jun",
        "Positive Total": 103556,
        "Positive New": 205
    },
    {
        "Date": "30-Jun",
        "Positive Total": 103776,
        "Positive New": 220
    },
    {
        "Date": "1-Jul",
        "Positive Total": 103992,
        "Positive New": 216
    },
    {
        "Date": "2-Jul",
        "Positive Total": 104218,
        "Positive New": 226
    },
    {
        "Date": "3-Jul",
        "Positive Total": 104317,
        "Positive New": 99
    },
    {
        "Date": "4-Jul",
        "Positive Total": 104377,
        "Positive New": 60
    },
    {
        "Date": "5-Jul",
        "Positive Total": 104478,
        "Positive New": 101
    },
    {
        "Date": "6-Jul",
        "Positive Total": 104715,
        "Positive New": 237
    },
    {
        "Date": "7-Jul",
        "Positive Total": 104956,
        "Positive New": 241
    },
    {
        "Date": "8-Jul",
        "Positive Total": 105172,
        "Positive New": 216
    },
    {
        "Date": "9-Jul",
        "Positive Total": 105426,
        "Positive New": 254
    },
    {
        "Date": "10-Jul",
        "Positive Total": 105654,
        "Positive New": 228
    },
    {
        "Date": "11-Jul",
        "Positive Total": 105771,
        "Positive New": 117
    },
    {
        "Date": "12-Jul",
        "Positive Total": 105858,
        "Positive New": 87
    },
    {
        "Date": "13-Jul",
        "Positive Total": 106124,
        "Positive New": 266
    },
    {
        "Date": "14-Jul",
        "Positive Total": 106356,
        "Positive New": 232
    },
    {
        "Date": "15-Jul",
        "Positive Total": 106654,
        "Positive New": 298
    },
    {
        "Date": "16-Jul",
        "Positive Total": 106899,
        "Positive New": 245
    },
    {
        "Date": "17-Jul",
        "Positive Total": 107126,
        "Positive New": 227
    },
    {
        "Date": "18-Jul",
        "Positive Total": 107254,
        "Positive New": 128
    },
    {
        "Date": "19-Jul",
        "Positive Total": 107328,
        "Positive New": 74
    },
    {
        "Date": "20-Jul",
        "Positive Total": 107607,
        "Positive New": 279
    },
    {
        "Date": "21-Jul",
        "Positive Total": 107862,
        "Positive New": 255
    },
    {
        "Date": "22-Jul",
        "Positive Total": 108120,
        "Positive New": 258
    },
    {
        "Date": "23-Jul",
        "Positive Total": 108378,
        "Positive New": 258
    },
    {
        "Date": "24-Jul",
        "Positive Total": 108635,
        "Positive New": 257
    },
    {
        "Date": "25-Jul",
        "Positive Total": 108794,
        "Positive New": 159
    },
    {
        "Date": "26-Jul",
        "Positive Total": 108895,
        "Positive New": 101
    },
    {
        "Date": "27-Jul",
        "Positive Total": 109256,
        "Positive New": 361
    },
    {
        "Date": "28-Jul",
        "Positive Total": 109576,
        "Positive New": 320
    },
    {
        "Date": "29-Jul",
        "Positive Total": 109895,
        "Positive New": 319
    },
    {
        "Date": "30-Jul",
        "Positive Total": 110231,
        "Positive New": 336
    },
    {
        "Date": "31-Jul",
        "Positive Total": 110550,
        "Positive New": 319
    },
    {
        "Date": "1-Aug",
        "Positive Total": 110697,
        "Positive New": 147
    },
    {
        "Date": "2-Aug",
        "Positive Total": 110806,
        "Positive New": 109
    },
    {
        "Date": "3-Aug",
        "Positive Total": 111164,
        "Positive New": 358
    },
    {
        "Date": "4-Aug",
        "Positive Total": 111472,
        "Positive New": 308
    },
    {
        "Date": "5-Aug",
        "Positive Total": 111805,
        "Positive New": 333
    },
    {
        "Date": "6-Aug",
        "Positive Total": 112159,
        "Positive New": 354
    },
    {
        "Date": "7-Aug",
        "Positive Total": 112458,
        "Positive New": 299
    },
    {
        "Date": "8-Aug",
        "Positive Total": 112627,
        "Positive New": 169
    },
    {
        "Date": "9-Aug",
        "Positive Total": 112712,
        "Positive New": 85
    },
    {
        "Date": "10-Aug",
        "Positive Total": 113086,
        "Positive New": 374
    },
    {
        "Date": "11-Aug",
        "Positive Total": 113370,
        "Positive New": 284
    },
    {
        "Date": "12-Aug",
        "Positive Total": 113674,
        "Positive New": 304
    },
    {
        "Date": "13-Aug",
        "Positive Total": 114023,
        "Positive New": 349
    },
    {
        "Date": "14-Aug",
        "Positive Total": 114366,
        "Positive New": 343
    },
    {
        "Date": "15-Aug",
        "Positive Total": 114517,
        "Positive New": 151
    },
    {
        "Date": "16-Aug",
        "Positive Total": 114637,
        "Positive New": 120
    },
    {
        "Date": "17-Aug",
        "Positive Total": 115006,
        "Positive New": 369
    },
    {
        "Date": "18-Aug",
        "Positive Total": 115387,
        "Positive New": 381
    },
    {
        "Date": "19-Aug",
        "Positive Total": 115724,
        "Positive New": 337
    },
    {
        "Date": "20-Aug",
        "Positive Total": 116080,
        "Positive New": 356
    },
    {
        "Date": "21-Aug",
        "Positive Total": 116363,
        "Positive New": 283
    },
    {
        "Date": "22-Aug",
        "Positive Total": 116511,
        "Positive New": 148
    },
    {
        "Date": "23-Aug",
        "Positive Total": 116603,
        "Positive New": 92
    },
    {
        "Date": "24-Aug",
        "Positive Total": 116998,
        "Positive New": 395
    },
    {
        "Date": "25-Aug",
        "Positive Total": 117377,
        "Positive New": 379
    },
    {
        "Date": "26-Aug",
        "Positive Total": 117756,
        "Positive New": 379
    },
    {
        "Date": "27-Aug",
        "Positive Total": 118100,
        "Positive New": 344
    },
    {
        "Date": "28-Aug",
        "Positive Total": 118463,
        "Positive New": 363
    },
    {
        "Date": "29-Aug",
        "Positive Total": 118635,
        "Positive New": 172
    },
    {
        "Date": "30-Aug",
        "Positive Total": 118774,
        "Positive New": 139
    },
    {
        "Date": "31-Aug",
        "Positive Total": 119213,
        "Positive New": 439
    },
    {
        "Date": "1-Sep",
        "Positive Total": 119608,
        "Positive New": 395
    },
    {
        "Date": "2-Sep",
        "Positive Total": 119992,
        "Positive New": 384
    },
    {
        "Date": "3-Sep",
        "Positive Total": 120456,
        "Positive New": 464
    },
    {
        "Date": "4-Sep",
        "Positive Total": 120803,
        "Positive New": 347
    },
    {
        "Date": "5-Sep",
        "Positive Total": 121001,
        "Positive New": 198
    },
    {
        "Date": "6-Sep",
        "Positive Total": 121113,
        "Positive New": 112
    },
    {
        "Date": "7-Sep",
        "Positive Total": 121274,
        "Positive New": 161
    },
    {
        "Date": "8-Sep",
        "Positive Total": 121820,
        "Positive New": 546
    },
    {
        "Date": "9-Sep",
        "Positive Total": 122294,
        "Positive New": 474
    },
    {
        "Date": "10-Sep",
        "Positive Total": 122704,
        "Positive New": 410
    },
    {
        "Date": "11-Sep",
        "Positive Total": 123113,
        "Positive New": 409
    },
    {
        "Date": "12-Sep",
        "Positive Total": 123302,
        "Positive New": 189
    },
    {
        "Date": "13-Sep",
        "Positive Total": 123463,
        "Positive New": 161
    },
    {
        "Date": "14-Sep",
        "Positive Total": 123966,
        "Positive New": 503
    },
    {
        "Date": "15-Sep",
        "Positive Total": 124390,
        "Positive New": 424
    },
    {
        "Date": "16-Sep",
        "Positive Total": 124803,
        "Positive New": 413
    },
    {
        "Date": "17-Sep",
        "Positive Total": 125157,
        "Positive New": 354
    },
    {
        "Date": "18-Sep",
        "Positive Total": 125593,
        "Positive New": 436
    },
    {
        "Date": "19-Sep",
        "Positive Total": 125795,
        "Positive New": 202
    },
    {
        "Date": "20-Sep",
        "Positive Total": 125936,
        "Positive New": 141
    },
    {
        "Date": "21-Sep",
        "Positive Total": 126363,
        "Positive New": 427
    },
    {
        "Date": "22-Sep",
        "Positive Total": 126871,
        "Positive New": 508
    },
    {
        "Date": "23-Sep",
        "Positive Total": 127431,
        "Positive New": 560
    },
    {
        "Date": "24-Sep",
        "Positive Total": 128028,
        "Positive New": 597
    },
    {
        "Date": "25-Sep",
        "Positive Total": 128581,
        "Positive New": 553
    },
    {
        "Date": "26-Sep",
        "Positive Total": 128945,
        "Positive New": 364
    },
    {
        "Date": "27-Sep",
        "Positive Total": 129170,
        "Positive New": 225
    },
    {
        "Date": "28-Sep",
        "Positive Total": 130037,
        "Positive New": 867
    },
    {
        "Date": "29-Sep",
        "Positive Total": 130757,
        "Positive New": 720
    },
    {
        "Date": "30-Sep",
        "Positive Total": 131370,
        "Positive New": 613
    },
    {
        "Date": "1-Oct",
        "Positive Total": 132054,
        "Positive New": 684
    },
    {
        "Date": "2-Oct",
        "Positive Total": 132619,
        "Positive New": 565
    },
    {
        "Date": "3-Oct",
        "Positive Total": 133027,
        "Positive New": 408
    },
    {
        "Date": "4-Oct",
        "Positive Total": 133319,
        "Positive New": 292
    },
    {
        "Date": "5-Oct",
        "Positive Total": 134070,
        "Positive New": 751
    },
    {
        "Date": "6-Oct",
        "Positive Total": 134806,
        "Positive New": 736
    },
    {
        "Date": "7-Oct",
        "Positive Total": 135528,
        "Positive New": 722
    },
    {
        "Date": "8-Oct",
        "Positive Total": 136363,
        "Positive New": 835
    },
    {
        "Date": "9-Oct",
        "Positive Total": 137052,
        "Positive New": 689
    },
    {
        "Date": "10-Oct",
        "Positive Total": 137465,
        "Positive New": 413
    },
    {
        "Date": "11-Oct",
        "Positive Total": 137729,
        "Positive New": 264
    },
    {
        "Date": "12-Oct",
        "Positive Total": 138324,
        "Positive New": 595
    },
    {
        "Date": "13-Oct",
        "Positive Total": 139110,
        "Positive New": 786
    },
    {
        "Date": "14-Oct",
        "Positive Total": 140008,
        "Positive New": 898
    },
    {
        "Date": "15-Oct",
        "Positive Total": 140958,
        "Positive New": 950
    },
    {
        "Date": "16-Oct",
        "Positive Total": 141824,
        "Positive New": 866
    },
    {
        "Date": "17-Oct",
        "Positive Total": 142368,
        "Positive New": 544
    },
    {
        "Date": "18-Oct",
        "Positive Total": 142699,
        "Positive New": 331
    },
    {
        "Date": "19-Oct",
        "Positive Total": 143778,
        "Positive New": 1079
    },
    {
        "Date": "20-Oct",
        "Positive Total": 144898,
        "Positive New": 1120
    },
    {
        "Date": "21-Oct",
        "Positive Total": 146099,
        "Positive New": 1201
    },
    {
        "Date": "22-Oct",
        "Positive Total": 147475,
        "Positive New": 1376
    },
    {
        "Date": "23-Oct",
        "Positive Total": 148699,
        "Positive New": 1224
    },
    {
        "Date": "24-Oct",
        "Positive Total": 149488,
        "Positive New": 789
    },
    {
        "Date": "25-Oct",
        "Positive Total": 149972,
        "Positive New": 484
    },
    {
        "Date": "26-Oct",
        "Positive Total": 151496,
        "Positive New": 1524
    },
    {
        "Date": "27-Oct",
        "Positive Total": 152842,
        "Positive New": 1346
    },
    {
        "Date": "28-Oct",
        "Positive Total": 154282,
        "Positive New": 1440
    },
    {
        "Date": "29-Oct",
        "Positive Total": 155668,
        "Positive New": 1386
    },
    {
        "Date": "30-Oct",
        "Positive Total": 156792,
        "Positive New": 1124
    },
    {
        "Date": "31-Oct",
        "Positive Total": 157662,
        "Positive New": 870
    },
    {
        "Date": "1-Nov",
        "Positive Total": 158184,
        "Positive New": 522
    },
    {
        "Date": "2-Nov",
        "Positive Total": 160020,
        "Positive New": 1836
    },
    {
        "Date": "3-Nov",
        "Positive Total": 161926,
        "Positive New": 1906
    },
    {
        "Date": "4-Nov",
        "Positive Total": 164100,
        "Positive New": 2174
    },
    {
        "Date": "5-Nov",
        "Positive Total": 166516,
        "Positive New": 2416
    },
    {
        "Date": "6-Nov",
        "Positive Total": 168756,
        "Positive New": 2240
    },
    {
        "Date": "7-Nov",
        "Positive Total": 170083,
        "Positive New": 1327
    },
    {
        "Date": "8-Nov",
        "Positive Total": 171026,
        "Positive New": 943
    },
    {
        "Date": "9-Nov",
        "Positive Total": 174203,
        "Positive New": 3177
    },
    {
        "Date": "10-Nov",
        "Positive Total": 177025,
        "Positive New": 2822
    },
    {
        "Date": "11-Nov",
        "Positive Total": 179686,
        "Positive New": 2661
    },
    {
        "Date": "12-Nov",
        "Positive Total": 182669,
        "Positive New": 2983
    },
    {
        "Date": "13-Nov",
        "Positive Total": 185277,
        "Positive New": 2608
    },
    {
        "Date": "14-Nov",
        "Positive Total": 186989,
        "Positive New": 1712
    },
    {
        "Date": "15-Nov",
        "Positive Total": 188182,
        "Positive New": 1193
    },
    {
        "Date": "16-Nov",
        "Positive Total": 191709,
        "Positive New": 3527
    },
    {
        "Date": "17-Nov",
        "Positive Total": 194848,
        "Positive New": 3139
    },
    {
        "Date": "18-Nov",
        "Positive Total": 197770,
        "Positive New": 2922
    },
    {
        "Date": "19-Nov",
        "Positive Total": 200770,
        "Positive New": 3000
    },
    {
        "Date": "20-Nov",
        "Positive Total": 203619,
        "Positive New": 2849
    },
    {
        "Date": "21-Nov",
        "Positive Total": 205386,
        "Positive New": 1767
    },
    {
        "Date": "22-Nov",
        "Positive Total": 206581,
        "Positive New": 1195
    },
    {
        "Date": "23-Nov",
        "Positive Total": 210177,
        "Positive New": 3596
    },
    {
        "Date": "24-Nov",
        "Positive Total": 213970,
        "Positive New": 3793
    },
    {
        "Date": "25-Nov",
        "Positive Total": 216915,
        "Positive New": 2945
    },
    {
        "Date": "26-Nov",
        "Positive Total": 217361,
        "Positive New": 446
    },
    {
        "Date": "27-Nov",
        "Positive Total": 220746,
        "Positive New": 3385
    },
    {
        "Date": "28-Nov",
        "Positive Total": 223654,
        "Positive New": 2908
    },
    {
        "Date": "29-Nov",
        "Positive Total": 225417,
        "Positive New": 1763
    },
    {
        "Date": "30-Nov",
        "Positive Total": 230923,
        "Positive New": 5506
    },
    {
        "Date": "1-Dec",
        "Positive Total": 236789,
        "Positive New": 5866
    },
    {
        "Date": "2-Dec",
        "Positive Total": 242887,
        "Positive New": 6098
    },
    {
        "Date": "3-Dec",
        "Positive Total": 248698,
        "Positive New": 5811
    },
    {
        "Date": "4-Dec",
        "Positive Total": 253998,
        "Positive New": 5300
    },
    {
        "Date": "5-Dec",
        "Positive Total": 256186,
        "Positive New": 2188
    },
    {
        "Date": "6-Dec",
        "Positive Total": 258287,
        "Positive New": 2101
    },
    {
        "Date": "7-Dec",
        "Positive Total": 264501,
        "Positive New": 6214
    },
    {
        "Date": "8-Dec",
        "Positive Total": 269905,
        "Positive New": 5404
    },
    {
        "Date": "9-Dec",
        "Positive Total": 275316,
        "Positive New": 5411
    },
    {
        "Date": "10-Dec",
        "Positive Total": 280773,
        "Positive New": 5457
    },
    {
        "Date": "11-Dec",
        "Positive Total": 285716,
        "Positive New": 4943
    },
    {
        "Date": "12-Dec",
        "Positive Total": 288584,
        "Positive New": 2868
    },
    {
        "Date": "13-Dec",
        "Positive Total": 290789,
        "Positive New": 2205
    },
    {
        "Date": "14-Dec",
        "Positive Total": 297055,
        "Positive New": 6266
    },
    {
        "Date": "15-Dec",
        "Positive Total": 303064,
        "Positive New": 6009
    },
    {
        "Date": "16-Dec",
        "Positive Total": 308702,
        "Positive New": 5638
    },
    {
        "Date": "17-Dec",
        "Positive Total": 310278,
        "Positive New": 1576
    },
    {
        "Date": "18-Dec",
        "Positive Total": 315956,
        "Positive New": 5678
    },
    {
        "Date": "19-Dec",
        "Positive Total": 319613,
        "Positive New": 3657
    },
    {
        "Date": "20-Dec",
        "Positive Total": 321949,
        "Positive New": 2336
    },
    {
        "Date": "21-Dec",
        "Positive Total": 328429,
        "Positive New": 6480
    },
    {
        "Date": "22-Dec",
        "Positive Total": 334377,
        "Positive New": 5948
    },
    {
        "Date": "23-Dec",
        "Positive Total": 338851,
        "Positive New": 4474
    },
    {
        "Date": "24-Dec",
        "Positive Total": 341504,
        "Positive New": 2653
    },
    {
        "Date": "25-Dec",
        "Positive Total": 341984,
        "Positive New": 480
    },
    {
        "Date": "26-Dec",
        "Positive Total": 346174,
        "Positive New": 4190
    },
    {
        "Date": "27-Dec",
        "Positive Total": 348846,
        "Positive New": 2672
    },
    {
        "Date": "28-Dec",
        "Positive Total": 357228,
        "Positive New": 8382
    },
    {
        "Date": "29-Dec",
        "Positive Total": 364405,
        "Positive New": 7177
    },
    {
        "Date": "30-Dec",
        "Positive Total": 370120,
        "Positive New": 5715
    },
    {
        "Date": "31-Dec",
        "Positive Total": 374290,
        "Positive New": 4170
    },
    {
        "Date": "1-Jan",
        "Positive Total": 375646,
        "Positive New": 1356
    },
    {
        "Date": "2-Jan",
        "Positive Total": 380330,
        "Positive New": 4684
    },
    {
        "Date": "3-Jan",
        "Positive Total": 383316,
        "Positive New": 2986
    },
    {
        "Date": "4-Jan",
        "Positive Total": 392345,
        "Positive New": 9029
    },
    {
        "Date": "5-Jan",
        "Positive Total": 400030,
        "Positive New": 7685
    },
    {
        "Date": "6-Jan",
        "Positive Total": 407091,
        "Positive New": 7061
    },
    {
        "Date": "7-Jan",
        "Positive Total": 413551,
        "Positive New": 6460
    },
    {
        "Date": "8-Jan",
        "Positive Total": 419290,
        "Positive New": 5739
    },
    {
        "Date": "9-Jan",
        "Positive Total": 422891,
        "Positive New": 3601
    },
    {
        "Date": "10-Jan",
        "Positive Total": 425247,
        "Positive New": 2356
    },
    {
        "Date": "11-Jan",
        "Positive Total": 431704,
        "Positive New": 6457
    },
    {
        "Date": "12-Jan",
        "Positive Total": 437224,
        "Positive New": 5520
    },
    {
        "Date": "13-Jan",
        "Positive Total": 442125,
        "Positive New": 4901
    },
    {
        "Date": "14-Jan",
        "Positive Total": 447123,
        "Positive New": 4998
    },
    {
        "Date": "15-Jan",
        "Positive Total": 451526,
        "Positive New": 4403
    },
    {
        "Date": "16-Jan",
        "Positive Total": 454186,
        "Positive New": 2660
    },
    {
        "Date": "17-Jan",
        "Positive Total": 456157,
        "Positive New": 1971
    },
    {
        "Date": "18-Jan",
        "Positive Total": 460439,
        "Positive New": 4282
    },
    {
        "Date": "19-Jan",
        "Positive Total": 465703,
        "Positive New": 5264
    },
    {
        "Date": "20-Jan",
        "Positive Total": 469598,
        "Positive New": 3895
    },
    {
        "Date": "21-Jan",
        "Positive Total": 472042,
        "Positive New": 2444
    },
    {
        "Date": "22-Jan",
        "Positive Total": 472175,
        "Positive New": 133
    }
]

export default totaldata;
