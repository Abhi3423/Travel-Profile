import { useState } from "react";


const useCommonHook = () => {
    const randomField4 = Math.random() >= 0.5 ? 'mode_8' : 'mode_9';
    const randomField5 = Math.random() >= 0.5 ? 'mode_7' : 'mode_5';
    const values = {
        randomField4,
        randomField5,
    };
    return values;
};

export default useCommonHook;
