-- Generated via https://dbdiagram.io/home and exported as PostgreSQL

-----------------------------------------------------------
-- CREATE TABLES
-----------------------------------------------------------
CREATE TABLE "accounts" (
  "id" serial PRIMARY KEY,
  "user_name" varchar UNIQUE NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "password_hash" varchar NOT NULL,
  "balance" integer NOT NULL
);

CREATE TABLE "transfers" (
  "id" serial PRIMARY KEY,
  "from_account_id" bigint NOT NULL,
  "to_account_id" bigint NOT NULL,
  "amount" integer NOT NULL
);


-----------------------------------------------------------
-- CREATE additional INDEX
-----------------------------------------------------------
CREATE INDEX ON "accounts" ("user_name");

CREATE INDEX ON "transfers" ("from_account_id");

CREATE INDEX ON "transfers" ("to_account_id");

CREATE INDEX ON "transfers" ("from_account_id", "to_account_id");


-----------------------------------------------------------
-- ADD COMMENTS
-----------------------------------------------------------
COMMENT ON COLUMN "transfers"."amount" IS 'must be positive';


-----------------------------------------------------------
-- ADD FOREIGN KEYs
-----------------------------------------------------------
ALTER TABLE "transfers" ADD FOREIGN KEY ("from_account_id") REFERENCES "accounts" ("id");

ALTER TABLE "transfers" ADD FOREIGN KEY ("to_account_id") REFERENCES "accounts" ("id");


-----------------------------------------------------------
-- ADD INITIAL DATA
-----------------------------------------------------------

INSERT INTO accounts (user_name, email, password_hash, balance) VALUES ('_user_name_0', '_user_name_0@test.com', 'not_a_hash', 0);
INSERT INTO accounts (user_name, email, password_hash, balance) VALUES ('_user_name_1', '_user_name_1@test.com', 'not_a_hash', 0);
INSERT INTO accounts (user_name, email, password_hash, balance) VALUES ('_user_name_2', '_user_name_3@test.com', 'not_a_hash', 0);

