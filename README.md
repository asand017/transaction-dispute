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
