# Sucs and Sched
## Frontend web app for running club schedule/fitness tracking

### MVP
- [x] Anyone can go to the website and view sucs, the current running schedule, and upcoming races

- User Accounts 
    - [x] users can register new account
    - [x] in account settings, users can toggle whether they're logging sucs or not
    - [x] on sucs page, users can mark done for today
    - [ ] on sucs page, users can see sucs status of all who have opted into scoreboards
    - [ ] on account page, users can create new race for upcoming races list (all)
    - [ ] on account page, users can add races to their upcoming list (personal)

- Scoreboards
    - [ ] in account settings, users can toggle participation in scoreboards
    - [ ] scoreboards display longest active sucs streak, most days this month, maybe more?

- Admin
    - [ ] can clear sucs for start of new month

#### Stretch
- Running Log
    - [ ] users can upload/create own running schedule
    - [ ] users can log runs with distance, notes, etc
    - [ ] users can see complete log of past runs


### Set Up
1. create .env (all must begin with REACT_APP - REACT_APP_NEW_VAR)
    - set REACT_APP_BASE_URL to your local development url (eg localhost:9000)

### Netlify Deploy
- set REACT_APP_BASE_URL environment variable to your live backend
- investigate netlify cl
- Build command:
    - CI=false npm run build
    - does something with ignoring errors, fixed something that strictmode didn't -- investigate