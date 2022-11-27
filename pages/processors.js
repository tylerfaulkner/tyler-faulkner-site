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
    return `${months[date.month]} ${date.day}, ${date.year}`;
}