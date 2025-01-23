# courseware-bidder

Create a file called `emails.secret` that has each student's email on a new line.

Create a file called `super.secret` with the `X-CS571-SECRET`.

Run `node app.js`

Grab generated BIDs from db by exec `shared_db` using...

```sql
USE badgerauth_prod;
SELECT email, bid FROM BadgerIds WHERE createdAt > '2025-01-23';
```

Send via seperate mail merge.