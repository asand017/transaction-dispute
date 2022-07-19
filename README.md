# Dispute Transactions Project
Transaction dispute module for a mock banking app

## Description:
Create a mocked financial app with the function of submitting a dispute form for a 'suspicious' transaction.

## Deployment:
To run locally using npm:<br>
> // clone repo <br>
> $ cd transaction-dispute <br>
> $ npm run dev <br>
<br>
App will be available on http://localhost:3000

## Implementation Notes:
* Login and Transaction API endpoints are mocked via msw (mock service worker) on the React side and so only work in development mode. *Will include endpoints to Node/Java server to respond in production* <br>
* Dispute submission endpoint is stood up in Node Express server and just checks the request body for a non-empty dispute before sending a success or fail error code back to client. <br>

## Screenshots
Login:
![Login Page](https://user-images.githubusercontent.com/5581397/179658732-9a1ce8fb-1d96-4723-8dec-b7034b6fb276.png)

Transaction Dashboard
![Transaction Dashboard](https://user-images.githubusercontent.com/5581397/179658743-f03b47f4-1614-44d4-998f-66169c4c65ef.png)

Details
![Transaction Details](https://user-images.githubusercontent.com/5581397/179658753-c584f9b6-5332-4e3e-8782-f903792d6405.png)

Dispute Selection
![Dispute Selection](https://user-images.githubusercontent.com/5581397/179658762-3b7d155b-6ed7-48bd-8275-89b2353aee2d.png)

Dispute Review
![Dispute Review](https://user-images.githubusercontent.com/5581397/179658775-c74a2ca0-031e-4758-aafb-bb2d79d96526.png)

Submission (Success)
![Dispute Submission (Success)](https://user-images.githubusercontent.com/5581397/179658786-19290b0d-5237-4e40-9069-d044ddc2574e.png)

Submission (Failed)
![Dispute Submission (Failed)](https://user-images.githubusercontent.com/5581397/179658795-a0b10349-65d7-4248-aab5-f3d25be4ac8e.png)
