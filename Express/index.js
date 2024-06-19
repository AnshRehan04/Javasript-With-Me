const express = require("express");
const app = express();

function sum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}

app.get("/", function (req, res) {
    const n = parseInt(req.query.n, 10); // Convert query parameter to an integer
    if (isNaN(n) || n <= 0) {
        // Validate that n is a positive integer
        return res.status(400).send("Invalid input. Please provide a positive integer.");
    }
    const ans = sum(n);
    res.send("Your answer is " + ans);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
