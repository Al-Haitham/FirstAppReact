import { useState } from "react";

const Form=()=>{
    const villes = ["Agadir","Casablanca", "Marrakech", "Rabat", "Tanger"];
    const hobbies = ["Football", "Basketball", "Tennis", "Natation", "Lecture"];

    const [formData, setFormData]=useState({
        nom:"",
        prenom:"",
        email:"",
        ville:"",
        hoobies:[],
        error:"",
    })

    const [errors, setErrors]=useState({})
    const [display, setDisplay]=useState(false);


    const handleCHange=(e)=>{
        const {name, value}=e.target;

        setFormData((prev)=>({...prev,[name]:value,}));
    };

    const handleHobbyChange=(e)=>{
        const {value,chekced}=e.target;

        setFormData((prev)=>({...prev,hobbies:checked?[...prev.hobbies,value]:prev.hobbies.filter((hobby)=>hobby!==value),
        }));
    };

    const validate=()=>{
        const result={};

        if (formData.nom.trim()===""){
            result.nom="le nom est obligatoire !";
        }else if(!/^[a-zA-Z]{2,}$/.test(formData.nom.trim())){
            result.prenom="le nom est invalide!"
        }

        if (formData.prenom.trim()===""){
            result.prenom="le prenom est obligatoire !";
        }else if(!/^[a-zA-Z]{2,}$/.test(formData.prenom.trim())){
            result.prenom="le prenom est invalide!"
        }

        if (formData.gender===""){
            result.gender="le genre est obligatoire !";
        }

        if (formData.ville===""){
            result.ville="la ville est obligatoire!";
        }

        if (formData.email.trim()===""){
            result.email="l'email est obligatoire!";
        }else if(!formData.email.includes("@")){
            result.email="l'email est invalide !";
        }

        if (formData.hobbies.length===0){
            result.hobbies="selectionner au moins un hoppy";
        }

        return result;
    };

    const handleSubmit=(e)=>{
        e.preventDefault();

        const result=validate();

        setErrors(result);

        if (Object.keys(result).length===0){
            setDisplay(true);
            console.log(formData);
        }else {
      setDisplay(false);
    }
  };

  return (
    <div className="container my-5 p-3 text-start">
      <form onSubmit={handleSubmit}>

        {/* Nom */}
        <div className="mb-3">
          <label htmlFor="nom">Nom</label>

          <input
            type="text"
            id="nom"
            name="nom"
            className="form-control"
            value={formData.nom}
            onChange={handleChange}
          />

          {errors.nom && (
            <span className="text-danger">{errors.nom}</span>
          )}
        </div>

        {/* Prénom */}
        <div className="mb-3">
          <label htmlFor="prenom">Prénom</label>

          <input
            type="text"
            id="prenom"
            name="prenom"
            className="form-control"
            value={formData.prenom}
            onChange={handleChange}
          />

          {errors.prenom && (
            <span className="text-danger">{errors.prenom}</span>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <span className="text-danger">{errors.email}</span>
          )}
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label className="form-label">Genre</label>

          <div className="form-check">
            <input
              type="radio"
              name="gender"
              value="male"
              className="form-check-input"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />

            <label className="form-check-label">
              Male
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              name="gender"
              value="female"
              className="form-check-input"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />

            <label className="form-check-label">
              Female
            </label>
          </div>

          {errors.gender && (
            <span className="text-danger">{errors.gender}</span>
          )}
        </div>

        {/* Ville */}
        <div className="mb-3">
          <label htmlFor="ville">Ville</label>

          <select
            id="ville"
            name="ville"
            className="form-select"
            value={formData.ville}
            onChange={handleChange}
          >
            <option value="">
              Choisir une ville ...
            </option>

            {villes.map((ville) => (
              <option key={ville} value={ville}>
                {ville}
              </option>
            ))}
          </select>

          {errors.ville && (
            <span className="text-danger">{errors.ville}</span>
          )}
        </div>

        {/* Hobbies */}
        <div className="mb-3">
          <label className="form-label">Hobbies :</label>

          {hobbiesList.map((hobby) => (
            <div className="form-check" key={hobby}>
              <input
                type="checkbox"
                className="form-check-input"
                value={hobby}
                checked={formData.hobbies.includes(hobby)}
                onChange={handleHobbyChange}
              />

              <label className="form-check-label">
                {hobby}
              </label>
            </div>
          ))}

          {errors.hobbies && (
            <p className="text-danger">{errors.hobbies}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn btn-primary"
        >
          Envoyer
        </button>
      </form>

      {/* Display */}
      {display && (
        <div className="my-3 mx-5">
          <h4>Informations saisies :</h4>

          <ul>
            <li>Nom : {formData.nom}</li>
            <li>Prénom : {formData.prenom}</li>
            <li>Email : {formData.email}</li>
            <li>Genre : {formData.gender}</li>
            <li>Ville : {formData.ville}</li>
            <li>
              Hobbies : {formData.hobbies.join(", ")}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Form;