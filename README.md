# Sucs and Sched
## Frontend App for simple fitness schedules/run club

### Set Up
1. Make sure an environment variable REACT_APP_BASE_URL is set to your development server (node backend)

Netlify deploy:
- set REACT_APP_BASE_URL environment variable to your live backend
- investigate netlify cl


Build command:
CI=false npm run build
does something with ignoring errors, fixed something that strictmode didn't -- investigate

### MVP
1. Anyone can go to the website and view sucs, the current running schedule, and upcoming races

2. Users can create account
    - on account page, users can choose to track their daily sucs
    - on account page, users can add races to their upcoming list
    - on sucs page, users can toggle complete on a day

3. Logged in user can
    - see and edit own sucs status
    - see sucs scoreboard (family sucs) - longest active streak, most days this month (requires backend adds)

4. Admin has additional ability of clearing everyones sucs to start over

### To Do
1. Auth/login
    - Sucs - when logged in, users can see progress of all users and complete days for themselves 

2. Home Component:
    - adjust spacing at md breakpoint, add a little space between cards

3. Close Offcanvas on link click

4. Add upcoming races table, map over it for all upcoming races cards on Home component

5. investigate netlify cli

### Stretch
1. User can upload own running schedule
2. User can log own miles (public/private)
3. User can see scoreboard of other users public logs