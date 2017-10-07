-- 1. Users​ ​can​ ​view​ ​their​ ​todo​ ​list. 
-- 2. Users​ ​can​ ​add,​ ​remove,​ ​modify​ ​and​ ​delete​ ​todo​ ​entries. 
-- 3. Each​ ​todo​ ​entry​ ​includes​ ​a​ ​single​ ​line​ ​of​ ​text,​ ​due​ ​date​ ​and​ ​priority. 
-- 4. Users​ ​can​ ​assign​ ​priorities​ ​and​ ​due​ ​dates​ ​to​ ​the​ ​entries. 
-- 5. Users​ ​can​ ​sort​ ​todo​ ​lists​ ​using​ ​due​ ​date​ ​and​ ​priority. 
-- 6. Users​ ​can​ ​mark​ ​an​ ​entry​ ​as​ ​completed. 
-- 7. You​ ​don't​ ​need​ ​to​ ​spend​ ​time​ ​on​ ​UI/UX​ ​design,​ ​if​ ​you​ ​do,​ ​it​ ​will​ ​be​ ​a​ ​bonus. 


-- $ sudo -u postgres createdb flexhire
-- $ sudo -u postgres psql flexhire


createdb flexhire;

create table todos (
    id serial PRIMARY KEY,
    description varchar NOT NULL,
    due_date date NOT NULL,
    priority int NOT NULL,
    completed boolean NOT NULL
);

insert into todos (description, due_date, priority, completed) values ('task #1', '2017/10/16', 1, false);


-- postgres=# \conninfo 
-- You are connected to database "postgres" as user "postgres" via socket in "/var/run/postgresql" at port "5432".

-- postgres=# select * from todo                                                                                      
-- ;
--  id | description |  due_date  | priority | completed 
-- ----+-------------+------------+----------+-----------
--   1 | task #1     | 2017-10-16 |        1 | f
--   2 | task #x     | 2017-09-16 |        1 | t
-- (2 rows)


-- postgres=# \d
--              List of relations
--  Schema |    Name     |   Type   |  Owner   
-- --------+-------------+----------+----------
--  public | todo        | table    | postgres
--  public | todo_id_seq | sequence | postgres
-- (2 rows)
