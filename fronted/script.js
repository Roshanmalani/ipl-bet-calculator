document.getElementById("bettingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let investment = parseFloat(document.getElementById("investment").value);
    let oddsA = parseFloat(document.getElementById("oddsA").value);
    let oddsB = parseFloat(document.getElementById("oddsB").value);

    let teamAInvestment = investment / (1 + (oddsA / oddsB));
    let teamBInvestment = investment - teamAInvestment;
    let loss = (teamAInvestment * oddsA) - investment;
    
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <div><strong>Invest:</strong> <span style="color: #00ff96;">₹${teamAInvestment.toFixed(2)}</span> on Team A</div>
        <div><strong>Invest:</strong> <span style="color: #00ff96;">₹${teamBInvestment.toFixed(2)}</span> on Team B</div>
        <div class="loss">Loss: ₹${loss.toFixed(2)}</div>
    `;
    outputDiv.style.display = "block";
});
