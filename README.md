## 📝 Competitor Monitoring Dashboard

A simple web app to monitor competitor updates automatically using RSS feeds.
You can add competitors, fetch updates, auto-tag them, store in MongoDB, and view them on a dashboard.

✅ Features

- Add competitors with their RSS feed URL
- Fetch updates automatically from RSS feeds
- Auto-tag updates as Pricing, Product Release, Campaign, or General
- Store updates in MongoDB
- View updates on a clean, simple dashboard

```bash
⚙️ Setup Instructions

1️⃣ Install Node packages
npm init -y
npm install express mongoose axios rss-parser cors

2️⃣ Start MongoDB
Make sure MongoDB is running locally.
Command (if using default MongoDB installation):
mongod

3️⃣ Start the server
node server.js
You should see:
MongoDB connected
Server running on port 5000

4️⃣ Open Dashboard

In browser:
http://localhost:5000/index.html

You will see the dashboard with a “Fetch Updates” button.
```

🟢 API Routes
1️⃣ Add Competitor

- Method: POST
- URL: http://localhost:5000/api/competitors/add
- Body (JSON):
```bash
{
  "name": "Apple",
  "rssUrl": "https://www.apple.com/newsroom/rss-feed.rss"
}

```
You must add at least one competitor before fetching updates.

2️⃣ Fetch Updates

- Method: GET
- URL: http://localhost:5000/api/competitors/fetch
- This fetches the latest updates from all competitors’ RSS feeds and stores them in MongoDB.

3️⃣ Get All Updates

- Method: GET
- URL: http://localhost:5000/api/competitors/updates
- Returns all updates stored in the database, sorted by date.

🟡 How to Use

- Add at least one competitor using the API (Postman or Thunder Client).

- Open dashboard at http://localhost:5000.

- Click “Fetch Updates” → updates will appear automatically.

- View updates with title, tag, competitor name, and a link to the original article.

💡 Notes
RSS feeds provide updates in XML format. The app uses rss-parser to read them.


