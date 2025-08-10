// Removes non-numeric characters except decimal point and minus sign
export const cleanNumber = (num: string): string => {
    return num.replace(/[^0-9.-]/g, '') // Keep digits, decimal point, and minus sign
}

// Formats a number string to have thousand separators and no decimalsu
export const formatAmount = (num: string): string => {
    if (!num) return '' // Return empty string for null/undefined/empty input

    // Clean the input to allow digits, decimal point, and minus sign
    const cleaned = cleanNumber(num)

    // Convert to number
    const parsedNumber = Number(cleaned)

    // Return original input if not a valid number
    if (isNaN(parsedNumber)) return num

    // Round to 0 decimal places and format with thousand separators
    return parsedNumber.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    })
}
