import {useState} from 'react';
const Inscription=()=>{

    const[nom,setNom]=useState('');
    const[prenom,setPrenom]=useState('');

    const handelChangeNom=(e)=>{
        setNom(e.target.value);
    }
    const handlePrenomChange=(e)=>{
        setPrenom(e.target.value);
    }

    const display=(e)=>{
        e.preventDefault();
        setMsg("Bonjour "+nom+" "+prenom);
    serMsg('')
    }