import { Pool } from 'pg'
export const pool=new Pool({
    host:'ec2-52-203-74-38.compute-1.amazonaws.com',
    user:'kkmhxnhaakpjhi',
    password:'f3968063b2bae8a7c8a51ffeeeb461cf1ba5c2cbcccc92a5198a520fe1d1e50e',
    database:'df133tvs9kslrg',
    port:5432,
    ssl:{rejectUnauthorized:false}
});