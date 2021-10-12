import React from 'react'
const date= new Date();
export default function Footer() {
    return (
        <footer>
           <p> CopieRight {date.getFullYear()} - MOHAMED OUADJIH BOUDRAA all rights reserved </p>
        </footer>
    )
}
