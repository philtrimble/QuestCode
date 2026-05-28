/**
 * SQLite seed data for every SQL-language theme.
 *
 * Each value is a complete SQL script (CREATE TABLE … + INSERT …) that is
 * executed in-memory by a Python/SQLite Judge0 wrapper before the user's
 * query runs.  The tables and column names must exactly match what the
 * challenge prompts and solutions reference.
 */

export const SQL_SETUP: Record<string, string> = {

  // ── Breaking Bad ────────────────────────────────────────────────────────────
  "breaking-bad": `
CREATE TABLE products (
  name TEXT, purity REAL, batch_size_grams INTEGER
);
INSERT INTO products VALUES
  ('Blue Sky',     99.1, 500),
  ('Classic',      97.5, 400),
  ('Street Grade', 82.0, 600),
  ('Premium Mix',  94.3, 350),
  ('Bulk Batch',   78.0, 1000);

CREATE TABLE clients (
  name TEXT, case_type TEXT, fees_paid REAL
);
INSERT INTO clients VALUES
  ('Walt White',    'drug charge', 5000),
  ('Jesse Pinkman', 'possession',  3500),
  ('Saul Goodman',  'consulting',  10000),
  ('Hank Schrader', 'civil',       2000);

CREATE TABLE deliveries (
  distributor TEXT, territory TEXT, quantity_lbs REAL
);
INSERT INTO deliveries VALUES
  ('Gus Fring',        'Albuquerque', 75.0),
  ('Gus Fring',        'Santa Fe',    50.0),
  ('Mike Ehrmantraut', 'Phoenix',     120.0),
  ('Lydia Rodarte',    'Albuquerque', 40.0),
  ('Lydia Rodarte',    'Phoenix',     90.0),
  ('Gus Fring',        'Albuquerque', 30.0);

CREATE TABLE batches (
  batch_id INTEGER, product_name TEXT, quantity_grams INTEGER
);
INSERT INTO batches VALUES
  (1, 'Blue Sky',     500),
  (2, 'Blue Sky',     450),
  (3, 'Classic',      400),
  (4, 'Premium Mix',  350),
  (5, 'Street Grade', 600),
  (6, 'Classic',      380);
`.trim(),

  // ── Stranger Things ─────────────────────────────────────────────────────────
  "stranger-things": `
CREATE TABLE sightings (
  location TEXT, creature TEXT, threat_level INTEGER,
  witnesses INTEGER, reported_date TEXT
);
INSERT INTO sightings VALUES
  ('Mirkwood',       'Demogorgon', 9,  3,  '1983-11-06'),
  ('Hawkins Lab',    'Demogorgon', 10, 1,  '1983-11-07'),
  ('Wheeler House',  'Mind Flayer',8,  5,  '1984-10-28'),
  ('Starcourt Mall', 'Mind Flayer',9,  12, '1985-07-04'),
  ('Russian Base',   'Demogorgon', 7,  2,  '1985-07-04'),
  ('Creel House',    'Vecna',      10, 1,  '1986-03-22'),
  ('Lovers Lake',    'Vecna',      8,  0,  '1986-03-21'),
  ('The Upside Down','Demogorgon', 6,  0,  '1983-11-06');

CREATE TABLE labs (
  location TEXT, classification TEXT
);
INSERT INTO labs VALUES
  ('Hawkins Lab',    'Origin Point'),
  ('Starcourt Mall', 'Breach Site'),
  ('Russian Base',   'Foreign Threat');
`.trim(),

  // ── Severance ───────────────────────────────────────────────────────────────
  "severance": `
CREATE TABLE employees (
  name TEXT, department TEXT, refinement_score INTEGER, hire_date TEXT
);
INSERT INTO employees VALUES
  ('Mark S.',       'Macrodata Refinement', 78, '2021-03-15'),
  ('Helly R.',      'Macrodata Refinement', 65, '2022-06-01'),
  ('Dylan G.',      'Macrodata Refinement', 82, '2020-11-20'),
  ('Irving B.',     'Macrodata Refinement', 91, '2019-08-14'),
  ('Burt G.',       'Optics and Design',    88, '2018-05-10'),
  ('Harmony Cobel', 'Management',           95, '2015-01-01'),
  ('Seth Milchick', 'Management',           87, '2017-04-22');

CREATE TABLE departments (
  name TEXT, budget INTEGER
);
INSERT INTO departments VALUES
  ('Macrodata Refinement', 250000),
  ('Optics and Design',    180000),
  ('Management',           500000);
`.trim(),

  // ── The Office ──────────────────────────────────────────────────────────────
  "the-office": `
CREATE TABLE sales (
  salesperson TEXT, client TEXT, amount REAL, region TEXT
);
INSERT INTO sales VALUES
  ('Dwight Schrute', 'Hammermill',          14000, 'Scranton'),
  ('Jim Halpert',    'BlueCross',            8500, 'Scranton'),
  ('Dwight Schrute', 'Staples',             12000, 'Scranton'),
  ('Michael Scott',  'Dunder Mifflin NJ',   25000, 'Scranton'),
  ('Stanley Hudson', 'Lukens',               7800, 'Scranton'),
  ('Ryan Howard',    'Yahoo',                5000, 'New York'),
  ('Pam Halpert',    'Vance Refrigeration',  9500, 'Scranton'),
  ('Dwight Schrute', 'Prince Family Paper', 11000, 'Scranton'),
  ('Jim Halpert',    'Lackawanna Coal',      6200, 'Scranton'),
  ('Michael Scott',  'Saber',               18000, 'Sabre FL');

CREATE TABLE employees (
  name TEXT, branch TEXT
);
INSERT INTO employees VALUES
  ('Dwight Schrute', 'Scranton'),
  ('Jim Halpert',    'Scranton'),
  ('Michael Scott',  'Scranton'),
  ('Stanley Hudson', 'Scranton'),
  ('Ryan Howard',    'New York'),
  ('Pam Halpert',    'Scranton');
`.trim(),

  // ── Game of Thrones ─────────────────────────────────────────────────────────
  "game-of-thrones": `
CREATE TABLE houses (
  name TEXT, region TEXT, army_size INTEGER, allegiance TEXT
);
INSERT INTO houses VALUES
  ('Stark',     'The North',    18000, 'Stark'),
  ('Lannister', 'Westerlands',  35000, 'Lannister'),
  ('Baratheon', 'Stormlands',   22000, 'Lannister'),
  ('Tyrell',    'Reach',        40000, 'Targaryen'),
  ('Martell',   'Dorne',        15000, 'Neutral'),
  ('Tully',     'Riverlands',   12000, 'Stark'),
  ('Arryn',     'Vale',         10000, 'Neutral'),
  ('Mormont',   'The North',     5000, 'Stark'),
  ('Greyjoy',   'Iron Islands',  8000, 'Greyjoy');

CREATE TABLE battles (
  name TEXT, year INTEGER, attacker TEXT
);
INSERT INTO battles VALUES
  ('Battle of the Blackwater', 299, 'Baratheon'),
  ('Red Wedding',              299, 'Frey'),
  ('Battle of the Bastards',   300, 'Bolton'),
  ('Loot Train Attack',        300, 'Tyrell'),
  ('Battle of Winterfell',     300, 'Stark');
`.trim(),

  // ── The Matrix ──────────────────────────────────────────────────────────────
  "the-matrix": `
CREATE TABLE anomalies (
  name TEXT, type TEXT, threat_level INTEGER,
  status TEXT, assigned_agent TEXT
);
INSERT INTO anomalies VALUES
  ('Neo',      'The One',          10, 'active',   'Agent Smith'),
  ('Morpheus', 'Resistance Leader', 9, 'active',   'Agent Smith'),
  ('Trinity',  'Resistance',        8, 'active',   'Agent Jones'),
  ('Oracle',   'Program',           5, 'inactive', 'Agent Brown'),
  ('Niobe',    'Resistance',        7, 'active',   'Agent Jones'),
  ('Ghost',    'Resistance',        6, 'inactive', 'Agent Brown'),
  ('Seraph',   'Program',           4, 'inactive', 'Agent Smith');

CREATE TABLE agents (
  name TEXT, designation TEXT
);
INSERT INTO agents VALUES
  ('Agent Smith', 'Primary Threat Response'),
  ('Agent Jones', 'Secondary Protocol'),
  ('Agent Brown', 'Support Division');
`.trim(),

  // ── Rick and Morty ──────────────────────────────────────────────────────────
  // NOTE: both dim_id and dimension_id columns exist because different
  // challenge solutions reference each name inconsistently.
  "rick-and-morty": `
CREATE TABLE dimensions (
  dim_id INTEGER, dimension_id INTEGER,
  name TEXT, danger_level INTEGER,
  portal_color TEXT, visited TEXT
);
INSERT INTO dimensions VALUES
  (1, 1, 'C-137',          8, 'green',  'yes'),
  (2, 2, 'Cronenberg World',10,'red',   'yes'),
  (3, 3, 'Pizza World',     2, 'blue',  'no'),
  (4, 4, 'Gazorpazorp',     9, 'green', 'yes'),
  (5, 5, 'Bird World',      5, 'yellow','no'),
  (6, 6, 'Trunk World',     7, 'red',   'yes'),
  (7, 7, 'Reverse World',   6, 'blue',  'yes'),
  (8, 8, 'Phone World',     3, 'green', 'no');

CREATE TABLE portals (
  portal_id INTEGER, opened_by TEXT, dimension_id INTEGER
);
INSERT INTO portals VALUES
  (1, 'Rick C-137', 1),
  (2, 'Rick C-137', 2),
  (3, 'Morty',      3),
  (4, 'Rick C-137', 4),
  (5, 'Evil Rick',  2),
  (6, 'Rick C-137', 2),
  (7, 'Morty',      6),
  (8, 'Evil Rick',  4);
`.trim(),

  // ── Squid Game ──────────────────────────────────────────────────────────────
  "squid-game": `
CREATE TABLE players (
  player_number INTEGER, name TEXT, status TEXT,
  prize_won REAL, debt_amount REAL,
  team_id INTEGER, current_round INTEGER
);
INSERT INTO players VALUES
  (456, 'Seong Gi-hun',   'alive',      45600000000, 160000000, 1, 6),
  (218, 'Cho Sang-woo',   'eliminated', 10000000000, 650000000, 1, 5),
  (67,  'Kang Sae-byeok', 'eliminated',           0, 140000000, 2, 4),
  (1,   'Oh Il-nam',      'alive',          1000000,    500000, 1, 6),
  (101, 'Jang Deok-su',   'eliminated',           0, 500000000, 3, 3),
  (212, 'Mi-nyeo',        'eliminated',           0,  42000000, 2, 3),
  (240, 'Ji-yeong',       'eliminated',           0, 120000000, 2, 4),
  (199, 'Ali Abdul',      'eliminated',           0, 460000000, 3, 4);

CREATE TABLE games (
  round_number INTEGER, game_name TEXT
);
INSERT INTO games VALUES
  (1, 'Red Light Green Light'),
  (2, 'Honeycomb'),
  (3, 'Tug of War'),
  (4, 'Marbles'),
  (5, 'Glass Bridge'),
  (6, 'Squid Game');
`.trim(),

  // ── Arrested Development ────────────────────────────────────────────────────
  "arrested-development": `
CREATE TABLE ventures (
  name TEXT, revenue INTEGER, is_legal INTEGER,
  owner TEXT, contact_id INTEGER, category TEXT
);
INSERT INTO ventures VALUES
  ('Bluth Banana Stand',       35000,   1, 'George Michael', 1, 'Food'),
  ('Fakeblock',                    0,   1, 'George Michael', 1, 'Tech'),
  ('Gentlemen''s Club',        -5000,   0, 'Tobias',         2, 'Entertainment'),
  ('Mrs. Featherbottom Agency',  500,   1, 'Tobias',         2, 'Domestic'),
  ('Bluth Company',           120000,   1, 'Michael',        3, 'Construction'),
  ('Gobias Industries',        15000,   1, 'Gob',            4, 'Services'),
  ('Gob Magic',                 8000,   1, 'Gob',            4, 'Entertainment'),
  ('Hotel Maharis',           -12000,   0, 'Lucille',        5, 'Hospitality');

CREATE TABLE bluth_company (
  contact_id INTEGER, member TEXT
);
INSERT INTO bluth_company VALUES
  (1, 'George Michael Bluth'),
  (2, 'Tobias Funke'),
  (3, 'Michael Bluth'),
  (4, 'Gob Bluth'),
  (5, 'Lucille Bluth');
`.trim(),

  // ── Barbie ──────────────────────────────────────────────────────────────────
  "barbie": `
CREATE TABLE barbies (
  name TEXT, job TEXT, is_in_crisis INTEGER,
  outfit_count INTEGER, career_id INTEGER,
  happiness INTEGER, location TEXT
);
INSERT INTO barbies VALUES
  ('Stereotypical Barbie', 'President',  1, 150, 1, 5, 'Barbieland'),
  ('Doctor Barbie',        'Doctor',     0,  85, 2, 9, 'Barbieland'),
  ('Lawyer Barbie',        'Lawyer',     0,  95, 3, 8, 'Barbieland'),
  ('Scientist Barbie',     'Scientist',  1,  70, 4, 6, 'Barbieland'),
  ('Writer Barbie',        'Writer',     0,  60, 5, 8, 'Real World'),
  ('Weird Barbie',         'Guide',      0, 200, 6, 7, 'Barbieland'),
  ('Midge',                'Housewife',  0,  45, 7, 7, 'Barbieland'),
  ('Kira',                 'Doctor',     0,  55, 2, 9, 'Barbieland'),
  ('Diplomat Barbie',      'President',  0,  75, 1, 8, 'Barbieland');

CREATE TABLE careers (
  career_id INTEGER, salary_range TEXT, title TEXT
);
INSERT INTO careers VALUES
  (1, '$400K-$500K',    'President of the United States'),
  (2, '$200K-$300K',    'Chief Medical Officer'),
  (3, '$180K-$250K',    'Senior Partner'),
  (4, '$90K-$150K',     'Research Scientist'),
  (5, '$50K-$80K',      'Published Author'),
  (6, '$0 (volunteer)', 'Interdimensional Guide'),
  (7, '$30K-$50K',      'Homemaker');
`.trim(),

  // ── Sex and the City ────────────────────────────────────────────────────────
  "sex-and-the-city": `
CREATE TABLE dates (
  name TEXT, location TEXT, rating INTEGER,
  apartment_id INTEGER, neighborhood TEXT
);
INSERT INTO dates VALUES
  ('Big',       'Nobu',          9, 1, 'Upper East Side'),
  ('Aidan',     'his apartment', 8, 2, 'Greenwich Village'),
  ('Berger',    'the bistro',    5, 3, 'Chelsea'),
  ('Aleksandr', 'Le Bernardin',  7, 1, 'Upper East Side'),
  ('Petrovsky', 'the gallery',   3, 4, 'SoHo'),
  ('Jack',      'Sports bar',    4, 2, 'Greenwich Village'),
  ('Richard',   'the yacht',     6, 1, 'Upper East Side'),
  ('Smith',     'the premiere',  8, 5, 'Meatpacking');

CREATE TABLE apartments (
  apartment_id INTEGER, address TEXT, rent INTEGER, neighborhood TEXT
);
INSERT INTO apartments VALUES
  (1, '1010 Fifth Avenue', 5500, 'Upper East Side'),
  (2, '245 Perry St',      2800, 'Greenwich Village'),
  (3, '450 West 23rd',     3200, 'Chelsea'),
  (4, '112 Prince St',     4000, 'SoHo'),
  (5, '848 Washington',    3800, 'Meatpacking');

CREATE TABLE shoes (
  brand TEXT, price INTEGER
);
INSERT INTO shoes VALUES
  ('Manolo Blahnik',       895),
  ('Christian Louboutin', 1200),
  ('Jimmy Choo',           650),
  ('Blahnik Strappy',      750),
  ('Louboutin Pump',       980),
  ('Choo Sandal',          480);
`.trim(),

  // ── Sopranos ────────────────────────────────────────────────────────────────
  "sopranos": `
CREATE TABLE contracts (
  client TEXT, territory TEXT, value INTEGER, crew_id INTEGER
);
INSERT INTO contracts VALUES
  ('Satriale''s Pork Store',  'Newark',      45000, 1),
  ('Bada Bing',               'New Jersey',  120000, 1),
  ('Waste Management NJ',     'New Jersey',   75000, 2),
  ('Green Grove',             'North Jersey', 30000, 2),
  ('Montclair Country Club',  'North Jersey', 55000, 3),
  ('Holsten''s Diner',        'Newark',       22000, 3),
  ('Central Jersey Hauling',  'Central NJ',   85000, 1),
  ('Atlantic City Casino',    'South NJ',     95000, 4);

CREATE TABLE crews (
  crew_id INTEGER, boss TEXT
);
INSERT INTO crews VALUES
  (1, 'Paulie Walnuts'),
  (2, 'Bobby Baccalieri'),
  (3, 'Silvio Dante'),
  (4, 'Christopher Moltisanti');
`.trim(),
};
