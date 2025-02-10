import axios from 'axios';

interface CollegeMatch {
	name: string;
	domain?: string;
	logo?: string;
}

export class CollegeService {
	private static readonly CLEARBIT_API = 'https://autocomplete.clearbit.com/v1/companies/suggest';
	private static readonly COLLEGE_KEYWORDS = ['university', 'college', 'institute', 'school'];

	static async lookupCollege(input: string): Promise<CollegeMatch | null> {
		try {
			// Clean up input
			const searchTerm = this.normalizeSearchTerm(input);

			// Try Clearbit first
			const response = await axios.get(this.CLEARBIT_API, {
				params: {
					query: searchTerm
				}
			});

			if (response.data && Array.isArray(response.data)) {
				// Filter for educational institutions
				const colleges = response.data.filter((result) =>
					this.COLLEGE_KEYWORDS.some((keyword) => result.name.toLowerCase().includes(keyword))
				);

				if (colleges.length > 0) {
					return {
						name: colleges[0].name,
						domain: colleges[0].domain,
						logo: colleges[0].logo
					};
				}
			}

			// Fallback to basic normalization if no match found
			return {
				name: this.formatCollegeName(input)
			};
		} catch (error) {
			console.error('Error looking up college:', error);
			// Fallback to basic formatting
			return {
				name: this.formatCollegeName(input)
			};
		}
	}

	private static normalizeSearchTerm(input: string): string {
		// Handle common abbreviations
		const commonAbbreviations: Record<string, string> = {
			gt: 'georgia tech',
			mit: 'massachusetts institute of technology',
			ucla: 'university of california los angeles',
			usc: 'university of southern california',
			uf: 'university of florida'
		};

		const normalized = input.toLowerCase().replace(/[^a-z0-9]/g, '');
		return commonAbbreviations[normalized] || input;
	}

	private static formatCollegeName(input: string): string {
		return input
			.split(/[-_]/)
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
			.join(' ');
	}
}
