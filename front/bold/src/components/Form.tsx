import { FunctionComponent } from "react";
import styles from "./Form.module.css";
import { useFormik } from "formik"
import axios from "axios"

export type FormType = {
  className?: string;
  crationDunCompteEntrepris?: string;
};

  interface MyFormValues {
   firstName: string;
   lastName: string;
   password: string;
   username: string;
   country: string;
 }

const Form: FunctionComponent<FormType> = ({
  className = "",
  crationDunCompteEntrepris,
}) => {
  const initialValues: MyFormValues = {firstName: "", lastName: '',password: '', username: '', country: ''}

  const formik = useFormik({
     initialValues: {firstName: "", lastName: '',password: '', username: '', country: ''},
     onSubmit: values => {
       axios.post(`http://0.0.0.0:8000/signup`, values).then(res => {
           window.localStorage.setItem("token", res.data["token"])
           window.localStorage.setItem("user", JSON.stringify(res.data["user"]))
       }).catch(e => {
           console.log(e.response)
       })
     },
   })

  return (
    <section className={[styles.form, className].join(" ")}>
      <div className={styles.formContainer}>
        <div className={styles.formHeading}>
          <h3 className={styles.crationDunCompte}>
            {crationDunCompteEntrepris}
          </h3>
        </div>
        <button className={styles.googleAuth}>
          <div className={styles.googleAuthChild} />
          <img
            className={styles.devicongoogle}
            alt=""
            src="/devicongoogle.svg"
          />
          <div className={styles.googleButton}>
            <div className={styles.continuerAvecGoogle}>
              Continuer avec google
            </div>
          </div>
        </button>
        <div className={styles.divider}>
          <div className={styles.frameParent}>
            <div className={styles.lineWrapper}>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.ou}>ou</div>
            <div className={styles.lineContainer}>
              <div className={styles.frameInner} />
            </div>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} className={styles.inputs}>

          <div className={styles.inputFields}>
            <div className={styles.nameFields}>
              <label htmlFor="lastName" className="py-5 text-4xl">Nom</label>
              <div className={styles.loginFields}>
                <div className={styles.loginFieldsChild}/>

                <input
                    id="lastName"
                    name="lastName"
                    className={styles.nom} placeholder="Nom" type="text"
                    onChange={formik.handleChange}
                />
              </div>
              <label htmlFor="firstName" className="py-5 text-4xl">Prénom</label>
              <div className={styles.surnameField}>
                <div className={styles.surnameFieldChild}/>

                <input
                    id='firstName'
                    name="firstName"
                    className={styles.prnom}
                    placeholder="Prénom"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
              </div>
            </div>
            <div className={styles.nameFields1}>
            <div className={styles.nameFieldsChild}/>
              <input
                  id="username"
                  name="username"
                  className={styles.email} placeholder="Email" type="email"
                  onChange={formik.handleChange}
                  value={formik.values.username}
              />
            </div>
            <div className={styles.nameFields2}>
              <div className={styles.nameFieldsItem}/>
              <input
                  id="password"
                  name="password"
                  className={styles.motDePasse}
                  placeholder="Mot de passe"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.username}
              />
            </div>
            <div className={styles.nameFields3}>
              <div className={styles.nameFieldsInner}/>
              <input
                  id="country"
                  name="country"
                  className={styles.pays} placeholder="Pays" type="text"
                  onChange={formik.handleChange}
                  value={formik.values.username}
              />
            </div>
          </div>
          <div className={styles.agreement}>
            <div className={styles.checkboxContainer}>
              <div className={styles.checkboxes}>
                <div className={styles.stateLayer}>
                  <input className={styles.container} type="checkbox"/>
                </div>
              </div>
              <div className={styles.jeSuisDaccordAvecLesCondWrapper}>
                <div className={styles.jeSuisDaccord}>
                  Je suis d’accord avec les conditions d’utilisation du site
                </div>
              </div>
            </div>
          </div>
          <div className={styles.submit}>
            <button type="submit" className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv}/>
              <div className={styles.sinscrire}>S’inscrire</div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
