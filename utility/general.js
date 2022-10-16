const formatDate = (date) => {
    return date.toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

const formatHtmlDate = (date) => {
    const dateArray = date.split("-");
    return `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`;
};

export { formatDate, formatHtmlDate };
