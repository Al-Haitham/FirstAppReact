import { useRef, useState } from "react";

const ValidationFormV2 = () => {
  const villes = ["Agadir", "Rabat", "Casablanca", "Safi"];
  const hobbiesList = ["lecture", "sport", "shopping"];

  // Form data stored inside a ref
  const formData = useRef({
    nom: "",
    prenom: "",
    email: "",
    gender: "",
    ville: "",
    hobbies: [],
  });

  const [errors, setErrors] = useState({});
  const [display, setDisplay] = useState(false);

  // Handle text inputs, radio and select
  const handleChange = (e) => {
    const { name, value } = e.target;

    formData.current[name] = value;
  };

  // Handle hobbies
  const handleHobbyChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      formData.current.hobbies.push(value);
    } else {
      formData.current.hobbies =
        formData.current.hobbies.filter(
          (hobby) => hobby !== value
        );
    }
  };

  // Validation
  const validate = () => {
    const data = formData.current;
    const result = {};

    // Nom
    if (data.nom.trim() === "") {
      result.nom = "Le nom est obligatoire !!!!";
    } else if (!/^[a-zA-Z]{2,}$/.test(data.nom.trim())) {
      result.nom = "Le nom est invalide !!!!";
    }

    // Prénom
    if (data.prenom.trim() === "") {
      result.prenom = "Le prénom est obligatoire !!!!";
    } else if (!/^[a-zA-Z]{2,}$/.test(data.prenom.trim())) {
      result.prenom = "Le prénom est invalide !!!!";
    }

    // Gender
    if (data.gender === "") {
      result.gender = "Le genre est obligatoire !!!!";
    }

    // Ville
    if (data.ville === "") {
      result.ville = "La ville est obligatoire !!!!";
    }

    // Email
    if (data.email.trim() === "") {
      result.email = "L'email est obligatoire !!!!";
    } else if (!data.email.includes("@")) {
      result.email = "L'email est invalide !!!!";
    }

    // Hobbies
    if (data.hobbies.length === 0) {
      result.hobbies = "Sélectionner au moins un hobby";
    }

    return result;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const result = validate();

    setErrors(result);

    if (Object.keys(result).length === 0) {
      setDisplay(true);

      // Display the complete object
      console.log(formData.current);
    } else {
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
            defaultValue=""
            onChange={handleChange}
          />

          {errors.nom && (
            <span className="text-danger">
              {errors.nom}
            </span>
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
            defaultValue=""
            onChange={handleChange}
          />

          {errors.prenom && (
            <span className="text-danger">
              {errors.prenom}
            </span>
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
            defaultValue=""
            onChange={handleChange}
          />

          {errors.email && (
            <span className="text-danger">
              {errors.email}
            </span>
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
              onChange={handleChange}
            />

            <label className="form-check-label">
              Female
            </label>
          </div>

          {errors.gender && (
            <span className="text-danger">
              {errors.gender}
            </span>
          )}
        </div>

        {/* Ville */}
        <div className="mb-3">
          <label htmlFor="ville">Ville</label>

          <select
            id="ville"
            name="ville"
            className="form-select"
            defaultValue=""
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
            <span className="text-danger">
              {errors.ville}
            </span>
          )}
        </div>

        {/* Hobbies */}
        <div className="mb-3">
          <label className="form-label">
            Hobbies :
          </label>

          {hobbiesList.map((hobby) => (
            <div className="form-check" key={hobby}>
              <input
                type="checkbox"
                className="form-check-input"
                value={hobby}
                onChange={handleHobbyChange}
              />

              <label className="form-check-label">
                {hobby}
              </label>
            </div>
          ))}

          {errors.hobbies && (
            <p className="text-danger">
              {errors.hobbies}
            </p>
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
            <li>Nom : {formData.current.nom}</li>
            <li>Prénom : {formData.current.prenom}</li>
            <li>Email : {formData.current.email}</li>
            <li>Genre : {formData.current.gender}</li>
            <li>Ville : {formData.current.ville}</li>
            <li>
              Hobbies : {formData.current.hobbies.join(", ")}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ValidationFormV2;