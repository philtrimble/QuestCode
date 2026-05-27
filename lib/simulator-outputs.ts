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

  // ── Arrested Development SQL ──────────────────────────────────────────────

  "ad-sql-01": `\
 name                      | category       | profit   | status
---------------------------+----------------+----------+---------
 Bluth Original Frozen     | Food           | 42000.00 | active
 Newport Beachfront Dev    | Real Estate    | -85000.00| stalled
 Gobias Industries         | Finance        |  5400.00 | active
 Sitwell Housing           | Real Estate    | 31000.00 | active
 Sudden Valley             | Real Estate    | -62000.00| failed
(5 rows)`,

  "ad-sql-02": `\
 name                   | category    | profit
------------------------+-------------+----------
 Bluth Original Frozen  | Food        | 42000.00
 Gobias Industries      | Finance     |  5400.00
 Sitwell Housing        | Real Estate | 31000.00
(3 rows)`,

  "ad-sql-03": `\
 name                   | profit
------------------------+----------
 Bluth Original Frozen  | 42000.00
 Sitwell Housing        | 31000.00
 Gobias Industries      |  5400.00
(3 rows)`,

  "ad-sql-04": `\
 total_ventures | total_profit | avg_profit
----------------+--------------+------------
              5 |    -68600.00 |  -13720.00
(1 row)`,

  "ad-sql-05": `\
 category    | total
-------------+-----------
 Real Estate | -116000.00
 Food        |   42000.00
 Finance     |    5400.00
(3 rows)`,

  // ── Barbie SQL ────────────────────────────────────────────────────────────

  "ba-sql-01": `\
 name               | career      | location   | happiness
--------------------+-------------+------------+-----------
 Barbie (Original)  | Fashionista | Barbieland |        10
 Doctor Barbie      | Doctor      | Barbieland |         9
 Weird Barbie       | Undefined   | Barbieland |         7
 President Barbie   | President   | Barbieland |        10
 Astronaut Barbie   | Astronaut   | Real World |         8
 Lawyer Barbie      | Lawyer      | Real World |         6
(6 rows)`,

  "ba-sql-02": `\
 name               | career
--------------------+-------------
 Barbie (Original)  | Fashionista
 Doctor Barbie      | Doctor
 Weird Barbie       | Undefined
 President Barbie   | President
(4 rows)`,

  "ba-sql-03": `\
 name               | happiness
--------------------+-----------
 Barbie (Original)  |        10
 President Barbie   |        10
 Doctor Barbie      |         9
(3 rows)`,

  "ba-sql-04": `\
 total_barbies | total_budget | avg_budget
---------------+--------------+------------
             6 |     87500.00 |   14583.33
(1 row)`,

  "ba-sql-05": `\
 career      | count
-------------+-------
 Astronaut   |     1
 Doctor      |     1
 Fashionista |     1
 Lawyer      |     1
 President   |     1
 Undefined   |     1
(6 rows)`,

  // ── Sex and the City SQL ──────────────────────────────────────────────────

  "sc-sql-01": `\
 id | name       | rating | outcome      | date
----+------------+--------+--------------+------------
  1 | Big        |      9 | complicated  | 1998-06-06
  2 | Aidan      |      8 | heartbreak   | 2000-09-15
  3 | Berger     |      5 | post-it      | 2003-07-20
  4 | Petrovsky  |      6 | Paris escape | 2004-02-14
  5 | Smith      |      7 | good         | 2002-05-01
(5 rows)`,

  "sc-sql-02": `\
 name  | rating
-------+--------
 Big   |      9
 Aidan |      8
(2 rows)`,

  "sc-sql-03": `\
 address                           | price
-----------------------------------+-----------
 860 Fifth Ave, Upper East Side    | 4200.00
 245 West 73rd, Upper West Side    | 3100.00
 12 Perry Street, West Village     | 2800.00
(3 rows)`,

  "sc-sql-04": `\
 total_pairs | total_spent | avg_price
-------------+-------------+-----------
         112 |   58800.00  |    525.00
(1 row)`,

  "sc-sql-05": `\
 outcome      | total
--------------+-------
 complicated  |     1
 good         |     1
 heartbreak   |     1
 Paris escape |     1
 post-it      |     1
(5 rows)`,

  // ── Sopranos SQL ──────────────────────────────────────────────────────────

  "sp-sql-01": `\
 client                  | territory    | value
-------------------------+--------------+-----------
 Newark Transit Auth     | Newark       |  85000.00
 Essex County Schools    | Essex County |  62000.00
 Hoboken Dockyard        | Hoboken      |  47000.00
 Jersey City Mall        | North Jersey | 103000.00
 Kearny Industrial Park  | North Jersey |  38000.00
(5 rows)`,

  "sp-sql-02": `\
 client               | value
----------------------+-----------
 Newark Transit Auth  |  85000.00
 Essex County Schools |  62000.00
 Jersey City Mall     | 103000.00
(3 rows)`,

  "sp-sql-03": `\
 territory    | value
--------------+-----------
 North Jersey | 103000.00
 Newark       |  85000.00
 Essex County |  62000.00
(3 rows)`,

  "sp-sql-04": `\
 total_contracts | total_value | avg_value
-----------------+-------------+-----------
               5 |   335000.00 |  67000.00
(1 row)`,

  "sp-sql-05": `\
 territory    | total
--------------+-----------
 North Jersey | 141000.00
 Newark       |  85000.00
 Essex County |  62000.00
 Hoboken      |  47000.00
(4 rows)`,

  // ── Stranger Things SQL 06-10 ─────────────────────────────────────────────

  "st-sql-06": `\
 location              | creature     | classification
-----------------------+--------------+----------------
 Mirkwood Forest       | Demogorgon   | Predator
 Hawkins Middle School | Mind Flayer  | Hive Entity
 Byers Residence       | Demogorgon   | Predator
 Hawkins Lab Gate      | Shadow Beast | Unknown
 Starcourt Mall        | Mind Flayer  | Hive Entity
(5 rows)`,

  "st-sql-07": `\
 creature     | sighting_count
--------------+---------------
 Demogorgon   |             3
 Mind Flayer  |             2
(2 rows)`,

  "st-sql-08": `\
 location              | creature     | threat_level
-----------------------+--------------+-------------
 Hawkins Middle School | Mind Flayer  |           10
 Hawkins Lab Gate      | Shadow Beast |           10
 Starcourt Mall        | Mind Flayer  |           10
 The Upside Down       | Demogorgon   |           10
 Mirkwood Forest       | Demogorgon   |            9
(5 rows)`,

  "st-sql-09": `\
 location              | creature     | threat_level | threat_tier
-----------------------+--------------+--------------+-------------
 Mirkwood Forest       | Demogorgon   |            9 | Critical
 Hawkins Middle School | Mind Flayer  |           10 | Critical
 Byers Residence       | Demogorgon   |            8 | High
 Hawkins Lab Gate      | Shadow Beast |           10 | Critical
 Starcourt Mall        | Mind Flayer  |           10 | Critical
 The Upside Down       | Demogorgon   |           10 | Critical
 Rainbow Room          | Demo-dog     |            7 | High
(7 rows)`,

  "st-sql-10": `\
 creature     | classification | encounter_count
--------------+----------------+-----------------
 Mind Flayer  | Hive Entity    |               2
 Demogorgon   | Predator       |               2
 Shadow Beast | Unknown        |               1
(3 rows)`,

  // ── Severance SQL 06-10 ───────────────────────────────────────────────────

  "sv-sql-06": `\
 name             | score  | department
------------------+--------+-----------------------
 Mark Scout       |  847.3 | Macrodata Refinement
 Helly Riggs      |  612.8 | Macrodata Refinement
 Dylan George     |  923.1 | Macrodata Refinement
 Irving Bailiff   |  788.5 | Macrodata Refinement
 Burt Goodman     |  541.2 | Optics & Design
(5 rows)`,

  "sv-sql-07": `\
 department             | headcount
------------------------+-----------
 Macrodata Refinement   |         4
(1 row)
-- Departments with more than one employee shown above.`,

  "sv-sql-08": `\
 name             | score
------------------+-------
 Mark Scout       | 847.3
 Dylan George     | 923.1
 Irving Bailiff   | 788.5
(3 rows)`,

  "sv-sql-09": `\
 name             | score  | performance_tier
------------------+--------+------------------
 Mark Scout       |  847.3 | High Performer
 Helly Riggs      |  612.8 | Meets Quota
 Dylan George     |  923.1 | High Performer
 Irving Bailiff   |  788.5 | High Performer
 Burt Goodman     |  541.2 | Meets Quota
 Seth Milchick    |   null | Management
 Harmony Cobel    |   null | Management
(7 rows)`,

  "sv-sql-10": `\
 department             | classification | employee_count
------------------------+----------------+----------------
 Macrodata Refinement   | Production     |              4
(1 row)`,

  // ── Breaking Bad SQL 06-10 ────────────────────────────────────────────────

  "bb-sql-06": `\
 name               | purity | batch_code
--------------------+--------+------------
 Blue Sky           |     99 | HW-001
 Heisenberg Special |     99 | HW-002
 Skyler Batch       |     96 | WW-003
 Jesse's First      |     78 | JP-001
(4 rows)`,

  "bb-sql-07": `\
 cook         | batch_count
--------------+-------------
 Heisenberg   |           2
(1 row)
-- Cooks with more than one batch shown.`,

  "bb-sql-08": `\
 name               | purity | batch_size_g
--------------------+--------+-------------
 Blue Sky           |     99 |         500
 Heisenberg Special |     99 |         250
 Skyler Batch       |     96 |         400
(3 rows)`,

  "bb-sql-09": `\
 name               | purity | grade
--------------------+--------+--------
 Blue Sky           |     99 | Premium
 Heisenberg Special |     99 | Premium
 Skyler Batch       |     96 | High
 Jesse's First      |     78 | Standard
 Pilot Cook         |     62 | Standard
(5 rows)`,

  "bb-sql-10": `\
 cook         | territory   | total_units
--------------+-------------+-------------
 Heisenberg   | Albuquerque |         750
 Heisenberg   | Phoenix     |         250
 Jesse Pinkman| Albuquerque |         150
(3 rows)`,

  // ── The Office SQL 06-10 ──────────────────────────────────────────────────

  "to-sql-06": `\
 salesperson    | amount    | department
----------------+-----------+------------
 Dwight Schrute | 14200.00  | Sales
 Jim Halpert    |  8750.00  | Sales
 Phyllis Vance  |  6300.00  | Sales
 Michael Scott  | 22000.00  | Management
(4 rows)`,

  "to-sql-07": `\
 region   | deal_count
----------+------------
 Scranton |          5
(1 row)
-- Regions with more than one deal shown.`,

  "to-sql-08": `\
 salesperson    | region   | amount
----------------+----------+----------
 Dwight Schrute | Scranton | 14200.00
 Michael Scott  | Scranton | 22000.00
 Andy Bernard   | Stamford |  9100.00
(3 rows)`,

  "to-sql-09": `\
 salesperson      | amount    | performance
------------------+-----------+-------------
 Michael Scott    | 22000.00  | World's Best
 Dwight Schrute   | 14200.00  | World's Best
 Andy Bernard     |  9100.00  | Assistant to
 Jim Halpert      |  8750.00  | Assistant to
 Karen Filippelli |  5500.00  | Solid
 Phyllis Vance    |  6300.00  | Solid
 Ryan Howard      |   250.00  | Temp
(7 rows)`,

  "to-sql-10": `\
 salesperson    | region   | total_amount
----------------+----------+-------------
 Michael Scott  | Scranton |   22000.00
 Dwight Schrute | Scranton |   14200.00
 Andy Bernard   | Stamford |    9100.00
(3 rows)`,

  // ── Game of Thrones SQL 06-10 ─────────────────────────────────────────────

  "got-sql-06": `\
 name       | army_size | seat
------------+-----------+------------------
 Stark      |     18000 | Winterfell
 Lannister  |     35000 | Casterly Rock
 Targaryen  |     12000 | Dragonstone
 Baratheon  |     22000 | Storm's End
 Tyrell     |     40000 | Highgarden
(5 rows)`,

  "got-sql-07": `\
 allegiance  | house_count
-------------+-------------
 Targaryen   |           3
(1 row)
-- Allegiances with more than one house shown.`,

  "got-sql-08": `\
 name       | region           | army_size
------------+------------------+----------
 Lannister  | The Westerlands  |     35000
 Baratheon  | The Stormlands   |     22000
 Tyrell     | The Reach        |     40000
 Martell    | Dorne            |     15000
(4 rows)`,

  "got-sql-09": `\
 name       | army_size | threat_level
------------+-----------+--------------
 Tyrell     |     40000 | Formidable
 Lannister  |     35000 | Formidable
 Baratheon  |     22000 | Significant
 Stark      |     18000 | Significant
 Martell    |     Dorne |  Significant
 Targaryen  |     12000 | Manageable
 Greyjoy    |      8000 | Manageable
(7 rows)`,

  "got-sql-10": `\
 name       | seat           | total_strength
------------+----------------+----------------
 Tyrell     | Highgarden     |          40000
 Lannister  | Casterly Rock  |          35000
 Baratheon  | Storm's End    |          22000
(3 rows)`,

  // ── The Matrix SQL 06-10 ──────────────────────────────────────────────────

  "mx-sql-06": `\
 type               | agent        | sector
--------------------+--------------+--------
 Rogue Program      | Agent Smith  | Grid-7
 Unplugged Human    | Agent Jones  | Grid-2
 Choice Anomaly     | The Oracle   | Grid-9
 Zion Signal Leak   | Agent Smith  | Grid-4
 Systemic Rejection | The Architect| Core
(5 rows)`,

  "mx-sql-07": `\
 agent        | anomaly_count
--------------+---------------
 Agent Smith  |             2
 Agent Jones  |             2
(2 rows)`,

  "mx-sql-08": `\
 type                | agent        | threat
---------------------+--------------+-------
 Rogue Program       | Agent Smith  |     10
 Choice Anomaly      | The Oracle   |      9
 Zion Signal Leak    | Agent Smith  |      8
 Systemic Rejection  | The Architect|     10
(4 rows)`,

  "mx-sql-09": `\
 type                | threat | classification
---------------------+--------+----------------
 Rogue Program       |     10 | Critical
 Unplugged Human     |      7 | Elevated
 Choice Anomaly      |      9 | Critical
 Deja Vu Glitch      |      4 | Routine
 Zion Signal Leak    |      8 | Elevated
 Systemic Rejection  |     10 | Critical
 Residual Memory     |      5 | Routine
(7 rows)`,

  "mx-sql-10": `\
 agent        | sector | anomaly_count
--------------+--------+---------------
 Agent Smith  | Grid-7 |             2
 The Architect| Core   |             1
 The Oracle   | Grid-9 |             1
(3 rows)`,

  // ── Rick and Morty SQL 06-10 ──────────────────────────────────────────────

  "rm-sql-06": `\
 dim_id   | name                    | portal_type
----------+-------------------------+-------------
 C-137    | Prime Reality           | Stable
 J19z7    | Cronenberg World        | Unstable
 C-500A   | Wasp World              | Unstable
 K-83     | Post-Apocalyptic Waste  | Unstable
 Evil-R   | Evil Morty's Dimension  | Sealed
(5 rows)`,

  "rm-sql-07": `\
 portal_color | dimension_count
--------------+----------------
 green        |              2
 red          |              2
(2 rows)`,

  "rm-sql-08": `\
 dim_id   | name                    | danger
----------+-------------------------+-------
 J19z7    | Cronenberg World        |     10
 C-500A   | Wasp World              |      9
 K-83     | Post-Apocalyptic Waste  |      8
 Evil-R   | Evil Morty's Dimension  |     10
(4 rows)`,

  "rm-sql-09": `\
 dim_id   | name                    | danger | risk_level
----------+-------------------------+--------+------------
 C-137    | Prime Reality           |      3 | Low Risk
 J19z7    | Cronenberg World        |     10 | Do Not Enter
 C-500A   | Wasp World              |      9 | Do Not Enter
 D-99     | Doopidoo World          |      2 | Low Risk
 K-83     | Post-Apocalyptic Waste  |      8 | Elevated
 A-248    | Pizza Dimension         |      1 | Low Risk
 Evil-R   | Evil Morty's Dimension  |     10 | Do Not Enter
(7 rows)`,

  "rm-sql-10": `\
 name                    | portal_type | total_danger
-------------------------+-------------+--------------
 Cronenberg World        | Unstable    |           10
 Evil Morty's Dimension  | Sealed      |           10
 Wasp World              | Unstable    |            9
(3 rows)`,

  // ── Squid Game SQL 06-10 ──────────────────────────────────────────────────

  "sg-sql-06": `\
 player | name             | game_name      | round
--------+------------------+----------------+-------
    001 | Seong Gi-hun     | Red Light Green |     1
    067 | Kang Sae-byeok   | Honeycomb       |     2
    218 | Cho Sang-woo     | Tug of War      |     3
    101 | Jang Deok-su     | Red Light Green |     1
    069 | Oh Il-nam        | Marbles         |     4
(5 rows)`,

  "sg-sql-07": `\
 team | player_count
------+--------------
    1 |            2
    2 |            2
    3 |            2
(3 rows)`,

  "sg-sql-08": `\
 player | name           | debt_krw
--------+----------------+-------------
    001 | Seong Gi-hun   | 456,000,000
    067 | Kang Sae-byeok | 100,000,000
    212 | Han Mi-nyeo    |  80,000,000
(3 rows)`,

  "sg-sql-09": `\
 player | name             | status     | category
--------+------------------+------------+-----------
    001 | Seong Gi-hun     | alive      | Survivor
    067 | Kang Sae-byeok   | alive      | Survivor
    218 | Cho Sang-woo     | alive      | Survivor
    101 | Jang Deok-su     | alive      | Survivor
    199 | Abdul Ali        | eliminated | Eliminated
    069 | Oh Il-nam        | alive      | Survivor
    212 | Han Mi-nyeo      | eliminated | Eliminated
(7 rows)`,

  "sg-sql-10": `\
 name             | game_name      | player_count
------------------+----------------+--------------
 Seong Gi-hun     | Red Light Green |            2
 Kang Sae-byeok   | Honeycomb       |            1
 Cho Sang-woo     | Tug of War      |            1
(3 rows)`,

  // ── Arrested Development SQL 06-10 ───────────────────────────────────────

  "ad-sql-06": `\
 name                     | revenue    | member
--------------------------+------------+---------
 Bluth Original Frozen    |  42000.00  | Michael
 Newport Beachfront Dev   | -85000.00  | Gob
 Gobias Industries        |   5400.00  | George Sr
 Sitwell Housing          |  31000.00  | Michael
 Sudden Valley            | -62000.00  | Buster
(5 rows)`,

  "ad-sql-07": `\
 owner    | venture_count
----------+---------------
 Michael  |             2
(1 row)
-- Family members running more than one venture.`,

  "ad-sql-08": `\
 name                   | revenue
------------------------+----------
 Bluth Original Frozen  | 42000.00
 Sitwell Housing        | 31000.00
(2 rows)`,

  "ad-sql-09": `\
 name                     | revenue    | viability
--------------------------+------------+-----------
 Bluth Original Frozen    |  42000.00  | Profitable
 Newport Beachfront Dev   | -85000.00  | Loss
 Gobias Industries        |   5400.00  | Marginal
 Sitwell Housing          |  31000.00  | Profitable
 Sudden Valley            | -62000.00  | Loss
(5 rows)`,

  "ad-sql-10": `\
 member   | category    | total_revenue
----------+-------------+---------------
 Michael  | Real Estate |     31000.00
 Michael  | Food        |     42000.00
 George Sr| Finance     |      5400.00
(3 rows)`,

  // ── Barbie SQL 06-10 ──────────────────────────────────────────────────────

  "ba-sql-06": `\
 name               | job         | salary_range
--------------------+-------------+--------------
 Barbie (Original)  | Fashionista | $50k-$80k
 Doctor Barbie      | Doctor      | $200k-$300k
 Weird Barbie       | Undefined   | N/A
 President Barbie   | President   | $400k+
 Astronaut Barbie   | Astronaut   | $150k-$200k
(5 rows)`,

  "ba-sql-07": `\
 job         | barbie_count
-------------+--------------
-- No careers currently have more than 1 Barbie assigned.
(0 rows)`,

  "ba-sql-08": `\
 name               | happiness
--------------------+-----------
 Barbie (Original)  |        10
 Doctor Barbie      |         9
 President Barbie   |        10
 Astronaut Barbie   |         8
(4 rows)`,

  "ba-sql-09": `\
 name               | happiness | wellness_status
--------------------+-----------+-----------------
 Barbie (Original)  |        10 | Thriving
 Doctor Barbie      |         9 | Thriving
 Weird Barbie       |         7 | Stable
 President Barbie   |        10 | Thriving
 Astronaut Barbie   |         8 | Stable
 Lawyer Barbie      |         6 | Stable
(6 rows)`,

  "ba-sql-10": `\
 title        | barbie_count | avg_happiness
--------------+--------------+---------------
 President    |            1 |          10.0
 Doctor       |            1 |           9.0
 Fashionista  |            1 |          10.0
(3 rows)
-- Barbieland residents only.`,

  // ── Sex and the City SQL 06-10 ────────────────────────────────────────────

  "sc-sql-06": `\
 name       | rating | address
------------+--------+-----------------------------------
 Big        |      9 | 860 Fifth Ave, Upper East Side
 Aidan      |      8 | 66 Perry Street, West Village
 Berger     |      5 | 245 West 73rd, Upper West Side
 Smith      |      7 | 425 East 58th, Midtown East
(4 rows)`,

  "sc-sql-07": `\
 neighborhood     | date_count
------------------+------------
 Upper East Side  |           2
 West Village     |           2
(2 rows)`,

  "sc-sql-08": `\
 name  | rating
-------+--------
 Big   |      9
 Aidan |      8
 Smith |      7
(3 rows)`,

  "sc-sql-09": `\
 name       | rating | verdict
------------+--------+----------------
 Big        |      9 | Keeper
 Aidan      |      8 | Keeper
 Berger     |      5 | Maybe
 Petrovsky  |      6 | Maybe
 Smith      |      7 | Maybe
(5 rows)`,

  "sc-sql-10": `\
 neighborhood     | date_count | avg_rating
------------------+------------+------------
 Upper East Side  |          2 |        8.5
 West Village     |          2 |        7.5
 Midtown East     |          1 |        7.0
(3 rows)`,

  // ── Sopranos SQL 06-10 ────────────────────────────────────────────────────

  "sp-sql-06": `\
 client               | value      | boss
----------------------+------------+--------
 Newark Transit Auth  |  85000.00  | Tony
 Essex County Schools |  62000.00  | Paulie
 Hoboken Dockyard     |  47000.00  | Silvio
 Jersey City Mall     | 103000.00  | Tony
 Kearny Industrial    |  38000.00  | Christopher
(5 rows)`,

  "sp-sql-07": `\
 territory    | contract_count
--------------+----------------
 North Jersey |              2
(1 row)
-- Territories with more than one contract shown.`,

  "sp-sql-08": `\
 client               | value
----------------------+-----------
 Newark Transit Auth  |  85000.00
 Jersey City Mall     | 103000.00
(2 rows)`,

  "sp-sql-09": `\
 client                  | value      | priority
-------------------------+------------+---------------
 Newark Transit Auth     |  85000.00  | Boss Priority
 Essex County Schools    |  62000.00  | Capo Priority
 Hoboken Dockyard        |  47000.00  | Capo Priority
 Jersey City Mall        | 103000.00  | Boss Priority
 Kearny Industrial Park  |  38000.00  | Associate Level
(5 rows)`,

  "sp-sql-10": `\
 boss        | territory    | total_value
-------------+--------------+-------------
 Tony        | North Jersey | 188000.00
 Paulie      | Essex County |  62000.00
 Silvio      | Hoboken      |  47000.00
(3 rows)`,
};
