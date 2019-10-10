import { getDate } from './getDate';

describe('getDate function', () => {

	it('date are null', () => {
		const result = getDate(null);
		expect(result).toEqual('1 января, чт, 1970 год');
    });

	it('date are 0', () => {
		const result = getDate(0);
		expect(result).toEqual('1 января, чт, 1970 год');
    });

	it('date are null', () => {
		const result = getDate(1570722470385);
		expect(result).toEqual('10 октября, чт, 2019 год');
    });

	it('date are max', () => {
		const result = getDate(8640000000000000);
		expect(result).toEqual('13 сентября, сб, 275760 год');
    });

	it('date are min', () => {
		const result = getDate(-8640000000000000);
		expect(result).toEqual('20 апреля, вт, -271821 год');
    });

	it('date are word', () => {
		const result = getDate('Hello there');
        expect(result).toEqual('NaN undefined, undefined, NaN год');
    });

});
