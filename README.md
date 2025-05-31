# MockNotification

A simple Express.js application that responds to all requests with a 200 status code. This application is designed to be deployed on Vercel.

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the application locally:
```bash
npm start
```

The server will start on port 3000 (or the port specified in the PORT environment variable).

## Deployment to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy to Vercel:
```bash
vercel
```

Or you can deploy directly from the Vercel dashboard:
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy

## Testing

You can test the application by sending any HTTP request to the endpoint. All requests will receive a 200 status code with no body.

Example using curl:
```bash
curl -X GET https://your-vercel-app.vercel.app/
curl -X POST https://your-vercel-app.vercel.app/
curl -X PUT https://your-vercel-app.vercel.app/
```