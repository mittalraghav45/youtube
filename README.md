# Stream Box

A YouTube-style video browsing interface built with React 19, Redux Toolkit, React Router and Tailwind CSS. This learning/portfolio project demonstrates API integration, paginated feeds, debounced search suggestions, state management and persisted dark mode.

## What is implemented

- Home and category feeds: shorts, music, gaming, news, sports and podcasts.
- Search results, cached suggestions and infinite scrolling.
- Watch pages with embedded videos and fetched comment threads.
- A simulated live-chat interface; it is not connected to YouTube live chat.

## Run locally

Use Node.js 22 LTS and npm as a starting environment. Git is needed for cloning; downloaded ZIP users can extract the folder and open a terminal there.

```bash
git clone https://github.com/mittalraghav45/youtube.git
cd youtube
npm ci
```

Create `.env.local` beside `package.json`:

```dotenv
REACT_APP_GOOGLE_API_KEY=your_youtube_data_api_key
```

Enable YouTube Data API v3 in your own Google Cloud project and use a key permitted for that API and your local browser origin. This key is shipped to the browser: restrict its API access and allowed referrers. Do not reuse values found in historical code comments.

```bash
npm start
```

Open http://localhost:3000. Stop with Ctrl+C. Restart the server after changing environment variables. No database or separate backend is required.

## Commands

| Command | Purpose |
|---|---|
| `npm start` | Development server |
| `npm run build` | Static production files in `build/` |
| `npm test -- --watchAll=false` | Run any available Jest tests once |

A test script does not imply that automated test coverage exists. This documentation pass inspected the code and commands; it did not certify runtime behaviour.

## Code map

- `src/App.js`: browser routes.
- `src/components/`: feed, search, watch, chat and navigation components.
- `src/utils/constants.js`: API endpoints and key lookup.
- `src/utils/store.js`, `appSlice.js`, `searchSlice.js`, `chatSlice.js`: Redux state.
- `tailwind.config.js`: styling configuration.

## Troubleshooting

| Symptom | Check |
|---|---|
| Empty feed or API 403 | API enabled, correct key, referrer restrictions and quota; inspect browser Network responses |
| Suggestions fail | The separate suggestions endpoint can be affected by browser CORS restrictions |
| Video cannot play | Some videos prohibit embedding or have regional restrictions |
| Port 3000 occupied | Stop the other server or accept the alternate port and update key restrictions |
| Refreshing a route returns 404 after hosting | Configure the host to fall back to `index.html` |

## Hosting and limitations

Deploy the `build/` directory on a static host with SPA route fallback. Set the environment variable before building. API usage depends on service quotas and network access; chat messages are simulated. This is an independent educational interface, not an official YouTube client.
