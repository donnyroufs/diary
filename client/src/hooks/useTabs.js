import React from "react";

const useTabs = (initialValue, callback) => {
    const [current, setCurrent] = React.useState(initialValue);

    React.useEffect(() => {
        callback && callback();
    }, [current]);

    return [current, setCurrent];
};

export default useTabs;
