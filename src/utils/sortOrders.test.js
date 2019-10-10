import { sortByItemCount, sortByDate, sortByItemNames, sortOrders } from './sortOrders';

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('orders with empty items', () => {
		const result = sortByItemCount({}, {});
		expect(result).toBe(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('same items count desc', () => {
		const order1 = {
			items: ['item1'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});

	it('same items count acs', () => {
		const order1 = {
			items: ['item1', '2'],
		};

		const order2 = {
			items: ['1'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});
});

describe('sortByDate function', () => {
	it('dates are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('dates not objects', () => {
		const date1 = 1552481120000;
		const date2 = 1544356800000;

		const result = sortByDate(date1, date2);

		expect(result).toBe(0);
	});

	it('orders with empty date', () => {
		const result = sortByDate({}, {});
		expect(result).toBe(0);
	});

	it('orders with date desc', () => {
		const order1 = {
			date: 1552481120000,
		};

		const order2 = {
			date: 1544356800000,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(-1);
	});

	it('orders with date asc', () => {
		const order1 = {
			date: 1152481120000,
		};

		const order2 = {
			date: 1544356800000,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	});

	it('orders with date equals', () => {
		const date = 1152481120000;
		const order1 = { date };
		const order2 = { date };

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});
});

describe('sortByItemNames function', () => {
	it('dates are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toEqual(0);
	});

	it('dates not objects', () => {
		const items1 = 'Hello';
		const items2 = 'There';

		const result = sortByItemNames(items1, items2);

		expect(result).toBe(0);
	});

	it('orders with empty items', () => {
		const result = sortByItemNames({}, {});
		expect(result).toBe(0);
	});

	it('orders with correct items name', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(1);
	});
});

describe('sortOrders function', () => {
	it('dates are null', () => {
		const result = sortOrders(null, null);
		expect(result).toBeUndefined();
	});
});
