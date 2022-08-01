describe('BMIService', function() {
	
	it('should calucalte the BMI given a weight and height', function () {
		expect(BMIService.getIndex(75, 1.71)).toBe(25.64891761567662);
	});
	
	it('should return null for a non valid number', function () {
		expect(BMIService.getIndex('1', '')).toBe(null);
	});
	
});