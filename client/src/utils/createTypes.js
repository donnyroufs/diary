export const generateTypes = (curr, prefix = "[APP]") => {
    const uppercased = curr.toUpperCase();

    return {
        [uppercased]: prefix.concat(` ${uppercased}`),
        [`SUCCESS_${uppercased}`]: prefix.concat(` SUCCESS_${uppercased}`),
        [`FAILED_${uppercased}`]: prefix.concat(` FAILED_${uppercased}`),
    };
};

export const createTypes = ({ constants, prefix = "[APP]" }) =>
    constants.reduce(
        (acc, curr) => ({
            ...acc,
            ...generateTypes(curr, prefix.trim()),
        }),
        {}
    );
