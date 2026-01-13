export function maxProfit(prices: number[]): number {
	let buy = 0; // pointer for the 'buy' day
	let sell = 1; // pointer for the 'sell' day
	let maxProfit = 0; // want to return the maximum profit

	while (sell < prices.length) {
		// if buy day value is less than sell day value
		//  there's profit to be made
		if (prices[buy] < prices[sell]) {
			// so store it if its the highest profit we've seen so far
			maxProfit = Math.max(maxProfit, prices[sell] - prices[buy]);
		} else {
			// otherwise, move buy to the sell position
			//  so we can progress across the array
			buy = sell;
		}
		sell++; // either way, we want to keep the sell day moving forward
	}
	return maxProfit;
}
