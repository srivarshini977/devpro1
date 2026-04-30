const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>CI/CD Pipeline</title>
        <style>
            body {
                font-family: Arial;
                background: #0f172a;
                color: white;
                text-align: center;
                padding: 40px;
            }
            h1 {
                color: #38bdf8;
            }
            .box {
                background: #1e293b;
                margin: 15px auto;
                padding: 15px;
                width: 70%;
                border-radius: 10px;
                font-size: 18px;
            }
            .arrow {
                font-size: 22px;
                margin: 8px;
            }
        </style>
    </head>
    <body>

        <h1>🚀 CI/CD Pipeline Flow in Devops</h1>

        <div class="box">👩‍💻 Developer (Code Changes)</div>
        <div class="arrow">⬇️</div>

        <div class="box">📂 GitHub (Code Repository)</div>
        <div class="arrow">⬇️</div>

        <div class="box">⚙️ Jenkins (Build & Pipeline)</div>
        <div class="arrow">⬇️</div>

        <div class="box">🐳 Docker (Build Image)</div>
        <div class="arrow">⬇️</div>

        <div class="box">☁️ Docker Hub (Store Image)</div>
        <div class="arrow">⬇️</div>

        <div class="box">☸️ Kubernetes (Deploy Application)</div>
        <div class="arrow">⬇️</div>

        <div class="box">🌐 Browser (Live App)</div>

        <h3>✅ Code → Build → Deploy → Live automatically</h3>

    </body>
    </html>
    `);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
