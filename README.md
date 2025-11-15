# Competitive Monitoring App

A simple app to track competitor updates from RSS feeds.  
Built with **Node.js, Express, MongoDB, HTML, CSS, and JavaScript**.

---

## Features

- Add competitors with RSS URLs
- Fetch updates automatically
- Auto-tag updates (Pricing, Product Release, Campaign, General)
- Store updates in MongoDB
- View updates on a simple dashboard

---

## Folder Structure

competitive-monitoring/
│── server.js
│── package.json
│── routes/
│ └── competitorRoutes.js
│── controllers/
│ └── competitorController.js
│── models/
│ └── Competitor.js
│ └── Update.js
│── public/
│ └── index.html
│ └── style.css

yaml
Copy code

---

## Setup & Run

1. Install dependencies:
```bash
npm install
Start MongoDB (if installed locally):

bash
Copy code
mongod
Start server:

bash
Copy code
node server.js
Open in browser:

arduino
Copy code
http://localhost:5000
API Endpoints
Add competitor (POST) → /api/competitors/add
Example:

json
Copy code
{
  "name": "Apple",
  "rssUrl": "https://www.apple.com/newsroom/rss-feed.rss"
}
Fetch updates (GET) → /api/competitors/fetch

View updates (GET) → /api/competitors/updates