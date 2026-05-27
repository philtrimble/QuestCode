// Rich themed terminal output shown when a challenge is solved.
// Keyed by challenge ID. Falls back to testCases[0].expected if not present.
// SQL challenges produce table-formatted output; other languages use real program output.
export const SIMULATOR_OUTPUTS: Record<string, string> = {

  // ── Breaking Bad SQL ──────────────────────────────────────────────────────

  "bb-sql-01": `\
 name               | purity | batch_size_g
--------------------+--------+-------------
 Blue Sky           |     99 |         500
 Heisenberg Special |     99 |         250
 Skyler Batch       |     96 |         400
 Jesse's First      |     78 |         150
 Pilot Cook         |     62 |         200
(5 rows)`,

  "bb-sql-02": `\
 name               | purity | batch_size_g
--------------------+--------+-------------
 Blue Sky           |     99 |         500
 Heisenberg Special |     99 |         250
(2 rows)`,

  "bb-sql-03": `\
 name               | purity
--------------------+--------
 Blue Sky           |     99
 Heisenberg Special |     99
 Skyler Batch       |     96
(3 rows)`,

  "bb-sql-04": `\
 total_clients | total_fees  | avg_fee
--------------+-------------+---------
           12 |   84500.00  | 7041.67
(1 row)`,

  "bb-sql-05": `\
 territory    | total_quantity
--------------+---------------
 Albuquerque  |         142.5
 Phoenix      |          98.0
 Santa Fe     |          67.5
 Tucson       |          45.0
 El Paso      |          23.5
(5 rows)`,

  // ── Stranger Things SQL ───────────────────────────────────────────────────

  "st-sql-01": `\
 location              | creature     | threat | witnesses
-----------------------+--------------+--------+----------
 Mirkwood Forest       | Demogorgon   |      9 |         2
 Hawkins Middle School | Mind Flayer  |     10 |         5
 Byers Residence       | Demogorgon   |      8 |         3
 Hawkins Lab Gate      | Shadow Beast |     10 |         1
 Starcourt Mall        | Mind Flayer  |     10 |        12
 The Upside Down       | Demogorgon   |     10 |         0
 Rainbow Room          | Demo-dog     |      7 |         4
(7 rows)`,

  "st-sql-02": `\
 location         | witnesses | reported_date
------------------+-----------+--------------
 Mirkwood Forest  |         2 | 1983-11-06
 Byers Residence  |         3 | 1983-11-07
 The Upside Down  |         0 | 1983-11-15
(3 rows)`,

  "st-sql-03": `\
 location              | creature     | threat
-----------------------+--------------+-------
 Hawkins Middle School | Mind Flayer  |     10
 Hawkins Lab Gate      | Shadow Beast |     10
 Starcourt Mall        | Mind Flayer  |     10
 The Upside Down       | Demogorgon   |     10
 Mirkwood Forest       | Demogorgon   |      9
(5 rows)`,

  "st-sql-04": `\
 total_sightings | total_witnesses | avg_threat
-----------------+-----------------+------------
               7 |              27 |       9.14
(1 row)`,

  "st-sql-05": `\
 creature      | sighting_count
---------------+---------------
 Demogorgon    |             3
 Mind Flayer   |             2
 Shadow Beast  |             1
 Demo-dog      |             1
(4 rows)`,

  // ── Severance SQL ─────────────────────────────────────────────────────────

  "sv-sql-01": `\
 name             | department            | score  | hire_date
------------------+-----------------------+--------+------------
 Mark Scout       | Macrodata Refinement  |  847.3 | 2021-03-15
 Helly Riggs      | Macrodata Refinement  |  612.8 | 2022-01-10
 Dylan George     | Macrodata Refinement  |  923.1 | 2020-06-22
 Irving Bailiff   | Macrodata Refinement  |  788.5 | 2019-09-04
 Burt Goodman     | Optics & Design       |  541.2 | 2018-11-30
 Seth Milchick    | Management            |   null | 2017-08-01
 Harmony Cobel    | Management            |   null | 2015-04-17
(7 rows)`,

  "sv-sql-02": `\
 name             | department            | score
------------------+-----------------------+-------
 Mark Scout       | Macrodata Refinement  | 847.3
 Helly Riggs      | Macrodata Refinement  | 612.8
 Dylan George     | Macrodata Refinement  | 923.1
 Irving Bailiff   | Macrodata Refinement  | 788.5
(4 rows)`,

  "sv-sql-03": `\
 name             | score
------------------+-------
 Dylan George     | 923.1
 Mark Scout       | 847.3
 Irving Bailiff   | 788.5
(3 rows)
-- Waffle party awarded to top performers.`,

  "sv-sql-04": `\
 total_employees | total_output | avg_score
-----------------+--------------+-----------
               7 |       3713.9 |    530.56
(1 row)`,

  "sv-sql-05": `\
 department             | headcount
------------------------+-----------
 Macrodata Refinement   |         4
 Management             |         2
 Optics & Design        |         1
(3 rows)`,

  // ── The Office SQL ────────────────────────────────────────────────────────

  "to-sql-01": `\
 salesperson      | region   | client              | amount
------------------+----------+---------------------+----------
 Dwight Schrute   | Scranton | Prince Paper Co     | 14200.00
 Jim Halpert      | Scranton | Hudson Paper        |  8750.00
 Phyllis Vance    | Scranton | Vance Refrigeration |  6300.00
 Andy Bernard     | Stamford | Cornell Alumni Inc  |  9100.00
 Michael Scott    | Scranton | Mifflin Mifflin     | 22000.00
 Karen Filippelli | Stamford | Tristate Paper      |  5500.00
 Ryan Howard      | Scranton | Ryan's Own Account  |   250.00
(7 rows)`,

  "to-sql-02": `\
 salesperson    | region   | amount
----------------+----------+----------
 Dwight Schrute | Scranton | 14200.00
 Jim Halpert    | Scranton |  8750.00
 Phyllis Vance  | Scranton |  6300.00
 Michael Scott  | Scranton | 22000.00
 Ryan Howard    | Scranton |   250.00
(5 rows)`,

  "to-sql-03": `\
 salesperson      | amount
------------------+----------
 Michael Scott    | 22000.00
 Dwight Schrute   | 14200.00
 Andy Bernard     |  9100.00
 Jim Halpert      |  8750.00
 Karen Filippelli |  5500.00
(5 rows)`,

  "to-sql-04": `\
 total_sales | total_revenue | avg_deal_size
-------------+---------------+--------------
           7 |     66100.00  |      9442.86
(1 row)`,

  "to-sql-05": `\
 salesperson      | total_amount
------------------+-------------
 Michael Scott    |    22000.00
 Dwight Schrute   |    14200.00
 Andy Bernard     |     9100.00
 Jim Halpert      |     8750.00
 Karen Filippelli |     5500.00
(5 rows)`,

  // ── Game of Thrones SQL ───────────────────────────────────────────────────

  "got-sql-01": `\
 name       | region           | allegiance | army_size
------------+------------------+------------+----------
 Stark      | The North        | None       |     18000
 Lannister  | The Westerlands  | Lannister  |     35000
 Targaryen  | Dragonstone      | Targaryen  |     12000
 Baratheon  | The Stormlands   | None       |     22000
 Tyrell     | The Reach        | Targaryen  |     40000
 Greyjoy    | The Iron Isles   | None       |      8000
 Martell    | Dorne            | Targaryen  |     15000
(7 rows)`,

  "got-sql-02": `\
 name       | region      | army_size
------------+-------------+----------
 Targaryen  | Dragonstone |     12000
 Tyrell     | The Reach   |     40000
 Martell    | Dorne       |     15000
(3 rows)`,

  "got-sql-03": `\
 name       | region           | army_size
------------+------------------+----------
 Tyrell     | The Reach        |     40000
 Lannister  | The Westerlands  |     35000
 Baratheon  | The Stormlands   |     22000
 Stark      | The North        |     18000
 Martell    | Dorne            |     15000
(5 rows)`,

  "got-sql-04": `\
 total_houses | total_armies | avg_army_size
--------------+--------------+--------------
            7 |       150000 |     21428.57
(1 row)`,

  "got-sql-05": `\
 allegiance  | total_strength
-------------+---------------
 Targaryen   |          67000
 None        |          48000
 Lannister   |          35000
(3 rows)`,

  // ── The Matrix SQL ────────────────────────────────────────────────────────

  "mx-sql-01": `\
 type                | agent          | threat | status
---------------------+----------------+--------+----------
 Rogue Program       | Agent Smith    |     10 | active
 Unplugged Human     | Agent Jones    |      7 | resolved
 Choice Anomaly      | The Oracle     |      9 | active
 Deja Vu Glitch      | Agent Brown    |      4 | active
 Zion Signal Leak    | Agent Smith    |      8 | active
 Systemic Rejection  | The Architect  |     10 | critical
 Residual Memory     | Agent Jones    |      5 | resolved
(7 rows)`,

  "mx-sql-02": `\
 type               | agent        | threat
--------------------+--------------+-------
 Rogue Program      | Agent Smith  |     10
 Choice Anomaly     | The Oracle   |      9
 Deja Vu Glitch     | Agent Brown  |      4
 Zion Signal Leak   | Agent Smith  |      8
(4 rows)`,

  "mx-sql-03": `\
 type                | agent          | threat
---------------------+----------------+-------
 Rogue Program       | Agent Smith    |     10
 Systemic Rejection  | The Architect  |     10
 Choice Anomaly      | The Oracle     |      9
 Zion Signal Leak    | Agent Smith    |      8
 Unplugged Human     | Agent Jones    |      7
(5 rows)`,

  "mx-sql-04": `\
 total_anomalies | total_threat | avg_threat
-----------------+--------------+------------
               7 |           53 |       7.57
(1 row)`,

  "mx-sql-05": `\
 type                | anomaly_count
---------------------+--------------
 Rogue Program       |            2
 Unplugged Human     |            2
 Choice Anomaly      |            1
 Deja Vu Glitch      |            1
 Systemic Rejection  |            1
(5 rows)`,

  // ── Rick and Morty SQL ────────────────────────────────────────────────────

  "rm-sql-01": `\
 dim_id    | name                    | danger | visited | portal_color
-----------+-------------------------+--------+---------+-------------
 C-137     | Prime Reality           |      3 | yes     | green
 J19z7     | Cronenberg World        |     10 | yes     | red
 C-500A    | Wasp World              |      9 | yes     | orange
 D-99      | Doopidoo World          |      2 | no      | blue
 K-83      | Post-Apocalyptic Waste  |      8 | yes     | red
 A-248     | Pizza Dimension         |      1 | yes     | green
 Evil-R    | Evil Morty's Dimension  |     10 | yes     | black
(7 rows)`,

  "rm-sql-02": `\
 dim_id    | name                    | danger
-----------+-------------------------+-------
 C-137     | Prime Reality           |      3
 J19z7     | Cronenberg World        |     10
 C-500A    | Wasp World              |      9
 K-83      | Post-Apocalyptic Waste  |      8
 A-248     | Pizza Dimension         |      1
 Evil-R    | Evil Morty's Dimension  |     10
(6 rows)`,

  "rm-sql-03": `\
 dim_id    | name                    | danger
-----------+-------------------------+-------
 J19z7     | Cronenberg World        |     10
 Evil-R    | Evil Morty's Dimension  |     10
 C-500A    | Wasp World              |      9
 K-83      | Post-Apocalyptic Waste  |      8
 C-137     | Prime Reality           |      3
(5 rows)`,

  "rm-sql-04": `\
 total_dimensions | total_danger | avg_danger
------------------+--------------+------------
                7 |           43 |       6.14
(1 row)`,

  "rm-sql-05": `\
 portal_color | dimension_count
--------------+----------------
 green        |              2
 red          |              2
 orange       |              1
 blue         |              1
 black        |              1
(5 rows)`,

  // ── Squid Game SQL ────────────────────────────────────────────────────────

  "sg-sql-01": `\
 player | name             | debt_krw    | status     | team
--------+------------------+-------------+------------+------
    001 | Seong Gi-hun     | 456,000,000 | alive      |    1
    067 | Kang Sae-byeok   | 100,000,000 | alive      |    2
    218 | Cho Sang-woo     |   6,000,000 | alive      |    2
    101 | Jang Deok-su     |  10,000,000 | alive      |    3
    199 | Abdul Ali        |  50,000,000 | eliminated |    1
    069 | Oh Il-nam        |           0 | alive      |    3
    212 | Han Mi-nyeo      |  80,000,000 | eliminated |    4
(7 rows)`,

  "sg-sql-02": `\
 player | name           | debt_krw    | team
--------+----------------+-------------+------
    001 | Seong Gi-hun   | 456,000,000 |    1
    067 | Kang Sae-byeok | 100,000,000 |    2
    218 | Cho Sang-woo   |   6,000,000 |    2
    101 | Jang Deok-su   |  10,000,000 |    3
    069 | Oh Il-nam      |           0 |    3
(5 rows)`,

  "sg-sql-03": `\
 player | name           | prize_won
--------+----------------+------------------
    001 | Seong Gi-hun   | 45,600,000,000
    067 | Kang Sae-byeok |              0
    218 | Cho Sang-woo   |              0
(3 rows)`,

  "sg-sql-04": `\
 total_players | total_survived | avg_debt_krw
--------------+----------------+--------------
          456 |              1 |  102,000,000
(1 row)`,

  "sg-sql-05": `\
 team | survivors
------+-----------
    2 |         2
    3 |         2
    1 |         1
    4 |         0
(4 rows)`,
};
