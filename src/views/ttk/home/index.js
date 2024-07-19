import React, {useEffect} from 'react';
import {usePostM} from "@common/hooks/usePostM";

export default function TTKHome(props) {
    const {doFetch} = usePostM()

    useEffect(() => {
        doFetch('/ttk/user/query',{id:1})
    }, [doFetch]);

    return (
        <div>TTKHome</div>
    );
}