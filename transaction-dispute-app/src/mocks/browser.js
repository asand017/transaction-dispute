import { setupWorker } from 'msw';
import { rest } from 'msw';
import { handlers } from './handlers';

export const worker = setupWorker(
    // Handles a POST /login request
    rest.post('/login', (req, res, ctx) => {
        console.log("request received");
        /*const { username, password } = req.json;
        //Persist user's authentication in the session
        sessionStorage.setItem('is-authenticated', 'true')

        return res(
            ctx.status(200),
            ctx.json({
                id: 'f12e41e6-c51a-5dc7-a78-9fawi9870fda',
                username,
                firstName: 'Bilbo',
                lastName: 'Baggins'
            })
        )*/
        return res(ctx.status(202));
    }),

    // Hanldes a GET /transactions request
    rest.get('/transactions', (req, res, ctx) => {
        // Check if the user is authenticated in this session
        const isAuthenticated = sessionStorage.getItem('is-authenticated')

        if (!isAuthenticated) {
            return res(
                ctx.status(403),
                ctx.json({
                    errorMessage: 'Not authorized',
                }),
            )
        }

        return res(
            ctx.status(200),
            ctx.json({
                data: [
                    {id: 1, posted_date: new Date(2022, 7, 13), description: 'Chipotle 2333 Santa Ana CA 07/10', charge: 13.45},
                    {id: 2, posted_date: new Date(2022, 7, 13), description: 'Riot Games 07/09', charge: 9.99},
                    {id: 3, posted_date: new Date(2022, 7, 9), description: 'NETFLIX id:1281973 07/09', charge: 9.99}
                ]
            })
        )
    }),
);
worker.start({
    onUnhandledRequest: 'warn',
});