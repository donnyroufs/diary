export const grabIfExists = (arr, id, prop) => {
    const exists = arr.find((item) => item.id === id);
    return exists ? exists[prop] : undefined;
};
