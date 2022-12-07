const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'Septmeber',
    'October',
    'Novemeber',
    'December',
]

export function dateToText(date){
    return `${months[date.month-1]} ${date.day}, ${date.year}`;
}