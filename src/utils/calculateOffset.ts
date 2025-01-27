export default function calculateOffset(page: number, limit: number): number {
    if (page < 0 || limit < 0) throw new Error('The number of page and limit must be gratter than 0.');
    return page * limit
}
