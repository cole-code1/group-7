import React from 'react';
import { dnolan,jhoffner,OverZealous} from './Codewarslink';

function Header({ users }) {
  return (
    <h1>
      My three favorite codewarriors are {dnolan}, {jhoffner} and {OverZealous}
    </h1>
  );
}

export default Header;