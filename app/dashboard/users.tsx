import React from 'react';
import getUsers from '../actions/getUsers';

const users = async () => {
    const users = await getUsers(searchParams);

    return (
        <div>
<h1> Hello</h1>
        </div>
    );
};

export default users;