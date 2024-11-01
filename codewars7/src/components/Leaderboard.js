import React from 'react';

function Leaderboard({ leaders }) {
    return (
        <ol>
            {leaders.map((leader) => (
                <li key={leader}>
                    <a href={`http://www.codewars.com/users/${leader}`}>{leader}</a>
                </li>
            ))}
        </ol>
    );
}

export default Leaderboard;