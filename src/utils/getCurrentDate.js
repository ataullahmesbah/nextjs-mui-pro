export function getCurrentDate() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const currentDate = new Date();

    const dayIndex = currentDate.getDay(); // Get the index of the day (0-6)
    const dayName = days[dayIndex]; // Get the name of the day from the array
    const month = months[currentDate.getMonth()]; // Get the name of the month
    const date = currentDate.getDate(); // Get the day of the month
    const year = currentDate.getFullYear(); // Get the year

    return `${dayName}, ${month} ${date}, ${year}`;
}
