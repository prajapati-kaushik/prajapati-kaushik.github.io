export function formatTenure(startDate: string, endDate: string | null) {
	if (!endDate) {
		return 'Present';
	}

	return `${formatMonthYear(startDate)} — ${formatMonthYear(endDate)}`;
}

export function formatMonthYear(value: string) {
	const [year, month] = value.split('-').map(Number);
	return new Date(year, (month ?? 1) - 1).toLocaleDateString('en-GB', {
		month: 'short',
		year: 'numeric',
	});
}
