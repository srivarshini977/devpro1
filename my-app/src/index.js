const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>CI/CD Pipeline Visual</title>
        <style>
            body {
                margin: 0;
                font-family: 'Segoe UI', sans-serif;
                background: linear-gradient(135deg, #0f172a, #1e293b);
                color: white;
                text-align: center;
            }

            h1 {
                margin-top: 30px;
                color: #38bdf8;
            }

            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                margin: 40px auto;
                width: 90%;
            }

            .step {
                background: #1e293b;
                border-radius: 15px;
                padding: 20px;
                margin: 15px;
                width: 180px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.5);
                transition: transform 0.3s;
            }

            .step:hover {
                transform: scale(1.08);
            }

            .step img {
                width: 60px;
                height: 60px;
            }

            .step p {
                margin-top: 10px;
                font-size: 16px;
            }

            .arrow {
                font-size: 30px;
                margin: 10px;
                color: #38bdf8;
            }

            footer {
                margin-top: 30px;
                font-size: 18px;
                color: #94a3b8;
            }
        </style>
    </head>
    <body>

        <h1>🚀 CI/CD Pipeline Visualization</h1>

        <div class="container">

            <div class="step">
                <img src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png">
                <p>Developer</p>
            </div>

            <div class="arrow">➡️</div>

            <div class="step">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png">
                <p>GitHub</p>
            </div>

            <div class="arrow">➡️</div>

            <div class="step">
                <img src="https://cdn-icons-png.flaticon.com/512/919/919853.png">
                <p>Jenkins</p>
            </div>

            <div class="arrow">➡️</div>

            <div class="step">
                <img src="https://cdn-icons-png.flaticon.com/512/919/919853.png">
                <p>Docker</p>
            </div>

            <div class="arrow">➡️</div>

            <div class="step">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968875.png">
                <p>Docker Hub</p>
            </div>

            <div class="arrow">➡️</div>

            <div class="step">
                <img src="https://cdn-icons-png.flaticon.com/512/919/919836.png">
                <p>Kubernetes</p>
            </div>

            <div class="arrow">➡️</div>

            <div class="step">
                <img src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png">
                <p>Live App</p>
            </div>

        </div>

        <footer>
            ✅ Code → Build → Test → Deploy → Live (Fully Automated)
        </footer>

    </body>
    </html>
    `);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});