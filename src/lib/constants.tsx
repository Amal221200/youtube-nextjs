import { Atom, Code, Film, Gamepad2, Home, MicVocal, Music, School } from "lucide-react";


export const categories = [
    { name: 'Home', icon: <Home />, type: "new" },
    { name: 'Coding', icon: <Code />, type: "coding" },
    { name: 'ReactJS', icon: <Atom />, type: "reactjs" },
    { name: 'Music', icon: <Music />, type: "music" },
    { name: 'Education', icon: <School />, type: "education" },
    { name: 'Podcast', icon: <MicVocal />, type: "podcast" },
    { name: 'Movie', icon: <Film />, type: "movie" },
    { name: 'Gaming', icon: <Gamepad2 />, type: "gaming" },
]