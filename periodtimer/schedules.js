const times = {

    normal: [
              [   //         Start time               End time
                time_obj.ofDay(07, 50), time_obj.ofDay(08, 15), // AB 6
                time_obj.ofDay(08, 18), time_obj.ofDay(09, 00), // P1 6
                time_obj.ofDay(09, 03), time_obj.ofDay(09, 45), // P2 6
                time_obj.ofDay(09, 48), time_obj.ofDay(10, 30), // P3 6
                time_obj.ofDay(10, 33), time_obj.ofDay(11, 15), // P4 6
                /*  Teleport - 11:15  */time_obj.ofDay(11, 45), // Lu 6
                time_obj.ofDay(11, 48), time_obj.ofDay(12, 30), // P5 6
                time_obj.ofDay(12, 33), time_obj.ofDay(13, 15), // P6 6
                time_obj.ofDay(13, 18), time_obj.ofDay(14, 00), // P7 6
                time_obj.ofDay(14, 03), time_obj.ofDay(14, 45), // P8 6
              ],
              [   //         Start time               End time
                time_obj.ofDay(07, 50), time_obj.ofDay(08, 15), // AB 7
                time_obj.ofDay(08, 18), time_obj.ofDay(09, 00), // P1 7
                time_obj.ofDay(09, 03), time_obj.ofDay(09, 45), // P2 7
                time_obj.ofDay(09, 48), time_obj.ofDay(10, 30), // P3 7
                time_obj.ofDay(10, 33), time_obj.ofDay(11, 15), // P4 7
                time_obj.ofDay(11, 18), time_obj.ofDay(12, 00), // P5 7
                /*  Teleport - 12:00  */time_obj.ofDay(12, 30), // Lu 7
                time_obj.ofDay(12, 33), time_obj.ofDay(13, 15), // P6 7
                time_obj.ofDay(13, 18), time_obj.ofDay(14, 00), // P7 7
                time_obj.ofDay(14, 03), time_obj.ofDay(14, 45), // P8 7
              ],
              [   //         Start time               End time
                time_obj.ofDay(07, 50), time_obj.ofDay(08, 15), // AB 8
                time_obj.ofDay(08, 18), time_obj.ofDay(09, 00), // P1 8
                time_obj.ofDay(09, 03), time_obj.ofDay(09, 45), // P2 8
                time_obj.ofDay(09, 48), time_obj.ofDay(10, 30), // P3 8
                time_obj.ofDay(10, 33), time_obj.ofDay(11, 15), // P4 8
                time_obj.ofDay(11, 18), time_obj.ofDay(12, 00), // P5 8
                time_obj.ofDay(12, 03), time_obj.ofDay(12, 45), // P6 8
                /*  Teleport - 12:45  */time_obj.ofDay(13, 15), // Lu 8
                time_obj.ofDay(13, 18), time_obj.ofDay(14, 00), // P7 8
                time_obj.ofDay(14, 03), time_obj.ofDay(14, 45), // P8 8
              ]
            ],
    test:   [     // NEEDS UPDATING AS SOON AS POSSIBLE, CURRENTLY COMPLETELY GUESSING
              [   //         Start time               End time
                time_obj.ofDay(07, 50), time_obj.ofDay(09, 35), // AB 6
                time_obj.ofDay(09, 38), time_obj.ofDay(10, 10), // P1 6
                time_obj.ofDay(10, 13), time_obj.ofDay(10, 45), // P2 6
                time_obj.ofDay(10, 48), time_obj.ofDay(11, 20), // P3 6
                time_obj.ofDay(11, 23), time_obj.ofDay(11, 55), // P4 6
                /*  Teleport - 11:55  */time_obj.ofDay(12, 25), // Lu 6
                time_obj.ofDay(12, 28), time_obj.ofDay(13, 00), // P5 6
                time_obj.ofDay(13, 03), time_obj.ofDay(13, 35), // P6 6
                time_obj.ofDay(13, 38), time_obj.ofDay(14, 10), // P7 6
                time_obj.ofDay(14, 13), time_obj.ofDay(14, 45), // P8 6
              ],
              [   //         Start time               End time
                time_obj.ofDay(07, 50), time_obj.ofDay(09, 35), // AB 7
                time_obj.ofDay(09, 38), time_obj.ofDay(10, 10), // P1 7
                time_obj.ofDay(10, 13), time_obj.ofDay(10, 45), // P2 7
                time_obj.ofDay(10, 48), time_obj.ofDay(11, 20), // P3 7
                time_obj.ofDay(11, 23), time_obj.ofDay(11, 55), // P4 7
                time_obj.ofDay(11, 58), time_obj.ofDay(12, 30), // P5 7
                /*  Teleport - 12:30  */time_obj.ofDay(13, 00), // Lu 7
                time_obj.ofDay(13, 03), time_obj.ofDay(13, 35), // P6 7
                time_obj.ofDay(13, 38), time_obj.ofDay(14, 10), // P7 7
                time_obj.ofDay(14, 13), time_obj.ofDay(14, 45), // P8 7
              ],
              [   //         Start time               End time
                time_obj.ofDay(07, 50), time_obj.ofDay(09, 35), // AB 8
                time_obj.ofDay(09, 38), time_obj.ofDay(10, 10), // P1 8
                time_obj.ofDay(10, 13), time_obj.ofDay(10, 45), // P2 8
                time_obj.ofDay(10, 48), time_obj.ofDay(11, 20), // P3 8
                time_obj.ofDay(11, 23), time_obj.ofDay(11, 55), // P4 8
                time_obj.ofDay(11, 58), time_obj.ofDay(12, 30), // P5 8
                time_obj.ofDay(12, 33), time_obj.ofDay(13, 05), // P6 8
                /*  Teleport - 13:05  */time_obj.ofDay(13, 35), // Lu 8
                time_obj.ofDay(13, 38), time_obj.ofDay(14, 10), // P7 8
                time_obj.ofDay(14, 13), time_obj.ofDay(14, 45), // P8 8
              ]
            ]
  };
  const stuff = {
                  normal: [
                            [ // 6
                            "AB",
                            "AB-1",
                            "1<sup>st</sup> hour",
                            "1-2",
                            "2<sup>nd</sup> hour",
                            "2-3",
                            "3<sup>rd</sup> hour",
                            "3-4",
                            "4<sup>th</sup> hour",
                            "Lunch",
                            "Lunch-5",
                            "5<sup>th</sup> hour",
                            "5-6",
                            "6<sup>th</sup> hour",
                            "6-7",
                            "7<sup>th</sup> hour",
                            "7-8",
                            "8<sup>th</sup> hour"
                          ],
  
                          [ // 7
                            "AB",
                            "AB-1",
                            "1<sup>st</sup> hour",
                            "1-2",
                            "2<sup>nd</sup> hour",
                            "2-3",
                            "3<sup>rd</sup> hour",
                            "3-4",
                            "4<sup>th</sup> hour",
                            "4-5",
                            "5<sup>th</sup> hour",
                            "Lunch",
                            "Lunch-6",
                            "6<sup>th</sup> hour",
                            "6-7",
                            "7<sup>th</sup> hour",
                            "7-8",
                            "8<sup>th</sup> hour"
                          ],
  
                          [ // 8
                            "AB",
                            "AB-1",
                            "1<sup>st</sup> hour",
                            "1-2",
                            "2<sup>nd</sup> hour",
                            "2-3",
                            "3<sup>rd</sup> hour",
                            "3-4",
                            "4<sup>th</sup> hour",
                            "4-5",
                            "5<sup>th</sup> hour",
                            "5-6",
                            "6<sup>th</sup> hour",
                            "Lunch",
                            "Lunch-7",
                            "7<sup>th</sup> hour",
                            "7-8",
                            "8<sup>th</sup> hour"
                          ]
                        ],
                testing: [
                            [ // 6
                            "AB",
                            "AB-1",
                            "1<sup>st</sup> hour",
                            "1-2",
                            "2<sup>nd</sup> hour",
                            "2-3",
                            "3<sup>rd</sup> hour",
                            "Lunch",
                            "Lunch-4",
                            "4<sup>th</sup> hour",
                            "4-5",
                            "5<sup>th</sup> hour",
                            "5-6",
                            "6<sup>th</sup> hour",
                            "6-7",
                            "7<sup>th</sup> hour",
                            "7-8",
                            "8<sup>th</sup> hour"
                          ],
  
                          [ // 7
                            "AB",
                            "AB-1",
                            "1<sup>st</sup> hour",
                            "1-2",
                            "2<sup>nd</sup> hour",
                            "2-3",
                            "3<sup>rd</sup> hour",
                            "3-4",
                            "4<sup>th</sup> hour",
                            "Lunch",
                            "Lunch-5",
                            "5<sup>th</sup> hour",
                            "5-6",
                            "6<sup>th</sup> hour",
                            "6-7",
                            "7<sup>th</sup> hour",
                            "7-8",
                            "8<sup>th</sup> hour"
                          ],
  
                          [ // 8
                            "AB",
                            "AB-1",
                            "1<sup>st</sup> hour",
                            "1-2",
                            "2<sup>nd</sup> hour",
                            "2-3",
                            "3<sup>rd</sup> hour",
                            "3-4",
                            "4<sup>th</sup> hour",
                            "4-5",
                            "5<sup>th</sup> hour",
                            "Lunch",
                            "Lunch-6",
                            "6<sup>th</sup> hour",
                            "6-7",
                            "7<sup>th</sup> hour",
                            "7-8",
                            "8<sup>th</sup> hour"
                          ]
                        ]
  };
  