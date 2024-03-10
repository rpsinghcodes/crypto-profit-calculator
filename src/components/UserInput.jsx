export default function UserInput({ userInput, onChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label> Average Buying Price </label>
          <input
            type="number"
            value={userInput.averageBuyingprice}
            required
            onChange={(event) =>
              onChange("averageBuyingprice", event.target.value)
            }
          />
        </p>
        <p>
          <label> Holding Amount(e.g 1BTC) </label>
          <input
            type="number"
            value={userInput.investedAmount}
            onChange={(event) => onChange("investedAmount", event.target.value)}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label> Current Buying price/Expected Selling price </label>
          <input
            type="number"
            value={userInput.currentSellingPrice}
            onChange={(event) =>
                onChange("currentSellingPrice", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label> Tax(including Platform fees) </label>
          <input
            type="number"
            value={userInput.taxCharges}
            onChange={(event) => onChange("taxCharges", event.target.value)}
            required
          />
        </p>
      </div>
    </div>
  );
}
