CREATE TABLE IF NOT EXISTS characters (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  "realName" VARCHAR(100),
  team VARCHAR(50),
  ability TEXT,
  "firstAppearance" VARCHAR(100),
  description TEXT,
  image TEXT,
  "threatLevel" VARCHAR(20)
);