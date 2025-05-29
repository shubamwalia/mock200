# MockNotification

A simple Express.js application that responds to all requests with a 200 status code.

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

## Deployment to Netlify

1. Create a new site on Netlify
2. Connect your GitHub repository
3. Use the following build settings:
   - Build command: `npm run build`
   - Publish directory: `public`
   - Functions directory: `functions`