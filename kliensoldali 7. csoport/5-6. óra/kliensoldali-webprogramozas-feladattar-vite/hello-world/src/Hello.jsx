//import React from 'react'
//import PropTypes from "prop-types";

/* eslint-disable react/prop-types */
export function Hello({name, count}) {
  console.log(count)
  return <>
          <h1 className="narancs">{name === "" ? "Nincs kit üdvözölni" : `Hello ${name}`}!</h1>
          <p>Na itt vagyok.</p>
         </>
}
/* eslint-enable react/prop-types */
//Hello.propTypes = {name: PropTypes.string, count: PropTypes.string};
