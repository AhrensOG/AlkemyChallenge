import * as React from 'react';
import NavBar from './NavBar';
import CreateOperation from './CreateOperation';

export default function Home() {
  return (
    <div>
        <div>
            <NavBar/>
        </div>
        <div>
            <CreateOperation/>
        </div>
    </div>
  );
}